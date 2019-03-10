let app = new Vue({
 el: "#app",
 data: {
  showDialog: false,
  showResult: false,
  result: {}
 },
 methods: {
  onDialogSubmit: function(rating) {
   console.log(rating)

   this.result = rating
   this.showDialog = false
   this.showResult = true

  }
 }
})
