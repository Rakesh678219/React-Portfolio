import React from 'react'

const SuggestedProblem = ({ problems }) => {
  return (
    <div
      style={{
        backgroundColor: '#1a1a25',
        padding: '16px',
        position: 'absolute',
        right: '20px',
        top: '80px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        minHeight: '50vh',
      }}
    >
      <h2
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '12px',
          color: 'orange',
        }}
      >
        Suggested Problems
      </h2>
      <ol style={{ padding: 10 }}>
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
      </ol>
    </div>
  )
}

export default SuggestedProblem
