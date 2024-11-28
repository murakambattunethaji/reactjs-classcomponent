import React, { Component } from 'react'


export class Childcomp extends Component {
  constructor(props) {
    super(props)
    this.state={
      name:'Nethaji'
    }
    console.log('lifecycle constructor 2')
  }

  static getDerivedStateFromProps(){
    console.log('lifecycle getDerivedStateFromProps 2')
    return null
  }

  componentDidMount(){
    console.log('lifecycle componentDidMount 2')
    
  }

  render() {
    console.log('lifecycle render 2')
    return (
      <div>
        <h1>this is child component 2</h1>

      </div>
    )
  }
}



