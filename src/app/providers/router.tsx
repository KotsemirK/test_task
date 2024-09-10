import { createRootRoute, createRoute, Link, Outlet } from "@tanstack/react-router";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex justify-between items-center">
        <NavigationMenu.Root className="flex gap-4">
          <NavigationMenu.List className="flex gap-2">
            <NavigationMenu.Item>
              <Link
                to={indexRoute.to}
                activeOptions={{ exact: true }}
                className="[&.active]:font-bold text-blue-500 hover:underline"
              >
                Home
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link
                to={loginRoute.to}
                className="[&.active]:font-bold text-blue-500 hover:underline"
              >
                Login
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <TanStackRouterDevtools />
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'login',
  component: Login,
});

export const routeTree = rootRoute.addChildren([indexRoute, loginRoute]);
