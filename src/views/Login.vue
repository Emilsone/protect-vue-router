
<template>
  <card class="card-section" style="width: 450px; margin: auto">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <KInput
          class="form-input"
          :style="{ width: '370px' }"
          v-model="username"
          name="username"
          placeholder="Name or email address"
        ></KInput>
      </div>

      <div class="form-group">
        <KInput
          class="form-input"
          :style="{ width: '370px' }"
          v-model="password"
          name="password"
          placeholder="Enter Password"
        ></KInput>
      </div>

      <div class="example-col">
        <kButton :style="{ width: '100px' }" id="submit-btn">Login</kButton>
      </div>
    </form>
  </card>
</template>
<script>
import { Card } from "@progress/kendo-vue-layout";
// ES2015 module syntax
import { Input } from "@progress/kendo-vue-inputs";
import "@progress/kendo-theme-default";
import { Button } from "@progress/kendo-vue-buttons";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  components: {
    card: Card,
    KInput: Input,
    kButton: Button,
  },
  data() {
      return {
        username: "",
        password: "",
      }
   }
}
</script>

<style>
.form-input {
  margin: 10px 15px;
  border-radius: 0px;
  padding: 10px 0px;
}
#submit-btn {
  margin: 10px 0px;
  padding: 10px 20px;
  background-color: #018061;
  color: white;
}
</style>