import React from 'react'
import renderer from 'react-test-renderer'
import { Ripple } from '..'

describe('Ripple', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Ripple />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
