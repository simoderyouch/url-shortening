import styled from 'styled-components';
import { Button } from '../../../UI';
import '../../../index.css';
import Illustration from "../../../images/illustration-working.svg"




function Hero() {
    return (
        <HeroSection>

            <div className="text">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on
                    how your links are performing.
                </p>
                <Button className='heroBtn'>Get Started</Button>
            </div>
            <div className="img">
                <img src={Illustration} alt="Illustration" />
            </div>


        </HeroSection >
    );
}

const HeroSection = styled.div`
        display: flex;
     height: 500px;
     margin-bottom: 125px;
     align-items: center;
    
        justify-content: space-between;
        @media (max-width: 800px) {
                flex-direction: column-reverse;
                height: auto;
              }
        div.text {
            flex: 1;
            display: flex;
                flex-direction: column;
            @media (max-width: 800px) {
               
                justify-content: center;
                align-items: center;
                text-align: center;
                margin-top: 30px;
              }
            h1{
                font-size: 80px;
                line-height: 1.2;
                color: var(--Very-Dark-Blue);
                letter-spacing: -3px;
                @media (max-width: 1050px) {
                font-size: 57px;
              }
              @media (max-width: 800px) {
                font-size: 42px;
              }
            }
          
            p{
                color: var(--Grayish-Violet);
                font-size: 21px;
                @media (max-width: 800px) {
                font-size: 18px;
              }
            }
            .heroBtn {
                width: 110px;
                margin-top: 26px;
                padding: 13px 23px;
               border-radius: 30px;
            }
        }
        div.img {
            flex: 1;
             position: relative;
             img {
             width: 125%;
            position: relative;
            right: -14%;
            @media (max-width: 800px) {
               
                right: 0%;
             }
    }
        }
`;












export default Hero;
