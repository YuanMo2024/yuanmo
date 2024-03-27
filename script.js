// // 监听窗口大小，若width<=600px,隐藏菜单栏
// const getWindowInfo = () => {
//   const windowInfo = {
//     width: window.innerWidth,
//     hight: window.innerHeight,
//   };
//   //console.log(windowInfo);
//   if (windowInfo.width <= 600) {
//     document.getElementById("menu").style.display = "none";
//   }
// };
// const debounce = (fn, delay) => {
//   let timer;
//   return function () {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// };
// const cancalDebounce = debounce(getWindowInfo, 500);
// window.addEventListener("resize", cancalDebounce);

//按钮高亮
function Lighton(Id) {
  // window.console.log("1");
  document.getElementById(Id).style.backgroundColor = "#81d4fa";
}
function Lightoff(Id) {
  // window.console.log("2");
  document.getElementById(Id).style.backgroundColor = "#e1f5fe";
}

// tr右区按钮
function showmenu() {
  // window.console.log("3");
  document.getElementById("menu").style.display = "block";
}

// 单机空白区隐藏菜单
function hidemenu() {
  if (document.body.clientWidth <= 600) {
    document.getElementById("menu").style.display = "none";
  }
}

//米游社wiki按钮
function F0() {
  window.open(
    "https://bbs.mihoyo.com/ys/obc/?bbs_presentation_style=no_header&utm_source=bbs&utm_medium=mys&utm_campaign=pcbox"
  );
}

//隐藏菜单按钮
function F1() {
  document.getElementById("menu").style.display = "none";
}

//添加优选方案按钮
function F2() {}

// 添加自选方案按钮
function F3() {}

// 录入角色
function F4() {}

//录入武器
function F5() {}

// 录入圣遗物
function F6() {}
