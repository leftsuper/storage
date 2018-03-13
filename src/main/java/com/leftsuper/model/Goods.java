package com.leftsuper.model;

import java.io.Serializable;
import javax.persistence.*;

public class Goods implements Serializable {
    /**
     * 主键ID
     */
    @Id
    @Column(name = "ID")
    private Integer id;

    /**
     * 姓名
     */
    @Column(name = "NAME")
    private String name;

    /**
     * 单位
     */
    @Column(name = "UNIT")
    private String unit;

    /**
     * 分类
     */
    @Column(name = "CLASSIFY")
    private String classify;

    /**
     * 颜色
     */
    @Column(name = "COLOR")
    private String color;

    /**
     * 宽度
     */
    @Column(name = "WIDTH")
    private String width;

    /**
     * 高度
     */
    @Column(name = "HEIGHT")
    private String height;

    /**
     * 质量
     */
    @Column(name = "QUALITY")
    private String quality;

    /**
     * 库存
     */
    @Column(name = "INVENTORY")
    private Double inventory;

    /**
     * 厚度
     */
    @Column(name = "THICKNESS")
    private String thickness;

    private static final long serialVersionUID = 1L;

    /**
     * 获取主键ID
     *
     * @return ID - 主键ID
     */
    public Integer getId() {
        return id;
    }

    /**
     * 设置主键ID
     *
     * @param id 主键ID
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取姓名
     *
     * @return NAME - 姓名
     */
    public String getName() {
        return name;
    }

    /**
     * 设置姓名
     *
     * @param name 姓名
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取单位
     *
     * @return UNIT - 单位
     */
    public String getUnit() {
        return unit;
    }

    /**
     * 设置单位
     *
     * @param unit 单位
     */
    public void setUnit(String unit) {
        this.unit = unit;
    }

    /**
     * 获取分类
     *
     * @return CLASSIFY - 分类
     */
    public String getClassify() {
        return classify;
    }

    /**
     * 设置分类
     *
     * @param classify 分类
     */
    public void setClassify(String classify) {
        this.classify = classify;
    }

    /**
     * 获取颜色
     *
     * @return COLOR - 颜色
     */
    public String getColor() {
        return color;
    }

    /**
     * 设置颜色
     *
     * @param color 颜色
     */
    public void setColor(String color) {
        this.color = color;
    }

    /**
     * 获取宽度
     *
     * @return WIDTH - 宽度
     */
    public String getWidth() {
        return width;
    }

    /**
     * 设置宽度
     *
     * @param width 宽度
     */
    public void setWidth(String width) {
        this.width = width;
    }

    /**
     * 获取高度
     *
     * @return HEIGHT - 高度
     */
    public String getHeight() {
        return height;
    }

    /**
     * 设置高度
     *
     * @param height 高度
     */
    public void setHeight(String height) {
        this.height = height;
    }

    /**
     * 获取质量
     *
     * @return QUALITY - 质量
     */
    public String getQuality() {
        return quality;
    }

    /**
     * 设置质量
     *
     * @param quality 质量
     */
    public void setQuality(String quality) {
        this.quality = quality;
    }

    /**
     * 获取库存
     *
     * @return INVENTORY - 库存
     */
    public Double getInventory() {
        return inventory;
    }

    /**
     * 设置库存
     *
     * @param inventory 库存
     */
    public void setInventory(Double inventory) {
        this.inventory = inventory;
    }

    /**
     * 获取厚度
     *
     * @return THICKNESS - 厚度
     */
    public String getThickness() {
        return thickness;
    }

    /**
     * 设置厚度
     *
     * @param thickness 厚度
     */
    public void setThickness(String thickness) {
        this.thickness = thickness;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", name=").append(name);
        sb.append(", unit=").append(unit);
        sb.append(", classify=").append(classify);
        sb.append(", color=").append(color);
        sb.append(", width=").append(width);
        sb.append(", height=").append(height);
        sb.append(", quality=").append(quality);
        sb.append(", inventory=").append(inventory);
        sb.append(", thickness=").append(thickness);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        Goods other = (Goods) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getUnit() == null ? other.getUnit() == null : this.getUnit().equals(other.getUnit()))
            && (this.getClassify() == null ? other.getClassify() == null : this.getClassify().equals(other.getClassify()))
            && (this.getColor() == null ? other.getColor() == null : this.getColor().equals(other.getColor()))
            && (this.getWidth() == null ? other.getWidth() == null : this.getWidth().equals(other.getWidth()))
            && (this.getHeight() == null ? other.getHeight() == null : this.getHeight().equals(other.getHeight()))
            && (this.getQuality() == null ? other.getQuality() == null : this.getQuality().equals(other.getQuality()))
            && (this.getInventory() == null ? other.getInventory() == null : this.getInventory().equals(other.getInventory()))
            && (this.getThickness() == null ? other.getThickness() == null : this.getThickness().equals(other.getThickness()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getUnit() == null) ? 0 : getUnit().hashCode());
        result = prime * result + ((getClassify() == null) ? 0 : getClassify().hashCode());
        result = prime * result + ((getColor() == null) ? 0 : getColor().hashCode());
        result = prime * result + ((getWidth() == null) ? 0 : getWidth().hashCode());
        result = prime * result + ((getHeight() == null) ? 0 : getHeight().hashCode());
        result = prime * result + ((getQuality() == null) ? 0 : getQuality().hashCode());
        result = prime * result + ((getInventory() == null) ? 0 : getInventory().hashCode());
        result = prime * result + ((getThickness() == null) ? 0 : getThickness().hashCode());
        return result;
    }
}