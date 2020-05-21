package com.huafeng.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.huafeng.dao.CustomerMapper;
import com.huafeng.model.Customer;
import com.huafeng.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Arrays;

@Service
@Transactional(rollbackFor=Exception.class)
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerMapper customerMapper;

	@Override
	public PageInfo<Customer> getList(Customer searchBean, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		return ((Page<Customer>) customerMapper.select(searchBean)).toPageInfo();
	}

	@Override
	public int getCount(Customer searchBean) {
		return customerMapper.selectCount(searchBean);
	}

	@Override
	public Customer read(Object id) {
		return customerMapper.selectByPrimaryKey(id);
	}

	@Override
	public int saveOrUpdate(Customer customer) {
		if(null == customer.getId()) {
			return customerMapper.insert(customer);
		} else {
			return customerMapper.updateByPrimaryKey(customer);
		}
	}

	@Override
	public int delete(String ids) {
		Example example = new Example(Customer.class);
		Example.Criteria criteria = example.createCriteria();
		criteria.andIn("id", Arrays.asList(ids.split(",")));
		return customerMapper.deleteByExample(example);
	}
	

}
