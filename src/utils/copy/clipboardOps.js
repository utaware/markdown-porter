import createFakeElement from './create-fake-element'

export function clipboardCopyText(text) {
  if (window.isSecureContext) {
    return window.navigator.clipboard.writeText(text)
  } else {
    return new Promise((resovle, reject) => {
      const fakeElement = createFakeElement(text)
      document.body.appendChild(fakeElement)
      fakeElement.focus()
      fakeElement.select()
      document.execCommand('copy') ? resovle(text) : reject()
      fakeElement.remove()
    })
  }
}
