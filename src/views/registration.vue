<template>
  <div class="home container">
    <h1>Registration form</h1>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="validateBeforeSubmit">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="eml" v-validate="'required|email'" name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div v-if="errors.has('email')" class="alert alert-danger" role="alert">
            {{ errors.first('email') }}
          </div>
          
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="pwd" v-validate="'required|min:8'" name="password" type="password"  class="form-control" id="exampleInputPassword1" :class="{'is-danger': errors.has('password')}" placeholder="Password" ref="password">
          </div>
          <div v-if="errors.has('password')" class="alert alert-danger" role="alert">
            {{ errors.first('password') }}
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">Confirm password</label>
            <input v-validate="'required|confirmed:password|min:8'" class="form-control" id="exampleInputPassword2" name="password_confirmation" type="password" :class="{'is-danger': errors.has('password_confirmation')}" placeholder="Password, Again" data-vv-as="password">
          </div>
          <div v-if="errors.has('password_confirmation')" class="alert alert-danger" role="alert">
            {{ errors.first('password_confirmation') }}
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    <popup :toggle="popupToggle" :title="popupMessage" @closePopup="killPopup()"></popup>
  </div>
</template>
<script>
import popup from "@/components/popup.vue";
export default {
  name: "registration",
  data: function() {
    return {
      pwd: "",
      pwd2: "",
      eml: "",
      popupMessage: "",
      popupToggle: false
    };
  },
  methods: {
    killPopup() {
      this.popupToggle = !this.popupToggle;
    },
    checkForm(event) {
      event.preventDefault();
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.popupToggle = true;
          this.$store.commit("addUser", {
            pwd: this.pwd,
            eml: this.eml
          });
          this.popupMessage = "Thank you for registration";
          return;
        }
        this.popupToggle = true;
        this.popupMessage = "Correct them errors!";
      });
    }
  },
  components: {
    popup
  }
};
</script>

<style lang="scss">
.form-group {
  label {
    float: left;
  }
  .btn {
    float: left;
  }
}
</style>
