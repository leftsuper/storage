package com.huafeng.basic;

/**
 * Created by leftsuper on 2020-04-22.
 */
public class BaseResponse {
    /**
     * 返回码
     */
    protected int responseCode;

    /**
     * 返回内容
     */
    protected String responseBody;

    /**
     * 是否成功
     */
    protected boolean success;

    public BaseResponse() {
        this.responseCode = ResponseCode.CODE_SUCCESS.getValue();
        this.responseBody = "请求成功";
        this.success = true;
    }

    public BaseResponse(ResponseCode responseCode, String responseBody) {
        this.responseCode = responseCode.getValue();
        this.responseBody = responseBody;
        this.success = this.responseCode == ResponseCode.CODE_SUCCESS.getValue();
    }

    public int getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(ResponseCode responseCode) {
        this.responseCode = responseCode.getValue();
    }

    public String getResponseBody() {
        return responseBody;
    }

    public void setResponseBody(String responseBody) {
        this.responseBody = responseBody;
    }

    @Override
    public String toString() {
        return "BaseResponse{" +
                "responseCode=" + responseCode +
                ", responseBody='" + responseBody + '\'' +
                ", success=" + success +
                '}';
    }
}
