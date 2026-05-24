import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState, useEffect } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGetPost() {
    async function fetchData(postID = 1) {
      try {
        setError(null);
        setLoading(true);
        const data = await getSinglePost(postID);
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData(getRandomInt());
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleGetPost} disabled={loading}>
        {loading ? 'Loading ...' : 'Get post'}
      </button>
      {error && <p style={{ color: 'red', fontSize: '25px' }}>ERROR:{error}</p>}
      {loading ? (
        <p style={{ fontSize: '25px', color: 'blue' }}>Loading ...</p>
      ) : post ? (
        <div className="content">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : null}
    </div>
  );
}
