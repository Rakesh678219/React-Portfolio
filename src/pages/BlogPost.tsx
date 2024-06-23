import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import moment from 'moment' // Import moment for date formatting
import './BlogPost.css' // Import your CSS file for styling
import CommentSection from '../components/CommentSection'

const BlogPost = () => {
  const [article, setArticle]: any = useState(null)
  const slug = window.location.pathname.split('/')?.[2]
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Replace {username} with the actual username
        const response = await fetch(
          `https://dev.to/api/articles/rakeshreddy512/${slug}`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch article')
        }

        const data = await response.json()
        setArticle(data)
      } catch (error) {
        console.error('Error fetching article:', error)
      }
    }

    fetchArticle()
  }, [])

  if (!article) {
    return <div className="loading">Loading...</div> // Apply loading style
  }

  return (
    <div className="blog-post-container">
      <h2 className="blog-post-title">{article.title}</h2>
      <div>
        <img
          width="100%"
          style={{ marginTop: '10px' }}
          src={
            article.cover_image ??
            'https://workablehr.s3.amazonaws.com/uploads/account/open_graph_logo/604858/social?1687549873000'
          }
          alt=""
        />
      </div>
      <div className="blog-post-meta">
        <p className="publish-date">
          Published on {moment(article.published_at).format('MMMM D, YYYY')}
        </p>
        <p className="reading-time">{article.reading_time_minutes} min read</p>
      </div>
      <ReactMarkdown className="markdown-body">
        {article.body_markdown}
      </ReactMarkdown>
      <p className="published-by">Published by: {article.user.name}</p>
      <div style={{ display: 'grid' }}>
        <a href="https://ko-fi.com/rakeshreddy" target="_blank">
          <img
            height="36"
            style={{
              border: '0px',
              height: '36px',
              marginTop: '30px',
              float: 'right',
            }}
            src="https://storage.ko-fi.com/cdn/kofi5.png?v=3"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
      </div>

      {article?.id && <CommentSection articleId={article?.id} />}
    </div>
  )
}

export default BlogPost
