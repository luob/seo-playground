

import React, { FC, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Outlet } from 'react-router-dom'
import { useWindowScroll} from 'react-use'

export const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>古文觀止</title>
        <meta name="description" content="古文觀止 序一 序二 例言"></meta>
      </Helmet>
      <Link to="post">第一篇</Link>
      <article>
        <p>余束髮就學時，輒喜讀古人書傳，每縱觀大意，於源流得失之故，亦嘗探其要領。若乃析義理於精微之蘊，辯字句於毫髮之間，此衷蓋闕如也。</p>
        <p>歲戊午，奉天子命撫八閩，會稽章子、習子，以古文課余子於三山之凌雲處。維時從子楚材實左右之。楚材天性孝友，潛心力學，工舉業，尤好讀經史，於尋常講貫之外，別有會心，與從孫調侯，日以古學相砥礪。調侯奇偉倜儻，敦尚氣誼，本其家學，每思繼序前人而光大之。二子才器過人，下筆灑灑數千言無懈漫，蓋其得力於古者深矣。</p>　
        <p>今年春，余統師雲中，寄身絕塞，不勝今昔聚散之感。二子寄余古文觀止一編。閱其選，簡而該，評註詳而不繁，其審音辨書，無不精切而確當。批閱數過，覺向時之所闕如者，今則辴然以喜矣。以此正蒙養而裨後學，厥功豈淺鮮哉！亟命付諸梨棗，而爲數語以弁其首。</p>　
        <p>康熙三十四年五月端陽日愚伯興祚題</p>　
      </article>
    </>
  )
}
