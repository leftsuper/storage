package com.huafeng.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

public class Goods implements Serializable {
    /**
     * 主键ID
     */
    @Id
    private Integer id;

    /**
     * 姓名
     */
    private String name;

    /**
     * 单位
     */
    private String unit;

    /**
     * 分类
     */
    @Column(name = "classify_id")
    private Integer classifyId;

    /**
     * 颜色
     */
    private String color;

    /**
     * 规格
     */
    private String specification;

    /**
     * 材料
     */
    private String material;

    /**
     * 厚度
     */
    private String thickness;

    /**
     * 库存
     */
    private Double inventory;

    /**
     * 逻辑删除 0-否 1-是
     */
    @Column(name = "is_delete")
    private Boolean isDelete;

    /**
     * 创建时间
     */
    @Column(name = "create_time")
    private Date createTime;

    private static final long serialVersionUID = 1L;

    /**
     * 获取主键ID
     *
     * @return id - 主键ID
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
     * @return name - 姓名
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
     * @return unit - 单位
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
     * @return classify_id - 分类
     */
    public Integer getClassifyId() {
        return classifyId;
    }

    /**
     * 设置分类
     *
     * @param classifyId 分类
     */
    public void setClassifyId(Integer classifyId) {
        this.classifyId = classifyId;
    }

    /**
     * 获取颜色
     *
     * @return color - 颜色
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
     * 获取规格
     *
     * @return specification - 规格
     */
    public String getSpecification() {
        return specification;
    }

    /**
     * 设置规格
     *
     * @param specification 规格
     */
    public void setSpecification(String specification) {
        this.specification = specification;
    }

    /**
     * 获取材料
     *
     * @return material - 材料
     */
    public String getMaterial() {
        return material;
    }

    /**
     * 设置材料
     *
     * @param material 材料
     */
    public void setMaterial(String material) {
        this.material = material;
    }

    /**
     * 获取厚度
     *
     * @return thickness - 厚度
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

    /**
     * 获取库存
     *
     * @return inventory - 库存
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
     * 获取逻辑删除 0-否 1-是
     *
     * @return is_delete - 逻辑删除 0-否 1-是
     */
    public Boolean getIsDelete() {
        return isDelete;
    }

    /**
     * 设置逻辑删除 0-否 1-是
     *
     * @param isDelete 逻辑删除 0-否 1-是
     */
    public void setIsDelete(Boolean isDelete) {
        this.isDelete = isDelete;
    }

    /**
     * 获取创建时间
     *
     * @return create_time - 创建时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 设置创建时间
     *
     * @param createTime 创建时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
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
        sb.append(", classifyId=").append(classifyId);
        sb.append(", color=").append(color);
        sb.append(", specification=").append(specification);
        sb.append(", material=").append(material);
        sb.append(", thickness=").append(thickness);
        sb.append(", inventory=").append(inventory);
        sb.append(", isDelete=").append(isDelete);
        sb.append(", createTime=").append(createTime);
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
            && (this.getClassifyId() == null ? other.getClassifyId() == null : this.getClassifyId().equals(other.getClassifyId()))
            && (this.getColor() == null ? other.getColor() == null : this.getColor().equals(other.getColor()))
            && (this.getSpecification() == null ? other.getSpecification() == null : this.getSpecification().equals(other.getSpecification()))
            && (this.getMaterial() == null ? other.getMaterial() == null : this.getMaterial().equals(other.getMaterial()))
            && (this.getThickness() == null ? other.getThickness() == null : this.getThickness().equals(other.getThickness()))
            && (this.getInventory() == null ? other.getInventory() == null : this.getInventory().equals(other.getInventory()))
            && (this.getIsDelete() == null ? other.getIsDelete() == null : this.getIsDelete().equals(other.getIsDelete()))
            && (this.getCreateTime() == null ? other.getCreateTime() == null : this.getCreateTime().equals(other.getCreateTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getUnit() == null) ? 0 : getUnit().hashCode());
        result = prime * result + ((getClassifyId() == null) ? 0 : getClassifyId().hashCode());
        result = prime * result + ((getColor() == null) ? 0 : getColor().hashCode());
        result = prime * result + ((getSpecification() == null) ? 0 : getSpecification().hashCode());
        result = prime * result + ((getMaterial() == null) ? 0 : getMaterial().hashCode());
        result = prime * result + ((getThickness() == null) ? 0 : getThickness().hashCode());
        result = prime * result + ((getInventory() == null) ? 0 : getInventory().hashCode());
        result = prime * result + ((getIsDelete() == null) ? 0 : getIsDelete().hashCode());
        result = prime * result + ((getCreateTime() == null) ? 0 : getCreateTime().hashCode());
        return result;
    }
}