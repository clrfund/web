<template>
  <q-item class="row">
    <q-item-section class="col-2" avatar>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
    </q-item-section>
    <q-item-section class="col-3">
      <q-item-label>{{ name }}</q-item-label>
      <q-item-label caption>0x32fF...32Fv</q-item-label>
    </q-item-section>

    <q-item-section class="col-5">
      <q-slider v-model.number="percentage" value="lazy" />
    </q-item-section>

    <q-item-section class="col-2" align="right">
      <q-item-label>
        <!-- {{ Math.round(total * project.amount * 0.01) }} DAI -->
        {{ amount }} DAI
      </q-item-label>
      <!-- <q-item-label caption>{{ Math.round(project.amount) }}%</q-item-label> -->
      <q-item-label caption>{{ percentage }}%</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    projectId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      name: ""
    };
  },
  mounted() {
    this.name = this.$store.getters["projects/nameById"](this.projectId);
  },
  computed: {
    amount() {
      return this.$store.getters["projects/amountById"](this.projectId);
    },
    percentage: {
      get() {
        return this.$store.getters["projects/percentageById"](this.projectId);
      },
      set(percentage) {
        this.$store.commit("projects/setSliderById", {
          projectId: this.projectId,
          percentage
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
