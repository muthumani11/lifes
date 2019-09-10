import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.timerTick = this.timerTick.bind(this);

    console.log("Constructor!");
  }

  timerTick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  componentDidMount() {
    this.timer = setInterval(this.timerTick, 100);

    console.log("Component has mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated from: " + prevState.count);
  }

  render() {
    console.log("SimpleCounter render call!");

    return (
      <div>  <h1>Set Timer</h1>
        <h2>{this.state.count}</h2></div>

    );
  }
}


export default App;
