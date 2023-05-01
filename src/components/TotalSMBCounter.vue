<template>
  <div>
    <h1 class="montserrat text-center text-4xl font-bold text-cargo-grey my-4">
      Small Business Counter
    </h1>
    <div class="flex justify-center items-center">
      <img src="/src/assets/small-business-icon.png" alt="" class="w-32 pr-8" />
      <div class="montserrat text-center text-3xl sm:text-6xl font-bold text-cargo-blue">
        {{ Math.floor(TotalSMBCounter).toLocaleString("en-US") }}
      </div>
    </div>
    <section>
      <h2 class="montserrat text-2xl font-bold text-cargo-grey my-4">Info</h2>
      <ul>
        <li>
          Starting Value = 33,185,550
          <a
            href="https://www.uschamber.com/small-business/state-of-small-business-now"
            class="italic text-cargo-yellow"
            >source</a
          >
        </li>
        <li>
          Incrementing by 4,400,000 / 31536000'seconds/year' = 0.139523084728564
          per second
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { ref, onUnmounted } from "vue";

export default {
  setup() {
    const startValue = localStorage.getItem('TotalSMBCounterLS') !== null ? Number(localStorage.getItem('TotalSMBCounterLS')) : 33185550;
    const increment = 0.139523084728564;
    const TotalSMBCounter = ref(startValue);

    const intervalId = setInterval(() => {
      TotalSMBCounter.value += increment;
      localStorage.setItem('TotalSMBCounterLS', Math.floor(TotalSMBCounter.value));
      // console.log("TotalSMBCounter", TotalSMBCounter.value);
      console.log("TotalSMBCounterLS", Number(localStorage.getItem('TotalSMBCounterLS')));
    }, 1000);

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    function showCode() {
      alert('hi');
    }

    return { TotalSMBCounter };
  },
};
</script>



<style scoped>
</style>
