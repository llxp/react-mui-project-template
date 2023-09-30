import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import Layout from './index'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MUI from './mui';

describe('Layout', () => {
it('render and test the layout component', () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
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
it('render and test the mui component', () => {
  const container = render(<MUI ><p>Hello World</p></MUI>)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
  // make sure only <div><p>Hello World</p></div> is rendered inside the body container
  expect(container.container).toMatchInlineSnapshot(`<div>
  <p>
    Hello World
  </p>
</div>`)
})
});