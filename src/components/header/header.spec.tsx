import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './index';

describe('Header', () => {
it('render and test the layout component', () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Header title="title" routes={[]}><p>Hello World</p></Header>,
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