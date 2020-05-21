package com.huafeng.basic;

/**
 * Created by leftsuper on 2020-04-22.
 */
public enum ResponseCode {

    CODE_SUCCESS(100),
    CODE_SERVER_ERROR(200),
    CODE_SERVER_EXCEPTION(201),
    CODE_PARAM_ERROR(300),
    CODE_DATA_EXIST(400),
    ;

    private int value;

    ResponseCode(int value) {
        this.value = value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
