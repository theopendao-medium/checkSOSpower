<template>
  <div class="hello">
    <h1>Hi</h1>
    <div>
  <div class="form-group" :class="{ 'form-group--error': $v.infurakey.$error }">
    <label class="form__label">infurakey</label>
    <input @keyup="updateInfuraKey" class="form__input" v-model.trim="$v.infurakey.$model"/>
  </div>
  <div class="error" v-if="!$v.infurakey.required">Field is required</div>
  <div class="error" v-if="!$v.infurakey.minLength">infurakey must have at least {{$v.infurakey.$params.minLength.min}} characters.</div>
  <div class="error" v-if="!$v.infurakey.maxLength">infurakey cannot be more than {{$v.infurakey.$params.maxLength.max}} characters.</div>
</div>
<div>
<button @click="checkbalance">Check ETH Balance</button>
</div>
    {{balEth}}
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:function (){
    return {
      infurakey: "6ac4888a37b64ea3bcdeec85f63ec577",
      ret: {},
      test: "hello",
      timer: undefined,
    }
  },
  validations:{
    infurakey: {
      required,
      minLength: minLength(32),
      maxLength: maxLength(32)
    }
  },
  computed: {
    balEth(){
      return this.$store.getters.ethBalance();
    }
  },
  methods:{
    updateInfuraKey: function(){
      clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        console.log("updated");
          this.$store.dispatch('changeInfuraKey', this.infurakey);
      }, 1000)
      
    },
    checkbalance: function(){
      this.$store.dispatch('getEthBalance');
    }
  },
  mounted: function() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
