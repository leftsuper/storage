package com.huafeng.vo;

/**
 * 下拉框对象
 * Created by leftsuper on 2020-05-14.
 */
public class ComboVo {
    /**
     * 实际值
     */
    private String value;
    /**
     * 显示值
     */
    private String text;
    /**
     * 组
     */
    private String group;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    @Override
    public String toString() {
        return "ComboVo{" +
                "value='" + value + '\'' +
                ", text='" + text + '\'' +
                ", group='" + group + '\'' +
                '}';
    }
}
