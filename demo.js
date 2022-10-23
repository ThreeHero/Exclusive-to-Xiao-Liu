var XiaoLiuBtn = document.querySelector('#XiaoLiuBtn')
var XiaoLiuInput = document.querySelector('#XiaoLiuInput')

XiaoLiuInput != null && XiaoLiuInput.focus()

// 点击是百度搜索
XiaoLiuBtn != null && XiaoLiuBtn.addEventListener('click', function () {
  if (XiaoLiuInput.value.length <= 0) return 
  location.href = 'http://www.baidu.com/s?wd=' + XiaoLiuInput.value
})

// XiaoLiuInput.addEventListener('keyup', function (e) {
//   if (e.keyCode === 13) {
//     //点击回车要执行的事件
//     location.href = 'http://www.baidu.com/s?wd=' + this.value
//   }
// })

// XiaoLiuBtn.addEventListener('click', function () {
//   location.href = 'https://www.google.com/search?q=' + XiaoLiuInput.value
// })

// 回车是谷歌搜索
XiaoLiuInput != null && XiaoLiuInput.addEventListener('keyup', function (e) {
  if (XiaoLiuInput.value.length <= 0) return

  if (e.key === "Enter") {
    //点击回车要执行的事件
    location.href = 'https://www.google.com/search?q=' + this.value
  }

})


// 禁止右键菜单
window.oncontextmenu = function (e) {
  //取消默认的浏览器自带右键 很重要！！
  e.preventDefault();
}