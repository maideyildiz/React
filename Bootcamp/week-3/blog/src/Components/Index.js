import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import React from 'react'

function PullData() {
    const [posts, setPosts] = useState();

    useEffect(() => {
      fetchMyPosts();
    }, []);
  
    const fetchMyPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await response.json();
  
      setPosts(json);
    };

    if (!posts) 
    return (
    <div>
        <Spinner animation="border" variant="success" />
        </div>
    )
    return (

<Container  fluid>
  <Row style={{ display: "flex", justifyContent:"center" }}>
  {posts.map((post) => (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
        {post.title}
        </Card.Text>
      </Card.Body>
    </Card>
    ))}
  </Row>
</Container>

  
    )
}

export default PullData
