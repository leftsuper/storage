package com.huafeng.model;

import java.io.Serializable;

public class Dict implements Serializable{
	private static final long serialVersionUID = 1L;
	//字典code
	private String code;
	//字典name
	private String name;
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
