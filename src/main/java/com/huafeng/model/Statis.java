package com.huafeng.model;

import java.io.Serializable;

public class Statis implements Serializable {
    private static final long serialVersionUID = 1L;
    //统计y
    private String yData;
    //统计x
    private String xData;

    public Statis() {

    }

    public Statis(String xData, String yData) {
        this.xData = xData;
        this.yData = yData;
    }

    public String getyData() {
        return yData;
    }

    public void setyData(String yData) {
        this.yData = yData;
    }

    public String getxData() {
        return xData;
    }

    public void setxData(String xData) {
        this.xData = xData;
    }
}
