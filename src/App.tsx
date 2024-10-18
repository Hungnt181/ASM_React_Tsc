import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutWebsite from "./pages/layout";
import HomePage from "./pages/(website)/home/page";
import ShopPage from "./pages/(website)/shop/page";
import ProductDetailPage from "./pages/(website)/productDetail/page";
import LayoutAdmin from "./pages/(admin)/layout";
import ListProductsPage from "./pages/(admin)/list";
import AddProductPage from "./pages/(admin)/add";
import EditProductPage from "./pages/(admin)/edit";
import LayoutAuth from "./pages/(auth)/layout";
import SignupPage from "./pages/(auth)/signup";
import SigninPage from "./pages/(auth)/signin";
import ProtectedRoute from "./ProtectedToken";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <LayoutAdmin />
            </ProtectedRoute>
          }
        >
          <Route index element={<ListProductsPage />} />
          <Route path="add" element={<AddProductPage />} />
          <Route path="edit/:id" element={<EditProductPage />} />
        </Route>

        <Route path="/auth" element={<LayoutAuth />}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="signin" element={<SigninPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
