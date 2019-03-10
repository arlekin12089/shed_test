let dialog_template = `
<div class="modal__window">
        <div class="modal__outer">
            <div class="modal__container">
                <h1>How did we do?</h1>
                <p>Please let us know how your food delivery was. It will really help us to keep improving our service!</p>
        <div class="modal__rating">
          <h2>How would you rate your food?</h2>
          <div class="star__wrap">
          <star-rate v-model="foodRating"></star-rate>
          </div>
        </div>
        <div class="modal__rating">
          <h2>How would your rate your delivery driver?</h2>
          <div class="star__wrap">
          <star-rate v-model="driverRating"></star-rate>
          </div>
        </div>

        <div class="modal__rating">
          <h2>How would you rate your overall experience?</h2>
          <div class="star__wrap">
          <star-rate v-model="experienceRating"></star-rate>
          </div>
        </div>
        <button class="modal__button -mod" @click="$emit('dialog-submit', compositeRating)">Submit feedback</button>

            </div>
            <button class="modal__close" @click="$emit('close')" ><i class="fas fa-times"></i></button>
        </div>
    </div>

`

Vue.component("modal-dialog", {
    template: dialog_template,

    data: function() {
        return {
            foodRating:0,
            driverRating: 0,
            experienceRating:0
        }
    },

    computed: {
        compositeRating: function() {
            return {
                foodRating: this.foodRating,
                driverRating: this.driverRating,
                experienceRating: this.experienceRating
            }
        }
    }
})
