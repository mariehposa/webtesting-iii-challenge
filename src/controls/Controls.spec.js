// Test away!

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Control from './Controls';

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
})