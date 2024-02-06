import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./layouts/Header";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
