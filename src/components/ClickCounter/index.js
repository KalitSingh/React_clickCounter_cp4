import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    console.log(
      'Here I am using this.setState method which takes object or function as an argument',
    )
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="counterContainer">
        <h1 className="heading">
          The Button has been clicked <br />{' '}
          <span className="counter">{count}</span> times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
