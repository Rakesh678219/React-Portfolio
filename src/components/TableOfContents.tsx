import React, { useEffect, useState } from 'react'

const TableOfContents = () => {
  const [headings, setHeadings] = useState([])

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('strong'))
    const tocItems = headingElements.map((heading) => ({
      id: heading.id || heading.innerText.replace(/\s+/g, '-').toLowerCase(),
      text: heading.innerText,
      level: heading.tagName, // h1, h2, h3, etc.
    }))

    setHeadings(tocItems)
  }, [])

  return (
    <nav
      style={{
        position: 'absolute',
        left: '20px',
        background: '#181823',
        padding: '10px',
        height: '80vh',
        width: '300px',
      }}
    >
      <h3 style={{ color: 'orange' }}> 📑 Table of Contents</h3>
      <ul>
        {headings.map(({ id, text, level }) => (
          <li
            key={id}
            style={{
              marginLeft:
                level === 'H2' ? '10px' : level === 'H3' ? '20px' : '0px',
            }}
          >
            <a
              href={`#${id}`}
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents
