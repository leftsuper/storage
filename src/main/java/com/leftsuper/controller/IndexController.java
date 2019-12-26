package com.leftsuper.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by leftsuper on 2018/5/23.
 */
@Controller
public class IndexController {

    @RequestMapping("/login")
    public String login(){
        String str = "login";
        return str;
    }

    @RequestMapping("/index")
    public String index(){
        String str = "index";
        return str;
    }

    @RequestMapping("/exit")
    public String exit(HttpServletRequest request) {
        request.getSession().invalidate();
        return "login";
    }
}
