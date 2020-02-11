import React, {useState} from 'react'
import styled from 'styled-components'

const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: orangered;
  z-index: 9;
`

export const MobileNavigation = () => {
    return (
        <MobileMenu>
            item
            item
            item
        </MobileMenu>
    )
}