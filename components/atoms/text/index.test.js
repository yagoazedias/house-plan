// Link.react.test.js
import React from 'react'
import renderer from 'react-test-renderer'
import { Text } from './index'

test('Testing text snapshot', () => {
    const component = renderer.create(<Text>My Test</Text>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})