package com.huafeng.service;

import com.huafeng.vo.GoodsVo;
import com.huafeng.model.Goods;

import java.util.List;

public interface GoodsService extends BaseService<Goods> {

	void updateInventory(List<GoodsVo> goodsList);
}
