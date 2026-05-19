import { useEffect, useState } from 'react';
import './Lesson07Styles.css';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading)
    return <p style={{ fontSize: '25px', color: 'blue' }}>Loading ...</p>;
  if (error)
    return <p style={{ color: 'red', fontSize: '25px' }}>ERROR: {error}</p>;

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
