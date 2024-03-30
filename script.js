//初始化
let meniIsOn = true;
window.console.log(window.innerWidth);
const menu = document.getElementById("menu");
const BG = document.getElementById("bg");
const AQ = document.getElementById("Aqing");
if (window.innerWidth <= 600) {
  meniIsOn = false;
  menu.style.display = "none";
}
if (menu.style.display === "none") {
  AQ.style.display = "block";
}

// 阿晴悬浮球
let downtime = 0;
let AqingDown = false;
let AqingDrag = false;
let AqingMovein = false;
let isMobile = false;
let setPosTime = 0;
let longdown = null;
let mousepos = {
  x: 0,
  y: 0,
};
let AqingOffset = {
  x: 0,
  y: 0,
};

BG.onmousemove = function (event) {
  event = event || window.event;
  if (AqingDrag) {
    mousepos.x = event.clientX;
    mousepos.y = event.clientY;
    // window.console.log("mousepos = " + mousepos.x + "," + mousepos.y);
    AQ.style.left = mousepos.x - AqingOffset.x + "px";
    AQ.style.top = mousepos.y - AqingOffset.y + "px";
  }
  AQ.onmousemove = function () {
    if (AqingDown) {
      AQ.style.scale = 0.9;
    } else {
      AQ.style.scale = 1.1;
    }
  };
  AQ.onmouseout = function () {
    AQ.style.scale = 1;
    if (AqingDown) {
      clearTimeout(longdown);
    }
    if (!AqingDrag && AqingDown) {
      AqingDown = false;
      window.console.log(AqingDown);
    }
  };
  AQ.onmousedown = function () {
    AqingDown = true;
    window.console.log(AqingDown);
    downtime = Date.now();
    longdown = setTimeout(function () {
      if (AqingDown) {
        AqingDrag = true;
        window.console.log("长按");
      }
    }, 800);
    AqingOffset.x = event.clientX - AQ.offsetLeft;
    AqingOffset.y = event.clientY - AQ.offsetTop;
    AQ.style.scale = 0.9;
  };
  AQ.onmouseup = function () {
    AQ.style.scale = 1;
    if (AqingDrag) {
      AqingDrag = false;
    } else if (AqingDown) {
      window.console.log(countYou);
      AqingClick();
    }
    AqingDown = false;
    clearTimeout(longdown);
  };
};
function AqingClick() {
  document.getElementById("star").style.display = "none";
  countYou++;
  divYouxuan =
    '<div id="divAqing' +
    countYou +
    '" class="neirong shedow">阿晴头像菜单测试' +
    countYou +
    "</div>";
  document.getElementById("zhuti").insertAdjacentHTML("beforeend", divYouxuan);
}

//按钮高亮
function Lighton(Id) {
  document.getElementById(Id).style.backgroundColor = "#81d4fa";
}
function Lightoff(Id) {
  document.getElementById(Id).style.backgroundColor = "#b3e5fc";
}

// tr右区按钮
function showmenu() {
  meniIsOn = true;
  menu.style.display = "block";
  AQ.style.display = "none";
  document.getElementById("tr").style.backgroundColor = "#b3e5fc";
}

//米游社wiki按钮
function F0() {
  window.open(
    "https://bbs.mihoyo.com/ys/obc/?bbs_presentation_style=no_header&utm_source=bbs&utm_medium=mys&utm_campaign=pcbox"
  );
  document.getElementById("menu0").style.backgroundColor = "#b3e5fc";
}

//隐藏菜单按钮
function F1() {
  meniIsOn = false;
  menu.style.display = "none";
  AQ.style.display = "block";
  document.getElementById("menu1").style.backgroundColor = "#b3e5fc";
}

//优选方案模板div，模板创建计数countYou
let countYou = 0;
let divYouxuan = "";

//添加优选方案按钮
function F2() {
  document.getElementById("star").style.display = "none";
  countYou++;
  divYouxuan =
    '<div id="divYou' +
    countYou +
    '" class="neirong shedow">优' +
    countYou +
    "</div>";
  window.console.log(countYou);
  document.getElementById("zhuti").insertAdjacentHTML("beforeend", divYouxuan);
  document.getElementById("menu2").style.backgroundColor = "#b3e5fc";
}

//自选方案模板div，模板创建计数countYou
let countZi = 0;
let divZixuan = "";

// 添加自选方案按钮
function F3() {
  document.getElementById("star").style.display = "none";
  countZi++;
  divZixuan =
    '<div id="divYou' +
    countZi +
    '" class="neirong shedow">自' +
    countZi +
    "</div>";
  window.console.log(countZi);
  document.getElementById("zhuti").insertAdjacentHTML("beforeend", divZixuan);
  document.getElementById("menu3").style.backgroundColor = "#b3e5fc";
}

// 录入角色
function F4() {
  document.getElementById("menu4").style.backgroundColor = "#b3e5fc";
}

//录入武器
function F5() {
  document.getElementById("menu5").style.backgroundColor = "#b3e5fc";
}

// 录入圣遗物
function F6() {
  document.getElementById("menu6").style.backgroundColor = "#b3e5fc";
}

// 页面设置
function F7() {
  document.getElementById("menu7").style.backgroundColor = "#b3e5fc";
}

//初始界面控制菜单栏
function menuctl() {
  if (meniIsOn === false) {
    meniIsOn = true;
    menu.style.display = "block";
    AQ.style.display = "none";
  } else if (window.innerWidth <= 600) {
    meniIsOn = false;
    menu.style.display = "none";
    AQ.style.display = "block";
  }
}
