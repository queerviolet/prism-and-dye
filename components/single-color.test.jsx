import React from 'react'
import {shallow} from 'enzyme'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())

import SingleColor from './single-color'

describe('<SingleColor />', () => {
  it('has a background-color of rgb(props.r, props.g, props.b)', () => {
    const color = shallow(<SingleColor r={0} g={0} b={255} />)
    expect(color).to.have.style('background-color', 'rgb(0, 0, 255)')
  })

  it('shows the name of the color as it was passed in', () => {
    const color = shallow(<SingleColor name='fuchsia' />)
    const colorName = color.find('.color-name')
    expect(colorName).to.have.length(1)
    expect(colorName).to.have.text('fuchsia')
  })

  it('shows the name of the color as hex', () => {
    const color = shallow(<SingleColor r={255} g={0} b={255}/>)
    const colorName = color.find('.color-name-hex')
    expect(colorName).to.have.length(1)
    expect(colorName).to.have.text('#ff00ff')
  })
})
