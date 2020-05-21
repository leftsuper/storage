package com.huafeng.Aspect;

import com.huafeng.basic.BaseResponse;
import com.huafeng.basic.ResponseCode;
import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * Created by leftsuper on 2020-04-22.
 */
@Aspect
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class ControllerAspect {

    /**
     * 定义一个切片
     */
    @Pointcut("execution(public * com.huafeng.controller.*Controller.*(..))")
    private void interfaceMethod() {
    }

    /**
     * 静态页面输出过滤切片
     */
    @Pointcut("execution(public * com.huafeng.controller.IndexController.*(..))")
    private void indexMethod() {
    }

    @Pointcut("execution(public * com.huafeng.controller.*Controller.*Combo(..))")
    private void comboMethod() {
    }

    /**
     * 增加try catch
     * @param pjp
     * @return
     */
    @Around("interfaceMethod() && !indexMethod() && !comboMethod()")
    public Object addTryCatch(ProceedingJoinPoint pjp) {
        Logger logger = LoggerFactory.getLogger(pjp.getTarget().getClass());
        long start = System.currentTimeMillis();
        Object returnObject = process(pjp, logger);
        long last = System.currentTimeMillis() - start;
        //打印日志
        printLog(pjp, returnObject, last, logger);
        return returnObject;
    }

    private Object process(ProceedingJoinPoint pjp, Logger logger) {
        try {
            return pjp.proceed();
        } catch (Exception e) {
            String paramStr = StringUtils.join(pjp.getArgs(), ",");
            logger.error(" [类名]=" + pjp.getTarget().getClass().toString() + " [方法]=" + pjp.getSignature().getName() + " [参数]=" + paramStr, e);
            return new BaseResponse(ResponseCode.CODE_SERVER_EXCEPTION, "系统异常");
        } catch (Throwable t) {
            String paramStr = StringUtils.join(pjp.getArgs(), ",");
            logger.error(" [类名]=" + pjp.getTarget().getClass().toString() + " [方法]=" + pjp.getSignature().getName() + " [参数]=" + paramStr, t);
            return new BaseResponse(ResponseCode.CODE_SERVER_ERROR, "系统错误");
        }
    }

    private void printLog(ProceedingJoinPoint pjp, Object returnObject, long lastTime, Logger logger) {
        String paramStr = StringUtils.join(pjp.getArgs(), ",");
        logger.info(" [类名]=" + pjp.getTarget().getClass().toString() + " [方法]=" + pjp.getSignature().getName() + " [持续时间]" + lastTime + " [参数]=" + paramStr + " [返回]=" + returnObject);
    }
}
