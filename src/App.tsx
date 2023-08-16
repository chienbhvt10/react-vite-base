import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Login from "./modules/auth/pages/login";
import ChangePassword from "./modules/auth/pages/change-password";
import ProductsManagementPage from "./modules/products";
import createAppTheme from "./theme";
import DashboardPage from "./modules/dashboard";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={createAppTheme()}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="change-password" element={<ChangePassword />} />
            </Route>
            <Route path="/" element={<MainLayout />}>
              <Route path="" element={<DashboardPage />} index={true} />
              <Route path="products" element={<ProductsManagementPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
