package com.huafeng.storage;

import com.huafeng.model.Goods;
import com.huafeng.service.GoodsService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StorageApplicationTests {

	@Autowired
	GoodsService goodsService;

	@Test
	public void contextLoads() {

		Goods goods1 = new Goods();
		Goods goods2 = new Goods();

		goods1.setName("aaa");
		goods2.setName("bbb");


		goodsService.saveOrUpdate(goods1);

		new ArrayList<>().get(2);

		goodsService.saveOrUpdate(goods2);

	}

}
