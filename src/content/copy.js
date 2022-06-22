import createFakeElement from './create-fake-element'
import html2markdown from './toMarkdown'

/**
 *
 * @param {String} text
 * @returns Promise
 */
export function copyWithText (text) {
  if (window.isSecureContext) {
    return window.navigator.clipboard.writeText(text)
  } else {
    return new Promise((resovle, reject) => {
      const fakeElement = createFakeElement(text)
      document.body.appendChild(fakeElement)
      fakeElement.focus()
      fakeElement.select()
      document.execCommand('copy') ? resovle() : reject()
      fakeElement.remove()
    })
  }
}

/**
 *
 * @param {HTMLElement} el
 * @returns Promise
 */
export function copyWithEl (el) {
  if (!el) {
    return false
  }
  const content = html2markdown(el)
  copyWithText(content).then(() => {
    console.log('内容复制成功')
  }).catch((error) => {
    console.log(error)
  })
}
