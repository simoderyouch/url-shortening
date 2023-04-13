import styled from 'styled-components';
import Nav from "./NavBar/Nav"
import Hero from "./HeroSection/HeroSection"
import '../../index.css';
import { Container } from '../../UI';




function Header() {
    return (
        <HeaderSection>
            <Container className='HeaderSection-Container'>
                <Nav />
                <Hero />
            </Container>

        </HeaderSection>
    );
}

const HeaderSection = styled.div`
            background-color: white;
            .HeaderSection-Container {
               display:flex;
                flex-direction: column;
        
               gap: 80px;
               @media (max-width: 800px) {
               
                gap: 20px;
             }
}
        
`;
export default Header;
