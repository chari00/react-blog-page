import { useState } from "react";
import axios from "axios";

export default function AddCommentForm({articleName, onArticleUpdated}) {
    const [name, setName] =useState('');
    const [commentText, setCommentText] = useState('');
    const addComment = async () => {
        const response = await axios.post(`/api/articles/${articleName}/comment`,{postedBy: name,
        text: commentText});
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    }
    return(
        <>
        <div id='add-comment-form'>
            <h3> Add a comment</h3>
            <label> Name: <input value={name} type="text" onChange={e =>setName(e.target.value)}/></label>
            <label>Comment: <textarea value={commentText} onChange={e => setCommentText(e.target.value)}/></label>
            <button onClick={addComment}> Add Comment</button>

        </div>
        
        </>
    )
}