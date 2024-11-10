function fun() {
  for (let i = 0; i < pic_img.length; i++) {
    let random = Math.floor(Math.random() * 665)
    pic_img[i].src = `./uploads/pic_square/线条小狗头像 (${random}).jpg`
  }
}
const pic_img = document.querySelectorAll('.pic li img')
const btn = document.querySelector('.pic_title button')
btn.addEventListener('click', fun)

// 制作轮播图效果
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


// 开启、关闭定时器
function fn() {
  NameID = setInterval(nex, 1500)
}
fn()
banner.addEventListener('mouseenter', function () {
  clearInterval(NameID)
})
banner.addEventListener('mouseleave', fn)
