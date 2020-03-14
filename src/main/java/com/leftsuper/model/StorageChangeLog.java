package com.leftsuper.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

@Table(name = "storage_change_log")
public class StorageChangeLog implements Serializable {
    /**
     * 主键ID
     */
    @Id
    private Long id;

    /**
     * 实体类
     */
    @Column(name = "class_name")
    private String className;

    /**
     * 实体json
     */
    private String model;

    /**
     * 操作者
     */
    private Integer operator;

    /**
     * 操作时间
     */
    private Date time;

    private static final long serialVersionUID = 1L;

    /**
     * 获取主键ID
     *
     * @return id - 主键ID
     */
    public Long getId() {
        return id;
    }

    /**
     * 设置主键ID
     *
     * @param id 主键ID
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * 获取实体类
     *
     * @return class_name - 实体类
     */
    public String getClassName() {
        return className;
    }

    /**
     * 设置实体类
     *
     * @param className 实体类
     */
    public void setClassName(String className) {
        this.className = className;
    }

    /**
     * 获取实体json
     *
     * @return model - 实体json
     */
    public String getModel() {
        return model;
    }

    /**
     * 设置实体json
     *
     * @param model 实体json
     */
    public void setModel(String model) {
        this.model = model;
    }

    /**
     * 获取操作者
     *
     * @return operator - 操作者
     */
    public Integer getOperator() {
        return operator;
    }

    /**
     * 设置操作者
     *
     * @param operator 操作者
     */
    public void setOperator(Integer operator) {
        this.operator = operator;
    }

    /**
     * 获取操作时间
     *
     * @return time - 操作时间
     */
    public Date getTime() {
        return time;
    }

    /**
     * 设置操作时间
     *
     * @param time 操作时间
     */
    public void setTime(Date time) {
        this.time = time;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", className=").append(className);
        sb.append(", model=").append(model);
        sb.append(", operator=").append(operator);
        sb.append(", time=").append(time);
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
        StorageChangeLog other = (StorageChangeLog) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getClassName() == null ? other.getClassName() == null : this.getClassName().equals(other.getClassName()))
            && (this.getModel() == null ? other.getModel() == null : this.getModel().equals(other.getModel()))
            && (this.getOperator() == null ? other.getOperator() == null : this.getOperator().equals(other.getOperator()))
            && (this.getTime() == null ? other.getTime() == null : this.getTime().equals(other.getTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getClassName() == null) ? 0 : getClassName().hashCode());
        result = prime * result + ((getModel() == null) ? 0 : getModel().hashCode());
        result = prime * result + ((getOperator() == null) ? 0 : getOperator().hashCode());
        result = prime * result + ((getTime() == null) ? 0 : getTime().hashCode());
        return result;
    }
}