import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import Main from './index'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

describe('Layout', () => {
  it('render and test the layout component', () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Main />,
        children: [
          {
            path: '/',
            element: <p>Hello World</p>,
          },
        ]
      },
    ]);
    render(<RouterProvider router={router}></RouterProvider>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
});