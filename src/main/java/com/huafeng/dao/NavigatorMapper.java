package com.huafeng.dao;

import com.huafeng.model.Navigator;
import tk.mybatis.mapper.common.Mapper;

public interface NavigatorMapper extends Mapper<Navigator> {

    Integer selectCountGroupByParentId();
}