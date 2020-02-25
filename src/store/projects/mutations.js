export function setSliderById(state, { projectId, percentage }) {
  const project = state.data.find(project => project.id === projectId);
  project.percentage = percentage;

  const sum = state.data.reduce((sum, project) => {
    return sum + project.percentage;
  }, 0);

  const diff = sum - 100;
  let remainder = 0;

  state.data.forEach(project => {
    if (project.id != projectId && project.percentage != 0) {
      //don't modify the slider which is being dragged
      let val = project.percentage - diff / (state.data.length - 1);
      if (val < 0) {
        remainder += val;
        val = 0;
      }
      project.percentage = val;
    }
  });

  if (remainder) {
    const filteredLength = state.data.filter(
      project => project.percentage > 0 && project.id != projectId
    ).length;
    state.data.forEach(project => {
      if (project.id != projectId && project.percentage > 0) {
        project.percentage = project.percentage + remainder / filteredLength;
      }
    });
  }
}

// export function _setOtherSliders(state, projectId) {

// }
