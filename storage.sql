/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2018/1/26 19:05:59                           */
/*==============================================================*/
SET FOREIGN_KEY_CHECKS=0;

drop table if exists customer;

drop table if exists goods;

drop table if exists in_out_history;

drop table if exists order_detail;

drop table if exists order_item;

drop table if exists storage_change_log;

drop table if exists user;

/*==============================================================*/
/* Table: customer                                              */
/*==============================================================*/
create table customer
(
   ID                   int not null auto_increment comment '主键ID',
   NAME                 varchar(255) comment '姓名',
   ADDRESS              varchar(255) comment '地址',
   TEL                  varchar(255) comment '电话',
   PHONE                varchar(255) comment '手机',
   primary key (ID)
)
engine = InnoDB;

alter table customer comment '客户';

/*==============================================================*/
/* Table: goods                                                 */
/*==============================================================*/
create table goods
(
   ID                   int not null auto_increment comment '主键ID',
   NAME                 varchar(255) comment '姓名',
   UNIT                 varchar(255) comment '单位',
   CLASSIFY             varchar(255) comment '分类',
   COLOR                varchar(255) comment '颜色',
   WIDTH                varchar(255) comment '宽度',
   HEIGHT               varchar(255) comment '高度',
   QUALITY              varchar(255) comment '质量',
   INVENTORY            double comment '库存',
   THICKNESS            varchar(255) comment '厚度',
   primary key (ID)
)
engine = InnoDB;

alter table goods comment '商品表';

/*==============================================================*/
/* Table: in_out_history                                        */
/*==============================================================*/
create table in_out_history
(
   ID                   bigint not null auto_increment comment '主键ID',
   USER_ID              int comment '操作人',
   GOODS_ID             int comment '商品ID',
   COUNT                double comment '数量',
   TIME                 datetime comment '时间',
   primary key (ID)
)
engine = InnoDB;

alter table in_out_history comment '出入库历史记录';

/*==============================================================*/
/* Table: order_detail                                          */
/*==============================================================*/
create table order_detail
(
   ID                   bigint not null comment '订单号',
   CUSTOMER_ID          int comment '客户ID',
   REMARK               varchar(255) comment '备注',
   STATUS               tinyint comment '订单状态',
   primary key (ID)
)
engine = InnoDB;

alter table order_detail comment '订单详情表';

/*==============================================================*/
/* Table: order_item                                            */
/*==============================================================*/
create table order_item
(
   ID                   bigint not null auto_increment comment '主键ID',
   ORDER_ID             bigint comment '订单ID',
   GOODS_ID             int comment '商品ID',
   PRICE                double comment '价格',
   NUMBER               double comment '数量',
   primary key (ID)
)
engine = InnoDB;

alter table order_item comment '订单项';

/*==============================================================*/
/* Table: storage_change_log                                    */
/*==============================================================*/
create table storage_change_log
(
   ID                   bigint not null auto_increment comment '主键ID',
   CLASS_NAME           varchar(255) comment '实体类',
   MODEL                varchar(1500) comment '实体json',
   OPERATOR             int comment '操作者',
   TIME                 datetime comment '操作时间',
   primary key (ID)
)
engine = InnoDB;

alter table storage_change_log comment '仓库操作记录';

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   ID                   int(11) not null auto_increment comment '主键ID',
   NAME                 varchar(255) comment '名称',
   LOGIN_NAME           varchar(255) comment '登陆名',
   PASSWORD             varchar(255) comment '密码',
   LIMIT_RANK           int(11) comment '权限等级',
   primary key (ID)
)
engine = InnoDB;

alter table user comment '用户表';

alter table in_out_history add constraint FK_Reference_history_goods foreign key (GOODS_ID)
      references goods (ID) on delete restrict on update restrict;

alter table in_out_history add constraint FK_Reference_history_user foreign key (USER_ID)
      references user (ID) on delete restrict on update restrict;

alter table order_detail add constraint FK_Reference_order_customer foreign key (CUSTOMER_ID)
      references customer (ID) on delete restrict on update restrict;

alter table order_item add constraint FK_Reference_list_goods foreign key (GOODS_ID)
      references goods (ID) on delete restrict on update restrict;

alter table order_item add constraint FK_Reference_list_order foreign key (ORDER_ID)
      references order_detail (ID) on delete restrict on update restrict;

alter table storage_change_log add constraint FK_Reference_log_user foreign key (OPERATOR)
      references user (ID) on delete restrict on update restrict;

