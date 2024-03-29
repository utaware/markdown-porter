// html2markdown https://www.npmjs.com/package/turndown
import TurndownService from 'turndown'

import { gfm } from 'turndown-plugin-gfm'

import { storage } from '@/common/storage'

import { turndownDefaultOptions } from '@/utils/constant/options'

let turndownService = new TurndownService(turndownDefaultOptions)
// plugin
turndownService.use(gfm)

function changeTurndownOptions(options) {
  turndownService = new TurndownService(options)
  turndownService.use(gfm)
}

storage.get({ options: turndownDefaultOptions }).then((data) => {
  const { options } = data
  changeTurndownOptions(options)
})

chrome.storage.onChanged.addListener((changes) => {
  const {
    options: { newValue },
  } = changes
  changeTurndownOptions(newValue)
})

export default function (el) {
  return turndownService.turndown(el.outerHTML)
}
