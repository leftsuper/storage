package com.leftsuper.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.github.pagehelper.PageInfo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.leftsuper.model.User;
import com.leftsuper.service.UserService;
import com.leftsuper.user.CurrentUser;

@Controller
@Scope("prototype")
@RequestMapping("user")
public class UserController extends BaseController {

	@Autowired
	private UserService userService;

	@RequestMapping("login")
	@ResponseBody
	public Map login(User user, HttpServletRequest request, HttpServletResponse reponse) {
		Map<String, Object> resultMap = new HashMap<String, Object>(2);;
		try {
			HttpSession session = request.getSession();
			
			User loginUser = userService.loginUser(user);
			
			if(null == loginUser) {
				resultMap.put("failure", true);
				resultMap.put("msg", "用户不存在或者密码错误！");
			} else {
				loginUser.setPassword("");
				session.setAttribute("loginUser", loginUser);
				CurrentUser.getInstance().setUser(loginUser);
				resultMap.put("success", true);
			}
		} catch (Exception e) {
			resultMap.put("failure", true);
			resultMap.put("msg", StringUtils.isNotEmpty(e.getMessage()) ? e.getMessage() : "服务器异常，请联系系统管理员！");
			e.printStackTrace();
		}
		
		return resultMap;
	}
	
	@RequestMapping("search")
	@ResponseBody
	public Map search(User user, int start, int limit){
		Map<String, Object> resultMap = new HashMap<String, Object>(3);
		try {
			if(null == user) {
				user = new User();
			}
			PageInfo<User> userPageInfo = userService.getList(user, start, limit);
			resultMap.put("user", userPageInfo.getList());
			resultMap.put("total", userPageInfo.getTotal());
		} catch (Exception e) {
			resultMap.put("failure", true);
			resultMap.put("msg", StringUtils.isNotEmpty(e.getMessage()) ? e.getMessage() : "服务器异常，请联系系统管理员！");
			e.printStackTrace();
		}
		return resultMap;
	}
	
	@RequestMapping("save")
	@ResponseBody
	public Map save(User user) {
		Map<String, Object> resultMap = new HashMap<String, Object>(3);
		try {
			User userCheck = new User();
			userCheck.setLoginName(user.getLoginName());
			int userCount = userService.getCount(userCheck);
			if(userCount > 0) {
				resultMap.put("failure", "true");
				resultMap.put("msg", "登录名已存在，请换个重试！");
			} else {
				user.setId(userService.saveOrUpdate(user));
				resultMap.put("success", "true");
				resultMap.put("msg", "提交成功!!");
				resultMap.put("user", user);
			}
		} catch (Exception e) {
			resultMap.put("failure", true);
			resultMap.put("msg", StringUtils.isNotEmpty(e.getMessage()) ? e.getMessage() : "服务器异常，请联系系统管理员！");
			e.printStackTrace();
		}
		
		return resultMap;
	}
	
	@RequestMapping("changePassword")
	@ResponseBody
	public Map changePassword(User user, String newPassword) {
		Map<String, Object> resultMap = new HashMap<String, Object>(3);
		try {
			User passUser = userService.loginUser(user);
			
			if(null == passUser) {
				resultMap.put("failure", "true");
				resultMap.put("msg", "密码错误！！");
			} else {
				passUser.setPassword(newPassword);
				userService.saveOrUpdate(passUser);
				resultMap.put("success", "true");
				resultMap.put("msg", "提交成功!!");
			}
		} catch (Exception e) {
			resultMap.put("failure", true);
			resultMap.put("msg", StringUtils.isNotEmpty(e.getMessage()) ? e.getMessage() : "服务器异常，请联系系统管理员！");
			e.printStackTrace();
		}
		
		return resultMap;
	}
	
	@RequestMapping("delete")
	@ResponseBody
	public Map delete(String ids) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			userService.delete(ids);
			resultMap.put("success", "true");
		} catch (Exception e) {
			resultMap.put("failure", true);
			resultMap.put("msg", StringUtils.isNotEmpty(e.getMessage()) ? e.getMessage() : "服务器异常，请联系系统管理员！");
			e.printStackTrace();
		}
		
		return resultMap;
	}
}
