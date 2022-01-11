import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Header, Home, Crew, Destination, Technology } from "../../components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
