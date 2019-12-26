package com.leftsuper.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.leftsuper.model.User;
import com.leftsuper.user.CurrentUser;

@Controller
@Scope("prototype")
@RequestMapping("navigation")
public class NavigationController extends BaseController {

	@RequestMapping("search")
	@ResponseBody
	public Map search(HttpServletRequest request) {
		Map<String, Object> resultMap = new HashMap<String, Object>(2);
		HttpSession session = request.getSession();
		
		User loginUser = (User) session.getAttribute("loginUser");
		
		if(null == loginUser) {
			resultMap.put("failure", true);
		} else {
			session.setAttribute("loginUser", loginUser);
			CurrentUser.getInstance().setUser(loginUser);
			resultMap.put("success", true);
		}
		
		return resultMap;
	}
}
