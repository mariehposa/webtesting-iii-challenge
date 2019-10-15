// Test away!

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Control from './Controls';
import { fireEvent } from '@testing-library/react';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Control />)
})

describe('dashboard component', () => {
    test('provide button to toggle to closed and locked states', () => {
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument()
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument()
    })

    test('button text changes when clicked', () => {
        let closeGate = wrapper.queryByText(/close gate/i)
        let lockGate = wrapper.queryByText(/lock gate/i)

        rtl.fireEvent.click(closeGate)
        wrapper.debug()
        expect(wrapper.queryByText(/Open Gate/i)).toBeInTheDocument()
    })
})