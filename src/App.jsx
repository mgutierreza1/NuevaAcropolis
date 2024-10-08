import { RouterProvider } from 'react-router-dom';
import { router } from './core/routes/routes.jsx';
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  return (
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  )
}

export default App
