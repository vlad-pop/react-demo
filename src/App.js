import React from 'react';
import MyInput from './MyInput'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            user: {}
        }
    }
  handleClick() {
        this.setState({ name: 'New name', age: 10 })
  }
  handleSecondClick() {
        this.setState({ name: 'Other value', age: 40 })
  }
  handleChange(event) {
        // console.log(event)
        // debugger
        this.setState({ name: event.target.value, age: 40 })
  }
  render() {
    return (
      <div className="App">
          <MyInput name={ this.state.name } age={ this.state.age }
              handleClick={ this.handleSecondClick.bind(this) }
              handleChange={ this.handleChange.bind(this) }
          >
              <button onClick={ this.handleClick.bind(this) }>Click me</button>
          </MyInput>
      </div>
    );
  }
}

export default App;
