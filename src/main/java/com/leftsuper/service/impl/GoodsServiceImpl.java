package com.leftsuper.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.leftsuper.vo.GoodsVo;
import com.leftsuper.dao.GoodsMapper;
import com.leftsuper.model.Goods;
import com.leftsuper.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Arrays;
import java.util.List;

@Service
@Transactional(rollbackFor=Exception.class)
public class GoodsServiceImpl implements GoodsService {

	@Autowired
	private GoodsMapper goodsMapper;

	@Override
	public PageInfo<Goods> getList(Goods searchBean, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		return ((Page<Goods>) goodsMapper.select(searchBean)).toPageInfo();
	}

	@Override
	public int getCount(Goods searchBean) {
		return goodsMapper.selectCountByExample(searchBean);
	}

	@Override
	public Goods read(Object id) {
		return goodsMapper.selectByPrimaryKey(id);
	}

	@Override
	public int saveOrUpdate(Goods goods) {
		if(null == goods.getId() || goods.getId() == 0){
			return goodsMapper.insert(goods);
		}else{
			return goodsMapper.updateByPrimaryKey(goods);
		}
	}

	@Override
	public void delete(String ids) {
		Example example = new Example(Goods.class);
		Example.Criteria criteria = example.createCriteria();
		criteria.andIn("id", Arrays.asList(ids.split(",")));
		goodsMapper.deleteByExample(example);
	}

	@Override
	public void updateInventory(List<GoodsVo> goodsList) {
//		if(add) {
//			goodsMapper.addInventory(goodsList);
//		} else {
//			goodsMapper.subInventory(goodsList);
//		}

//		goodsMapper.updateById(goodsList);
	}

}
