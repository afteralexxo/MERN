
import { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:8080'


const Get = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/api`).then((response) => {
      setPosts(response.data)
    })
  }, [])

  async function handleDelete(e) {
    e.preventDefault()
    await axios.post(`${baseURL}/del`, { title: e.target.name })
      .then(response => {
        console.log(response.data);
      })
    window.location.reload(false)
  }

  function handleUpdate(e) {
    axios.put(`${baseURL}/update`, {})
  }

  if (posts.length < 1) {
    return <h1>There is No Post</h1>
  }

  else {
    return (
      <div className='card'>
        <h2>All Posts 📫 of Movie</h2>
        <div className="card-container">
          {posts.map((post, index) => {
            return (
              <div className="post-card" key={index}>
                <h1 className="post-title" key={index + 1}>{post.title}</h1>
                <p className="post-body" key={index + 2}><small>{post.body}</small></p>
                <div className='btns'>
                  <button type='submit' name={post.title} onClick={handleUpdate}><small>UPDATE</small></button>
                  <button type='submit' name={post.title} onClick={handleDelete}><small>DELETE</small></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}

export default Get;