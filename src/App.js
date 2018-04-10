import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContIn from './hoc/ContIn';
import ContOut from './hoc/ContOut';
import PresIn from './loc/PresIn';
import PresOut from './loc/PresOut';

const In = ContIn(PresIn);
const Out = ContOut(PresOut);

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/contin">ContIn</Link>
                    </li>
                    <li>
                        <Link to="/contout">ContOut</Link>
                    </li>
                </ul>
                <hr />
                <Route path="/contin" component={In} />
                <Route path="/contout" component={Out} />
            </div>
        </Router>
    );
  }
}

export default App;
