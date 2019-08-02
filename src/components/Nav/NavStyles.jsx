import styled  from "styled-components";
import { Link } from "gatsby"
import {colors} from '../../styles/GlobalStyles';

export const NavBar = styled.nav`
    max-width: 100vw;
    height: 100px;
    padding: 0 180px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const NavLink = styled(Link)`
    font-family: 'Soin Sans', 'serif';
    font-size: 15px;
    font-weight: normal;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${colors.darkgray};
`