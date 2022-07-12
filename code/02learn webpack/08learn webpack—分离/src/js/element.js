import '../css/style.css'
import '../css/title.less'
import '../css/image.css'
// import '../font/iconfont.css'
import pic from '../img/2.jpg'
//1:设置类
const div = document.createElement('div')
div.className = 'title'
div.innerHTML = '冰冰'
document.body.appendChild(div)

//2:设置背景图片
const bgDiv = document.createElement('div')
bgDiv.className = 'img-bg'
document.body.appendChild(bgDiv)

//3:img添加
const img = document.createElement('img')
img.src = pic
img.style.width = '350px'
img.style.height = '200px'
document.body.appendChild(img)

//4:字体图标
// const iEl = document.createElement('i');
// iEl.className = 'iconfont icon-yonghu'
// document.body.appendChild(iEl)
