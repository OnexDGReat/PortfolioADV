import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Journal } from "./pages/Journal";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route index element={<Home />} />
          <Route path="journal" element={<Journal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // try immediate scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
      // fallback: wait for DOM to render
      const t = setTimeout(() => {
        const el2 = document.getElementById(id);
        if (el2) el2.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => clearTimeout(t);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}

export default App;
