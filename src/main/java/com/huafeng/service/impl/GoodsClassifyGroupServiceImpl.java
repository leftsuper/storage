package com.huafeng.service.impl;

import com.github.pagehelper.PageInfo;
import com.huafeng.dao.GoodsClassifyGroupMapper;
import com.huafeng.model.GoodsClassifyGroup;
import com.huafeng.service.GoodsClassifyGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

/**
 * Created by leftsuper on 2020-05-01.
 */
@Service
public class GoodsClassifyGroupServiceImpl implements GoodsClassifyGroupService {

    @Autowired
    private GoodsClassifyGroupMapper goodsClassifyGroupMapper;

    @Override
    public PageInfo<GoodsClassifyGroup> getList(GoodsClassifyGroup searchBean, int pageNum, int pageSize) {
        return null;
    }

    @Override
    public int getCount(GoodsClassifyGroup searchBean) {
        return 0;
    }

    @Override
    public GoodsClassifyGroup read(Object id) {
        return null;
    }

    @Override
    public int saveOrUpdate(GoodsClassifyGroup goodsClassifyGroup) {
        return 0;
    }

    @Override
    public int delete(String ids) {
        return 0;
    }

    @Override
    public List<GoodsClassifyGroup> selectAll() {
        Example example = new Example(GoodsClassifyGroup.class);
        example.createCriteria().andEqualTo("isDelete", false);

        return goodsClassifyGroupMapper.selectByExample(example);
    }
}
