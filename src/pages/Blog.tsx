import React, { useState } from 'react'
import BlogCard from '../components/BlogCard'
import './Blog.css'

const Blog = () => {
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Function to handle dropdown change
  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value)
  }

  // Sample data for blogs
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      category: 'leetcode',
      img: require('../images/test.jpg'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus magna. Mauris vel erat vel eros efficitur ultricies. Duis nec est fermentum, dignissim odio in, feugiat ante. Integer et risus eleifend, tincidunt orci eu, feugiat purus. Etiam finibus lacus ut lorem malesuada, vitae pharetra magna condimentum. Nam lobortis scelerisque ligula, at dictum urna. Nulla facilisi. Proin scelerisque dolor nec luctus vehicula. Morbi pellentesque, velit vel lacinia consectetur, justo risus condimentum nisl, non tristique dolor turpis et tortor. Aliquam consequat enim vel scelerisque. Morbi eget velit velit. Vestibulum vitae leo felis. Aliquam erat volutpat.',
      createdBy: 'Rakesh',
      createdAt: '2024-06-22', // Example date, adjust as needed
    },
    {
      id: 2,
      title: 'Blog 2',
      category: 'cooking',
      img: require('../images/bg-7.jpg'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, velit ut sodales laoreet, ligula felis tincidunt quam, vel fringilla elit dui sit amet dolor. Morbi pharetra nunc sit amet velit maximus gravida. Proin at felis non lacus fermentum gravida non eget quam. Donec ac augue ut augue consectetur mollis. Fusce a nisi sit amet nulla ultricies pharetra a eu lorem. In ac lorem et tortor blandit aliquet sit amet vel mi. Nullam in fermentum sapien.',
      createdBy: 'Rakesh',
      createdAt: '2024-06-23', // Example date, adjust as needed
    },
    {
      id: 3,
      title: 'Blog 3',
      category: 'leetcode',
      img: require('../images/bg-11.jpg'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris eu mauris mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ut est efficitur, tempor purus sit amet, vehicula felis. Suspendisse potenti. Sed eget eros vel libero fermentum euismod. Sed aliquam rutrum neque vitae interdum. Nullam nec efficitur odio.',
      createdBy: 'Rakesh',
      createdAt: '2024-06-24', // Example date, adjust as needed
    },
    {
      id: 4,
      title: 'Blog 4',
      category: 'cooking',
      img: require('../images/bg-3.jpg'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec mollis lacus. Mauris tristique velit a felis lacinia, id suscipit dolor maximus. Aliquam erat volutpat. Nunc sit amet malesuada justo. Donec scelerisque est vitae sapien luctus, id luctus velit fermentum. Cras aliquam accumsan magna, vel malesuada purus consectetur a. Curabitur vel libero ligula. Quisque convallis consequat sem, ac lobortis sem fringilla vitae. Duis vitae erat vitae odio tristique rhoncus.',
      createdBy: 'Rakesh',
      createdAt: '2024-06-25', // Example date, adjust as needed
    },
    {
      id: 5,
      title: 'Blog 5',
      category: 'leetcode',
      img: require('../images/bg-5.jpg'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non tortor vitae neque rhoncus laoreet eget et libero. Donec vehicula odio eu dui bibendum, in eleifend turpis sodales. Integer et libero enim. Proin fringilla magna vitae magna volutpat, eget congue neque gravida. Etiam auctor ex a augue tempor interdum. Nam at aliquam ex. Pellentesque sit amet ipsum quis urna aliquam ultricies. Suspendisse tincidunt eu metus eu aliquet. Nulla facilisi. Phasellus nec massa eu nisl maximus convallis.',
      createdBy: 'Rakesh',
      createdAt: '2024-06-26', // Example date, adjust as needed
    },
    {
      id: 6,
      title: 'Blog 6',
      category: 'cooking',
      img: require('../images/bg-7.jpg'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at malesuada odio. Etiam semper, nulla nec tempus fermentum, ligula leo posuere lorem, id lacinia nisi mauris et elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut mi vel dui tincidunt efficitur. Phasellus faucibus, dui vel feugiat pellentesque, velit enim consequat lectus, vitae dictum elit nunc sit amet arcu. Integer ac nulla velit. Duis sodales nulla id purus consectetur, vel consectetur ipsum ultrices.',
      createdBy: 'Rakesh',
      createdAt: '2024-06-27', // Example date, adjust as needed
    },
  ]

  // Filtered blogs based on selected category
  const filteredBlogs =
    selectedCategory === 'all'
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory)

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
          {filteredBlogs.map((blog) => (
            <li key={blog.id}>
              <BlogCard
                title={blog.title}
                img={blog.img}
                content={blog.content}
                createdBy={blog.createdBy} // You may add createdBy and createdAt props if needed
                createdAt={blog.createdAt}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Blog
