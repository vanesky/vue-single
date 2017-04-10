
//import load from '../components/common/load/com-load.vue'

import message from '../components/common/message/com-message.vue'

import alert from '../components/common/alert/com-alert.vue'

export default function(Vue){

  /*Vue.prototype.$load = function(){

    let attr=document.createAttribute("id");

        attr.value="comLoad";

    let node = document.createElement("div");

        node.setAttributeNode(attr)

        document.getElementsByTagName('body')[0].appendChild(node);

    let vm = new Vue({

      render: function (h) {

        return h(load)
      },

    }).$mount("#comLoad")

  };*/


  Vue.prototype.$message = function(obj){

    let attr=document.createAttribute("id");

    attr.value="comMes";

    let node = document.createElement("div");

    node.setAttributeNode(attr)

    document.getElementsByTagName('body')[0].appendChild(node);

    let vm = new Vue({

      render: function (h) {

        return h(message)
      },

    }).$mount("#comMes")

    vm.$children[0].setMessage(obj)

  }

  Vue.prototype.$alert = function(obj){

    let attr=document.createAttribute("id");

    attr.value="comAlert";

    let node = document.createElement("div");

    node.setAttributeNode(attr)

    document.getElementsByTagName('body')[0].appendChild(node);

    let vm = new Vue({

      render: function (h) {

        return h(alert)
      },

    }).$mount("#comAlert")

    vm.$children[0].setAlert(obj)

  }

}
