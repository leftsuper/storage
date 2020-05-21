package com.huafeng.basic;

/**
 * 一般返回包
 * Created by leftsuper on 2020-04-22.
 */
public class ResponseWrap extends BaseResponse {

    /**
     * 数据
     */
    private Object data;

    public ResponseWrap(Object data) {
        super();
        this.data = data;
    }

    public ResponseWrap(ResponseCode responseCode, String responseBody, Object data) {
        this.responseCode = responseCode.getValue();
        this.responseBody = responseBody;
        this.data = data;
    }

    public <T> T getData() {
        return (T) data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "ResponseWrap{" +
                "responseCode=" + responseCode +
                ", data=" + data +
                ", responseBody='" + responseBody + '\'' +
                '}';
    }
}
