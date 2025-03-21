import React from 'react'

const SuggestedProblem = ({ problems }) => {
  return (
    <div
      style={{
        color: '#848c90',
        padding: '16px',
        position: 'absolute',
        right: '20px',
        top: '53px',
        borderRadius: '5px',
        minHeight: '50vh',
      }}
    >
      <h2
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '12px',
          color: 'rgb(132, 140, 144)',
        }}
      >
        Suggested Problems
      </h2>
      <ul>
        {problems.map((problem: any, index: any) => (
          <li
            key={index}
            style={{
              marginBottom: '8px',
              padding: '8px',
            }}
          >
            <a
              href={`https://leetcode.com/problems/${problem.titleSlug}/`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              {problem.title} ({problem.difficulty})
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SuggestedProblem
