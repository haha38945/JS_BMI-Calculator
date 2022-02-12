area_data = {
    '臺北市': [
        '中正區', '大同區', '中山區', '萬華區', '信義區', '松山區', '大安區', '南港區', '北投區', '內湖區', '士林區', '文山區'
    ],
    '新北市': [
        '板橋區', '新莊區', '泰山區', '林口區', '淡水區', '金山區', '八里區', '石門區', '三芝區', '瑞芳區', '汐止區', '深坑區', '石碇區', '新店區', '中和區', '永和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '蘆洲區', '五股區'
    ],
    '基隆市': [
        '仁愛區', '中正區', '信義區', '中山區', '安樂區', '暖暖區', '七堵區'
    ],
    '桃園市': [
        '桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '龜山區', '龍潭區', '大溪區', '大園區', '觀音區', '新屋區'
    ],
    '新竹縣': [
        '竹北市', '竹東鎮', '新埔鎮', '關西鎮', '寶山鄉', '芎林鄉', '湖口鄉', '新豐鄉'
    ],
    '新竹市': [
        '東區', '北區', '香山區'
    ],
    '苗栗縣': [
        '苗栗市', '通霄鎮', '苑裡鎮', '竹南鎮', '後龍鎮', '卓蘭鎮', '西湖鄉', '頭屋鄉', '公館鄉', '三義鄉', '大湖鄉'
    ],
    '臺中市': [
        '中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '東勢區', '石岡區', '新社區', '和平區', '神岡區', '潭子區', '大雅區', '大肚區', '龍井區', '沙鹿區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'
    ],
    '南投縣': [
        '南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '魚池鄉', '國姓鄉', '水里鄉', '仁愛鄉'
    ],
    '彰化縣': [
        '彰化市', '和美鎮', '鹿港鎮', '溪湖鎮', '二林鎮', '田中鎮', '北斗鎮', '花壇鄉', '芬園鄉', '大村鄉', '永靖鄉', '伸港鄉', '線西鄉', '福興鄉', '秀水鄉', '埔心鄉', '埔鹽鄉', '竹塘鄉', '社頭鄉', '田尾鄉', '埤頭鄉', '溪州鄉'
    ],
    '雲林縣': [
        '斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '莿桐鄉', '林內鄉', '古坑鄉', '大埤鄉', '崙背鄉', '麥寮鄉', '臺西鄉', '東勢鄉', '褒忠鄉', '四湖鄉', '口湖鄉', '水林鄉', '元長鄉'
    ],
    '嘉義縣': [
        '太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉'
    ],
    '嘉義市': [
        '東區', '西區'
    ],
    '臺南市': [
        '中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '仁德區', '關廟區', '官田區', '麻豆區', '佳里區', '西港區', '將軍區', '學甲區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'
    ],
    '高雄市': [
        '楠梓區', '左營區', '鼓山區', '三民區', '鹽埕區', '前金區', '新興區', '苓雅區', '前鎮區', '小港區', '旗津區', '鳳山區', '大寮區', '鳥松區', '林園區', '仁武區', '大樹區', '大社區', '岡山區', '路竹區', '橋頭區', '梓官區', '彌陀區', '燕巢區', '阿蓮區', '茄萣區', '湖內區', '旗山區', '美濃區', '內門區', '甲仙區', '六龜區'
    ],
    '屏東縣': [
        '屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '琉球鄉', '車城鄉', '春日鄉'
    ],
    '宜蘭縣': [
        '宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'
    ],
    '花蓮縣': [
        '花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '光復鄉', '豐濱鄉', '瑞穗鄉'
    ],
    '臺東縣': [
        '臺東市', '成功鎮', '關山鎮','鹿野鄉', '太麻里鄉'
    ],
    '澎湖縣': [
        '馬公市', '湖西鄉', '西嶼鄉'
    ],
    '金門縣': [
        '金城鎮', '金湖鎮', '金沙鎮'
    ],
    '連江縣': [
        '南竿鄉'
    ]
}

//全域變數
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();
var day = today.getDay();
var city = document.querySelector('.city').value;
var town = document.querySelector('.area').value;

// 新增該縣市的行政區域
function addTown(){
    let newTown = document.querySelector('.area');
    let len = area_data;
    let townStr = '';

    if (city == '臺北市'){
        for(var i=0; len.臺北市.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.臺北市[i]+'" >'+area_data.臺北市[i]+'</option>'
        }
    }else if(city =='新北市'){
        for(var i=0; len.新北市.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.新北市[i]+'" >'+area_data.新北市[i]+'</option>';    
        }
    }else if(city =='基隆市'){
        for(var i=0; len.基隆市.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.基隆市[i]+'" >'+area_data.基隆市[i]+'</option>';    
        }
    }else if(city =='桃園市'){
        for(var i=0; len.桃園市.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.桃園市[i]+'" >'+area_data.桃園市[i]+'</option>';    
        }
    }else if(city =='臺中市'){
        for(var i=0; len.臺中市.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.臺中市[i]+'" >'+area_data.臺中市[i]+'</option>';    
        }
    }else if(city =='高雄市'){
        for(var i=0; len.高雄市.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.高雄市[i]+'" >'+area_data.高雄市[i]+'</option>';
        }
    }else if(city =='新竹市'){
        for(var i=0; len.新竹市.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.新竹市[i]+'" >'+area_data.新竹市[i]+'</option>';    
        }
    }else if(city =='新竹縣'){
        for(var i=0; len.新竹縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.新竹縣[i]+'" >'+area_data.新竹縣[i]+'</option>';    
        }
    }else if(city =='苗栗縣'){
        for(var i=0; len.苗栗縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.苗栗縣[i]+'" >'+area_data.苗栗縣[i]+'</option>';    
        }
    }else if(city =='彰化縣'){
        for(var i=0; len.彰化縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.彰化縣[i]+'" >'+area_data.彰化縣[i]+'</option>';    
        }
    }else if(city =='南投縣'){
        for(var i=0; len.南投縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.南投縣[i]+'" >'+area_data.南投縣[i]+'</option>';    
        }
    }else if(city =='雲林縣'){
        for(var i=0; len.雲林縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.雲林縣[i]+'" >'+area_data.雲林縣[i]+'</option>';    
        }
    }else if(city =='嘉義市'){
        for(var i=0; len.嘉義市.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.嘉義市[i]+'" >'+area_data.嘉義市[i]+'</option>';    
        }
    }else if(city =='嘉義縣'){
        for(var i=0; len.嘉義縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.嘉義縣[i]+'" >'+area_data.嘉義縣[i]+'</option>';    
        }
    }else if(city =='臺南市'){
        for(var i=0; len.臺南市.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.臺南市[i]+'" >'+area_data.臺南市[i]+'</option>';    
        }
    }else if(city =='屏東縣'){
        for(var i=0; len.屏東縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.屏東縣[i]+'" >'+area_data.屏東縣[i]+'</option>';    
        }
    }else if(city =='臺東縣'){
        for(var i=0; len.臺東縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.臺東縣[i]+'" >'+area_data.臺東縣[i]+'</option>';    
        }
    }else if(city =='花蓮縣'){
        for(var i=0; len.花蓮縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.花蓮縣[i]+'" >'+area_data.花蓮縣[i]+'</option>';    
        }
    }else if(city =='宜蘭縣'){
        for(var i=0; len.宜蘭縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.宜蘭縣[i]+'" >'+area_data.宜蘭縣[i]+'</option>';    
        }
    }else if(city =='澎湖縣'){
        for(var i=0; len.澎湖縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.澎湖縣[i]+'" >'+area_data.澎湖縣[i]+'</option>';    
        }
    }else if(city =='金門縣'){
        for(var i=0; len.金門縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.金門縣[i]+'" >'+area_data.金門縣[i]+'</option>';    
        }
    }else if(city =='連江縣'){
        for(var i=0; len.連江縣.length>i; i++ ){
            townStr += 
            '<option value="'+area_data.連江縣[i]+'" >'+area_data.連江縣[i]+'</option>';    
        }
    }
    document.querySelector('.area').innerHTML = townStr;
}

// 呼叫基本函式
function init(){
    getDay(); //取得時間
    getData(); //取得各資料
    addTown(); //取得行政區域
}
init();

//取得現在時間
function getDay(){
    document.querySelector('.today').textContent = year+'-'+(month+1)+'-'+date;

    if (day==1){
        day = '一';
    }else if (day==2){
        day = '二';
    }else if (day==3){
        day = '三';
    }else if (day==4){
        day = '四';
    }else if (day==5){
        day = '五';
    }else if (day==6){
        day = '六';
    }else if (day==7){
        day = '日';
    }
    document.querySelector('.day').textContent = '星期'+day;
}

//將取得的JSON資料賦予到全域變數上
var data = [];
function getData(){
    var xhr = new XMLHttpRequest();
    xhr.open('get','https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json');
    xhr.send(null);

    //當資料回傳後建立有口罩的診所圖針
    xhr.onload = function(){
        data = JSON.parse(xhr.responseText);
        var markers = new L.MarkerClusterGroup().addTo(map);;
        let ary = data.features;
        for(let i=0; ary.length>i ; i++){
            markers.addLayer(L.marker([ary[i].geometry.coordinates[1],ary[i].geometry.coordinates[0]],
                (ary[i].properties.mask_adult == 0 && ary[i].properties.mask_child == 0) ? { icon: greyIcon, title: ary[i].properties.id } :
                (ary[i].properties.mask_adult != 0 && ary[i].properties.mask_child != 0) ? { icon: greenIcon, title: ary[i].properties.id } :
                (ary[i].properties.mask_adult !== 0 && ary[i].properties.mask_child == 0) ? { icon: blueIcon, title: ary[i].properties.id } : 
                { icon: redIcon, title: ary[i].properties.id }).bindPopup
                    ('<div class="content" data-id="'+ary[i].properties.id+'"><div class="drugstore"><p>'+ary[i].properties.name+'</p></div><div class="numbrOfMask"><div class="adult"><p class="adult_mask">成人口罩<br><br>剩餘<span class="adult_mask quantity">'+ary[i].properties.mask_adult+'</span>個</p></div><div class="child"><p class="child_mask">兒童口罩<br><br>剩餘<span class="child_mask quantity">'+ary[i].properties.mask_child+'</span>個</p></div></div><div class="detail"><p class="adress">地址：'+ary[i].properties.address+'</p><p class="phone">電話：'+ary[i].properties.phone+'</p></div></div>'))
          }
        map.addLayer(markers);
        updateContent('臺北市');
    }
}

//確認有抓到JSON資料後才會將內容放進HTML裡
function updateContent(city){
    let ary = data.features;
    let str = '';

    //判斷城市
    for(var i=0; ary.length>i ; i++){
        if (ary[i].properties.county == city && ary[i].properties.town == town || ary[i].properties.cunli == town){
            str +=
            '<div class="content"><div class="drugstore"><a href="#" data-id="'+ary[i].properties.id+'" data-lat="'+ary[i].geometry.coordinates[1]+'" data-long="'+ary[i].geometry.coordinates[0]+'">'+ary[i].properties.name+'</a></div><div class="numbrOfMask"><div class="adult"><p class="adult_mask">成人口罩<br><br>剩餘<span class="adult_mask quantity">'+ary[i].properties.mask_adult+'</span>個</p></div><div class="child"><p class="child_mask">兒童口罩<br><br>剩餘<span class="child_mask quantity">'+ary[i].properties.mask_child+'</span>個</p></div></div><div class="detail"><p class="adress">地址：'+ary[i].properties.address+'</p><p class="phone">電話：'+ary[i].properties.phone+'</p><p class="note">備註：'+ary[i].properties.note+'</p></div></div>'
        }   
    }
    document.querySelector('.content-bk').innerHTML = str;

    //抓第一筆資料經緯度用
    var firstStore = document.querySelector('.content>.drugstore>a');
    firstStore.setAttribute("class","num1");

    //計算有幾個藥局有賣口罩
    let count = document.querySelector('.content-bk').children.length;
    let storeNumber = '';
    document.querySelector('.showNumber').innerHTML = '<p>這個區域有<span class="storeNumber">'+count+'</span>家藥局</p>'
    
    //判斷備註是否有內容，若無則不顯示資訊
    var checkNote = document.querySelectorAll('.note')
    var noteTotal = checkNote.length;
    for(i=0 ; i<noteTotal ; i++){
        if(checkNote[i].innerText == '備註：-'){
            checkNote[i].hidden = 'true';
        }
    }
}

//監聽：切換城市
document.querySelector('.city').addEventListener('change',changeCity);
function changeCity(e){
    city = e.target.value;
    addTown(); //新增該縣市的行政區域
    town = document.querySelector('.area').value; //重新代入該縣市的行政區域的預設值
    updateContent(city); //重新渲染畫面

    //重新渲染地圖畫面
    let firstLatLong = document.querySelector('.num1').dataset;
    let lat = firstLatLong.lat;
    let long = firstLatLong.long;
    map.setView([lat, long], 16);
}

//監聽：切換行政區域
document.querySelector('.area').addEventListener('change',changeArea);
function changeArea(e){
    town = e.target.value;
    updateContent(city); //重新渲染畫面

    //重新渲染地圖畫面
    let firstLatLong = document.querySelector('.num1').dataset;
    let lat = firstLatLong.lat;
    let long = firstLatLong.long;
    map.setView([lat, long], 16);
}

//監聽：側邊欄點擊診所名稱，右邊地圖也顯示相對應位置
document.querySelector('.content-bk').addEventListener('click',showMapArea);
function showMapArea(e){
    if(e.target.nodeName == 'A'){
        let supplierItem = e.target.dataset.id;
        let lat = e.target.dataset.lat;
        let long = e.target.dataset.long;
        //讓地圖位置顯示在所點擊診所上方
        map.setView([lat, long], 18);

        //打開地圖上診所的資訊內容
        let markersPane = document.querySelectorAll('div.leaflet-marker-pane')[0];
        let markersGenerated = markersPane.querySelectorAll('img.leaflet-marker-icon');

        for (let i = 0; i < markersGenerated.length; i++) {
            if (supplierItem == markersGenerated[i].title) markersGenerated[i].click();
        }
    }
    e.preventDefault();
}

//設置地圖
var map = L.map('map', {
    center: [25.046891,121.516602],
    zoom: 16
});

//要用誰的圖資
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//各種顏色模板的圖針
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
var greyIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });