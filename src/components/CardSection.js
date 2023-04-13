import styled from 'styled-components';
import { Button } from '../UI';
import '../index.css';
import { useState } from 'react';

function ShortUrl(props) {
  function handleCopy() {
    navigator.clipboard.writeText(props.shortLink);
    
    props.onCopy(props.index);
  }

  return (
    <Urlcard>
      <p>{props.originalUrl}</p>
      <div className='ww33'>
        <a href={props.shortLink}
        target="_blank" rel="noreferrer"
        >{props.shortLink}</a>
        <Button
          className={`CopyBtn ${props.index === props.copiedButtonIndex ? 'CopiedBtn' : 'CopyBtn'}`}
          onClick={handleCopy}
        >
          {props.index === props.copiedButtonIndex ? 'Copied!' : 'Copy'}
        </Button>
      </div>
    </Urlcard>
  );
}

function CardSection(props) {
  const [copiedButtonIndex, setCopiedButtonIndex] = useState(null);

  function handleCopy(index) {
    setCopiedButtonIndex(index);
  }

  return (
    <CardSec>
      {props.data && props.data !== null ? (
       <>
          <ShortUrl
            originalUrl={props.data.original_link}
            shortLink={props.data.full_short_link}
            index={0}
            copiedButtonIndex={copiedButtonIndex}
            onCopy={handleCopy}
          />
          <ShortUrl
            originalUrl={props.data.original_link}
            shortLink={props.data.full_short_link2}
            index={1}
            copiedButtonIndex={copiedButtonIndex}
            onCopy={handleCopy}
          />
          <ShortUrl
            originalUrl={props.data.original_link}
            shortLink={props.data.full_short_link3}
            index={2}
            copiedButtonIndex={copiedButtonIndex}
            onCopy={handleCopy}
          />
       </>
      ) : (
        ''
      )}
    </CardSec>
  );
}

const Urlcard = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 18px 25px 18px 40px;
  border-radius: 10px;
  margin-top: 22px;
  position: relative;
  @media (max-width: 950px) {
                flex-direction: column;
                align-items: flex-start;
                padding: 22px 25px 23px 26px;
                gap: 10px;
              }

              p{
                word-break: break-all;
    white-space: pre-wrap;
    }
  div.ww33 {
    align-items: center;
    display: flex;
    gap: 20px;
    @media (max-width: 950px) {
                
                width: 100%;
              }
              @media (max-width: 450px) {
                     flex-direction: column;
                   align-items: flex-start;
                   gap: 10px;
                   &::before {
                    content: "";
                          width: calc(100% + 51px);
                          height: 1px;
                          opacity: 0.2;
                          position: relative;
                          left: -26px;
                          background-color: var(--Very-Dark-Blue);

                   }
              }
    .CopyBtn {
      border-radius: 10px;
      width: 64px;
      padding: 12px 28px;
      @media (max-width: 950px) {
        position: absolute;
          right: 20px;
          height: 50%;
          top: 50%;
          transform: translateY(-50%);
              }

              @media (max-width: 450px) {
        position: relative;
        transform: translateY(0%);
        right: 0;
        width: calc(100% - 56px);
              }
    }
    .CopiedBtn {
      background-color: var(--Dark-Violet);
     
    }
    a {
      color: var(--Cyan);
      text-decoration: none;
    }
    
  }
`;

const CardSec = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export default CardSection;