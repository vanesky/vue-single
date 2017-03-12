
let ajax = {};

(function(){

  let ES = 'develop';

  let workName = 'm-featsky';

  let version = '0.0.1';

  let base = '';


  this.install = function(Vue){

    //请求路径
    Vue.prototype.getUrl = function(url){

      if (process.env.NODE_ENV === 'production') {

        base = "http://www.baidu.com/fd";

      }else if(process.env.NODE_ENV === 'development') {

        if(ES == 'develop'){

          base = "192.168.0.1/";

        }else if(ES == 'test'){

          base = "http://123.57.156.31:8083/fd";
        }
      }

      return base + url + "?workName=" + workName + "&date=" + new Date().getTime();
    };

    //添加全局方法或属性
    Vue.prototype.httpPost = function(href,paramJson,sucCallback,errCallback,absolute){

      let url = "";

      if(absolute){ url = href }else{ url = this.getUrl(href) }

      /*//load加载
      if(_this){
        _this.loadDisplay = true;
        _this.loadMainDisplay = false;
        _this.noData = false;
      }*/

      // 逻辑...
      Vue.http.post(url,paramJson,{emulateJSON:true,credentials:true})

        .then(function(data, status){

          let obj = data;

          if (obj) {

            sucCallback(obj,status)

          }else{

            if(errCallback) { errCallback(obj, status) }
          }

        },function(response){

          alert("err"+response.message);

        })
    }

  }

}).apply(ajax);


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ajax);
}
export {ajax};
