package com.leftsuper.dao;

import com.leftsuper.model.Navigator;
import tk.mybatis.mapper.common.Mapper;

public interface NavigatorMapper extends Mapper<Navigator> {

    Integer selectCountGroupByParentId();
}