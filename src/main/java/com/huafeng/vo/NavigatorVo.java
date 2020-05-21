package com.huafeng.vo;

import com.huafeng.model.Navigator;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * 导航栏vo
 * Created by leftsuper on 2020-03-11.
 */
public class NavigatorVo {
    /**
     * id
     */
    private Integer id;

    /**
     * 名字
     */
    private String name;

    /**
     * 显示名称
     */
    private String text;

    /**
     * 图标
     */
    private String iconCls;

    /**
     * 跳转地址
     */
    private String url;

    /**
     * 父级ID
     */
    private Integer parentId;

    /**
     * 导航栏
     */
    private List<NavigatorVo> children;

    public NavigatorVo() {
    }

    public NavigatorVo(Navigator navigator) {
        this.id = navigator.getId();
        this.name = navigator.getName();
        this.text = navigator.getDisplay();
        this.url = navigator.getUrl();
        this.iconCls = navigator.getIcon();
        this.parentId = navigator.getParentId();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getIconCls() {
        return iconCls;
    }

    public void setIconCls(String iconCls) {
        this.iconCls = iconCls;
    }

    public List<NavigatorVo> getChildren() {
        return children;
    }

    public void setChildren(List<NavigatorVo> children) {
        this.children = children;
    }

    public void addNavigatorVo(NavigatorVo navigatorVo) {
        if (CollectionUtils.isEmpty(children)) {
            children = new ArrayList<>();
        }
        children.add(navigatorVo);
    }
}
