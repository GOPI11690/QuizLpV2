import { useLayoutEffect } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuizPage from "./components/QuizPage";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Content />} />    {/* homepage */}
            <Route path="/quizpage" element={<QuizPage />} /> {/* quizpage */}
          </Routes>
        </Wrapper>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
