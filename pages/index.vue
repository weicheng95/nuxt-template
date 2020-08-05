<template>
  <div class="bg-red-200 text-center">
    <p>FirstName: {{ firstName }}</p>
    <p>LastName: {{ lastName }}</p>
    <p>FullName: {{ fullName }}</p>
    <div>Calculate Age: {{ age }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { homeStore } from '~/store';

export default Vue.extend({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      year: null,
      ageText: 'Age',
    };
  },
  // run on server side
  async asyncData({ $axios }: any) {
    const ip = await $axios.$get('http://icanhazip.com');
    return { ip };
  },
  computed: {
    fullName(): string {
      return this.firstName + this.lastName;
    },
    age(): number {
      return homeStore.getNumber;
    }
  },
  watch: {
    year(newVal: number) {
      this.ageText = this.calculate(newVal);
    },
  },
  methods: {
    calculate(newVal: number): string {
      return 'Age:' + newVal;
    },
  },
  mounted() {
    homeStore.incrWheels(20);
    console.log(this.$config);
    console.log(process.env);
  }
});
</script>