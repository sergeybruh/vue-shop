<template>
  <div class="home container">
    <h1>Registration form</h1>
    <div class="row">
      <div class="col-12">
        <form>
          Email
          Password
          Password confirmation

          required 
          validation
          modal thank you for registration
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">Confirm password</label>
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm password">
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "registration",
};
</script>

<style lang="scss">
  .form-group {
    label {
      float: left;
    }
    #emailHelp {}
    .btn  {
      float: left;
    }
  }
</style>
