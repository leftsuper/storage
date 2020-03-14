package com.leftsuper.controller;

import com.leftsuper.constant.ModelViewKey;
import com.leftsuper.service.NavigatorService;
import com.leftsuper.vo.NavigatorVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by leftsuper on 2018/5/23.
 */
@Controller
public class IndexController {

//    @Autowired
//    private NavigatorService navigatorService;

    @RequestMapping("/login")
    public String login(){
        String str = "login";
        return str;
    }

    @RequestMapping("/index")
    public String index(/*ModelMap modelMap*/){
        /*List<NavigatorVo> navigatorVoList = navigatorService.getNavigatorList();
        modelMap.addAttribute(ModelViewKey.NAVIGATOR, navigatorVoList);*/

        return "index";
    }

    @RequestMapping("/exit")
    public String exit(HttpServletRequest request) {
        request.getSession().invalidate();
        return "login";
    }
}
