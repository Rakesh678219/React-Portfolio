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
        borderRadius: '5px',
        position: 'absolute',
        left: '20px',
        padding: '10px',
        top: '53px',
        width: '300px',
        minHeight: '50vh',
      }}
    >
      <h3 style={{ color: '#848c90' }}> Table of Contents</h3>
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
              style={{ textDecoration: 'none', color: '#dcdcdc' }}
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
