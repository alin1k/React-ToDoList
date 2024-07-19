export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('lists');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('lists', serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};