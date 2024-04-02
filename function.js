// 函数方法定义

//隐藏菜单
function menuHide() {
  menuIsOn = false;
  menuground.style.display = "none";
  menuhide.style.display = "none";
  window.console.log("menuHide()");
}
// 显示菜单
function menuShow() {
  menuIsOn = true;
  if (window.innerWidth < 1080) {
    menuground.style.display = "block";
  } else {
    menuground.style.display = "block";
    menuhide.style.display = "block";
  }
  window.console.log("menuShow()");
}
