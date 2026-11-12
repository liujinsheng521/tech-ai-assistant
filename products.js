/* ============================================================
 * 初始货品清单（独立管理，页面只读此文件展示默认货品）
 *
 * ★ 新增货品三步：
 *   1. 把图片放入 images/ 目录（建议命名 img_序号.jpg）
 *   2. 在下面数组末尾加一行：
 *      { "id": "img_28", "src": "images/img_28.jpg", "name": "商品名", "price": 积分 }
 *   3. git 提交推送即可，线上自动出现；价格 = 截图标价(元) × 2，四舍五入取整
 *
 * ★ 说明：
 *   - price 为积分价（2 积分 = 1 元），会作为所有访客的默认价
 *   - 页面上手动改价/标售出只存在访客自己浏览器的 localStorage，不影响此清单
 * ============================================================ */
window.BUILTIN_PRODUCTS = [
  { "id": "img_01", "src": "images/img_01.jpg", "name": "货品 1", "price": 18 },
  { "id": "img_02", "src": "images/img_02.jpg", "name": "货品 2", "price": 6 },
  { "id": "img_03", "src": "images/img_03.jpg", "name": "货品 3", "price": 14 },
  { "id": "img_04", "src": "images/img_04.jpg", "name": "货品 4", "price": 27 },
  { "id": "img_05", "src": "images/img_05.jpg", "name": "货品 5", "price": 3 },
  { "id": "img_06", "src": "images/img_06.jpg", "name": "货品 6", "price": 28 },
  { "id": "img_07", "src": "images/img_07.jpg", "name": "货品 7", "price": 50 },
  { "id": "img_08", "src": "images/img_08.jpg", "name": "货品 8", "price": 141 },
  { "id": "img_09", "src": "images/img_09.jpg", "name": "货品 9", "price": 27 },
  { "id": "img_10", "src": "images/img_10.jpg", "name": "货品 10", "price": 20 },
  { "id": "img_11", "src": "images/img_11.jpg", "name": "货品 11", "price": 4 },
  { "id": "img_12", "src": "images/img_12.jpg", "name": "货品 12", "price": 54 },
  { "id": "img_13", "src": "images/img_13.jpg", "name": "货品 13", "price": 12 },
  { "id": "img_14", "src": "images/img_14.jpg", "name": "货品 14", "price": 3 },
  { "id": "img_15", "src": "images/img_15.jpg", "name": "货品 15", "price": 2 },
  { "id": "img_16", "src": "images/img_16.jpg", "name": "货品 16", "price": 9 },
  { "id": "img_17", "src": "images/img_17.jpg", "name": "货品 17", "price": 41 },
  { "id": "img_18", "src": "images/img_18.jpg", "name": "货品 18", "price": 3 },
  { "id": "img_19", "src": "images/img_19.jpg", "name": "货品 19", "price": 7 },
  { "id": "img_20", "src": "images/img_20.jpg", "name": "货品 20", "price": 5 },
  { "id": "img_21", "src": "images/img_21.jpg", "name": "货品 21", "price": 26 },
  { "id": "img_22", "src": "images/img_22.jpg", "name": "货品 22", "price": 20 },
  { "id": "img_23", "src": "images/img_23.jpg", "name": "诺希荣耀X10/V9/8保护套（尼克朱迪旋转款）", "price": 62 },
  { "id": "img_24", "src": "images/img_24.jpg", "name": "Hello Kitty 荣耀平板保护套（蚕丝纹全包）", "price": 45 },
  { "id": "img_25", "src": "images/img_25.jpg", "name": "联想异能者荣耀平板保护套（360°旋转带笔槽）", "price": 58 },
  { "id": "img_26", "src": "images/img_26.jpg", "name": "新三丽鸥荣耀V9平板保护套（蚕丝纹支架）", "price": 42 },
  { "id": "img_27", "src": "images/img_27.jpg", "name": "凯蒂猫荣耀V9平板保护套（书本版）", "price": 54 },
  { "id": "img_28", "src": "images/img_28.jpg", "name": "迷你iPhone手工材料包（桌面课间玩具）", "price": 17 },
  { "id": "img_29", "src": "images/img_29.jpg", "name": "正版叶罗丽迷你宝石盒子盲盒套装", "price": 44 },
  { "id": "img_30", "src": "images/img_30.jpg", "name": "三丽鸥录音电子架子鼓钥匙扣", "price": 11 },
  { "id": "img_31", "src": "images/img_31.jpg", "name": "娃屋迷你文具盒模型（微缩食玩配件）", "price": 8 },
  { "id": "img_32", "src": "images/img_32.jpg", "name": "Inamazy泡泡书图鉴双层收纳手工拼贴", "price": 26 }
];
