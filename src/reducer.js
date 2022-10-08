function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

let state = { count: 0 };
let action = { type: "counter/increment" };

changeState(state, action);

// display on page
function render() {
  document.body.textContent = state.count;
}
// render();

function dispatch(action) {
  state = changeState(state, action);
  // return state;
  render();
}

dispatch(action);
// { count: 1}
dispatch(action);
// { count: 2}
// dispatch(action);
// { count: 3}

// display on page
// function render() {
//   document.body.textContent = state.count;
// }
// render();
