<template>
<div class="submitted-result">
    <h3>You submitted: </h3>
    <p>{{result_value}}</p>
  </div>
</template>
<script>
export default{
props:['result_value']
}
</script>
