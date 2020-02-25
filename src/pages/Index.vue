<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 500px;">
      <q-list class="flex column full-width">
        <ProjectCard
          v-for="projectId in projectIds"
          :key="projectId"
          :projectId="projectId"
        />
      </q-list>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import ProjectCard from "components/ProjectCard";
export default {
  name: "PageIndex",
  data() {
    return {
      total: 140
    };
  },
  computed: {
    projectIds() {
      return [1, 2, 3, 4, 5];
    }
  },
  components: {
    ProjectCard
  }
};
</script>
