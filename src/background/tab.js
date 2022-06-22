export function getCurrentTabId () {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      resolve(tabs.length ? tabs[0].id: null)
    })
  })
}
