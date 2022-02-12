# MaskMap-口罩地圖
六角學院-JavaScript-入門篇-學徒的試煉--Leaflet地圖應用  

## 網頁呈現
https://haha38945.github.io/Side-Project/Leaflet%20API%20_%20Find%20a%20Mask/

**使用技術包括**
  * HTML/CSS
  * SCSS
  * JavaScript (AJAX串接API)
  * Leaflet(地圖框架) + MarkerClusterGroup(Leaflet插件)  

## 內容說明
依據設計稿製作口罩地圖，練習使用AJAX獲取藥局資料，並透過Leaflet、MarkerClusterGroup建構地圖，使用JavaScript搭配地圖做到各縣市及各區的藥局資料切換和簡單的搜索和定位功能。

  頁面功能包括：
* RWD響應式網頁
* 通過AJAX串接API即時取得藥局口罩剩餘量數量
* 地圖上的markers透過MarkerClusterGroup插件進行聚合，減少系統負荷
* 根據口罩是否有剩，會有不同的markers顏色
* 點擊側邊欄位藥局名稱會顯示地圖所在位置
    
## 聲明
根據THE F2E 2nd -第十關中 [pipisun的設計稿](https://challenge.thef2e.com/user/3471?schedule=4467#works-4467) 進行製作  
[藥局資料來源](https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json)  
[台灣城市區域資料來源](https://gist.github.com/vinta/079cb8d4da486f471365c31388ed1b85)  
