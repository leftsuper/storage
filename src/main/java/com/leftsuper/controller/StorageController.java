package com.leftsuper.controller;

import com.github.pagehelper.PageInfo;
import com.google.gson.Gson;
import com.leftsuper.model.Goods;
import com.leftsuper.service.GoodsService;
import com.leftsuper.vo.GoodsVo;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@Scope("prototype")
@RequestMapping("goods")
public class StorageController extends BaseController{

	@Autowired
	private GoodsService goodsService;
	
	@RequestMapping("search")
	@ResponseBody
	public Map search(Goods searchBean, int start, int limit) {
		Map<String, Object> resultMap = new HashMap<String, Object>(3);
		try {
			if(null == searchBean) {
				searchBean = new Goods();
			}
			
			PageInfo<Goods> goodsList = goodsService.getList(searchBean, start, limit);
			resultMap.put("goods", goodsList);
			resultMap.put("total", goodsService.getCount(searchBean));
		} catch (Exception e) {
			resultMap.put("failure", true);
			resultMap.put("msg", StringUtils.isNotEmpty(e.getMessage()) ? e.getMessage() : "服务器异常，请联系系统管理员！");
			e.printStackTrace();
		}
		return resultMap;
	}
	
	@RequestMapping("save")
	@ResponseBody
	public Map save(Goods goods) {
		Map<String, Object> resultMap = new HashMap<String, Object>(2);
		
		try {
			Goods checkGoods = new Goods();
			checkGoods.setName(goods.getName());
			checkGoods.setColor(goods.getColor());
			checkGoods.setHeight(goods.getHeight());
			checkGoods.setWidth(goods.getWidth());
			checkGoods.setThickness(goods.getThickness());
			checkGoods.setQuality(goods.getQuality());
			if((null == goods.getId() || goods.getId() == 0) && goodsService.getCount(checkGoods) > 0) {
				resultMap.put("failure", "true");
				resultMap.put("msg", "该商品已存在，请重新修改数据创建或者在表格中查找！!");
			} else {
				goods.setId(goodsService.saveOrUpdate(goods));
				
				resultMap.put("success", "true");
				resultMap.put("goods", goods);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resultMap.put("failure", "true");
			resultMap.put("msg", "系统出错!");
		}
		
		return resultMap;
	}
	
	@RequestMapping("inStorage")
	@ResponseBody
	public String inStorage(String goodsJson) {
		Map<String, Object> resultMap = new HashMap<String, Object>(2);
		
		try {
			JSONArray goodsArray = new JSONArray(goodsJson);
			List<GoodsVo> goodsList = new ArrayList<>(goodsArray.length());

//			goodsArray.get()


			goodsService.updateInventory(goodsList);
			
			resultMap.put("success", "true");
			resultMap.put("msg", "入库成功！");
		} catch (Exception e) {
			e.printStackTrace();
			resultMap.put("failure", "true");
			resultMap.put("msg", "系统出错!");
		}
		
		return new Gson().toJson(resultMap);
	}
	
	@RequestMapping("delete")
	@ResponseBody
	public String delete(String ids) {
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		try {
			goodsService.delete(ids);
			resultMap.put("success", "true");
		} catch (Exception e) {
			e.printStackTrace();
			resultMap.put("failure", "true");
			resultMap.put("msg", "error!");
		}
		
		return new Gson().toJson(resultMap);
	}
	
	
}
