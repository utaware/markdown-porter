import { isDOMElement, isMatchNode } from '@/utils'

import html2markdown from '@/utils/turndown'

export function parseNodeContent(node) {
  while (node) {
    if (isDOMElement(node) && isMatchNode(node)) {
      return html2markdown(node)
    }
    node = node.parentNode
  }
  return ''
}
