
export default function(Vue){

  Vue.directive("touch",{

    bind:function(el,binding,vnode){

      // 只会调用一次
      let type = binding.arg;

      let timeOutEvent = 0;

      //滑动处理
      let startX,startY,startDate;

      el.addEventListener('touchstart',function(ev){

        startX = ev.touches[0].pageX;

        startY = ev.touches[0].pageY;

        startDate = new Date().getTime();

        //判断长按
        timeOutEvent = setTimeout(() =>{

          timeOutEvent = 0 ;

          if(type == 'press'){ console.log('press') }

        },500);

      })

      el.addEventListener('touchmove',function(ev){

        clearTimeout(timeOutEvent);

        timeOutEvent = 0;

      });


      el.addEventListener('touchend',function(ev){

        clearTimeout(timeOutEvent);

        let time = new Date().getTime() - startDate;

        let endX = ev.changedTouches[0].pageX;

        let endY = ev.changedTouches[0].pageY;

        let d = getDirection(startX,startY,endX,endY,time);

        if(d == type){

          let fun = binding.value.method;

              fun(binding.value.param);
        }

      });


      //角度
      function getSlideAngle(dx, dy){

        return Math.atan2(dy, dx) * 180 / Math.PI;

      }

      function getDirection(startX,startY,endX,endY,time){

        let dy = startY - endY;

        let dx = endX - startX;

        let abX = Math.abs(dx);

        let abY = Math.abs(dy);

        let result = '';

        let angle = getSlideAngle(dx,dy);

        if(time < 150 && dy == dx ){

          result = 'tap';

        }else if(angle >= -45 && angle < 45 && (time < 400) && abX > 60){

          result = 'swiperight';

        } else if (angle >= 45 && angle < 135 && (time < 400) && abY > 60){

          result = 'swipeup';

        } else if (angle >= -135 && angle < -45 && (time < 400) && abY > 60){

          result = 'swipedown';

        } else if ((angle >= 135 && angle <= 180 && (time < 400) && abX > 60) || (angle >= -180 && angle < -135 && (time < 400) && abX > 60)) {

          result = 'swipeleft';

        }

        return result;
      }


    },
    /*update(el,binding,vnode){
      console.log(el);
      console.log(binding);
      console.log(vnode);
    },*/
  })

}
