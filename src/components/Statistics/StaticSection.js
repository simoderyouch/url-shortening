
import styled from 'styled-components';

import recognitionIcon from '../../images/icon-brand-recognition.svg'
import recordsIcon from '../../images/icon-detailed-records.svg'
import customizableIcon from '../../images/icon-fully-customizable.svg'

function StatisticCard(props) {
    const topStyle = props.in ? `${props.in * 40}px` : '0px';
    return(

         <Stylecard  style={{ top: topStyle }}>
       
            
            <Cardimg>
            <img src={props.image} alt={props.image} />
            </Cardimg>
           
           
           <h2>{props.title}</h2>
           <p>{props.paragraph}</p>
         </Stylecard>




    );

}


function StatSection () {
    const array = [ {
                 imgSrc : recognitionIcon,
                 title : "Brand Recognition",
                 paragraph : "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
        } ,
         {
                 imgSrc : recordsIcon,
                 title : "Detailed Records",
                 paragraph : "  Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        },
        {
            imgSrc : customizableIcon,
            title : "Fully Customizable",
            paragraph : "  Improve brand awareness and content discoverability through customizable  links, supercharging audience engagement."
        }]


    return(
       <StatisticsSection>
              <h1>Advanced Statistics</h1>
              <p>Track how your links are pefoming acroos the web with our advanced statistics dashboard.</p>
              <CardContainer>
             {
                 array.map((el , index) => {
                    return <StatisticCard image={el.imgSrc} key={index} in= {index}title={el.title} paragraph={el.paragraph} />
                 })
             }
                
              </CardContainer>
       </StatisticsSection>


    );
}

const StatisticsSection = styled.div `

               text-align: center;
               margin-top: 100px;
               margin-bottom: 115px;
               display: flex;
               justify-content: center;
               flex-direction: column;
               align-items: center;
                h1{
                   
                    color: var(--Very-Dark-Blue);
                    @media (max-width: 400px) {
                font-size: 25px;
              }
                }
                p{
                    max-width: 450px;
                    margin: 12px;
                    color: var(--Grayish-Violet);
                }
              

`;
const CardContainer = styled.div `
                display: flex;
                position: relative;
                margin-top: 90px;
                @media (max-width: 900px) {
               flex-direction: column;
              }
                    gap: 25px;
                    &::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 9px;
                        background-color: var(--Cyan);
                        top: 55%;
                        z-index: -1;
                        @media (max-width: 900px) {
                            width: 9px;
                        height: 100%;
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
              }
                    }
`;
const Cardimg = styled.div `
                    background-color: var(  --Dark-Violet);
                    padding: 16px;
                    border-radius: 50%;
                    width: 50px;
                     height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    top: -40px;
                    position: relative;
                    `;

const  Stylecard = styled.div `

                 display: flex;
                 position: relative;
                 flex-direction: column;
                 background-color: white;
                 align-items: flex-start;
                 padding: 0 30px 43px;
                 border-radius: 10px;
                 color: var(--Very-Dark-Blue);
                 @media (max-width: 900px) {
                    align-items: center;
              }
                 h2{
                    font-size: 22px;
                 }
                p {
                    text-align : start ;
                    margin: 14px 0px 0; 
                    line-height: 26px;
                }




`;




export default StatSection;