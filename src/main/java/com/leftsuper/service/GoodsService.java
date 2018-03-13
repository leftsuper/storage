package com.leftsuper.service;

import com.leftsuper.vo.GoodsVo;
import com.leftsuper.model.Goods;

import java.util.List;

public interface GoodsService extends BaseService<Goods> {

	void updateInventory(List<GoodsVo> goodsList);
}
