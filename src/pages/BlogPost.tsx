import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import './BlogPost.css'
import CommentSection from '../components/CommentSection'
import axios from 'axios' // Import axios for making HTTP requests
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import PaymentQR from './PatymentQR'
import TableOfContents from '../components/TableOfContents'

interface MarkdownComponentProps {
  article: {
    body_markdown: string
  }
}
const BlogPost = () => {
  const [article, setArticle] = useState<any>(null)
  const [leetCodeDetails, setLeetCodeDetails] = useState<any>(null) // State for LeetCode details
  const slug = window.location.pathname.split('/')?.[2]

  // Helper function to replace custom embed syntax with HTML
  // Function to replace custom embed syntax with HTML
  const processMarkdownContent = (markdown: string) => {
    // Example replacement for custom YouTube embed syntax
    return markdown.replace(
      /{% embed (https:\/\/www\.youtube\.com\/watch\?v=[^ ]+) %}/g,
      (match, url) => {
        const videoId = new URL(url).searchParams.get('v')
        return videoId
          ? `<iframe src="https://www.youtube.com/embed/${videoId}" width="748" height="421" frameborder="0" allowfullscreen></iframe>`
          : match
      }
    )
  }

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
      <TableOfContents />
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
      <ReactMarkdown
        className="markdown-body"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={materialDark}
                language={match[1]}
                showLineNumbers
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {processMarkdownContent(article.body_markdown)}
      </ReactMarkdown>
      <PaymentQR />
      <p className="published-by">Published by: {article.user.name}</p>
      {/* Render comments section */}
      {article.id && <CommentSection articleId={article.id} />}
    </div>
  )
}

export default BlogPost
