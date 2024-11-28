import React, { Component } from 'react'
import { Childcomp } from './Chaildcomp'


export class Parentcomp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Nethaji'
    }
    console.log('lifecycle constructor 1')
  }

  static getDerivedStateFromProps() {
    console.log('lifecycle getDerivedStateFromProps 1')
  }

  componentDidMount() {
    console.log('lifecycle componentDidMount 1')
  }

  changestate = () => {
    this.setState({
      name: 'surya'
    })
  }

  render() {
    console.log('lifecycle render 1')
    return (
      <div>
        <div>
          <h1>this is parent component 1</h1>
        </div>
        <button onClick={this.changestate}>change state</button>
        <Childcomp />
      </div>


    )
  }
}



