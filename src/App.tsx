import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '~/pages/Home'
import { Post } from '~/pages/Post'

export const App: FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
  )
}
