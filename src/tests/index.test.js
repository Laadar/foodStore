import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Loader from '@/components/Loader'

describe('Loader component', () => {
    it('should have right elements in the dom', () => {
        const { container } = render(<Loader />)
        const modalLoader = container.firstChild
        const loader = modalLoader.firstChild

        expect(modalLoader.contains(loader)).toBeTruthy()
    })

    afterAll(cleanup)
})
