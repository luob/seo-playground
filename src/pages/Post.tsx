import React, { FC } from 'react'
import {Helmet} from "react-helmet"
import { Link } from 'react-router-dom'

import { Article } from '~/components/Article'

import data from '~/data.json'

export const Post: FC = () => {
  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description}></meta>
      </Helmet>
      <Link to="/seo-playground">主页</Link>
      <Article title={data.title} content={data.content}/>
    </>
  )
}