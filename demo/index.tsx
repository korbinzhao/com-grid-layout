import React, { Component } from "react";
import ReactDOM from "react-dom";
import GridLayout from '../src/index';
import _ from "lodash";
// import MyComponent from '../lib/index';


const App = () => {


  const generateDOM = () => {

    const layout = [{
      static: true
    }, {
      static: false
    }, {
      static: true
    }, {
      static: false
    }, {
      static: true
    }, {
      static: true
    }, {
      static: true
    }];

    return _.map(layout, function(l, i) {
      return (
        <div key={i} className={l.static ? "static" : ""}>
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              Static - {i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      );
    });
  }

  return (
    <div>
      <GridLayout
        width={1000}
      >
        {generateDOM()}
      </GridLayout>
    </div>
  );
};

// export default App;

ReactDOM.render(<App />, document.getElementById("app"));
