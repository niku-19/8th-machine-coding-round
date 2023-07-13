import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meetup/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
