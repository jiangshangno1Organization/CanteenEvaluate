/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.4-m14 : Database - resturant
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`resturant` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `resturant`;

/*Table structure for table `comments` */

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `parentsid` int(20) NOT NULL COMMENT '食物id',
  `comments` varchar(4000) DEFAULT NULL COMMENT '评论内容',
  `memo1` varchar(4000) DEFAULT NULL COMMENT '色或厨师评分',
  `typeid` int(20) DEFAULT NULL COMMENT '1为食物评价，2为卖饭者评价',
  `memo2` varchar(4000) DEFAULT NULL COMMENT '香',
  `date` datetime DEFAULT NULL COMMENT '日期',
  `memo3` varchar(4000) DEFAULT NULL COMMENT '味',
  `memo4` varchar(4000) DEFAULT NULL COMMENT '形',
  PRIMARY KEY (`id`),
  KEY `foodid` (`parentsid`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

/*Data for the table `comments` */

insert  into `comments`(`id`,`parentsid`,`comments`,`memo1`,`typeid`,`memo2`,`date`,`memo3`,`memo4`) values (1,1,'好吃','5',1,'2','2020-04-09 05:00:00','3','4'),(2,1,'不好吃','2',1,'2','2020-04-08 04:00:00','3','4'),(3,2,'难吃','1',1,'2','2020-04-07 01:00:00','3','4'),(4,1,'还可以','3',1,'2','2020-04-09 08:00:00','3','4'),(5,2,'一般八','3',1,'2','2020-04-09 04:02:00','3',''),(6,1,'厨师牛逼','5',3,NULL,'2020-04-09 00:01:00',NULL,NULL),(7,1,'厨师帅','4',3,NULL,'2020-04-05 07:00:00',NULL,NULL),(8,1,'厨师厉害','3',3,NULL,'2020-04-03 10:00:00',NULL,NULL),(17,1,'菜品具体评论','4',1,'4','2020-04-09 00:00:00','4','4'),(18,1,'厨师评论测试','4',3,NULL,'2020-04-09 00:00:00',NULL,NULL),(27,1,'菜品具体评论','4',1,'4','2020-04-09 00:00:00','4','4'),(28,1,'厨师评论测试','4',3,NULL,'2020-04-09 00:00:00',NULL,NULL),(29,1,'菜品具体评论','4',1,'4','2020-04-09 00:00:00','4','4'),(30,1,'厨师评论测试','4',3,NULL,'2020-04-09 00:00:00',NULL,NULL),(31,1,'菜品具体评论','4',1,'4','2020-04-09 15:02:10','4','4'),(32,1,'厨师评论测试','4',3,NULL,'2020-04-09 15:02:10',NULL,NULL),(33,0,NULL,NULL,1,NULL,'2020-04-10 10:49:37',NULL,NULL),(34,1,'服务者评价','5',2,NULL,'2020-04-10 11:44:05',NULL,NULL),(35,1,'菜品具体评论','4',1,'4','2020-04-10 14:53:10','4','4'),(36,1,'厨师评论测试','4',3,NULL,'2020-04-10 14:53:10',NULL,NULL),(37,1,'服务员2','4',2,NULL,NULL,NULL,NULL),(38,2,'服务员22','4',2,NULL,NULL,NULL,NULL),(39,1,'服务者评价','5',2,NULL,'2020-04-10 16:25:16',NULL,NULL),(40,1,'撒旦','',1,'','2020-04-10 16:42:07','',''),(41,1,'阿斯顿','',3,NULL,'2020-04-10 16:42:07',NULL,NULL),(42,1,'撒旦','',1,'','2020-04-10 16:50:06','',''),(43,1,'撒的','',3,NULL,'2020-04-10 16:50:06',NULL,NULL),(44,1,'还行。','3',1,'3','2020-04-10 16:55:12','5','3'),(45,1,'还可以','4',3,NULL,'2020-04-10 16:55:12',NULL,NULL),(46,1,'就是个傻X','5',2,NULL,'2020-04-10 16:55:49',NULL,NULL),(47,1,'shabi','5',2,NULL,'2020-04-10 17:07:09',NULL,NULL),(48,1,'暗示法',NULL,2,NULL,'2020-04-10 17:09:58',NULL,NULL),(49,1,'啥地方',NULL,2,NULL,'2020-04-10 17:11:24',NULL,NULL),(50,1,'是是是','5',2,NULL,'2020-04-10 17:12:17',NULL,NULL),(51,1,'去去去去去去去去去',NULL,2,NULL,'2020-04-10 17:15:46',NULL,NULL),(52,2,'阿萨德啥地方',NULL,2,NULL,'2020-04-10 17:19:37',NULL,NULL),(53,1,'QQQ','4',1,'4','2020-04-10 17:31:39','5','5'),(54,1,'QQQ','3',3,NULL,'2020-04-10 17:31:39',NULL,NULL),(55,1,'小童说不错','4',1,'5','2020-04-10 17:36:00','4','5'),(56,1,'一般般','5',3,NULL,'2020-04-10 17:36:00',NULL,NULL),(57,2,'nice','4',1,'5','2020-04-10 17:43:22','5','4'),(58,1,'的','3',3,NULL,'2020-04-10 17:43:22',NULL,NULL);

/*Table structure for table `cooker` */

DROP TABLE IF EXISTS `cooker`;

CREATE TABLE `cooker` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(20) DEFAULT NULL COMMENT '姓名',
  `avgs` varchar(50) DEFAULT NULL COMMENT '平均分',
  `memo2` varchar(50) DEFAULT NULL COMMENT '年龄',
  `memo3` varchar(50) DEFAULT NULL COMMENT '性别',
  `memo4` varchar(50) DEFAULT NULL COMMENT 'url',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `cooker` */

insert  into `cooker`(`id`,`name`,`avgs`,`memo2`,`memo3`,`memo4`) values (1,'小范','5','20岁','女','url'),(2,'小江','4.6','25','女',NULL),(3,'小王','5','20岁','年龄','url');

/*Table structure for table `cookerex` */

DROP TABLE IF EXISTS `cookerex`;

CREATE TABLE `cookerex` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `cookid` int(11) NOT NULL COMMENT '厨师id',
  `jianjie` varchar(200) DEFAULT NULL COMMENT '简介',
  `memo3` varchar(100) DEFAULT NULL,
  `memo4` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `cookerex` */

insert  into `cookerex`(`id`,`cookid`,`jianjie`,`memo3`,`memo4`) values (1,1,'123233442211···',NULL,NULL),(2,5,'帅哥',NULL,NULL),(3,6,'帅哥',NULL,NULL),(4,7,'帅哥是你爸爸',NULL,NULL);

/*Table structure for table `food` */

DROP TABLE IF EXISTS `food`;

CREATE TABLE `food` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(100) NOT NULL COMMENT '食物名称',
  `cookid` int(20) NOT NULL COMMENT '厨师id',
  `memo1` varchar(100) DEFAULT NULL COMMENT '早1中2晚3，',
  `memo2` varchar(100) DEFAULT NULL COMMENT '用餐时间今天1，明天2，待定3',
  `memo3` varchar(100) DEFAULT NULL COMMENT '食物简介',
  `url` varchar(200) DEFAULT NULL COMMENT '图片地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `food` */

insert  into `food`(`id`,`name`,`cookid`,`memo1`,`memo2`,`memo3`,`url`) values (1,'面条',2,',,3,2,1','1,,2','来一碗康师傅红烧牛肉面','images/foodsPic/noodle.jpg'),(2,'汤圆',1,'1,,2,,3',',1,2','来一碗康师傅红烧牛肉汤圆','images/foodsPic/timg.jpg'),(9,'酸菜鱼',2,'1,2,3','1,2','祖传鱼 贼好吃','images/foodsPic/202004131586759723873.jpg');

/*Table structure for table `seller` */

DROP TABLE IF EXISTS `seller`;

CREATE TABLE `seller` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(50) DEFAULT NULL COMMENT '姓名',
  `sex` varchar(50) DEFAULT NULL COMMENT '性别',
  `commentid` int(20) DEFAULT NULL COMMENT '评论表id',
  `age` varchar(3) DEFAULT NULL COMMENT '年龄',
  `memo` varchar(100) DEFAULT NULL COMMENT '备用',
  `memo1` varchar(100) DEFAULT NULL COMMENT '备用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `seller` */

insert  into `seller`(`id`,`name`,`sex`,`commentid`,`age`,`memo`,`memo1`) values (1,'小童','女',NULL,'20','images/u1.jpg','我是傻X'),(2,'小明','男',NULL,'201','images/u4.jpg','我是傻X我是傻X'),(4,'童思凯','女',NULL,'80','images/foodsPic/202004141586840485759.jpg','审查2');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `username` varchar(100) NOT NULL COMMENT '登陆名',
  `password` varchar(100) NOT NULL COMMENT '登陆密码',
  `role` int(20) DEFAULT NULL COMMENT '角色，1为食堂管理员，2为学生。',
  `memo` varchar(100) DEFAULT NULL COMMENT '备用',
  `memos` varchar(100) DEFAULT NULL COMMENT '备用',
  `memoes` varchar(100) DEFAULT NULL COMMENT '备用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
