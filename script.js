//初始化
let meniIsOn = true;
window.console.log(window.innerWidth);
if (window.innerWidth <= 600) {
  meniIsOn = false;
  document.getElementById("menu").style.display = "none";
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
  document.getElementById("menu").style.display = "block";
  document.getElementById("tr").style.backgroundColor = "#b3e5fc";
}

//米游社wiki按钮
function F0() {
  window.open(
    "https://bbs.mihoyo.com/ys/obc/?bbs_presentation_style=no_header&utm_source=bbs&utm_medium=mys&utm_campaign=pcbox"
  );
}

//隐藏菜单按钮
function F1() {
  meniIsOn = false;
  document.getElementById("menu").style.display = "none";
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
}

// 录入角色
function F4() {}

//录入武器
function F5() {}

// 录入圣遗物
function F6() {}

//初始界面控制菜单栏
function menuctl() {
  if (meniIsOn === false) {
    meniIsOn = true;
    document.getElementById("menu").style.display = "block";
  } else if (window.innerWidth <= 600) {
    meniIsOn = false;
    document.getElementById("menu").style.display = "none";
  }
}

// 阿晴悬浮球
let downtime = 0;
let AqingDown = false;
let setPosTime = 0;
let mousepos = {
  x: 0,
  y: 0,
};
let AqingOffset = {
  x: 0,
  y: 0,
};

const BG = document.getElementById("bg");
const AQ = document.getElementById("Aqing");

BG.onmousemove = function (event) {
  // event = event || window.event;
  if (AqingDown && Date.now() >= downtime + 500) {
    mousepos.x = event.clientX;
    mousepos.y = event.clientY;
    // window.console.log("mousepos = " + mousepos.x + "," + mousepos.y);
    AQ.style.left = mousepos.x - AqingOffset.x + "px";
    AQ.style.top = mousepos.y - AqingOffset.y + "px";
  }
  AQ.onmousemove = function () {
    if (AqingDown) {
      AQ.style.scale = 1;
    } else {
      AQ.style.scale = 1.1;
    }
  };
  AQ.onmouseout = function () {
    AQ.style.scale = 1;
  };
  AQ.onmousedown = function () {
    AqingDown = true;
    downtime = Date.now();
    AqingOffset.x = event.clientX - AQ.offsetLeft;
    AqingOffset.y = event.clientY - AQ.offsetTop;
    AQ.style.scale = 1;
  };
  AQ.onmouseup = function () {
    AQ.style.scale = 1.1;
    if (AqingDown && Date.now() < downtime + 500) {
      window.console.log(1);
      AqingClick();
    }
    AqingDown = false;
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
