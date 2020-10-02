import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Card extends Component {
    render() {
        return (
            <div>
                  <div className="card">
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
          <li><Link to ="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="card-content grey lighten-4">
          <div id="test4">Test 1</div>
          <div id="test5">Test 2</div>
          <div id="test6">Test 3</div>
        </div>
      </div>
            </div>
        )
    }
}
