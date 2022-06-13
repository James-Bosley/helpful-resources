import { useCallback, useEffect, useState } from "react";
import { getSingleArticle } from "../../util/api.mjs";
import { useParams } from "react-router-dom";
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

  if (!article) return <h2>Loading...</h2>;

  return <div>{article.title}</div>;
};

export default Article;
