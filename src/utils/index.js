const matchHTMLTags = [
  // 表格
  'table',
  'pre',
  // 引用
  'blockquote',
  // 列表
  'ul',
  'ol',
  // 图片
  'img',
  // 加粗
  'strong',
  'em',
  // 代码
  'code',
  // 链接
  'a',
  // 标题
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]

export function isDOMElement(target) {
  return target instanceof HTMLElement
}

export function isText(target) {
  return typeof target === 'string'
}

export function isMatchNode(node) {
  const name = node.tagName?.toLocaleLowerCase()
  return matchHTMLTags.includes(name)
}
