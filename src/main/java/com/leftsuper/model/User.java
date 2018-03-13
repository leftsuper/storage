package com.leftsuper.model;

import java.io.Serializable;
import javax.persistence.*;

public class User implements Serializable {
    /**
     * 主键ID
     */
    @Id
    @Column(name = "ID")
    private Integer id;

    /**
     * 名称
     */
    @Column(name = "NAME")
    private String name;

    /**
     * 登陆名
     */
    @Column(name = "LOGIN_NAME")
    private String loginName;

    /**
     * 密码
     */
    @Column(name = "PASSWORD")
    private String password;

    /**
     * 权限等级
     */
    @Column(name = "LIMIT_RANK")
    private Integer limitRank;

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
     * 获取名称
     *
     * @return NAME - 名称
     */
    public String getName() {
        return name;
    }

    /**
     * 设置名称
     *
     * @param name 名称
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取登陆名
     *
     * @return LOGIN_NAME - 登陆名
     */
    public String getLoginName() {
        return loginName;
    }

    /**
     * 设置登陆名
     *
     * @param loginName 登陆名
     */
    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    /**
     * 获取密码
     *
     * @return PASSWORD - 密码
     */
    public String getPassword() {
        return password;
    }

    /**
     * 设置密码
     *
     * @param password 密码
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * 获取权限等级
     *
     * @return LIMIT_RANK - 权限等级
     */
    public Integer getLimitRank() {
        return limitRank;
    }

    /**
     * 设置权限等级
     *
     * @param limitRank 权限等级
     */
    public void setLimitRank(Integer limitRank) {
        this.limitRank = limitRank;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", name=").append(name);
        sb.append(", loginName=").append(loginName);
        sb.append(", password=").append(password);
        sb.append(", limitRank=").append(limitRank);
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
        User other = (User) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getLoginName() == null ? other.getLoginName() == null : this.getLoginName().equals(other.getLoginName()))
            && (this.getPassword() == null ? other.getPassword() == null : this.getPassword().equals(other.getPassword()))
            && (this.getLimitRank() == null ? other.getLimitRank() == null : this.getLimitRank().equals(other.getLimitRank()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getLoginName() == null) ? 0 : getLoginName().hashCode());
        result = prime * result + ((getPassword() == null) ? 0 : getPassword().hashCode());
        result = prime * result + ((getLimitRank() == null) ? 0 : getLimitRank().hashCode());
        return result;
    }
}