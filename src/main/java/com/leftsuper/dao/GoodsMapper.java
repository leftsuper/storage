package com.leftsuper.dao;

import com.leftsuper.model.Goods;
import com.leftsuper.vo.GoodsVo;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface GoodsMapper extends Mapper<Goods> {

    void updateById(List<GoodsVo> goodsList);
}