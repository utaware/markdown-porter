import { Notyf } from 'notyf'

import 'notyf/notyf.min.css'

const notyf = new Notyf({
  duration: 1500,
  position: {
    x: 'center',
    y: 'top',
  },
})

export default notyf
