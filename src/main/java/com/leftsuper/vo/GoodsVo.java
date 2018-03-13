package com.leftsuper.vo;

import java.io.Serializable;

public class GoodsVo implements Serializable{

	private Long id;
	
	private Double addCount;

	public Double getAddCount() {
		return addCount;
	}

	public void setAddCount(Double addCount) {
		this.addCount = addCount;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
