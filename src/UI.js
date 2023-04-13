import styled from 'styled-components';

export const Button = styled.div`
color: white;
       background-color: var(--Cyan);
       padding: 9px 23px;
       border-radius: 20px;
       text-align: center;
       display: flex;
       justify-content: center;
       align-items: center;
      cursor: pointer;
       &:hover {
              background-color: #9BE3E3;
       }
`;

export const Container = styled.div`
              width:1150px;
              margin: auto;
              position: relative;
              @media (max-width: 1200px) {
              width:85%;
              }
              @media (max-width: 1050px) {
              width:90%;
              }
`;