import React from 'react'
import {shallow} from 'enzyme'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())

import SingleColor from './single-color'

describe('<SingleColor />', () => {
  it('has a background-color of props.color', () => {
    const color = shallow(<SingleColor color='blue' />)
    expect(color).to.have.style('background-color', 'blue')
  })
})
