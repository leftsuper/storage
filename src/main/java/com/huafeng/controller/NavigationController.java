package com.huafeng.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.github.pagehelper.PageInfo;
import com.huafeng.model.Navigator;
import com.huafeng.service.NavigatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@Scope("prototype")
@RequestMapping("navigation")
public class NavigationController extends BaseController {

	@Autowired
	private NavigatorService navigatorService;

	@RequestMapping("search")
	@ResponseBody
	public List<Navigator> search(HttpServletRequest request) {

		PageInfo<Navigator> navigatorPageInfo = navigatorService.getList(null, 0, 0);
		return navigatorPageInfo.getList();

		/*Map<String, Object> resultMap = new HashMap<String, Object>(2);
		HttpSession session = request.getSession();

		User loginUser = (User) session.getAttribute("loginUser");

		if(null == loginUser) {
			resultMap.put("failure", true);
		} else {
			session.setAttribute("loginUser", loginUser);
			CurrentUser.getInstance().setUser(loginUser);
			resultMap.put("success", true);
		}

		return resultMap;*/
	}
}
