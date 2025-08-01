import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page'; 
import { UiShell } from 'ui-shell';
const router = createBrowserRouter([
  {
    element: <UiShell />, 
    children: [
      {
        element: <HomePage />,
        path: '/',
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
