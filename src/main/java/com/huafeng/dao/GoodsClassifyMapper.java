package com.huafeng.dao;

import com.huafeng.model.GoodsClassify;
import com.huafeng.vo.GoodsClassifyVo;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface GoodsClassifyMapper extends Mapper<GoodsClassify> {

    /**
     * 获取商品分类信息
     * @return
     */
    List<GoodsClassifyVo> getGoodsClassifyVoList();
}