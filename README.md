## vue-debounce   

![](https://github.com/shizmBai/vue-debounce/raw/master/log/3.jpg)
为什么使用此插件？</br>
  网站商场中有模糊搜索且数据量较大时使用可以减少接口发送次数，</br>
  减少不必要的请求响应，</br>
  减少服务器压力</br></br>
  

html</br>
  <input type="text" </br>
  @input="getSearchFn" </br>
  placeholder="请输入"></br></br>
  
script</br>
  import lodash from 'lodash'</br>
  
  getSearchFn: lodash.debounce(function () {</br>
    console.log(1);</br>
  }, 500)</br></br>
