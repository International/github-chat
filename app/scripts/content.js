'use strict';

const boxId = 'github-chat-box'

function showChat(t, e) {
  var i = function() {
      var t = e.getElementById(boxId),
        i = t.getAttribute("data-env") || "production",
        n = t.getAttribute("data-channel"),
        a = t.getAttribute("data-theme"),
        o = t.getAttribute("data-custom-css"),
        s = t.getAttribute("data-nickname"),
        l = e.createElement("iframe"),
        r = "https://embed.tlk.io/" + n,
        m = [];
      "dev" == i && (r = "https://embed.lvh.me:3000/" + n), o && o.length && m.push("custom_css_path=" + o), s && s.length && m.push("nickname=" + s), a && a.length && m.push("theme=" + a), m.length && (r += "?" + m.join("&")), l.setAttribute("src", r), l.setAttribute("width", "100%"), l.setAttribute("height", "100%"), l.setAttribute("frameborder", "0"), l.setAttribute("style", "margin-bottom: -8px;");
      var u = t.getAttribute("style");
      t.setAttribute("style", "overflow: auto; -webkit-overflow-scrolling: touch;" + u), t.textContent = "", t.appendChild(l)
    },
    n = function() {
      var n = e.getElementById(boxId),
        a = e.createElement("style"),
        o = e.createElement("img");
      a.textContent = ".tlkio-pulse{width:70px;margin:-27px 0 0 -35px;position:absolute;top:50%;left:50%;animation: tlkio-pulse 1.5s ease-in 0s infinite;}@keyframes tlkio-pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}18%{transform:scale(0.95)}24%{transform:scale(1)}}", o.src = "https://tlk.io/images/logo.png", o.className = "tlkio-pulse", "static" == t.getComputedStyle(n).position && (n.style.position = "relative"), n.appendChild(a), n.appendChild(o), t.setTimeout(i, 3e3)
    };
  t.addEventListener ? t.addEventListener("load", n, !1) : t.attachEvent("onload", n)
}

document.addEventListener('DOMContentLoaded', () => {
  createOverlay()
  showChat(window, document)
})

function getCurrentUser() {
  const metas = document.getElementsByTagName('meta')
   for (var i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute('name') == 'user-login') { 
         return metas[i].getAttribute('content')
      } 
   } 

   return 'anonymous-' + makeId()
}

function createOverlay() {
  const container = createContainer()
  const top = createTop()
  const box = createBox()

  container.appendChild(top)
  container.appendChild(box)

  document.body.appendChild(container)
}

function createContainer() {
  const div = document.createElement('div')
  div.id = 'github-chat-container'

  div.style.position = 'fixed'
  div.style.right = '10px'
  div.style.bottom = '10px'
  div.style.height = '200px'
  div.style.width = '200px'
  div.style.borderStyle = 'solid'
  div.style.borderColor = 'orange'
  div.style.borderWidth = '2px'

  div.setAttribute('data-channel', 'github')
  div.setAttribute('data-nickname', getCurrentUser())

  return div
}

function createTop() {
  const div = document.createElement('div')
  div.id = 'github-chat-top'

  div.style.background = 'blue'
  div.style.height = '30px'

  const button = createButton()
  div.appendChild(button)
  
  return div
}

function createBox() {
  const div = document.createElement('div')
  div.id = boxId

  div.style.top = '30px'
  
  return div
}

function createButton() {
  const button = document.createElement('button')
  button.innerText = '—'
  
  button.style.width = '20px'
  button.style.height = '20px'
  button.style.top = '5px'
  button.style.left = '5px'
  button.style.position = 'relative'

  return button
}

function makeId() {
  var text = ""
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
    
  return text
}