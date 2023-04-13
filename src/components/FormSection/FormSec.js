
import { useContext, useState } from 'react';
import { UrlContext } from '../../App';
import bg1 from "../../images/bg-shorten-desktop.svg"
import { Button } from '../../UI';
import styled from 'styled-components';
import '../../index.css';




function Form() {
    const [url, setUrl] = useState('')
    const [errors, setErrors] = useState({msg : '' ,  inputClass :""})
    const { setData } = useContext(UrlContext);


	const isValidUrl = urlString=> {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
      '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
  }
    async function getData(url) {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const jsonData = await response.json();

        setData(jsonData.result)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(url === '') {
            
            setErrors({
                msg : "Please add a link",
                inputClass :"invalid"
            })
         
        } else if(!isValidUrl(url)) {
            setErrors({
                msg : "Invalid URL",
                inputClass :"invalid"
            })
        }else {
            getData(url)
        }
        setTimeout(() => {
            setErrors("")
        }, 4000);
    }

    function handleUrl(e) {
        e.preventDefault();
        setUrl(e.target.value)
         setErrors("")
        
    }

    return (
      
            <FormDiv>
                <form  onSubmit={handleSubmit}>
                    <input placeholder="Shorten a link here..." className={errors.inputClass} type="text" value={url}
                        onChange={handleUrl } />
                         <em className="invalid-feedback">{errors.msg}</em>
                    <Button type="submit" className='formBtn' onClick={handleSubmit}>Shorten it!</Button>
                   
               </form>
               
            </FormDiv >
           
       
    );
}



const FormDiv = styled.div`
      
        background-color: var(--Dark-Violet);
        background-image: url(${bg1});
       
        border-radius: 13px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center top;
        padding: 50px 60px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 800px) {
            padding: 25px ;
           
              }
        form{
            display: flex;
            width: 100%;
            gap: 15px;
           position: relative;
            justify-content: center;
              align-items: center;
              height: 53px;
             @media (max-width: 800px) {
                flex-direction: column;
                height: auto;
                align-items: self-start;
                gap: 10px;
              }
             .invalid-feedback {
                   position: absolute;
                      left: 0;
                    bottom: 0;
                      bottom: -33px;
                      color: var(--Red);
                      @media (max-width: 800px) {
                        position: relative;
                        bottom: 0;
              }
                 }
            input {
                flex: 1;
                border-radius: 10px;
                height: 100%;
                padding: 0px 32px;
                font-size: 17px;
                 outline: 0;
                border: 0;
                
                color: var(--Dark-Violet);
                @media (max-width: 800px) {
                    height: 53px;
                    flex:  auto;
                    width: calc(100% - 64px);
                    padding: 0px 32px;
              }
            }
            input.invalid {
                border:3px solid var(--Red);
                animation: shake 0.2s ease-in-out 0s 2;
                ::placeholder { 
                    color: var(--Red);
                    opacity: 0.8; 
                        }

                   
            }
            @keyframes shake {
                                    0% {
                                         margin-left: 0rem;
                    }
                    25% {
                        margin-left: 0.5rem;
                    }
                    75% {
                        margin-left: -0.5rem;
                    }
                    100% {
                        margin-left: 0rem;
                    }
}
            .formBtn {
                border-radius:10px ;
                height: 100%;
                
               padding: 0px 29px;
               @media (max-width: 800px) {
                    height: 53px;
                    flex:  auto;
                    width: calc(100% - 64px);
                    padding: 0px 32px;
              }

            }
        }

      
`;
















export default Form;