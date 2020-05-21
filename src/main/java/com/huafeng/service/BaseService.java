package com.huafeng.service;

import com.github.pagehelper.PageInfo;

public interface BaseService<T> {

    //查询list
    PageInfo<T> getList(T searchBean, int pageNum, int pageSize);

    //查询total
    int getCount(T searchBean);

    //根据id查询
    T read(Object id);

    //保存
    int saveOrUpdate(T t);

    //逻辑删除
    int delete(String ids);

}
