package com.leftsuper.user;

import com.leftsuper.model.User;

/**
 * Created by leftsuper on 2018/5/28.
 */
public class CurrentUser {

    //user对象
    private User user;

    //单例
    private static CurrentUser currentUser;

    private CurrentUser() {
    }

    public static CurrentUser getInstance(){
        if(currentUser == null) {
            currentUser = new CurrentUser();
        }
        return currentUser;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
