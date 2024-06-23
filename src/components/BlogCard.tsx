import React from 'react'
import Button from './Button'
import './BlogCard.css'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const BlogCard = (props: any) => {
  const navigate = useNavigate()
  const localTime = moment.utc(props.createdAt).local()

  const handleReadMore = () => {
    navigate(`/blog/${props.slug}`)
  }
  return (
    <div className="blog-card-container" onClick={handleReadMore}>
      <img width="100%" src={props.img} alt="" />
      <small>
        By <strong className="created-by">{props.createdBy}</strong> |{' '}
        {moment(localTime.format()).format('YYYY-MM-DD HH:mm:ss')}
      </small>
      <h3 className="sub-heading">{props.title}</h3>
      <p className="text-content">{props.content.substring(0, 120) + '...'}</p>
      <Button title={'Read more...'} onClick={handleReadMore} />
    </div>
  )
}

export default BlogCard
