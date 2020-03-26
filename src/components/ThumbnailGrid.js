/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import Thumbnail from './Thumbnail'

const ThumbnailGrid = ({ thumbnails, onClick }) => (
  <div
    css={css`
      height: 35%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {thumbnails.map((thumbnail, i) => (
      <Thumbnail
        key={thumbnail.imgUrl}
        imgUrl={thumbnail.imgUrl}
        index={i}
        onClick={onClick}
      />
    ))}
  </div>
)

export default ThumbnailGrid
