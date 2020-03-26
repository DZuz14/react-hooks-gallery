/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Thumbnail = ({ imgUrl, index, onClick }) => (
  <div
    css={css`
      height: 50%;
      width: 25%;
      position: relative;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    `}
  >
    <img src={imgUrl} data-index={index} onClick={onClick} />
  </div>
)

export default Thumbnail
