import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Interweave } from 'interweave'
import moment from 'moment'
import './CommentSection.css'

const Comment = ({ comment }) => {
  const commentedBy = comment.user.name
  const commentUserImage = comment.user.profile_image_90
  const commentedTime = moment(comment.created_at).format(
    'MMMM Do YYYY, h:mm:ss a'
  )

  return (
    <div className="comment">
      <div className="comment-header">
        <img
          className="comment-user-image"
          src={commentUserImage}
          alt={`${commentedBy}'s profile`}
        />
        <div className="comment-info">
          <span className="comment-by">{commentedBy}</span>
          <span className="commented-time">{commentedTime}</span>
        </div>
      </div>
      <Interweave content={comment.body_html} />
      {/* Render children comments recursively */}
      {comment.children.length > 0 && (
        <div className="children-comments">
          {comment.children.map((child) => (
            <Comment key={child.id_code} comment={child} />
          ))}
        </div>
      )}
    </div>
  )
}

const CommentSection = (props: any) => {
  const articleId = props.articleId
  const [commentsData, setCommentsData] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://dev.to/api/comments?a_id=${articleId}`
        )
        setCommentsData(response.data) // Assuming response.data is an array of comments
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }

    fetchComments()
  }, [articleId])

  return (
    <div className="comment-section">
      <h2>Top Comments ({commentsData.length})</h2>
      {commentsData.map((comment: any) => (
        <Comment key={comment.id_code} comment={comment} />
      ))}
    </div>
  )
}

export default CommentSection
