// html2markdown https://www.npmjs.com/package/turndown
import TurndownService from 'turndown'

import { gfm } from 'turndown-plugin-gfm'

import { storage, defaultOptions } from '@/common/storage'

let turndownService = new TurndownService(defaultOptions)
// plugin
turndownService.use(gfm)

function changeTurndownOptions (options) {
  turndownService = new TurndownService(options)
  turndownService.use(gfm)
}

storage.get({ options: defaultOptions }).then((data) => {
  const { options } = data
  changeTurndownOptions(options)
})

chrome.storage.onChanged.addListener((changes) => {
  const { options: { newValue } } = changes
  changeTurndownOptions(newValue)
})

export default function (el) {
  return turndownService.turndown(el.outerHTML)
}
