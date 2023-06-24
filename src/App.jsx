import { lazy, Suspense, useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const SingleProject = lazy(() => import("./pages/SingleProject"));

function App() {
  // const [loading, setLoading] = useState(true);

  // useLayoutEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <div id="top" className="scroll-smooth overflow-x-hidden bg-[#111111]">
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<SingleProject />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
