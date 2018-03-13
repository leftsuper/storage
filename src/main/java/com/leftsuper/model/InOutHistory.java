package com.leftsuper.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

@Table(name = "in_out_history")
public class InOutHistory implements Serializable {
    /**
     * 主键ID
     */
    @Id
    @Column(name = "ID")
    private Long id;

    /**
     * 操作人
     */
    @Column(name = "USER_ID")
    private Integer userId;

    /**
     * 商品ID
     */
    @Column(name = "GOODS_ID")
    private Integer goodsId;

    /**
     * 数量
     */
    @Column(name = "COUNT")
    private Double count;

    /**
     * 时间
     */
    @Column(name = "TIME")
    private Date time;

    private static final long serialVersionUID = 1L;

    /**
     * 获取主键ID
     *
     * @return ID - 主键ID
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
     * 获取操作人
     *
     * @return USER_ID - 操作人
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * 设置操作人
     *
     * @param userId 操作人
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * 获取商品ID
     *
     * @return GOODS_ID - 商品ID
     */
    public Integer getGoodsId() {
        return goodsId;
    }

    /**
     * 设置商品ID
     *
     * @param goodsId 商品ID
     */
    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    /**
     * 获取数量
     *
     * @return COUNT - 数量
     */
    public Double getCount() {
        return count;
    }

    /**
     * 设置数量
     *
     * @param count 数量
     */
    public void setCount(Double count) {
        this.count = count;
    }

    /**
     * 获取时间
     *
     * @return TIME - 时间
     */
    public Date getTime() {
        return time;
    }

    /**
     * 设置时间
     *
     * @param time 时间
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
        sb.append(", userId=").append(userId);
        sb.append(", goodsId=").append(goodsId);
        sb.append(", count=").append(count);
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
        InOutHistory other = (InOutHistory) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getUserId() == null ? other.getUserId() == null : this.getUserId().equals(other.getUserId()))
            && (this.getGoodsId() == null ? other.getGoodsId() == null : this.getGoodsId().equals(other.getGoodsId()))
            && (this.getCount() == null ? other.getCount() == null : this.getCount().equals(other.getCount()))
            && (this.getTime() == null ? other.getTime() == null : this.getTime().equals(other.getTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getUserId() == null) ? 0 : getUserId().hashCode());
        result = prime * result + ((getGoodsId() == null) ? 0 : getGoodsId().hashCode());
        result = prime * result + ((getCount() == null) ? 0 : getCount().hashCode());
        result = prime * result + ((getTime() == null) ? 0 : getTime().hashCode());
        return result;
    }
}