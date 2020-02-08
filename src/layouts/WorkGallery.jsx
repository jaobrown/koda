import React from 'react'
import styled from 'styled-components'

const GalleryLayout = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  p {
    margin: 0;

    &:nth-of-type(3),
    &:nth-of-type(6) {
      grid-column: -1 / 1;
    }

    &:last-of-type {
      margin-bottom: 3rem;
    }
  }
`

const WorkGallery = ({children}) => {
    return (
        <GalleryLayout>
            {children}
        </GalleryLayout>
    )
}

export default WorkGallery