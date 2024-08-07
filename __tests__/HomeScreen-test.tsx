import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import HomeScreen from '../src/HomeScreen';

describe('Testing HomeScreen',() => {
    test('Home snapShot', ()=> {
        const snap = renderer.create(
            <HomeScreen/>
        )
    expect(snap).toMatchSnapshot() 
    })
})