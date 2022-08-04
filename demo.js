var input = document.getElementById("input")
var btn = document.querySelector('button')

// 点击是百度搜索
btn.addEventListener('click', function () {
  if (input.value.length <= 0) return 
  location.href = 'http://www.baidu.com/s?wd=' + input.value
})

// input.addEventListener('keyup', function (e) {
//   if (e.keyCode === 13) {
//     //点击回车要执行的事件
//     location.href = 'http://www.baidu.com/s?wd=' + this.value
//   }
// })

// btn.addEventListener('click', function () {
//   location.href = 'https://www.google.com/search?q=' + input.value
// })

// 回车是谷歌搜索
input.addEventListener('keyup', function (e) {
  if (input.value.length <= 0) return

  if (e.key === "Enter") {
    //点击回车要执行的事件
    location.href = 'https://www.google.com/search?q=' + this.value
  }

})



