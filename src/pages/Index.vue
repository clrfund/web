<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>My Contribution</q-item-label>
          </q-item-section>

          <q-item-section align="right"> {{ total }} DAI </q-item-section>
        </q-item>

        <q-item class="row">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="col-3">
            <q-item-label>Burner Wallet 2 & Burner Factory</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section class="col-6">
            <q-slider v-model="sliders[0]" @input="input" />
          </q-item-section>

          <q-item-section class="col-3" align="right">
            <q-item-label>
              {{ Math.round(total * sliders[0] * 0.01) }} DAI
            </q-item-label>
            <q-item-label caption>{{ Math.round(sliders[0]) }}%</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="col-3">
            <q-item-label>Tornado.cash</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section class="col-6">
            <q-slider v-model="sliders[1]" @input="input" />
          </q-item-section>

          <q-item-section class="col-3" align="right">
            <q-item-label>
              {{ Math.round(total * sliders[1] * 0.01) }} DAI
            </q-item-label>
            <q-item-label caption>{{ Math.round(sliders[1]) }}%</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="col-3">
            <q-item-label>Validity</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section class="col-6">
            <q-slider v-model="sliders[2]" @input="input" />
          </q-item-section>

          <q-item-section class="col-3" align="right">
            <q-item-label>
              {{ Math.round(total * sliders[2] * 0.01) }} DAI
            </q-item-label>
            <q-item-label caption>{{ Math.round(sliders[2]) }}%</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="col-3">
            <q-item-label>DAppNode</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section class="col-6">
            <q-slider v-model="sliders[3]" @input="input" />
          </q-item-section>

          <q-item-section class="col-3" align="right">
            <q-item-label>
              {{ Math.round(total * sliders[3] * 0.01) }} DAI
            </q-item-label>
            <q-item-label caption>{{ Math.round(sliders[3]) }}%</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="col-3">
            <q-item-label>Sablier</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section class="col-6">
            <q-slider v-model="sliders[4]" @input="input" />
          </q-item-section>

          <q-item-section class="col-3" align="right">
            <q-item-label>
              {{ Math.round(total * sliders[4] * 0.01) }} DAI
            </q-item-label>
            <q-item-label caption>{{ Math.round(sliders[4]) }}%</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      sliders: [20, 20, 20, 20, 20],
      total: 140
    };
  },
  methods: {
    input(n) {
      const sum = this.sliders.reduce((sum, val) => sum + val, 0);
      const diff = sum - 100;
      let remainder = 0;
      console.log(diff);
      for (let i in this.sliders) {
        if (i != n) {
          //don't modify the slider which is being dragged
          let val = this.sliders[i] - diff / (this.sliders.length - 1);
          if (val < 0) {
            remainder += val;
            val = 0;
          }
          this.$set(this.sliders, i, val);
        }
      }
      if (remainder) {
        const filteredLength = this.sliders.filter(
          (val, key) => val > 0 && key != n
        ).length;
        for (let i in this.sliders) {
          if (i != n && this.sliders[i] > 0) {
            this.$set(
              this.sliders,
              i,
              this.sliders[i] + remainder / filteredLength
            );
          }
        }
      }
      this.$emit("input", this.sliders);
    }
  }
};
</script>
