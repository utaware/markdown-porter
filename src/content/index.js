import coverContent from '@/utils/copy'

chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  const { action } = data
  switch (action) {
    case 'copy':
      coverContent()
      break
    default:
      break
  }
  sendResponse(data)
})
