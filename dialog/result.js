let result_template = `	<div class="submitted-result">
    <h3>You submitted: </h3>
    <p>{{result_value}}</p>
  </div>`

  Vue.component('result',{
    template:result_template,
    props:['result_value']
  })
