package com.leftsuper.service;

import com.leftsuper.model.OrderItem;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

public interface OrderService extends BaseService<OrderItem> {

	ModelAndView getPrint(Long orderId);

	List<OrderItem> getListByGoods(OrderItem searchBean, Double width, Double height, String name, int start, int limit);

	Long getCountByGoods(OrderItem searchBean, Double width, Double height, String name);

	OrderItem saveOrder(OrderItem order, String tradeJson);
}
