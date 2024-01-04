import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
