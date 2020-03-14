package com.leftsuper.vo;

import com.leftsuper.model.Navigator;
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
    private String display;

    /**
     * 图标
     */
    private String icon;

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
    private List<NavigatorVo> navigatorVoList;

    public NavigatorVo() {
    }

    public NavigatorVo(Navigator navigator) {
        this.id = navigator.getId();
        this.name = navigator.getName();
        this.display = navigator.getDisplay();
        this.url = navigator.getUrl();
        this.icon = navigator.getIcon();
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

    public String getDisplay() {
        return display;
    }

    public void setDisplay(String display) {
        this.display = display;
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

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public List<NavigatorVo> getNavigatorVoList() {
        return navigatorVoList;
    }

    public void setNavigatorVoList(List<NavigatorVo> navigatorVoList) {
        this.navigatorVoList = navigatorVoList;
    }

    public void addNavigatorVo(NavigatorVo navigatorVo) {
        if (CollectionUtils.isEmpty(navigatorVoList)) {
            navigatorVoList = new ArrayList<>();
        }
        navigatorVoList.add(navigatorVo);
    }
}
