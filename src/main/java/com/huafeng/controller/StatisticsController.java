package com.huafeng.controller;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Scope("prototype")
@RequestMapping("statis")
public class StatisticsController extends BaseController {
	
//	@Autowired
//	private StatisDao statisDao;
//
//	@RequestMapping("search")
//	@ResponseBody
//	public String search(String searchYear, String searchMode, String searchMonth, String isPrint){
//		try {
//			Map<String, Object> resultMap = new HashMap<String, Object>(3);
//
//			List<Statis> result = statisDao.search(searchYear, searchMonth, searchMode, isPrint);
//
//			resultMap.put("statis", result);
//			return new Gson().toJson(resultMap);
//		} catch(Exception e) {
//			e.printStackTrace();
//			return "error";
//		}
//	}
//
//	@RequestMapping("searchYear")
//	@ResponseBody
//	public String searchYear(){
//
//		try {
//			Map<String, Object> resultMap = new HashMap<String, Object>(3);
//
//			List<Dict> result = statisDao.searchYear();
//
//			resultMap.put("year", result);
//			return new Gson().toJson(resultMap);
//		} catch(Exception e) {
//			e.printStackTrace();
//			return "error";
//		}
//	}
}
