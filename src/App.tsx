import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./app/providers/router";

const router = createRouter({ routeTree, defaultPreload: 'intent' });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App
