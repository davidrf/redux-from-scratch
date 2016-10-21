let writeToDocument = state => {
  let stateJson = JSON.stringify(state, null, 2);
  document.write(`<code>${stateJson}</code>`);
};

let initialState = { count: 0 };
writeToDocument(initialState);
