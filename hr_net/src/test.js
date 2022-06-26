import  Modal  from './components/Modal'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import React from 'react'
import { screen } from '@testing-library/dom'


 test("modal should show up", function () {
     render(<Modal text={"modal title"} display={true}/>)
     const title = screen.getByText('modal title')
     expect(title).toBeInTheDocument()
 })



