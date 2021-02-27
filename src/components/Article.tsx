import React, { FC } from 'react'

interface ArticleProps {
  title: string 
  content: string
}

export const Article: FC<ArticleProps> = ({ title, content }) => {
  return (
    <article>
    <h1>{title}</h1>
    <p>{content}</p>
    </article>
  )
}
