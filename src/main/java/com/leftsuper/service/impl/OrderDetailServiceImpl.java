package com.leftsuper.service.impl;

import com.github.pagehelper.PageInfo;
import com.leftsuper.dao.OrderDetailMapper;
import com.leftsuper.model.OrderDetail;
import com.leftsuper.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(rollbackFor=Exception.class)
public class OrderDetailServiceImpl implements OrderDetailService {

	@Autowired
	private OrderDetailMapper orderDetailMapper;

	@Override
	public PageInfo<OrderDetail> getList(OrderDetail searchBean, int pageNum, int pageSize) {
		return null;
	}

	@Override
	public int getCount(OrderDetail searchBean) {
		return 0;
	}

	@Override
	public OrderDetail read(Object id) {
		return null;
	}

	@Override
	public int saveOrUpdate(OrderDetail orderDetail) {
		return 0;
	}

	@Override
	public void delete(String ids) {

	}
}
