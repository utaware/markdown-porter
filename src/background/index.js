import { getCurrentTabId } from './tab'

const options = {
  contexts: ['all'],
  type: 'normal',
  id: 'markdown-porter',
  title: 'Markdown Porter',
  visible: true
}

chrome.runtime.onInstalled.addListener(function () {
  /* Add context menu and listener */
  chrome.contextMenus.create(options)
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    // info: [editable, frameId, menuItemId, pageUrl]
    // tab: click tab info
    const { menuItemId } = info
    const tabId = await getCurrentTabId()
    chrome.tabs.sendMessage(tabId, { action: 'copy', menuItemId }, (data) => {
      console.log(data)
    })
  })
})
