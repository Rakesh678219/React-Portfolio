import React from 'react'
require('./LeetcodeCard.css')
import CategoryTag from './CategoryTag'

const LeetcodeCard = (props: any) => {
  const { question } = props

  return (
    <a
      style={{ textDecoration: 'none' }}
      href={question.Link}
      target="_blank"
      rel="noopener noreferrer"
      key={question.Title}
    >
      <div className="card">
        <h3 className="card-title">
          {props.number + 1 + ') ' + question.Title}
        </h3>
        <p className="card-difficulty">Difficulty: {question.Difficulty}</p>
        <div className="tags-container">
          {question.Topics &&
            question.Topics.split(',').map((tag: string, index: number) => (
              <CategoryTag key={index} text={tag.trim()} />
            ))}
        </div>
      </div>
    </a>
  )
}

export default LeetcodeCard
