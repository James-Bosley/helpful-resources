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
  const [searchTerm, setSearchTerm] = useState("");

  const getList = useCallback(async () => {
    const response = await getArticleList();
    setSubjectList(response);
  }, []);

  const handleSearchInput = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <>
      <Header searchTerm={searchTerm} handleChange={handleSearchInput} />
      <main className="main-container">
        <SideNav list={subjectList} searchTerm={searchTerm} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":articleName" element={<Article searchTerm={searchTerm} />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
