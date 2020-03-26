/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { css, jsx } from '@emotion/core'
import ActiveThumbnailWindow from './ActiveThumbnailWindow'
import ThumbnailGrid from './ThumbnailGrid'

const ThumbnailGallery = () => {
  const [thumbnails, setThumbnails] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/DZuz14/56b7f363e9787fb4c0240eb145bc2b9f/raw/e0b67d18352704d155929b7e27e0dae08cc383b6/data.json'
      )
      .then(res => setThumbnails(res.data.thumbnails))
  }, [])

  const renderThumbnails = () =>
    thumbnails.length ? (
      <>
        <ActiveThumbnailWindow activeThumbnail={thumbnails[activeIndex]} />
        <ThumbnailGrid thumbnails={thumbnails} onClick={handleClick} />
      </>
    ) : null

  const renderTextContent = () =>
    thumbnails.length ? (
      <>
        <h1>{thumbnails[activeIndex].title}</h1>
        <p>{thumbnails[activeIndex].bodyText}</p>
      </>
    ) : null

  const handleClick = e => {
    const activeIndex = e.target.getAttribute('data-index')
    setActiveIndex(activeIndex)
  }

  return (
    <div css={ThumbnailGalleryCSS}>
      <div className="left">{renderThumbnails()}</div>
      <div className="right">{renderTextContent()}</div>
    </div>
  )
}

const ThumbnailGalleryCSS = css`
  background: #ddd;
  height: 500px;
  width: 1024px;
  margin: 40px auto;
  display: flex;

  .left,
  .right {
    flex: 1;
  }

  .right {
    padding: 40px;
  }
`

export default ThumbnailGallery
