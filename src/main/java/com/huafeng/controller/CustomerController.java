package com.huafeng.controller;

import java.util.HashMap;
import java.util.Map;

import com.github.pagehelper.PageInfo;
import com.google.gson.Gson;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.huafeng.model.Customer;
import com.huafeng.service.CustomerService;

@Controller
@Scope("prototype")
@RequestMapping("customer")
public class CustomerController extends BaseController {
	
	@Autowired
	private CustomerService customerService;
	
	@RequestMapping("search")
	@ResponseBody
	public Map search(Customer searchBean,int start,int limit) {
		Map<String, Object> resultMap = new HashMap<String, Object>(3);
		try {
			PageInfo<Customer> customerPageInfo = customerService.getList(searchBean, start, limit);
		
			resultMap.put("customer", customerPageInfo.getList());
			resultMap.put("total", customerPageInfo.getTotal());
		} catch (Exception e) {
			resultMap.put("failure", true);
			resultMap.put("msg", StringUtils.isNotEmpty(e.getMessage()) ? e.getMessage() : "服务器异常，请联系系统管理员！");
			e.printStackTrace();
		}
		return resultMap;
	}
	
	@RequestMapping("save")
	@ResponseBody
	public String save(Customer customer) {
		Map<String, Object> resultMap = new HashMap<String, Object>(3);
		
		try{
			customer.setId(customerService.saveOrUpdate(customer));
				
			resultMap.put("success", "true");
			resultMap.put("msg", "客户保存成功！");
			resultMap.put("goods", customer);
		} catch(Exception e) {
			resultMap.put("failure", "true");
			resultMap.put("msg", "保存失败");
			e.printStackTrace();
		}
		
		return new Gson().toJson(resultMap);
	}
	
	@RequestMapping("delete")
	@ResponseBody
	public String delete(String ids) {
		Map<String, Object> resultMap = new HashMap<String, Object>(2);
		try {
			customerService.delete(ids);
			resultMap.put("success", "true");
			resultMap.put("msg", "删除成功!");
		} catch (Exception e) {
			resultMap.put("failure", "true");
			resultMap.put("msg", "服务器出错!");
		}
		
		return new Gson().toJson(resultMap);
	}
}
