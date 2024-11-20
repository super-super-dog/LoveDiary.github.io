(function () {
  const uname = document.querySelector('form input[name="uname"]')
  const key = document.querySelector('form input[name="key"]')
  const submit = document.querySelector('form input[type="submit"]')
  const items = Boolean(JSON.parse(localStorage.getItem('items'))) ? JSON.parse(localStorage.getItem('items')) : new Array
  const checkbox = document.querySelector('form input[type="checkbox"]')
  verifyCheckbox = function () {
    if (checkbox.checked === true) {
      return true
    } else {
      alert('你还未勾选同意服务条款！')
      return false
    }
  }
  submit.addEventListener('click', function (e) {
    e.preventDefault()
    for (let i = 0; i < items.length; i++) {
      if (uname.value === items[i]['uname']) {
        if (key.value === items[i]['key']) {
          if (verifyCheckbox()) {
            location.href = './index.html'
            return true
          } else {
            return false
          }
        }
      }
    }
    alert('您输入的账号或密码有误！')
    return false
  })
})()