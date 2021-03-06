# 我的餐廳清單
運用node.js和express進行開發，並連接Mongodb進行CRUD功能，並符合RESTful設計。
並使用passport.js登入系統，與bcryptjs處理使用者在註冊時輸入的密碼。
express-session截取cookie資訊、生成session並把session資訊存放在伺服器端。

## Features
1. 使用者可以建立自己的帳號
2. 使用者可以使用自己的Facebook帳號登入
3. 使用者可以瀏覽全部所有餐廳
4. 使用者可以點擊任一餐廳，查看詳細資訊
5. 使用者可以搜尋餐廳名字
6. 使用者可以新增一家餐廳
7. 使用者可以刪除一家餐廳
8. 使用者可以修改一家餐廳的資訊
9. 使用者可依評分、名字、類別、地區執行排序

## 安裝環境

+ Node.js v10.15.3
+ Express ^4.17.1
+ Express-handlebars ^3.1.0
+ mongoose ^5.6.11
+ method-override ^3.0.0
+ bcryptjs ^2.4.3
+ connect-flash ^0.1.1
+ dotenv ^8.1.0
+ express-session ^1.16.2
+ method-override ^3.0.0
+ passport ^0.4.0
+ passport-facebook ^3.0.0
+ passport-local ^1.0.0

## 安裝步驟
1. 依照git clone下載資料夾
```
$ git clone https://github.com/KerwinJhong/S4_A13_Restaurant.git
```
2. 從終端機安裝npm套件，輸入以下指令
```
$ npm install
```
3. 開啟本地 MongoDB 資料庫
```
$ npm run dev
```
4. 建立預設餐廳資料
```
$ [~/S4_A13_Restaurant/models/seeds] node RestaurantSeeder.js
```
5. 執行專案
```
$ [~/S4_A13_Restaurant] npm run dev
```
6. 輸入網址並呈現我的餐廳清單介面
```
http://localhost:3000
```

## 專案內容
+ 餐廳所有清單
![image](https://github.com/KerwinJhong/S4_A13_Restaurant/blob/master/restaurant.png)

## 預設使用者資訊
```
user1：
email: user1@example.com
password: 12345678

user2：
email: user2@example.com
password: 12345678
```

## 作者
[Kerwin Jhong](https://github.com/KerwinJhong)

