import { useCallback, useEffect, useState, useRef } from "react";
import { getSingleArticle } from "../../util/api.mjs";
import { useParams } from "react-router-dom";
import TopicTable from "../topic-table/TopicTable";
import "./article.scss";

const Article = ({ searchTerm }) => {
  const [article, setArticle] = useState(null);

  const articleElement = useRef(null);

  const getArticle = useCallback(async name => {
    const response = await getSingleArticle(name);
    setArticle(response);
  }, []);

  let { articleName } = useParams();

  useEffect(() => {
    if (articleElement?.current?.classList) {
      articleElement.current.classList.add("article__exit");
      articleElement.current.classList.remove("article__new");
    }
    setTimeout(() => {
      getArticle(articleName);
    }, 400);
  }, [getArticle, articleName]);

  useEffect(() => {
    if (articleElement?.current?.classList) {
      articleElement.current.classList.add("article__new");
      articleElement.current.classList.remove("article__exit");
    }
  }, [article]);

  if (!article) return <h2 className="placeholder">Loading...</h2>;

  return (
    <article className="article" ref={articleElement}>
      <div className="article__info-container">
        <h2 className="article__title">{article.title}</h2>
        <p className="article__intro">{article.introduction}</p>
      </div>
      <TopicTable topics={article.topics} searchTerm={searchTerm} />
    </article>
  );
};

export default Article;
