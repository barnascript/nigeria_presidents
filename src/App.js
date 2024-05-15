import Home from "./pages/home/Home";
import Profile from "./pages/Profile";
import Insights from "./pages/insights/Insights";
import { Routes, Route } from "react-router-dom";
import Glance from "./pages/atAGlance/Glance";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile/:id" element={<Profile />} />
      <Route exact path="/insights" element={<Insights />} />
      <Route exact path="/glance" element={<Glance />} />
    </Routes>
  );
};

export default App;
