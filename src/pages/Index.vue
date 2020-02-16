<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 350px">
      <q-list>
          <q-item style="width: 400px">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>My Contribution</q-item-label>
          </q-item-section>

          <q-item-section align="right">
            140 DAI
          </q-item-section>
        </q-item>

        <q-item style="width: 400px">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Burner Wallet 2 & Burner Factory</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section side style="width: 150px">
            <q-slider v-model="project1"/>
          </q-item-section>

          <q-item-section align="right">
            <q-item-label>20 DAI</q-item-label>
            <q-item-label caption>{{project1}}%</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item style="width: 400px">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Tornado.cash</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section side style="width: 150px">
            <q-slider v-model="project2"/>
          </q-item-section>

          <q-item-section align="right">
            <q-item-label>20 DAI</q-item-label>
            <q-item-label caption>{{project2}}%</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item style="width: 400px">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Validity</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section side style="width: 150px">
            <q-slider v-model="project3"/>
          </q-item-section>

          <q-item-section align="right">
            <q-item-label>20 DAI</q-item-label>
            <q-item-label caption>{{project3}}%</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item style="width: 400px">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>DAppNode</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section side style="width: 150px">
            <q-slider v-model="project4"/>
          </q-item-section>

          <q-item-section align="right">
            <q-item-label>20 DAI</q-item-label>
            <q-item-label caption>{{project4}}%</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item style="width: 400px">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Sablier</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section side style="width: 150px">
            <q-slider v-model="project5"/>
          </q-item-section>

          <q-item-section align="right">
            <q-item-label>20 DAI</q-item-label>
            <q-item-label caption>{{project5}}%</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item style="width: 400px">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Marketing DAO</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section side style="width: 150px">
            <q-slider v-model="project6"/>
          </q-item-section>

          <q-item-section align="right">
            <q-item-label>20 DAI</q-item-label>
            <q-item-label caption>{{project6}}%</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item style="width: 400px">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Recipient 7</q-item-label>
            <q-item-label caption>0x32fF...32Fv</q-item-label>
          </q-item-section>

          <q-item-section side style="width: 150px">
            <q-slider v-model="project7"/>
          </q-item-section>

          <q-item-section align="right">
            <q-item-label>20 DAI</q-item-label>
            <q-item-label caption>{{project7}}%</q-item-label>
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
  name: 'PageIndex',
  data() {
    return {
      project1: 20,
      project2: 20,
      project3: 20,
      project4: 20,
      project5: 20,
      project6: 20,
      project7: 20,
    }
  }
}
</script>
