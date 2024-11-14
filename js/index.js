//点击刷新图片刷新效果
(function () {
  function fun() {
    for (let i = 0; i < pic_img.length; i++) {
      let random = Math.floor(Math.random() * 665)
      pic_img[i].src = `./uploads/pic_square/线条小狗头像 (${random}).jpg`
    }
  }
  const pic_img = document.querySelectorAll('.pic li img')
  const btn = document.querySelector('.pic_title button')
  btn.addEventListener('click', fun)
}());


// 制作轮播图效果
(function () {
  /* 1.图片移动：transform:tranlateY(-1152px)
  2.移动的同时对应circle添加类active
  3.点击左右侧按钮分别向左滑动、向右滑动
  4.鼠标划过关闭定时器，离开开启定时器 */

  let n = 7
  const bannerPic = document.querySelector('.banner .banner_pic')
  const circle = document.querySelectorAll('.banner .circle li')
  const prev = document.querySelector('.banner .prev')
  const next = document.querySelector('.banner .next')
  const banner = document.querySelector('.banner .wrapper')
  let NameID
  // circle随之变化
  function active(j) {
    circle[j % 7].className = 'active'
  }
  function noactive(j) {
    circle[j % 7].className = ''
  }
  //实现左右键点击移动到下一个、上一个
  function pre() {
    noactive(n)
    n = (n - 1) % 7
    bannerPic.style.transform = `translateX(${-1152 * n}px)`
    if (n === 0) { n = 7 }
    active(n)
  }
  function nex() {
    noactive(n)
    n = (n + 1) % 7
    bannerPic.style.transform = `translateX(${-1152 * n}px)`
    if (n === 0) { n = 7 }
    active(n)
  }

  prev.addEventListener('click', pre)
  next.addEventListener('click', nex)

  //实现点击circle移动图片
  for (let i = 0; i < circle.length; i++) {
    circle[i].addEventListener('click', function () {
      noactive(n)
      bannerPic.style.transform = `translateX(${-1152 * i}px)`
      active(i)
      n = i
    })
  }
}());




// 开启、关闭定时器
(function () {
  /* function fn() {
    NameID = setInterval(nex, 2000)
  }
  fn()
  banner.addEventListener('mouseenter', function () {
    clearInterval(NameID)
  })
  banner.addEventListener('mouseleave', fn) */
})();



// //左侧diary_column栏切换
// const columnText = document.querySelectorAll('.content .diary_column .txt ul')
// console.log(columnText)
// const columnTitle = document.querySelectorAll('.content .diary_column .title li')
// console.log(columnTitle)
// let x = 0
// for (let i = 0; i < columnTitle.length; i++) {
//   columnTitle[i].addEventListener('click', function () {
//     columnTitle[x].className = ''
//     columnText[x].className = 'text'
//     columnTitle[i].className = 'active'
//     columnText[i].className = 'text active'
//     x = i
//   })
// }


// 事件委托的方式tab栏切换
(function () {
  const title = document.querySelector('.diary_column .title')
  const txt = document.querySelectorAll('.diary_column .txt ul')
  title.addEventListener('click', function (e) {
    const text = document.querySelector('.diary_column .title .active')
    if (e.target.tagName === 'LI') {
      text.classList.remove('active')
      txt[+text.dataset.id].classList.remove('active')
      e.target.classList.add('active')
      txt[+e.target.dataset.id].classList.add('active')
    }
  })
})();


// 考研倒计时
(function () {
  function mytime() {
    const nowtime = +new Date()
    const futuretime = +new Date('2024-12-21')
    let add = (futuretime - nowtime) / 1000
    timelist[0].innerHTML = Math.floor(add / 60 / 60 / 24) > 9 ? Math.floor(add / 60 / 60 / 24) : '0' + Math.floor(add / 60 / 60 / 24)
    timelist[1].innerHTML = Math.floor(add / 60 / 60 % 24) > 9 ? Math.floor(add / 60 / 60 % 24) : '0' + Math.floor(add / 60 / 60 % 24)
    timelist[2].innerHTML = Math.floor(add / 60 % 60) > 9 ? Math.floor(add / 60 % 60) : '0' + Math.floor(add / 60 % 60)
    timelist[3].innerHTML = Math.floor(add % 60) > 9 ? Math.floor(add % 60) : '0' + Math.floor(add % 60)
  }
  const timelist = document.querySelectorAll('.calender .mytime ul li')
  mytime()
  console.log(timelist)
  setInterval(mytime, 1000)
})();

//获取今日时间
(function () {
  function fn() {
    const newtime = new Date()
    const mytime = document.querySelector('.calender .myblock .date li:nth-child(2)')
    mytime.innerHTML = `${newtime.getFullYear()}/${newtime.getMonth() + 1}/${newtime.getDate()}`
  }
  fn()
  setInterval(fn, 1000)
})();
