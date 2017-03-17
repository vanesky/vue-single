

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // 放置初始状态
  count: 0,

  show:false,

  obj:{}
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // 放置我们的状态变更函数
  m2 (state, amount){
    state.count = state.count + amount
  },

  dis(state,param){
    state.show = true;
    state.obj = param;
  }
}
const actions = {
  add2 : function(store , param){
    return new Promise(function(resolve, reject) {
      store.commit('m2',param)
      resolve("ok");
    })
  },
}

//复用 getter接受state为第一个参数
const getters = {
  /*getMessage:function(state){
    return state.count
  }*/
}

export default{
  state,
  mutations,
  actions,
  getters
};
