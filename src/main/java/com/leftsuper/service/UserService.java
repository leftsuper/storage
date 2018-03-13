package com.leftsuper.service;

import com.leftsuper.model.User;

public interface UserService extends BaseService<User>{
	
	//登录验证
	public User loginUser(User user);

}
