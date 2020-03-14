/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50728
Source Host           : localhost:3306
Source Database       : storage

Target Server Type    : MYSQL
Target Server Version : 50728
File Encoding         : 65001

Date: 2020-03-08 20:24:04
*/
DROP database IF EXISTS `storage`;
CREATE database `storage` DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
use `storage`;

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `address` varchar(255) DEFAULT NULL COMMENT '地址',
  `tel` varchar(255) DEFAULT NULL COMMENT '电话',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机',
  `company` varchar(255) DEFAULT NULL COMMENT '公司',
  `is_delete` bit(1) DEFAULT b'0' COMMENT '逻辑删除 0-否 1-是',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='客户';

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `unit` varchar(255) DEFAULT NULL COMMENT '单位',
  `classify` varchar(255) DEFAULT NULL COMMENT '分类',
  `color` varchar(255) DEFAULT NULL COMMENT '颜色',
  `width` varchar(255) DEFAULT NULL COMMENT '宽度',
  `height` varchar(255) DEFAULT NULL COMMENT '高度',
  `quality` varchar(255) DEFAULT NULL COMMENT '质量',
  `inventory` double DEFAULT NULL COMMENT '库存',
  `thickness` varchar(255) DEFAULT NULL COMMENT '厚度',
  `is_delete` bit(1) DEFAULT b'0' COMMENT '逻辑删除 0-否 1-是',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品表';

-- ----------------------------
-- Table structure for in_out_history
-- ----------------------------
DROP TABLE IF EXISTS `in_out_history`;
CREATE TABLE `in_out_history` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `user_id` int(11) DEFAULT NULL COMMENT '操作人',
  `goods_id` int(11) DEFAULT NULL COMMENT '商品ID',
  `count` double DEFAULT NULL COMMENT '数量',
  `time` datetime DEFAULT NULL COMMENT '时间',
  `is_delete` bit(1) DEFAULT b'0' COMMENT '逻辑删除 0-否 1-是',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `FK_Reference_history_goods` (`goods_id`),
  KEY `FK_Reference_history_user` (`user_id`),
  CONSTRAINT `FK_Reference_history_goods` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_Reference_history_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='出入库历史记录';

-- ----------------------------
-- Table structure for navigator
-- ----------------------------
DROP TABLE IF EXISTS `navigator`;
CREATE TABLE `navigator` (
  `id` int(11) NOT NULL COMMENT 'id',
  `name` varchar(255) NOT NULL COMMENT '名字',
  `display` varchar(255) NOT NULL COMMENT '显示名称',
  `url` varchar(255) DEFAULT NULL COMMENT '跳转地址',
  `icon` varchar(255) DEFAULT NULL COMMENT '图标',
  `parent_id` int(11) DEFAULT NULL COMMENT '父级ID',
  `is_delete` bit(1) DEFAULT b'0' COMMENT '逻辑删除 0-否 1-是',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='导航栏';

-- ----------------------------
-- Records of navigator
-- ----------------------------
INSERT INTO `navigator` VALUES ('10100', 'storage', '仓储', null, 'icon-storage', null, b'1', current_timestamp);
INSERT INTO `navigator` VALUES ('10101', 'inventory', '库存', null, 'icon-shift', '10100', b'1', current_timestamp);
INSERT INTO `navigator` VALUES ('10200', 'sale', '销售', null, 'icon-grid', null, b'1', current_timestamp);
INSERT INTO `navigator` VALUES ('10201', 'order', '订单', null, 'icon-application', '10200', b'1', current_timestamp);
INSERT INTO `navigator` VALUES ('10202', 'customer', '顾客', null, 'icon-user', '10200', b'1', current_timestamp);
INSERT INTO `navigator` VALUES ('10300', 'statistics', '统计', null, 'icon-chart', null, b'1', current_timestamp);

-- ----------------------------
-- Table structure for order_detail
-- ----------------------------
DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE `order_detail` (
  `ID` bigint(20) NOT NULL COMMENT '订单号',
  `CUSTOMER_ID` int(11) DEFAULT NULL COMMENT '客户ID',
  `REMARK` varchar(255) DEFAULT NULL COMMENT '备注',
  `STATUS` tinyint(4) DEFAULT NULL COMMENT '订单状态',
  `is_delete` bit(1) DEFAULT b'0' COMMENT '逻辑删除 0-否 1-是',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`ID`),
  KEY `FK_Reference_order_customer` (`CUSTOMER_ID`),
  CONSTRAINT `FK_Reference_order_customer` FOREIGN KEY (`CUSTOMER_ID`) REFERENCES `customer` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单详情表';

-- ----------------------------
-- Table structure for order_item
-- ----------------------------
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `order_id` bigint(20) DEFAULT NULL COMMENT '订单ID',
  `goods_id` int(11) DEFAULT NULL COMMENT '商品ID',
  `price` double DEFAULT NULL COMMENT '价格',
  `number` double DEFAULT NULL COMMENT '数量',
  `is_delete` bit(1) DEFAULT b'0' COMMENT '逻辑删除 0-否 1-是',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `FK_Reference_list_goods` (`goods_id`),
  KEY `FK_Reference_list_order` (`order_id`),
  CONSTRAINT `FK_Reference_list_goods` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_Reference_list_order` FOREIGN KEY (`order_id`) REFERENCES `order_detail` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单项';

-- ----------------------------
-- Table structure for storage_change_log
-- ----------------------------
DROP TABLE IF EXISTS `storage_change_log`;
CREATE TABLE `storage_change_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `class_name` varchar(255) DEFAULT NULL COMMENT '实体类',
  `model` varchar(1500) DEFAULT NULL COMMENT '实体json',
  `operator` int(11) DEFAULT NULL COMMENT '操作者',
  `time` datetime DEFAULT NULL COMMENT '操作时间',
  PRIMARY KEY (`id`),
  KEY `FK_Reference_log_user` (`operator`),
  CONSTRAINT `FK_Reference_log_user` FOREIGN KEY (`operator`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='仓库操作记录';


