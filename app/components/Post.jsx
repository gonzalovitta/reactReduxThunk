import React from 'react'

const Post = props => {
  return (
    <tr>
      <td>{props.post.name}</td>
      <td>{props.post.desc}</td>
      <td><button onClick={() => props.delete(props.post.id)}>DELETE</button></td>
    </tr>
  )
}

export default Post;