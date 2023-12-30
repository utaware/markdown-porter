import coverContent from '@/utils/copy'

chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  const { action } = data
  console.log('content')
  switch (action) {
    case 'copy':
      coverContent()
      break
    default:
      break
  }
  sendResponse(data)
})
