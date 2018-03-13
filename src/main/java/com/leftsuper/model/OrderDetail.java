package com.leftsuper.model;

import java.io.Serializable;
import javax.persistence.*;

@Table(name = "order_detail")
public class OrderDetail implements Serializable {
    /**
     * 订单号
     */
    @Id
    @Column(name = "ID")
    private Long id;

    /**
     * 客户ID
     */
    @Column(name = "CUSTOMER_ID")
    private Integer customerId;

    /**
     * 备注
     */
    @Column(name = "REMARK")
    private String remark;

    /**
     * 订单状态
     */
    @Column(name = "STATUS")
    private Byte status;

    private static final long serialVersionUID = 1L;

    /**
     * 获取订单号
     *
     * @return ID - 订单号
     */
    public Long getId() {
        return id;
    }

    /**
     * 设置订单号
     *
     * @param id 订单号
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * 获取客户ID
     *
     * @return CUSTOMER_ID - 客户ID
     */
    public Integer getCustomerId() {
        return customerId;
    }

    /**
     * 设置客户ID
     *
     * @param customerId 客户ID
     */
    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    /**
     * 获取备注
     *
     * @return REMARK - 备注
     */
    public String getRemark() {
        return remark;
    }

    /**
     * 设置备注
     *
     * @param remark 备注
     */
    public void setRemark(String remark) {
        this.remark = remark;
    }

    /**
     * 获取订单状态
     *
     * @return STATUS - 订单状态
     */
    public Byte getStatus() {
        return status;
    }

    /**
     * 设置订单状态
     *
     * @param status 订单状态
     */
    public void setStatus(Byte status) {
        this.status = status;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", customerId=").append(customerId);
        sb.append(", remark=").append(remark);
        sb.append(", status=").append(status);
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
        OrderDetail other = (OrderDetail) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getCustomerId() == null ? other.getCustomerId() == null : this.getCustomerId().equals(other.getCustomerId()))
            && (this.getRemark() == null ? other.getRemark() == null : this.getRemark().equals(other.getRemark()))
            && (this.getStatus() == null ? other.getStatus() == null : this.getStatus().equals(other.getStatus()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getCustomerId() == null) ? 0 : getCustomerId().hashCode());
        result = prime * result + ((getRemark() == null) ? 0 : getRemark().hashCode());
        result = prime * result + ((getStatus() == null) ? 0 : getStatus().hashCode());
        return result;
    }
}