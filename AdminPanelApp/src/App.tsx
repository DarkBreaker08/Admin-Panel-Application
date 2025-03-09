import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AdminLoginForm } from "./Components/AdminLoginForm/AdminLoginForm";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Protected } from "./Components/Protected/Protected";
import { Admin } from "./Components/Admin/Admin";
import { GlobalError } from "./Components/Admin/Errors/GlobalError";
import { AppError } from "./Components/Admin/Errors/AppError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AdminLoginForm />} />
      <Route element={<Protected />}>
        <Route
          path="/admin/:adminEmail"
          element={<Admin />}
          errorElement={<AppError />}
        />
      </Route>
      <Route path="/error" element={<GlobalError />} />
      <Route path="*" element={<GlobalError />} />
    </>
  )
);

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />;
      </Provider>
    </QueryClientProvider>
  );
};
