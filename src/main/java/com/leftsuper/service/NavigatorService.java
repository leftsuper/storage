package com.leftsuper.service;

import com.leftsuper.model.Navigator;
import com.leftsuper.vo.NavigatorVo;

import java.util.List;

/**
 * Created by leftsuper on 2020-03-08.
 */
public interface NavigatorService extends BaseService<Navigator> {

    List<NavigatorVo> getNavigatorList();
}
