vue-debounce 

为什么使用此插件？
  网站商场中有模糊搜索且数据量较大时使用可以减少接口发送次数，减少不必要的请求响应，减少服务器压力
  网站商场中有模糊搜索且数据量较大时使用可以减少接口发送次数，
  减少不必要的请求响应，
  减少服务器压力
  

html
  <input type="text" @input="getSearchFn" placeholder="请输入">
  <input type="text" 
  @input="getSearchFn" 
  placeholder="请输入">
  
script
  import lodash from 'lodash'
  
  getSearchFn: lodash.debounce(function () {
    console.log(1);
  }, 500)
