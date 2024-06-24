import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import './BlogPost.css'
import CommentSection from '../components/CommentSection'
import axios from 'axios' // Import axios for making HTTP requests

const BlogPost = () => {
  const [article, setArticle] = useState<any>(null)
  const [leetCodeDetails, setLeetCodeDetails] = useState<any>(null) // State for LeetCode details
  const slug = window.location.pathname.split('/')?.[2]

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Fetch article from dev.to
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
  }, [slug])
  const extractSlugFromLeetCodeSlug = (slug: any) => {
    // Split by 'leetcode-' and take the second part
    const parts = slug.split('leetcode-')[1]

    if (!parts) {
      // Handle case where 'leetcode-' prefix is not found
      return slug
    }

    // Split by '-' and remove the first part and the last part
    const partsArray = parts.split('-').slice(1, -1)

    // Join back the remaining parts with '-'
    const actualSlug = partsArray.join('-')

    return actualSlug
  }
  useEffect(() => {
    const fetchLeetCodeProblem = async () => {
      try {
        // Fetch problem details from LeetCode API
        const response = await axios.get(
          `https://alfa-leetcode-api.onrender.com/select?titleSlug=${extractSlugFromLeetCodeSlug(
            slug
          )}`
        )
        console.log(response)

        if (response.status === 200) {
          setLeetCodeDetails(
            Object.keys(response.data).length > 0 ? response.data : null
          ) // Set LeetCode details
        } else {
          throw new Error('Failed to fetch LeetCode problem')
        }
      } catch (error) {
        console.error('Error fetching LeetCode problem:', error)
      }
    }

    fetchLeetCodeProblem()
  }, [slug])

  if (!article) {
    return <div className="loading">Loading...</div> // Apply loading style
  }
  const exampleTestcases = leetCodeDetails?.exampleTestcases?.split('\n')

  return (
    <div className="blog-post-container">
      <a
        href={leetCodeDetails?.link ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="blog-post-link"
      >
        <h2 className="blog-post-title">
          <span>{article.title}</span>
          {/* {leetCodeDetails && (
            <span
              className={`difficulty-level ${leetCodeDetails.difficulty.toLowerCase()}`}
            >
              {leetCodeDetails.difficulty}
            </span>
          )} */}
        </h2>
      </a>
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
      {/* Display LeetCode problem details if available */}
      {leetCodeDetails && (
        <div
          className="leetcode-problem-details"
          // style={{ border: '1px solid #fff', padding: '20px' }}
        >
          <h3>Problem Description</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: leetCodeDetails.question,
            }}
          />

          {/* Display example test cases */}
          <h3>Example Test Cases</h3>
          <ul className="example-testcases">
            {exampleTestcases?.map((example: any, index: any) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </div>
      )}
      {leetCodeDetails !== null && (
        <div>
          <h3 style={{ marginTop: '20px' }}>
            Before diving into Solution go through the hints given in the
            problem{' '}
          </h3>
          {/* Display hints */}
          {leetCodeDetails?.hints.length > 0 && (
            <>
              <h2>Hints</h2>
              <ol className="hints">
                {leetCodeDetails?.hints?.map((hint: any, index: any) => (
                  <li key={index}>{hint}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      )}
      <h2 style={{ marginTop: '20px' }}>Solution </h2>
      <ReactMarkdown className="markdown-body">
        {article.body_markdown}
      </ReactMarkdown>
      <p className="published-by">Published by: {article.user.name}</p>
      <div style={{ display: 'grid' }}>
        <a
          href="https://ko-fi.com/rakeshreddy"
          target="_blank"
          rel="noopener noreferrer"
        >
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
      {/* Render comments section */}
      {article.id && <CommentSection articleId={article.id} />}
    </div>
  )
}

export default BlogPost
