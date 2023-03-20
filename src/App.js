import './App.css';
import {compose, pipe} from "lodash/fp";
import Currying from './components/Currying';
import Immutability from './components/Immutability';
// import UpdatedObject from './components/UpdatedObject';
// import UpdatingArray from './components/UpdatingArray';
// import Immutable from './components/Immutable';
import Immer from './components/Immer';
import store from './store/store';

function App() {

 let input = "    javascript   ";
//  let output = "<div>" + input.trim() +  "</div>";

 let trim = str => str.trim();
 const wrapInDiv = str => `<div>${str}</div>`;
 const toUparCase = str => str.toUpperCase();
 const toLowerCase = str => str.toLowerCase();

 const transform = pipe(trim, toLowerCase, wrapInDiv);
 const output = compose(wrapInDiv, toUparCase, trim);
const result = wrapInDiv(toUparCase(trim(input)));

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
})

store.dispatch({
  type: "bugAdded",
  payload: {
    description : "Bug1"
  }
});

unsubscribe();

store.dispatch({
  type:"bugRemoved",
  payload:{
    id:1
  }
});

return (
    <div className="App">
      {result}<br/>
      {transform(input)}<br/>
      {output(input)}<br/>
      <Currying/><br/>
      <Immutability/>
      {/* <UpdatedObject/> */}
      {/* <UpdatingArray/> */}
      {/* <Immutable/> */}
      <Immer/>
    </div>
  );
}

export default App;
