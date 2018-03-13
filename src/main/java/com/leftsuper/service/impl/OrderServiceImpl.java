package com.leftsuper.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.leftsuper.dao.GoodsMapper;
import com.leftsuper.dao.OrderDetailMapper;
import com.leftsuper.dao.OrderItemMapper;
import com.leftsuper.model.OrderItem;
import com.leftsuper.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;


@Service("orderService")
@Transactional(rollbackFor=Exception.class)
public class OrderServiceImpl implements OrderService {
	@Autowired
	private OrderItemMapper orderItemMapper;
	@Autowired
	private OrderDetailMapper orderDetailMapper;
	@Autowired
	private GoodsMapper goodsMapper;

	@Override
	public PageInfo<OrderItem> getList(OrderItem searchBean, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum,pageSize);

		return ((Page<OrderItem>) orderItemMapper.select(searchBean)).toPageInfo();
	}

	@Override
	public int getCount(OrderItem searchBean) {
		return orderItemMapper.selectCount(searchBean);
	}

	@Override
	public OrderItem read(Object id) {
		return orderItemMapper.selectByPrimaryKey(id);
	}
	//todo
	@Override
	public int saveOrUpdate(OrderItem orderItem) {
		return 0;
	}
	//todo
	@Override
	public void delete(String ids) {

	}
	//todo
	@Override
	public ModelAndView getPrint(Long orderId) {
		return null;
	}
	//todo
	@Override
	public List<OrderItem> getListByGoods(OrderItem searchBean, Double width, Double height, String name, int start, int limit) {
		return null;
	}
	//todo
	@Override
	public Long getCountByGoods(OrderItem searchBean, Double width, Double height, String name) {
		return null;
	}
	//todo
	@Override
	public OrderItem saveOrder(OrderItem order, String tradeJson) {
		return null;
	}
}
