import './core/styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './core/components/Layout/Layout';
import { routes } from './core/routes';

function App() {

  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                {routes.map(({ path, element: Element, index }) => (
                    <Route key={path} path={path} element={<Element />} index={index} />
                ))}
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
