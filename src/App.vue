<template>
<div id="app">
  <div class="app__inner">
<!-- Logo -->
<div class="car">
  <div class="car__upper">
    <div class="car__front">
      <div class="car__smallwindow">
      </div>
    </div>
    <div class="divider"></div>
    <div class="car__front_part"></div>
    <div class="car__body">
      <div class="car__window">
        <span>Delivery</span>
        <i class="fas fa-address-card"></i>
      </div>
    </div>
  </div>
  <div class="car__wheels">
    <div class="car__wheel_1">
      <span></span>
    </div>
    <div class="car__wheel_2">
      <span></span>
    </div>
  </div>
</div>
<!-- end Logo -->
<h1>Enjoing food delivery?</h1>
 <p>Recommend us to others users by rating us just click on button.</p>
 <Result v-if="showResult" :result_value="result"/>
  <button @click="showDialog = true" class="modal__button -mod">Rate us</button>
<Dialog v-if="showDialog" @dialog-submit="onDialogSubmit" @close="showDialog = false"/>
</div>
</div>
</template>

<script>
import Dialog from './components/Dialog.vue'
import Result from './components/Result.vue'
export default{
 name:'App',
 data() {
 return{
 showDialog: false,
 showResult: false,
 result: {}
 }
 },
 methods: {
  onDialogSubmit: function(rating) {
   console.log(rating)

   this.result = rating
   this.showDialog = false
   this.showResult = true

  }
 },
 components:{
 Dialog,
 Result
 }
}
</script>
