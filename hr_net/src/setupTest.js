import '@testing-library/jest-dom/extend-expect'

import { Modal } from './Modal'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { screen } from '@testing-library/dom'


// test("modal should show up", function () {
//     render(<Modal title="modal title" onClose={() => null}>Bonjour</Modal>)
//     const title = screen.getByText('modal title')
//     expect(title).toBeInTheDocument()
// })

