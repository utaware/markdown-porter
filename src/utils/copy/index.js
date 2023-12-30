import { parseNodeContent } from '@/utils/copy/parse'
import { clipboardCopyText } from '@/utils/copy/clipboardOps'

import toast from '@/utils/notyf'

export default function () {
  const { commonAncestorContainer } = document.getSelection().getRangeAt(0)
  const content = parseNodeContent(commonAncestorContainer)
  clipboardCopyText(content)
    .then(() => {
      console.log(content)
      toast.success('内容复制成功')
    })
    .catch((error) => {
      console.log(error)
      toast.success('内容复制失败')
    })
}
