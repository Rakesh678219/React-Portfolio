import React from 'react'

export const Button = ({
  children,
  className = '',
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => (
  <button
    style={{ width: '300px', color: '#fff' }}
    className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)
