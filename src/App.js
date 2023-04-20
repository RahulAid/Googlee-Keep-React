import "./App.css";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArchiveBoard from "./Pages/ArchiveBoard";
import TrashBoard from "./Pages/TrashBoard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route eaxct path="/" Component={LoginPage} />
          <Route eaxct path="/signup" Component={SignUpPage} />
          <Route exact path="/dashboard" Component={Dashboard} />
          <Route exact path="/archive" Component={ArchiveBoard} />
          <Route exact path="/trash" Component={TrashBoard} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
