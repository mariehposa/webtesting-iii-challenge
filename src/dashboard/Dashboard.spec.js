// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

let wrapper, incSyncButton;

beforeEach(() => {
    wrapper = rtl.render(<Dashboard />)
})

describe('dashboard component', () => {

    it('defaults to unlocked', () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument()
    })

    it('defaults to open', () => {
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument()
    })

    it('cannot be closed or opened when locked', () => {
        let gateClose = wrapper.queryByText(/close gate/i)
        let gateLock = wrapper.queryByText(/lock gate/i)

        expect(wrapper.queryByText(/closed/i)).not.toBeInTheDocument()
        rtl.fireEvent.click(gateClose)
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument()

        rtl.fireEvent.click(gateLock)
        expect(wrapper.queryByText('Open')).not.toBeInTheDocument()
        expect(wrapper.queryByText(/unlock Gate/i)).toBeInTheDocument()
    })
})