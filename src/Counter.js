import React, { Component } from "react";
import coffee from './coffee-mug.png';

class Counter extends Component {
  constructor({props}) {
    super({props});
    this.state= {
     count: parseInt(props.count),
     today : props.date,
    }
  }

  changeCount = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
  }));
  this.setState({today:new Date()})
  localStorage.setItem('date',new Date());
  localStorage.setItem('coffeeCount',this.state.count+1);
  }

  clearCounter = () => {
    this.setState({count:0})
    localStorage.removeItem('coffeeCount');
    localStorage.removeItem('date');
  }

  render() {
    return (
      <div className="Content">
        <div className="coffeeMug" >
          <img alt="coffee-mug" onClick={this.changeCount} src={coffee} />
        </div>
        <div className="counter">
        {this.state.count}
        </div> 
        <div className="clearCount">
        <span onClick={this.clearCounter}>Reset</span>
        <p>Last Coffee at:{this.today}</p>
        </div>
      </div>
    );
  }
}

// { this.state.today.getHours() + ":" + this.state.today.getMinutes() + ":" + this.state.today.getSeconds()}

export default Counter;
