import styled from 'styled-components';
import {  Container } from '../UI';
import { ReactSVG } from 'react-svg';
import logo from "../images/logo.svg"
import facebook from "../images//icon-facebook.svg"
import instagram from "../images/icon-instagram.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"

function Footer() {
    return (
          <FooterStyled>
            <Container>
           
            <ReactSVG src={logo} />
            <div>
                <ul> 
                    <li>Features</li>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
                <ul>
                    <li>Resources</li>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
                <ul> 
                    <li>Company</li> 
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
                 <Icons>
                        <ReactSVG src={facebook} />
                        <ReactSVG src={twitter} />
                        <ReactSVG src={pinterest} />
                        <ReactSVG src={instagram} />
                 </Icons>
            </div>
            </Container>
          </FooterStyled>

    );
}
const Icons = styled.div `
            display: flex;
            gap: 20px;

`;

const FooterStyled = styled.div `
            background-color: var( --Very-Dark-Violet);
           
    padding: 73px 0;

            width: 100%;
            ${Container} {
            display: flex;
            justify-content: space-between;
            @media (max-width: 900px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 40px;
              }
           } 
           ${Container} > div {
            display: flex;
            gap: 80px;
            @media (max-width: 900px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 45px;
              }
           } 
           ${Container} > div  ul{
              list-style: none;
              color: var(--Gray);
              font-size: 14px;
              display: flex;
              flex-direction: column;
              gap: 10px;
              @media (max-width: 900px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
           }
           ${Container} > div  ul li:first-child{
              
              color: white;
              margin-bottom: 16px;
           }
            svg path {
            fill: white;
            }
`;



export default Footer;