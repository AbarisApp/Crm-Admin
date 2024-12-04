import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postComments, getCommentsByUser } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import { setCommentss } from '../../slice/auth';
import { useDispatch } from 'react-redux';

function Comments() {
    const params = useParams();

    const [comments, setComments] = useState([]); // To store comments
    const [newComment, setNewComment] = useState(''); // For new comment input
    const [loading, setLoading] = useState(false); // Loading state for post requests

    // Fetch existing comments from API
    const dispatch = useDispatch();
    const fetchComments = async () => {
        try {
            if (params?.id) {
                const response = await getCommentsByUser(params.id);
                setComments(response.data);
                dispatch(setCommentss(response.data.length));
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [params?.id]);

    // Post a new comment
    const postComment = async () => {
        if (!newComment.trim()) return; // Prevent posting empty comments

        setLoading(true);
        try {
            const commentData = { comment: newComment, user_id: params?.id };
            const response = await postComments(commentData);

            if (response?.statusCode == "200") {
                toast.success("Comment added successfully", { position: "top-center" });
                fetchComments()
            }
        } catch (error) {
            console.error("Error posting comment:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <ToastContainer />
            <div className="row">
                <div className="col-12">
                    <div className="card p-3">
                        <div className="row">
                            <div className="col-12 mb-2">
                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea"
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        disabled={loading}
                                    />
                                    <label htmlFor="floatingTextarea">Comments</label>
                                    <button
                                        className="btn btn-primary mt-2"
                                        onClick={postComment}
                                        disabled={loading}
                                    >
                                        {loading ? 'Posting...' : 'Post'}
                                    </button>
                                </div>
                            </div>
                            <div className="col-12">
                                {comments.length > 0 ? (
                                    <ul className="list-group">
                                        {comments.map((comment, index) => (
                                            <li key={index} className="list-group-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{fontSize:"18px" , fontWeight:"600"}}>Comment : {comment.comment}</span>
                                                <span>Comment By : {comment.createdBy?.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div>No Comments</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;
