// 用户输入并存入本地内存（用户输入的信息是一个对象）
//1.利用正则表达式判断用户输入是否正确，正确则不提示并返回一个正确值true，错误则在用户发生事件‘失去焦点’时，出现提示文字
//2.当返回的全部为true时，则可以进行“下一步操作”

//获取表单内容

(function () {
  const items = Boolean(JSON.parse(localStorage.getItem('items'))) ? JSON.parse(localStorage.getItem('items')) : new Array
  const obj = {}
  //用户名验证
  verifyName = function (e) {
    const reg = /^[\u4e00-\u9fa5a-zA-Z_]{3,10}$/
    const i = document.querySelector('form i[name = uname]')
    if (!reg.test(uname.value)) {
      i.innerHTML = '请输入3-10位中文、大小写字母或下划线组合'

      return false
    } else {
      i.innerHTML = ''
      obj['uname'] = uname.value
      return true
    }
  }
  //手机号码验证
  verifyTel = function (e) {
    const reg = /^1[0-9]{10}$/
    const i = document.querySelector('form i[name = tel]')
    if (!reg.test(tel.value)) {
      i.innerHTML = '请输入正确的手机号码'
      return false
    } else {
      i.innerHTML = ''
      obj['tel'] = tel.value
      return true
    }
  }
  //密码验证
  verifyKey = function (e) {
    const reg = /^[0-9a-zA-Z]{6,12}$/
    const i = document.querySelector('form i[name = key]')
    if (!reg.test(key.value)) {
      i.innerHTML = '请输入6-12位数字、大小写字母组合'
      return false
    } else {
      i.innerHTML = ''
      obj['key'] = key.value
      return true
    }
  }
  //密码重复验证
  verifyDkey = function (e) {
    const i = document.querySelector('form i[name = dkey]')
    if (dkey.value === obj['key']) {
      i.innerHTML = ''
      return true
    } else {
      i.innerHTML = '请输入正确的密码'
      return false
    }
  }
  //验证是否同意协议
  verifyCheckbox = function () {
    if (checkbox.checked === true) {
      return true
    } else {
      alert('你还未勾选同意服务条款！')
      return false
    }
  }
  //定义变量
  const uname = document.querySelector('form input[name ="uname"]')
  uname.addEventListener('change', verifyName)
  const tel = document.querySelector('form input[name ="tel"]')
  tel.addEventListener('change', verifyTel)
  const key = document.querySelector('form input[name ="key"]')
  key.addEventListener('change', verifyKey)
  const dkey = document.querySelector('form input[name ="dkey"]')
  dkey.addEventListener('change', verifyKey)
  const checkbox = document.querySelector('form input[type="checkbox"]')
  const submit = document.querySelector('form input[type="submit"]')
  submit.addEventListener('click', function (e) {
    if (!verifyName()) { e.preventDefault() }
    if (!verifyTel()) { e.preventDefault() }
    if (!verifyKey()) { e.preventDefault() }
    if (!verifyDkey()) { e.preventDefault() }
    if (!verifyCheckbox()) { e.preventDefault() }
    if (verifyName() && verifyTel() && verifyKey() && verifyDkey() && verifyCheckbox()) {
      alert('登录成功！')
      items.push(obj)
      localStorage.setItem('items', JSON.stringify(items))
      e.preventDefault()
      location.href = './login.html'
    }
  })
})()
//判断账号是否输入正确
