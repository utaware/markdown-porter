// chrome.storage https://developer.chrome.com/docs/extensions/reference/storage/

export const storage = chrome.storage.sync

export const defaultOptions = {
  headingStyle: 'atx',
  bulletListMarker: '*',
  codeBlockStyle: 'fenced',
  fence: '```',
  emDelimiter: '_',
  strongDelimiter: '**',
  linkStyle: 'inlined',
  linkReferenceStyle: 'full',
}

