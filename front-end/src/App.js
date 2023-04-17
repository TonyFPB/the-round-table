import GlobalStyle from "./assets/Styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignPages/SignUp";
import Login from "./pages/SignPages/Login";
import { ToastContainer } from 'react-toastify';
import Table from "./pages/Tables/Table";
import { OneTable } from "./pages/OneTable/OneTable";
import { ChangePlayerProvider } from "./contexts/ChangePlayerContext";
import CreateTable from "./pages/CreateTable/CreateTable";

function App() {
  return (
    <>

      <ToastContainer />
      <ChangePlayerProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="/tables" element={<Table />} />
            <Route path="/table/:name" element={<OneTable />} />
            <Route path="/criação" element={<CreateTable />} />
          </Routes>
        </BrowserRouter>
      </ChangePlayerProvider>
    </>
  );
}

export default App;
