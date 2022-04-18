import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export class Hero extends Component {
  render() {
      if(this.props.hero==='Joker')
      {
          throw new Error("Not a hero")
      }
    return (
      <div>
          <h4>{this.props.hero}</h4>
      </div>
    )
  }
}

export default Hero