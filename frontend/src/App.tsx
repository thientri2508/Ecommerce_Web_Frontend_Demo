import "./core/styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./core/components/Layout/Layout";
import { routes } from "./core/routes";
import { ScrollToTop } from "react-router-scroll-to-top";
import PrivateRoute from "./core/components/routes/PrivateRoute";
import PublicRoute from "./core/components/routes/PublicRoute";

function App() {
  const isAuthenticated = true;

  return (
    <BrowserRouter basename="/Ecommerce_Web_Frontend_Demo/">
      <Layout>
        <ScrollToTop />
        <Routes>
          {routes.map(({ path, element: Element, index, isPrivate }) => (
            <Route
              key={path}
              path={path}
              element={
                isPrivate ? (
                  <PrivateRoute element={<Element />} isAuthenticated={isAuthenticated} />
                ) : (
                  <PublicRoute element={<Element />} />
                )
              }
              index={index}
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
