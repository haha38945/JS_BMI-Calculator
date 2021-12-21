//指定DOM元素
var myHeight = document.querySelector('.height');
var myWeight = document.querySelector('.weight');
var calculate = document.querySelector('.calculate'); //選取計算按鈕
var list = document.querySelector('.listBMI'); //選取內容以方便新增LI
// var reset = document.querySelector('.resetBtn'); //選取返回計算的按鈕
var openBMIStyle = document.querySelector('.resultBMI'); //打開BMI結果的按鈕
var data = JSON.parse(localStorage.getItem('myBMI')) || []; //沒有值的話就產生空陣列

//監聽事件
calculate.addEventListener('click',calculateBMI,false);
myHeight.addEventListener('blur',checkText1,false);
myWeight.addEventListener('blur',checkText2,false);
list.addEventListener('click',toggleDelete,false);
updateList(data);

//計算BMI並判斷體位
function calculateBMI(e){
    var myHeight = document.querySelector('.height').value;
    var myWeight = document.querySelector('.weight').value;
    var calBMI = myWeight/[(myHeight/100)*(myHeight/100)];
    var myBMI = Math.round(calBMI * 100)/100; //取BMI小數點至第二位
    console.log(typeof(myHeight));

    //判斷BMI體態
    //thin:過輕、middle:適中、fat:過重、littlefat:輕度肥胖、middlefat:中度肥胖、toofat:重度肥胖
    if(myBMI<18.5){
        let thin = '過輕';
        var addClassBMI = 'thin';
        var stateBMI = thin;
    }else if(18.5<=myBMI && myBMI<24){
        let middle = '適中';
        var addClassBMI = 'middle';
        var stateBMI = middle;
    }else if(24<=myBMI && myBMI<27){
        let fat = '過重';
        var addClassBMI = 'fat';
        var stateBMI = fat;
    }else if(27<=myBMI && myBMI<30){
        let littlefat = '輕度肥胖';
        var addClassBMI = 'littlefat';
        var stateBMI = littlefat;
    }else if(30<=myBMI && myBMI<35){
        let middlefat = '中度肥胖';
        var addClassBMI = 'middlefat';
        var stateBMI = middlefat;
    }else if(myBMI>=35){
        let toofat = '重度肥胖';
        var addClassBMI = 'toofat';
        var stateBMI = toofat;
    }

    //新增(儲存)資料至localStorage
    var dataBMI = {
        stateBMI: stateBMI,
        numberBMI: myBMI,
        classBMI: addClassBMI,
        Weight: myWeight,
        Height: myHeight
    }
    data.push(dataBMI);
    updateList(data);
    localStorage.setItem('myBMI', JSON.stringify(data));

    // 顯示BMI體態結果的圓圈圈
    let strBMI =
    '<span class="resultBMIStyle">'+myBMI+'</span><span class="state">'+stateBMI+'</span>BMI<input type="button" class="resetBtn">';
    openBMIStyle.innerHTML = strBMI;
    
    //新增各自BMI體態的Class
    openBMIStyle.classList.add(addClassBMI);
    document.querySelector('.state').classList.add(addClassBMI);

    //重新監聽resetBtn事件
    var reset = document.querySelector('.resetBtn'); //選取返回計算的按鈕
    reset.addEventListener('click',resetBtn,false);
    reset.classList.add(addClassBMI);

    //隱藏計算BMI的按鈕
    calculate.style.display = 'none';
    openBMIStyle.style.display = 'block';
}

//刪除BMI資料
function toggleDelete(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return};
    var index = e.target.dataset.index;
    data.splice(index,1);
    localStorage.setItem('myBMI', JSON.stringify(data));
    updateList(data);
}

//更新網頁內容(撈出資料+印上去)
function updateList(e){
    str='';
    var len = e.length
    for (let i=0;len>i;i++){
        str +=
        '<li class="'+data[i].classBMI+'"><span class="liTitle">'+data[i].stateBMI+'</span><div class="math-1"><span class="BMIStyle">BMI</span>'+data[i].numberBMI+'</div><div class="math-2"><span class="weightStyle">weight</span>'+data[i].Weight+'</div><div class="math-3"><span class="heightStyle">height</span>'+data[i].Height+'<a href="#" data-index="'+i+'">刪除</a></div></li>'
    }
    list.innerHTML = str;
}

//返回計算BMI的按鈕
function resetBtn(e){
    calculate.style.display = 'block';
    openBMIStyle.style.display = 'none';
    //將text欄位的數值歸零
    document.querySelector('.height').value = '';
    document.querySelector('.weight').value = '';
    //將class顏色歸零
    openBMIStyle.classList.remove('thin','middle','fat','littlefat','middlefat','toofat');
}

//確認欄位是否填寫空值或阿拉伯數字
function checkText1(e){
    let str = e.target.value;
    if(  str == ''){
        alert('請輸入阿拉伯數字!');
    }else if( isNaN(str)){
        alert('請輸入阿拉伯數字!');
    }
}
function checkText2(e){
    let str = e.target.value;
    if(  str == ''){
        alert('請輸入阿拉伯數字!');
    }else if( isNaN(str)){
        alert('請輸入阿拉伯數字!');
    }
}