import "./App.css";
import { Routes,Route } from "react-router-dom";
import PopXWelcome from "./pages/PopXWelcome";
import Login from "./pages/Login";
import PopXSignupForm from "./pages/PopXSignupForm";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <div className=" bg-white flex items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<PopXWelcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<PopXSignupForm/>}/>
        <Route path="/setting" element={<AccountSettings/>}/>
      </Routes>
    </div>
  );
}

export default App;
