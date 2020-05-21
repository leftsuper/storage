package com.huafeng.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.huafeng.cache.NavigatorCache;
import com.huafeng.dao.NavigatorMapper;
import com.huafeng.model.Navigator;
import com.huafeng.service.NavigatorService;
import com.huafeng.vo.NavigatorVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import java.util.Arrays;
import java.util.List;

/**
 * Created by leftsuper on 2020-03-08.
 */
@Service
public class NavigatorServiceImpl implements NavigatorService {

    @Autowired
    private NavigatorMapper navigatorMapper;
    @Autowired
    private NavigatorCache navigatorCache;

    @Override
    public PageInfo<Navigator> getList(Navigator searchBean, int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        return ((Page<Navigator>) navigatorMapper.select(searchBean)).toPageInfo();
    }

    @Override
    public int getCount(Navigator searchBean) {
        return navigatorMapper.selectCount(searchBean);
    }

    @Override
    public Navigator read(Object id) {
        return navigatorMapper.selectByPrimaryKey(id);
    }

    @Override
    public int saveOrUpdate(Navigator navigator) {
        if (null != navigator.getId()) {
            return navigatorMapper.updateByPrimaryKey(navigator);
        } else {
            return navigatorMapper.insertSelective(navigator);
        }
    }

    @Override
    public int delete(String ids) {
        Example example = new Example(Navigator.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andIn("id", Arrays.asList(ids.split(",")));
        return navigatorMapper.deleteByExample(example);
    }

    @Override
    public List<NavigatorVo> getNavigatorList() {
        return navigatorCache.getNavigatorVoList();
    }

}
