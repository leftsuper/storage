package com.huafeng.basic;

import com.github.pagehelper.PageInfo;

import java.util.List;

/**
 * 界面表格返回包
 * Created by leftsuper on 2020-04-18.
 */
public class DataGrid<T> extends BaseResponse{

    private long total;

    private List<T> rows;

    public DataGrid(PageInfo<T> pageInfo) {
        super();
        total = pageInfo.getTotal();
        rows = pageInfo.getList();
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List<T> getRows() {
        return rows;
    }

    public void setRows(List<T> rows) {
        this.rows = rows;
    }

    @Override
    public String toString() {
        return "DataGrid{" +
                "responseCode=" + responseCode +
                ", responseBody='" + responseBody + '\'' +
                ", total=" + total +
                ", rows=" + rows +
                '}';
    }
}
