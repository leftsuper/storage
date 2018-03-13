package com.leftsuper.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.leftsuper.dao.UserMapper;
import com.leftsuper.model.User;
import com.leftsuper.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {
    @Autowired
    public UserMapper userMapper;

    @Override
    public User loginUser(User user) {

        return userMapper.selectOne(user);
    }

    @Override
    public PageInfo<User> getList(User searchBean, int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        return ((Page<User>) userMapper.select(searchBean)).toPageInfo();
    }

    @Override
    //todo
    public int getCount(User searchBean) {
        return 0;
    }

    @Override
    public User read(Object id) {
        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    public int saveOrUpdate(User user) {
        if (null == user.getId() || "".equals(user.getId()) || user.getId() == 0) {
            user.setPassword("123456");
            userMapper.insert(user);
            return user.getId();
        } else {
            userMapper.updateByPrimaryKey(user);
            return user.getId();
        }
    }


    @Override
    //todo
    public void delete(String ids) {
    }
}
