import Header from "./components/Header/Header";
import CardListing from "./pages/CardListing/CardListing";
import CardDetails from "./pages/CardDetails/CardDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  if (localStorage.theme == "dark")
    document.documentElement.classList.add("dark");

  return (
    <div className="h-full min-h-lvh bg-very-light-gray dark:bg-very-dark-blue">
      <Header />
      <Routes>
        <Route path="/" element={<CardListing />} />
        <Route path="/:country" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
