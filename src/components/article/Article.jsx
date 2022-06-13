import { useCallback, useEffect, useState } from "react";
import { getSingleArticle } from "../../util/api.mjs";
import "./article.scss";

const Article = props => {
  const [article, setArticle] = useState(null);

  const getArticle = useCallback(async name => {
    const response = await getSingleArticle(name);
    setArticle(response);
  }, []);

  useEffect(() => {
    getArticle(props.match.params.article);
  }, [getArticle, props.match.params.article]);

  if (!article) return <h2>Loading...</h2>;

  return <div>{article.title}</div>;
};

export default Article;
