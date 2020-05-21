package com.huafeng.service;

import com.huafeng.model.Navigator;
import com.huafeng.vo.NavigatorVo;

import java.util.List;

/**
 * Created by leftsuper on 2020-03-08.
 */
public interface NavigatorService extends BaseService<Navigator> {

    List<NavigatorVo> getNavigatorList();
}
