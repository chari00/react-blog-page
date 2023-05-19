import { useParams } from "react-router-dom";
import articles from './articleContent';
import PageNotFound from './PageNotFound'


export default function ArticlePage () {
    //use the url parameter value to load the correct article from article content file, display on the page.
    const {articleId} =useParams();
    const article = articles.find(article => article.name === articleId);

    if (!article) {
        return <PageNotFound/>
    }

    return (
        <>
        <h3>{article.title}</h3>
        {article.content.map(paragraph => (<p key ={paragraph}>{paragraph}</p>))}
        </>
    )
};