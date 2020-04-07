import React, { Component } from "react";
import ReactDOM from "react-dom";
import GridLayout from '../src/index';
// import MyComponent from '../lib/index';
import _ from "lodash";

import './index.less';


const App = () => {

  const generateDOM = () => {

    const layout = [{
      static: true,
      id: 111,
    }, {
      static: false,
      id: 222
    }, {
      static: true,
      id: 333
    }, {
      static: false,
      id: 444
    }, {
      static: true,
      id: 555
    }, {
      static: true,
      id: 666
    }, {
      static: true,
      id: 777
    }];

    return _.map(layout, function(l, i) {
      return (
        <div key={i} className={l.static ? "static" : ""} data-id={l.id} >
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
        width={1300}
        onLayoutChange={(layout)=> {
          console.log('--- onLayoutChange ---', layout);
        }}
      >
        {generateDOM()}
      </GridLayout>
    </div>
  );
};

// export default App;

ReactDOM.render(<App />, document.getElementById("app"));
