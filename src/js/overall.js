
//全局化组件

import load from '../components/common/load/two/com-load.vue'

import radio from '../components/common/radio/com-radio.vue'

import checkAll from '../components/common/check/check-all.vue'
import prentCheck from '../components/common/check/check-prent.vue'
import check from '../components/common/check/check.vue'

import prentSelect from '../components/common/select/select-prent.vue'
import select from '../components/common/select/select.vue'


export default function(Vue){

  let com = {

    'com-load':load,
    'com-radio':radio,

    'com-check':check,
    'prent-check':prentCheck,
    'check-all':checkAll,

    'prent-select':prentSelect,
    'com-select':select,

  };

  for(let i in com){

    Vue.component(i,com[i])

  }

}
