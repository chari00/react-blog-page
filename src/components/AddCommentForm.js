import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

export default function AddCommentForm({articleName, onArticleUpdated}) {
    const [name, setName] =useState('');
    const [commentText, setCommentText] = useState('');
    const {user} = useUser;


    const addComment = async () => {
        const token =user && await user.getIdToken();
        const headers = token ? {authtoken: token} : {};
        const response = await axios.post(`/api/articles/${articleName}/comment`,{postedBy: name,
        text: commentText}, {headers});
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    }
    return(
        <>
        <div id='add-comment-form'>
            <h3> Add a comment</h3>
            {user && <p>you are posting as {user.email}</p>}
            {/* <label> Name: <input value={name} type="text" onChange={e =>setName(e.target.value)}/></label> */}
            <textarea value={commentText} onChange={e => setCommentText(e.target.value)}/>
            <button onClick={addComment}> Add Comment</button>

        </div>
        
        </>
    )
}