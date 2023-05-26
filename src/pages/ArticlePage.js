import { useParams } from "react-router-dom";
import articles from './articleContent';
import PageNotFound from './PageNotFound'
import { useState, useEffect } from "react";
import axios from 'axios';
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";


export default function ArticlePage () {
    const [articleInfo, setArticleInfo] = useState({upvotes:0, Comments:[]});
     const {articleId} =useParams();
     const {user, isLoading} = useUser();

    useEffect(() => {
        const loadArticleInfo = async () => {

            const response = await axios.get(`/api/articles/${articleId}`)
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();

        },[]);

    //use the url parameter value to load the correct article from article content file, display on the page.
   
    const article = articles.find(article => article.name === articleId);
    const addUpvote =async ()=> {
        const response =await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);

    }

    if (!article) {
        return <PageNotFound/>
    }

    return (
        <>
        <h3>{article.title}</h3>
        {/* //if user is not logged in, instead of displaying upvote button, display a button login to upvote  */}
        {user ? <button onClick={addUpvote}>upvote</button> : <button>Log in to upvote</button>}
        
        <p> This article has {articleInfo.upvotes} upvotes</p>
        {article.content.map((paragraph, i)=> (<p key ={i}>{paragraph}</p>))}

        {/* //hide the comment form if user is not logged in, display a button login to write a comment  */}
        {user ? <AddCommentForm articleName={articleId} onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}/> : <button> log in to write comment </button>}
        
        <CommentsList comments={articleInfo.comments}/>
        </>
    );
};