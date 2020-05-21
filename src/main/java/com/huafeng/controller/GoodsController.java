package com.huafeng.controller;

import com.github.pagehelper.PageInfo;
import com.google.gson.Gson;
import com.huafeng.basic.BaseResponse;
import com.huafeng.basic.DataGrid;
import com.huafeng.basic.ResponseCode;
import com.huafeng.basic.ResponseWrap;
import com.huafeng.cache.GoodsClassifyCache;
import com.huafeng.model.Goods;
import com.huafeng.service.GoodsService;
import com.huafeng.vo.ComboVo;
import com.huafeng.vo.GoodsClassifyVo;
import com.huafeng.vo.GoodsVo;
import org.json.JSONArray;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Controller
@RequestMapping("goods")
@Scope("prototype")
public class GoodsController extends BaseController{

	@Autowired
	private GoodsService goodsService;
	@Autowired
	private GoodsClassifyCache goodsClassifyCache;

	Logger logger = LoggerFactory.getLogger(this.getClass());

	@RequestMapping
	public String goods() {
		return "goods";
	}
	
	@RequestMapping("search")
	@ResponseBody
	public BaseResponse search(Goods searchBean, int page, int rows) {
		Map<String, Object> resultMap = new HashMap<String, Object>(3);
		if(null == searchBean) {
			searchBean = new Goods();
		}

		PageInfo<Goods> goodsPage = goodsService.getList(searchBean, page, rows);

		return new DataGrid<>(goodsPage);
	}
	
	@RequestMapping("save")
	@ResponseBody
	public BaseResponse save(Goods goods) {
		Goods checkGoods = new Goods();
		checkGoods.setName(goods.getName());
		checkGoods.setColor(goods.getColor());
		checkGoods.setSpecification(goods.getSpecification());
		checkGoods.setThickness(goods.getThickness());
		checkGoods.setMaterial(goods.getMaterial());
		if((null == goods.getId() || goods.getId() == 0) && goodsService.getCount(checkGoods) > 0) {
			logger.error("{}该商品已存在", goods.getName());
			return new BaseResponse(ResponseCode.CODE_DATA_EXIST, "该商品已存在！");
		} else {
			if (goodsService.saveOrUpdate(goods) <= 0) {
				logger.error("{}保存异常", goods.getName());
				return new BaseResponse(ResponseCode.CODE_SERVER_ERROR, goods.getName() + "保存异常");
			}
		}

		return new ResponseWrap(goods);
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
	public BaseResponse delete(String ids) {
		return new ResponseWrap(goodsService.delete(ids));
	}
	
	@RequestMapping("classify/combo")
	@ResponseBody
	public List<ComboVo> getClassifyCombo() {
		List<GoodsClassifyVo> goodsClassifyVoList = goodsClassifyCache.getGoodsClassifyVoList();
		return goodsClassifyVoList.stream().map(GoodsClassifyVo::toComboVo).collect(Collectors.toList());
	}
}
