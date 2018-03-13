package com.leftsuper.service;

import com.github.pagehelper.PageInfo;

public interface BaseService<T>{
	//查询list
	public PageInfo<T> getList(T searchBean, int pageNum, int pageSize);
	//查询total
	public int getCount(T searchBean);
	//根据id查询
	public T read(Object id);
	//保存
	public int saveOrUpdate(T t);
	//逻辑删除
	public void delete(String ids);
	
}
