import React from 'react'
require('./LeetcodeCard.css')
import CategoryTag from './CategoryTag'
import { Link } from 'react-router-dom'

const LeetcodeCard = (props: any) => {
  const { question } = props

  return (
    <Link
      style={{ textDecoration: 'none' }}
      to={question.Link}
      target="_blank"
      rel="noopener noreferrer"
      key={question.Title}
    >
      <div className="card">
        <h1 className="card-title">{question.Title}</h1>
        <p className="card-difficulty">Difficulty: {question.Difficulty}</p>

        <div className="tags-container">
          {question.Topics &&
            question.Topics.split(',').map((tag: string, index: number) => (
              <CategoryTag key={index} text={tag.trim()} />
            ))}
        </div>
      </div>
    </Link>
  )
}

export default LeetcodeCard
