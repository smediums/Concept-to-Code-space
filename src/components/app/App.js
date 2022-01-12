import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Header, Home, Crew, Destination, Technology } from "../../components";
import "./App.scss";
import data from "../../data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<Destination data={data.destinations} />}
        />
        <Route path="/crew" element={<Crew data={data.crew} />} />
        <Route
          path="/technology"
          element={<Technology data={data.technology} />}
        />
      </Routes>
    </div>
  );
}

export default App;
