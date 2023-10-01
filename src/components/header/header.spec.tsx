import { expect, it, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './index';

describe('Header', () => {
it('render and test the layout component', () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Header title="title" routes={[
          {
            title: "link1",
            showInHeader: true,
            showInDrawer: true,
            showInFooter: false,
          },
        ]}/>,
      },
    ]);
    render(<RouterProvider router={router}></RouterProvider>)
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getAllByText('link1')).toHaveLength(2)
  })
});