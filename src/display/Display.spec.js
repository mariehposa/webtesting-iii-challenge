// Test away!

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper

beforeEach(() => {
    // wrapper = rtl.render(<Display />)
})

describe('Display component', () => {

    it('gate is opened', () => {
        wrapper = rtl.render(<Display />)
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument()
    })
    it('gate is unlocked', () => {
        wrapper = rtl.render(<Display />)
        expect(wrapper.queryByText(/unlock/i)).toBeInTheDocument()
    })
    
    test('display closed if closed prop is true', () => {
        wrapper = rtl.render(<Display closed = {true} />)
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument()
    })
    test('display open if closed prop is false', () => {
        wrapper = rtl.render(<Display closed = {false}/>)
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument()
    })
    test('display locked if locked prop is true', () => {
        wrapper = rtl.render(<Display locked = {true} />)
        expect(wrapper.queryByText(/locked/i)).toBeInTheDocument()
    })
    test('display unlocked if locked prop is false', () => {
        wrapper = rtl.render(<Display locked = {false} />)
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument()
    })
    test('when locked display red-led', () => {
        wrapper = rtl.render(<Display locked = {true} />)
        expect(wrapper.queryByText(/locked/i)).toHaveClass('red-led')
    })
    test('when closed display red-led', () => {
        wrapper = rtl.render(<Display closed = {true} />)
        expect(wrapper.queryByText(/closed/i)).toHaveClass('red-led')
    })
})