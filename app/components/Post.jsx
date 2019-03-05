import React from 'react'

const Post = props => {
  return (
    <tr>
      <td>{props.post.name}</td>
      <td>{props.post.desc}</td>
      <td>
        <button onClick={() => props.delete(props.post.id)} className="btn btn-danger btn-sm">
        Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Post;