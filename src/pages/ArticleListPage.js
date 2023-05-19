import articles from "./articleContent"
import { Link } from "react-router-dom"

export default function ArticleListPage () {
    return (
        //link article content to display on the page 
        //loop over each article content.
        <>
        {articles.map(article => 
        <Link key={article.name} to={`/articles/${article.name}`}>
            <h1>{article.title}</h1>
             <p >{article.content[0].substring(0, 150)}...</p>
        </Link>)}
        
        </>
    )
};