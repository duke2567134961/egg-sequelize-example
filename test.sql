/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 28/08/2019 15:34:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for family
-- ----------------------------
DROP TABLE IF EXISTS `family`;
CREATE TABLE `family` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `gender` tinyint(1) unsigned DEFAULT NULL COMMENT '0:man,1:woman:',
  `relationship` varchar(10) DEFAULT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='家庭成员';

-- ----------------------------
-- Records of family
-- ----------------------------
BEGIN;
INSERT INTO `family` VALUES (1, 'fasfsaf', NULL, '', NULL, NULL, 1);
INSERT INTO `family` VALUES (2, '22222', NULL, NULL, NULL, NULL, 1);
INSERT INTO `family` VALUES (3, '3333', NULL, NULL, NULL, NULL, 2);
COMMIT;

-- ----------------------------
-- Table structure for group_user
-- ----------------------------
DROP TABLE IF EXISTS `group_user`;
CREATE TABLE `group_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of group_user
-- ----------------------------
BEGIN;
INSERT INTO `group_user` VALUES (1, 1, 1);
INSERT INTO `group_user` VALUES (2, 2, 2);
INSERT INTO `group_user` VALUES (3, 1, 2);
INSERT INTO `group_user` VALUES (4, 1, 4);
INSERT INTO `group_user` VALUES (5, 2, 3);
INSERT INTO `group_user` VALUES (6, 2, 1);
COMMIT;

-- ----------------------------
-- Table structure for groups
-- ----------------------------
DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `db_create_time` datetime NOT NULL,
  `db_update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of groups
-- ----------------------------
BEGIN;
INSERT INTO `groups` VALUES (1, 'default', '2019-05-28 11:50:03', '2019-05-28 11:50:03');
INSERT INTO `groups` VALUES (2, 'a', '2019-05-28 11:50:15', '2019-05-28 11:50:15');
INSERT INTO `groups` VALUES (3, 'b', '2019-05-28 11:55:26', '2019-05-28 11:55:29');
INSERT INTO `groups` VALUES (4, 'c', '2019-05-28 11:55:34', '2019-05-28 11:55:37');
COMMIT;

-- ----------------------------
-- Table structure for lesson
-- ----------------------------
DROP TABLE IF EXISTS `lesson`;
CREATE TABLE `lesson` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='课程';

-- ----------------------------
-- Records of lesson
-- ----------------------------
BEGIN;
INSERT INTO `lesson` VALUES (1, '高数', NULL, NULL);
INSERT INTO `lesson` VALUES (2, '地理', NULL, NULL);
INSERT INTO `lesson` VALUES (3, '政治', NULL, NULL);
INSERT INTO `lesson` VALUES (4, '历史', NULL, NULL);
INSERT INTO `lesson` VALUES (5, '语文', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='老师';

-- ----------------------------
-- Records of teacher
-- ----------------------------
BEGIN;
INSERT INTO `teacher` VALUES (1, 'zengwe', NULL, NULL);
INSERT INTO `teacher` VALUES (2, 'tom', NULL, NULL);
INSERT INTO `teacher` VALUES (3, 'edward', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for teacher_lesson_relation
-- ----------------------------
DROP TABLE IF EXISTS `teacher_lesson_relation`;
CREATE TABLE `teacher_lesson_relation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `lesson_id` int(10) unsigned NOT NULL,
  `teacher_id` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='课程和老师的关系';

-- ----------------------------
-- Records of teacher_lesson_relation
-- ----------------------------
BEGIN;
INSERT INTO `teacher_lesson_relation` VALUES (1, 1, 1, NULL, NULL);
INSERT INTO `teacher_lesson_relation` VALUES (2, 1, 2, NULL, NULL);
INSERT INTO `teacher_lesson_relation` VALUES (3, 2, 3, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, 'aaa', '2019-05-28 11:50:03', '2019-05-28 11:50:03');
INSERT INTO `user` VALUES (2, 'ccc', '2019-05-28 11:50:15', '2019-05-28 11:50:15');
INSERT INTO `user` VALUES (3, '1', '2019-05-28 11:58:48', '2019-05-28 11:58:51');
INSERT INTO `user` VALUES (4, '2', '2019-05-28 11:58:56', '2019-05-28 11:58:59');
INSERT INTO `user` VALUES (5, '3', '2019-05-28 11:59:03', '2019-05-28 11:59:07');
COMMIT;

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `age` tinyint(4) unsigned DEFAULT '0',
  `address` varchar(50) DEFAULT '',
  `user_id` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='用户表信息';

-- ----------------------------
-- Records of user_info
-- ----------------------------
BEGIN;
INSERT INTO `user_info` VALUES (1, 10, '', 1, NULL, NULL);
INSERT INTO `user_info` VALUES (2, 20, '', 2, NULL, NULL);
INSERT INTO `user_info` VALUES (3, 18, '', 3, NULL, NULL);
INSERT INTO `user_info` VALUES (4, 10, '', 4, NULL, NULL);
INSERT INTO `user_info` VALUES (5, 15, '', 5, NULL, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
