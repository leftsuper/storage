package com.leftsuper.controller;

import com.leftsuper.model.Goods;
import com.leftsuper.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

/**
 * Created by Administrator on 2018/3/7.
 */
@Controller
public class GoodsController {

    @Autowired
    GoodsService goodsService;

    @RequestMapping(value = "/goods/insert")
    public String insert() {
        Goods goods1 = new Goods();
        Goods goods2 = new Goods();

        goods1.setName("aaa");
        goods2.setName("bbb");


        goodsService.saveOrUpdate(goods1);

        new ArrayList<>().get(2);

        goodsService.saveOrUpdate(goods2);

        return "aaa";
    }
}
