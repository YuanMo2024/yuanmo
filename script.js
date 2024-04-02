//元素
// 菜单
const menuground = document.getElementById("menuground");
const menuhide = document.getElementById("menuhide");
// 标题栏
const trButton = document.getElementById("trButton");

// 状态变量
let menuIsOn = true;

// 计数变量
let test = 24.5;

//初始化
if (window.innerWidth <= 600) {
  menuHide();
}

//功能实现

// 右上角tr按钮
trButton.onclick = function () {
  if (menuIsOn) {
    menuHide();
  } else {
    menuShow();
  }
  window.console.log("trButton is onclick");
};