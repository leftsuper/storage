package com.leftsuper.vo;


import com.leftsuper.model.OrderItem;

public class OrderItemVo extends OrderItem {
	
	private static final long serialVersionUID = 1L;
	
	private String title;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

}
