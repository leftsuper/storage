/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : storage

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-05-28 18:37:48
*/
DROP database IF EXISTS `storage`;
CREATE database `storage`;
use `storage`;

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `NAME` varchar(255) DEFAULT NULL COMMENT '姓名',
  `ADDRESS` varchar(255) DEFAULT NULL COMMENT '地址',
  `TEL` varchar(255) DEFAULT NULL COMMENT '电话',
  `PHONE` varchar(255) DEFAULT NULL COMMENT '手机',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='客户';

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `NAME` varchar(255) DEFAULT NULL COMMENT '姓名',
  `UNIT` varchar(255) DEFAULT NULL COMMENT '单位',
  `CLASSIFY` varchar(255) DEFAULT NULL COMMENT '分类',
  `COLOR` varchar(255) DEFAULT NULL COMMENT '颜色',
  `WIDTH` varchar(255) DEFAULT NULL COMMENT '宽度',
  `HEIGHT` varchar(255) DEFAULT NULL COMMENT '高度',
  `QUALITY` varchar(255) DEFAULT NULL COMMENT '质量',
  `INVENTORY` double DEFAULT NULL COMMENT '库存',
  `THICKNESS` varchar(255) DEFAULT NULL COMMENT '厚度',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品表';

-- ----------------------------
-- Table structure for in_out_history
-- ----------------------------
DROP TABLE IF EXISTS `in_out_history`;
CREATE TABLE `in_out_history` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `USER_ID` int(11) DEFAULT NULL COMMENT '操作人',
  `GOODS_ID` int(11) DEFAULT NULL COMMENT '商品ID',
  `COUNT` double DEFAULT NULL COMMENT '数量',
  `TIME` datetime DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`ID`),
  KEY `FK_Reference_history_goods` (`GOODS_ID`),
  KEY `FK_Reference_history_user` (`USER_ID`),
  CONSTRAINT `FK_Reference_history_goods` FOREIGN KEY (`GOODS_ID`) REFERENCES `goods` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_Reference_history_user` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='出入库历史记录';

-- ----------------------------
-- Table structure for order_detail
-- ----------------------------
DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE `order_detail` (
  `ID` bigint(20) NOT NULL COMMENT '订单号',
  `CUSTOMER_ID` int(11) DEFAULT NULL COMMENT '客户ID',
  `REMARK` varchar(255) DEFAULT NULL COMMENT '备注',
  `STATUS` tinyint(4) DEFAULT NULL COMMENT '订单状态',
  PRIMARY KEY (`ID`),
  KEY `FK_Reference_order_customer` (`CUSTOMER_ID`),
  CONSTRAINT `FK_Reference_order_customer` FOREIGN KEY (`CUSTOMER_ID`) REFERENCES `customer` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单详情表';

-- ----------------------------
-- Table structure for order_item
-- ----------------------------
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `ORDER_ID` bigint(20) DEFAULT NULL COMMENT '订单ID',
  `GOODS_ID` int(11) DEFAULT NULL COMMENT '商品ID',
  `PRICE` double DEFAULT NULL COMMENT '价格',
  `NUMBER` double DEFAULT NULL COMMENT '数量',
  PRIMARY KEY (`ID`),
  KEY `FK_Reference_list_goods` (`GOODS_ID`),
  KEY `FK_Reference_list_order` (`ORDER_ID`),
  CONSTRAINT `FK_Reference_list_goods` FOREIGN KEY (`GOODS_ID`) REFERENCES `goods` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_Reference_list_order` FOREIGN KEY (`ORDER_ID`) REFERENCES `order_detail` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单项';

-- ----------------------------
-- Table structure for storage_change_log
-- ----------------------------
DROP TABLE IF EXISTS `storage_change_log`;
CREATE TABLE `storage_change_log` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `CLASS_NAME` varchar(255) DEFAULT NULL COMMENT '实体类',
  `MODEL` varchar(1500) DEFAULT NULL COMMENT '实体json',
  `OPERATOR` int(11) DEFAULT NULL COMMENT '操作者',
  `TIME` datetime DEFAULT NULL COMMENT '操作时间',
  PRIMARY KEY (`ID`),
  KEY `FK_Reference_log_user` (`OPERATOR`),
  CONSTRAINT `FK_Reference_log_user` FOREIGN KEY (`OPERATOR`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='仓库操作记录';

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `NAME` varchar(255) DEFAULT NULL COMMENT '名称',
  `LOGIN_NAME` varchar(255) DEFAULT NULL COMMENT '登陆名',
  `PASSWORD` varchar(255) DEFAULT NULL COMMENT '密码',
  `LIMIT_RANK` int(11) DEFAULT NULL COMMENT '权限等级',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';
