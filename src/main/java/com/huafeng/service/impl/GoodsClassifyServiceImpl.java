package com.huafeng.service.impl;

import com.github.pagehelper.PageInfo;
import com.huafeng.dao.GoodsClassifyMapper;
import com.huafeng.model.GoodsClassify;
import com.huafeng.service.GoodsClassifyService;
import com.huafeng.vo.GoodsClassifyVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by leftsuper on 2020-05-01.
 */
@Service
public class GoodsClassifyServiceImpl implements GoodsClassifyService {

    @Autowired
    private GoodsClassifyMapper goodsClassifyMapper;

    @Override
    public PageInfo<GoodsClassify> getList(GoodsClassify searchBean, int pageNum, int pageSize) {
        return null;
    }

    @Override
    public int getCount(GoodsClassify searchBean) {
        return 0;
    }

    @Override
    public GoodsClassify read(Object id) {
        return null;
    }

    @Override
    public int saveOrUpdate(GoodsClassify goodsClassify) {
        return 0;
    }

    @Override
    public int delete(String ids) {
        return 0;
    }

    @Override
    public List<GoodsClassifyVo> getGoodsClassifyVoList() {
        return goodsClassifyMapper.getGoodsClassifyVoList();
    }
}
