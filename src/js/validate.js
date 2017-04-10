
let validateRule = {

  require:function(val){

    return val> 0;
  },
  //电话
  mobileRule:function(val){

    return /^1\d{10}/.test(val);
  },
  //身份证
  identityRule:function(val){

    return /^1*$|^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/.test(val);
  },

}


let v = function(Vue){

  Vue.prototype.valid = function (validate) {

    let str = [];

    for(let i in validate.rules){

      let value = this[i];

      let childObj = validate.rules[i];

      for(let j in childObj){

        if(!childObj[j]){continue;}

        if(!validateRule[j](value)){str.push(validate.prompt[i][j]);}
      }
    }

    if(str.length>0){

      console.log(str[0])

      return false;
    }
    return true;

  }


}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(v);
}

export {v as default}
