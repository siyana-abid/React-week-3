
const logger = (store) => (next) => (action) => {
  console.log("Previous State:", store.getState());
  console.log("Action:", action.type);

  next(action);

  console.log("New State:", store.getState());
};

export default logger;
