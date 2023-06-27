/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50731
Source Host           : localhost:3306
Source Database       : shixun

Target Server Type    : MYSQL
Target Server Version : 50731
File Encoding         : 65001

Date: 2023-05-21 18:38:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `history`
-- ----------------------------
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history` (
  `ds` year(4) NOT NULL COMMENT '年份',
  `lineOneData` float DEFAULT NULL COMMENT '养老保险',
  `lineThreeData` float DEFAULT NULL COMMENT '人口老龄化',
  `lineTwoData` int(11) DEFAULT NULL COMMENT '全国人口数量',
  PRIMARY KEY (`ds`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of history
-- ----------------------------
INSERT INTO `history` VALUES ('2013', '34.9', '9.7', '136072');
INSERT INTO `history` VALUES ('2014', '41.1', '10.1', '136782');
INSERT INTO `history` VALUES ('2015', '48.1', '10.5', '137462');
INSERT INTO `history` VALUES ('2016', '55.6', '10.8', '132871');
INSERT INTO `history` VALUES ('2017', '62.6', '11.4', '139008');
INSERT INTO `history` VALUES ('2018', '68.8', '11.9', '139538');
INSERT INTO `history` VALUES ('2019', '74.4', '12.6', '140005');
INSERT INTO `history` VALUES ('2020', '79.5', '13.1', '141212');
INSERT INTO `history` VALUES ('2021', '80.1', '14.2', '141260');
INSERT INTO `history` VALUES ('2022', '85.9', '14.9', '149535');

-- ----------------------------
-- Table structure for `labor`
-- ----------------------------
DROP TABLE IF EXISTS `labor`;
CREATE TABLE `labor` (
  `year` year(4) NOT NULL COMMENT '年份',
  `barData1` float DEFAULT NULL COMMENT '人均消费',
  `barData2` int(11) DEFAULT NULL COMMENT '就业人数',
  `barData3` float DEFAULT NULL COMMENT '投资',
  PRIMARY KEY (`year`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of labor
-- ----------------------------
INSERT INTO `labor` VALUES ('2013', '13320.4', '76301', '47.8');
INSERT INTO `labor` VALUES ('2014', '14491.4', '76349', '47.7');
INSERT INTO `labor` VALUES ('2015', '15712.4', '76320', '46.2');
INSERT INTO `labor` VALUES ('2016', '17110.7', '76245', '45.8');
INSERT INTO `labor` VALUES ('2017', '18322.1', '76058', '45.8');
INSERT INTO `labor` VALUES ('2018', '19853.1', '75782', '45.9');
INSERT INTO `labor` VALUES ('2019', '21558.9', '75447', '43.4');
INSERT INTO `labor` VALUES ('2020', '21209.9', '75064', '43.4');
INSERT INTO `labor` VALUES ('2021', '24100.1', '74652', '44.1');
INSERT INTO `labor` VALUES ('2022', '24538', '73351', '43.1');

-- ----------------------------
-- Table structure for `map`
-- ----------------------------
DROP TABLE IF EXISTS `map`;
CREATE TABLE `map` (
  `province` varchar(50) DEFAULT NULL COMMENT '省份',
  `num` float DEFAULT NULL COMMENT '人口',
  `mnum` float DEFAULT NULL COMMENT '男性',
  `wnum` float DEFAULT NULL COMMENT '女性'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of map
-- ----------------------------
INSERT INTO `map` VALUES ('北京', '2170.07', '1123.38', '1046.6');
INSERT INTO `map` VALUES ('天津', '1557.92', '812.87', '745.05');
INSERT INTO `map` VALUES ('河北', '7554.87', '3908.97', '3645.9');
INSERT INTO `map` VALUES ('山西', '3718.39', '1915.84', '1802.55');
INSERT INTO `map` VALUES ('内蒙古', '2529.44', '1282.37', '1247.07');
INSERT INTO `map` VALUES ('辽宁', '4359.29', '2245.99', '2113.3');
INSERT INTO `map` VALUES ('吉林', '2704.53', '1384.05', '1320.48');
INSERT INTO `map` VALUES ('黑龙江', '3773.73', '1933.05', '1840.68');
INSERT INTO `map` VALUES ('上海', '2423.78', '1252.97', '1170.81');
INSERT INTO `map` VALUES ('江苏', '8311.46', '4263.51', '4047.95');
INSERT INTO `map` VALUES ('浙江', '5737.37', '2942.54', '2794.83');
INSERT INTO `map` VALUES ('安徽', '6323.15', '3224.86', '3098.29');
INSERT INTO `map` VALUES ('福建', '3941.67', '2019.7', '1921.97');
INSERT INTO `map` VALUES ('江西', '4648.98', '2375.21', '2273.77');
INSERT INTO `map` VALUES ('山东', '10000', '5142.31', '4857.69');
INSERT INTO `map` VALUES ('河南', '9946.17', '5119.26', '4826.91');
INSERT INTO `map` VALUES ('广东', '12100', '6211.56', '5870.05');
INSERT INTO `map` VALUES ('广西', '4951.59', '2521.05', '2430.54');
INSERT INTO `map` VALUES ('海南', '1008.86', '530.77', '478.09');
INSERT INTO `map` VALUES ('重庆', '3102.3', '1592.42', '1509.88');
INSERT INTO `map` VALUES ('四川', '8341.51', '4269.13', '4072.38');
INSERT INTO `map` VALUES ('贵州', '3600.17', '1839.59', '1760.58');
INSERT INTO `map` VALUES ('云南', '4830.15', '2462.62', '2367.53');
INSERT INTO `map` VALUES ('西藏', '360.72', '184.52', '176.2');
INSERT INTO `map` VALUES ('陕西', '3864.18', '1988.79', '1875.39');
INSERT INTO `map` VALUES ('甘肃', '2637.08', '1354.91', '1282.17');
INSERT INTO `map` VALUES ('青海', '603.97', '314.84', '289.13');
INSERT INTO `map` VALUES ('宁夏', '685.54', '355.16', '330.38');
INSERT INTO `map` VALUES ('新疆', '2534.13', '1303.61', '1230.52');

-- ----------------------------
-- Table structure for `ratio`
-- ----------------------------
DROP TABLE IF EXISTS `ratio`;
CREATE TABLE `ratio` (
  `num` int(11) DEFAULT NULL COMMENT '人数',
  `town` varchar(50) DEFAULT NULL COMMENT '城镇',
  `snum` int(11) DEFAULT NULL COMMENT '男女人数',
  `sexy` varchar(50) DEFAULT NULL COMMENT '男女'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ratio
-- ----------------------------
INSERT INTO `ratio` VALUES ('920710000', '城镇人口', '722060000', '男性人数');
INSERT INTO `ratio` VALUES ('491040000', '乡村人口', '689690000', '女性人数');
