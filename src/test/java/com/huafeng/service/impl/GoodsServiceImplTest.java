package com.huafeng.service.impl;

import com.huafeng.model.Goods;
import com.huafeng.service.GoodsService;
import com.huafeng.StorageApplication;
import com.huafeng.vo.GoodsVo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2018/3/12.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes= StorageApplication.class)
public class GoodsServiceImplTest {

    @Autowired
    private GoodsService goodsService;

    @Test
    public void save(){
        for (int i = 0; i <= 10; i++) {
            Goods goods = new Goods();
            goods.setName("垃圾塑料袋" + i);
            goodsService.saveOrUpdate(goods);
        }

    }

    @Test
    public void updateInventory() throws Exception {
        List<GoodsVo> goodsList = new ArrayList<>();
        Goods goods = new Goods();
        goods.setId(1);
        goodsService.updateInventory(goodsList);
    }

}