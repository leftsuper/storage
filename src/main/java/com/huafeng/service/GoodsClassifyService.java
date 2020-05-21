package com.huafeng.service;

import com.huafeng.model.GoodsClassify;
import com.huafeng.vo.GoodsClassifyVo;

import java.util.List;

/**
 * Created by leftsuper on 2020-05-01.
 */
public interface GoodsClassifyService extends BaseService<GoodsClassify> {

    List<GoodsClassifyVo> getGoodsClassifyVoList();
}
