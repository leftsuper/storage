package com.huafeng.service;

import com.huafeng.model.GoodsClassifyGroup;

import java.util.List;

/**
 * Created by leftsuper on 2020-05-01.
 */
public interface GoodsClassifyGroupService extends BaseService<GoodsClassifyGroup> {

    List<GoodsClassifyGroup> selectAll();
}
