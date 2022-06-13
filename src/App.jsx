import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { getArticleList } from "./util/api.mjs";
import Header from "./components/header/Header";
import SideNav from "./components/side-nav/SideNav";
import Home from "./components/home/Home";
import Article from "./components/article/Article";
import "./app.scss";

const App = () => {
  const [subjectList, setSubjectList] = useState([]);

  const getList = useCallback(async () => {
    const response = await getArticleList();
    setSubjectList(response);
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <>
      <Header />
      <main>
        <SideNav list={subjectList} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:article" element={<Article />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
