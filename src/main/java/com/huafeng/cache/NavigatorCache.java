package com.huafeng.cache;

import com.huafeng.dao.NavigatorMapper;
import com.huafeng.model.Navigator;
import com.huafeng.vo.NavigatorVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import tk.mybatis.mapper.entity.Example;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Created by leftsuper on 2020-03-11.
 */
@Component
public class NavigatorCache {

    private NavigatorMapper navigatorMapper;

    private List<Navigator> navigatorList;

    private Map<Integer, Navigator> navigatorMap;

    private List<NavigatorVo> navigatorVoList;

    private Map<Integer, List<Navigator>> childrenNavigatorMap;

    @Autowired
    public NavigatorCache ( NavigatorMapper navigatorMapper) {
        this.navigatorMapper = navigatorMapper;
        this.init();
    }

    private void init() {
        Example example = new Example(Navigator.class);
        example.createCriteria().andEqualTo("isDelete", false);
        navigatorList = navigatorMapper.selectByExample(example);
        navigatorMap = navigatorList.stream().collect(Collectors.toMap(Navigator::getId, Function.identity()));

        childrenNavigatorMap = new HashMap<>(navigatorList.size());
        navigatorVoList = new ArrayList<>(navigatorMapper.selectCountGroupByParentId());

        for (Navigator navigator : navigatorList) {
            if (null == navigator.getParentId()) {
                navigatorVoList.add(new NavigatorVo(navigator));
            } else {
                List<Navigator> childrenList = childrenNavigatorMap.get(navigator.getParentId());
                if (CollectionUtils.isEmpty(childrenList)) {
                    childrenList = new ArrayList<>();
                    childrenNavigatorMap.put(navigator.getParentId(), childrenList);
                }
                childrenList.add(navigator);
            }
        }

        //叶子节点装填
        for (NavigatorVo navigatorVo : navigatorVoList) {
            addChildren(navigatorVo);
        }
    }

    public void addChildren(NavigatorVo navigatorVo) {
        List<Navigator> childrenList = childrenNavigatorMap.get(navigatorVo.getId());
        if (!CollectionUtils.isEmpty(childrenList)) {
            for (Navigator children : childrenList) {
                NavigatorVo childrenVo = new NavigatorVo(children);
                navigatorVo.addNavigatorVo(childrenVo);
                addChildren(childrenVo);
            }
        }
    }

    public List<Navigator> getNavigatorList() {
        return navigatorList;
    }

    public Navigator getNavigator(Integer id) {
        return navigatorMap.get(id);
    }

    public List<NavigatorVo> getNavigatorVoList() {
        return navigatorVoList;
    }

    public List<Navigator> getChildrens(Integer id) {
        return childrenNavigatorMap.get(id);
    }
}
