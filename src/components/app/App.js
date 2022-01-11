import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Header, Home, Crew, Destination, Technology } from "../../components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
