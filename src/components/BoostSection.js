import styled from 'styled-components';
import { Button } from '../UI';
import bg1 from "../images/bg-boost-desktop.svg"


function BoostSection() {
    return (
          <BoostStyled>
            <h1>Boost your links today</h1>
            <Button>Get Started</Button>
          </BoostStyled>

    );
}

const BoostStyled = styled.div `
                    background-color: var(--Dark-Violet);
                    background-image: url(${bg1});
                    display: flex;
                    background-repeat: no-repeat;
            background-size: cover;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 53px 0;
                    color: white;
                   
                   div {
                    margin-top: 18px;
                    padding: 12px 39px;
                    border-radius: 29px;
                   }

                   h1 {
                    @media (max-width: 450px) {
                font-size: 27px;
                text-align: center;
              }
                   }
`;



export default BoostSection;