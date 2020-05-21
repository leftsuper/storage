package com.huafeng.cache;

import com.huafeng.service.GoodsClassifyService;
import com.huafeng.vo.GoodsClassifyVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 商品类型缓存
 * Created by leftsuper on 2020-05-01.
 */
@Component
public class GoodsClassifyCache {

    private GoodsClassifyService goodsClassifyService;

    /**
     * 商品分类明细
     */
    private List<GoodsClassifyVo> goodsClassifyVoList;

    @Autowired
    public GoodsClassifyCache(GoodsClassifyService goodsClassifyService) {
        this.goodsClassifyService = goodsClassifyService;
        this.init();
    }

    /**
     * 初始化缓存
     */
    private void init() {
        goodsClassifyVoList = goodsClassifyService.getGoodsClassifyVoList();
    }

    public List<GoodsClassifyVo> getGoodsClassifyVoList() {
        return goodsClassifyVoList;
    }
}
