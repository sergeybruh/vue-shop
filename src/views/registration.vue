<template>
  <div class="home container">
    <h1>Registration form</h1>
    <div class="row">
      <div class="col-12">
        <form @submit="checkForm($event)">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-validate="'required|email'" name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div v-if="errors.first('email')" class="alert alert-danger" role="alert">
            {{ errors.first('email') }}
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="pwd" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">Confirm password</label>
            <input v-model="pwd2" type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm password">
          </div>
          <div v-if="showUnvalidPassword" class="alert alert-danger" role="alert">
            Make shure you typed password and password confirmation
          </div>
          <div v-if="showUnvalidLenght" class="alert alert-danger" role="alert">
            Password must be at least 8 symbols
          </div>
          <button  type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
     <div @click="popupToggle = !popupToggle"  v-show="popupToggle" class="modal" tabindex="-1" role="dialog" style="display: block;">
      <div @click.stop class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button @click="popupToggle = !popupToggle" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Thank you for registration</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registration",
  data: function() {
    return {
      pwd: "",
      pwd2: "",
      eml: "",
      popupToggle: false,
      showUnvalidPassword: false,
      showUnvalidLenght: false
    };
  },
  methods: {
    killPopup() {
      this.popupToggle = !this.popupToggle;
    },
    checkForm(event) {
      event.preventDefault();
      if (this.pwd != this.pwd2) {
        this.showUnvalidPassword = true;
      } else if (this.pwd == "" || this.pwd2 == "") {
        this.showUnvalidPassword = true;
      }
      // else if (this.pwd.lenght < 8) {
      //   this.showUnvalidLenght = true;
      // }
      else {
        this.showUnvalidPassword = false;
        this.popupToggle = true;
        this.showUnvalidLenght = false;
        this.$store.commit("addUser", {
          pwd: this.pwd,
          eml: this.eml
        });
      }
    }
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
