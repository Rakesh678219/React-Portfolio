import React from 'react'
require('./CategoryTag.css')
const CategoryTag = (props: any) => {
  return <div className="tag">{props?.text}</div>
}

export default CategoryTag
