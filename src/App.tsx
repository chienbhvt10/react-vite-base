import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Login from "./modules/auth/pages/login";
import ChangePassword from "./modules/auth/pages/change-password";
import ProductsManagementPage from "./modules/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="products" element={<ProductsManagementPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
