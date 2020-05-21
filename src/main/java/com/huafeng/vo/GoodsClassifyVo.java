package com.huafeng.vo;

/**
 * 商品分类vo
 * Created by leftsuper on 2020-05-01.
 */
public class GoodsClassifyVo {

    private Integer id;

    /**
     * 名字
     */
    private String name;

    /**
     * 图标
     */
    private String icon;

    /**
     * 所属组ID
     */
    private Integer groupId;

    /**
     * 组名
     */
    private String groupName;

    public ComboVo toComboVo() {
        ComboVo comboVo = new ComboVo();
        comboVo.setGroup(groupName);
        comboVo.setText(name);
        comboVo.setValue(id.toString());
        return comboVo;
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

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    @Override
    public String toString() {
        return "GoodsClassifyVo{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", icon='" + icon + '\'' +
                ", groupId=" + groupId +
                ", groupName='" + groupName + '\'' +
                '}';
    }
}
