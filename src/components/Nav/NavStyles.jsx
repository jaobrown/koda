import styled from "styled-components";
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Link } from "gatsby"
import { colors } from '../../utils';

const NAVLINK_MODIFIERS = {
    pill: () => `
        color: ${colors.darkgray};
        background-color: transparent;
        text-decoration: none;
        font-size: 12px;
        font-family: 'Soin Sans', 'sans serif';
        font-weight: normal;
        border: 2px solid ${colors.red};
        padding: 1rem 1.25rem .85rem 1.25rem;
        border-radius: 100px;
        text-align: center;
    
        transition: .2s ease-in-out;
        cursor: pointer;
    
        @media (min-width: 500px) {
        :hover {
            background-color: ${colors.red};
            color: #ffffff;
        } 
        }
    `,
}

export const NavBar = styled.nav`
    max-width: 100vw;
    height: 130px;
    padding: 0 12%;
    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const NavLink = styled(Link)`
    font-family: 'Soin Sans', 'serif';
    font-size: 12px;
    font-weight: normal;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${colors.darkgray};

    @media screen and (max-width: 500px) {
        display: none;
    }

    ${applyStyleModifiers(NAVLINK_MODIFIERS)}
`

export const NavLinkContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`