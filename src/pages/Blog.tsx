import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import './Blog.css'
import axios from 'axios'
const Blog = () => {
  const DEV_API_KEY = 'yZmXLY3jYhWms39Gxgqnfc28'
  const BASE_URL = 'https://dev.to/api/'
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState('all')

  const [leetCodeArticles, setLeetCodeArticles] = useState([])
  // Function to handle dropdown change
  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value)
  }

  async function fetchData(page: any, pageSize: any) {
    try {
      const response = await axios.get(
        `${BASE_URL}articles/me/published?page=${page}&per_page=${pageSize}`,
        {
          headers: {
            'api-key': DEV_API_KEY,
          },
        }
      )
      setLeetCodeArticles(response.data)
      return response.data // Assuming you want to return the response data
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error // Handle or propagate the error as needed
    }
  }

  useEffect(() => {
    // Example usage:
    const page = 1
    const pageSize = 10
    fetchData(page, pageSize)
      .then((data) => {
        console.log('Fetched data:', data)
        // Handle data as needed
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error)
        // Handle error as needed
      })
  }, [])
  // Sample data for blogs
  const blogs: any = leetCodeArticles
  // Filtered blogs based on selected category
  const filteredBlogs =
    selectedCategory === 'all'
      ? blogs
      : blogs.filter((blog: any) => blog.tag_list.includes(selectedCategory))

  return (
    <>
      <div className="blog-page">
        <div className="header">
          <h1 className="heading">From the blog</h1>
          {/* Dropdown for selecting blog category */}
          <div className="dropdown-container">
            <select
              className="custom-dropdown"
              value={selectedCategory}
              onChange={handleChange}
            >
              <option value="all">All Blogs</option>
              <option value="leetcode">LeetCode Series</option>
              <option value="cooking">Cooking</option>
            </select>
          </div>
        </div>
        <ul className="auto-grid-blog">
          {/* Mapping through filtered blogs */}
          {filteredBlogs.map((blog: any) => (
            <li key={blog.id}>
              <BlogCard
                slug={blog.slug}
                title={blog.title}
                img={
                  blog.cover_image ??
                  'https://workablehr.s3.amazonaws.com/uploads/account/open_graph_logo/604858/social?1687549873000'
                }
                content={blog.description}
                createdBy={blog.user.username} // You may add createdBy and createdAt props if needed
                createdAt={blog.published_timestamp}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Blog
