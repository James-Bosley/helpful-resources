import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SideNav from "./components/side-nav/SideNav";
import Home from "./components/home/Home";
import Article from "./components/article/Article";
import "./app.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:article" element={<Article />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
