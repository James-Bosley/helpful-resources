import { useCallback, useEffect, useState } from "react";
import { getSingleArticle } from "../../util/api.mjs";
import { useParams } from "react-router-dom";
import TopicTable from "../topic-table/TopicTable";
import "./article.scss";

const Article = props => {
  const [article, setArticle] = useState(null);

  const getArticle = useCallback(async name => {
    const response = await getSingleArticle(name);
    setArticle(response);
  }, []);

  let { articleName } = useParams();

  useEffect(() => {
    getArticle(articleName);
  }, [getArticle, articleName]);

  if (!article) return <h2 className="placeholder">Loading...</h2>;

  return (
    <article className="article">
      <h2 className="article__title">{article.title}</h2>
      <p className="article__intro">{article.introduction}</p>
      <TopicTable topics={article.topics} />
    </article>
  );
};

export default Article;
