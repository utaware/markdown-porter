import { copyWithEl } from './copy'

const convertTags = [
  'table',
  'pre',
  'blockquote',
  'ul',
  'ol',
  'img',
  'a'
]

let $activeElement = null

convertTags.map((tagName) => {
  return Array.from(document.querySelectorAll(tagName))
}).filter(v => v).flat().forEach((el) => {
  el.addEventListener('dblclick', function () {
    copyWithEl(el)
  }, true)
  el.addEventListener('contextmenu', function (e) {
    $activeElement = el
  })
})

chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  const { action } = data
  switch (action) {
    case 'copy':
      copyWithEl($activeElement)
    break
  }
  sendResponse(data)
  return true
})
