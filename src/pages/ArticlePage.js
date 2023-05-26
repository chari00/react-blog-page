import { useParams } from "react-router-dom";
import articles from './articleContent';
import PageNotFound from './PageNotFound'
import { useState, useEffect } from "react";
import axios from 'axios';
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";


export default function ArticlePage () {
    const [articleInfo, setArticleInfo] = useState({upvotes:0, Comments:[]});
     const {articleId} =useParams();

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
        <button onClick={addUpvote}>upvote</button>
        <p> This article has {articleInfo.upvotes} upvotes</p>
        {article.content.map((paragraph, i)=> (<p key ={i}>{paragraph}</p>))}
        <AddCommentForm articleName={articleId} onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}/>
        <CommentsList comments={articleInfo.comments}/>
        </>
    );
};