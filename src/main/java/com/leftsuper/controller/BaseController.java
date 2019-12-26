package com.leftsuper.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;


@Controller
public class BaseController {
	
	//表单传值为空时的传值问题
	@InitBinder  
    protected void initBinder(WebDataBinder binder) {  
        binder.registerCustomEditor(Date.class, new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"), true));  
//        binder.registerCustomEditor(int.class, new IntEditor());
//        binder.registerCustomEditor(long.class, new LongEditor());
//        binder.registerCustomEditor(double.class, new DoubleEditor());
//        binder.registerCustomEditor(float.class, new FloatEditor());
    }
	
	public String getExceptionMessage(Exception e) {
		String exceptionResult = e.getMessage();
		
		if(StringUtils.isEmpty(exceptionResult)) {
			for(StackTraceElement element : e.getStackTrace()) {
				if(element.toString().indexOf("Controller") > -1) {
					exceptionResult = element.toString();
					break;
				}
			}
		}
		
		return exceptionResult;
	}
}
