/**
 * Get a project's donation amount by id.
 */
export function amountById(state) {
  return id => {
    return state.data.find(project => project.id === id).amount;
  };
}

/**
 * Get a project's name by id.
 */
export function nameById(state) {
  return id => {
    return state.data.find(project => project.id === id).name;
  };
}

/**
 * Get a project's total percentage of donation by id.
 */
export function percentageById(state) {
  return id => {
    return state.data.find(project => project.id === id).percentage;
  };
}
