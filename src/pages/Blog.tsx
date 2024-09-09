import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import './Blog.css'
import axios from 'axios'
const Blog = () => {
  const DEV_API_KEY = 'yZmXLY3jYhWms39Gxgqnfc28'
  const BASE_URL = 'https://dev.to/api/'
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [leetCodeArticles, setLeetCodeArticles] = useState([])
  // Function to handle dropdown change
  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value)
  }

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value.toLowerCase())
  }

  async function fetchData(page: any, pageSize: any) {
    try {
      const response = await axios.get(
        `${BASE_URL}articles/me/published?page=${page}&per_page=${pageSize}`,
        {
          headers: {
            'api-key': DEV_API_KEY,
            mode: 'no-cors',
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
  const allTags: string[][] = blogs.map((blog: any) => blog.tag_list)
  const combinedTags: string[] = allTags.flat()
  const uniqueTags: string[] = Array.from(new Set(combinedTags))
  // Filtered blogs based on selected category
  // Ensure blogs is always an array and is filtered correctly
  const filteredBlogs = blogs
    .filter((blog: any) => {
      // Ensure tag_list is an array before using includes
      const tagList = Array.isArray(blog.tag_list) ? blog.tag_list : []
      return selectedCategory === 'all' || tagList.includes(selectedCategory)
    })
    .filter((blog: any) => {
      // Apply search query filter
      const query = searchQuery.toLowerCase()
      return (
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query)
      )
    })

  return (
    <>
      <div className="blog-page">
        <div className="header">
          <h1 className="heading">From the blog</h1>
          {/* Search bar */}
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          {/* Dropdown for selecting blog category */}
          <div className="dropdown-container">
            <select
              className="custom-dropdown"
              value={selectedCategory}
              onChange={handleChange}
            >
              <option value="all">All Blogs</option>
              {uniqueTags.map((tag) => {
                return (
                  <option key={tag} value={tag}>
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </option>
                )
              })}
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
