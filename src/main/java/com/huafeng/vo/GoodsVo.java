package com.huafeng.vo;

import java.io.Serializable;
import java.util.Date;

/**
 * 商品vo
 */
public class GoodsVo implements Serializable{
	/**
	 * 主键ID
	 */
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
	private Integer classifyId;

	/**
	 * 分类
	 */
	private String classify;

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
	private Boolean isDelete;

	/**
	 * 创建时间
	 */
	private Date createTime;

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

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public Integer getClassifyId() {
		return classifyId;
	}

	public void setClassifyId(Integer classifyId) {
		this.classifyId = classifyId;
	}

	public String getClassify() {
		return classify;
	}

	public void setClassify(String classify) {
		this.classify = classify;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getSpecification() {
		return specification;
	}

	public void setSpecification(String specification) {
		this.specification = specification;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	public String getThickness() {
		return thickness;
	}

	public void setThickness(String thickness) {
		this.thickness = thickness;
	}

	public Double getInventory() {
		return inventory;
	}

	public void setInventory(Double inventory) {
		this.inventory = inventory;
	}

	public Boolean getDelete() {
		return isDelete;
	}

	public void setDelete(Boolean delete) {
		isDelete = delete;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Override
	public String toString() {
		return "GoodsVo{" +
				"id=" + id +
				", name='" + name + '\'' +
				", unit='" + unit + '\'' +
				", classify='" + classify + '\'' +
				", color='" + color + '\'' +
				", specification='" + specification + '\'' +
				", material='" + material + '\'' +
				", thickness='" + thickness + '\'' +
				", inventory=" + inventory +
				'}';
	}
}
