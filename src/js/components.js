
import radio from '../components/common/com-radio.vue'

import checkAll from '../components/common/com-check/check-all.vue'
import prentCheck from '../components/common/com-check/check-prent.vue'
import check from '../components/common/com-check/check.vue'

export default function(Vue){

  let com = {

    'com-radio':radio,

    'com-check':check,

    'prent-check':prentCheck,

    'check-all':checkAll

  };

  for(let i in com){

    Vue.component(i,com[i])

  }


}
