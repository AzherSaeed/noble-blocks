import styled from 'styled-components';
import {heroBg , headerDots , headerBg} from '../assets'



export const HeaderContainer = styled.div`
    margin-top: 50px;

  


  @media screen and (max-width: 1110px){
    padding: 15px;
  }
  //overflow: hidden;
  // :before{
  //   content: '';
  //   height: 300px;
  //   width: 100%;
  //   background-image: url(${heroBg});
  //   background-size: contain;
  //   background-position: center;
  //   background-repeat: no-repeat ;
  //   position: absolute;
  //   top: 18%;
  //   left: 50%;
  //   transform: translate(-50% , -18%);
  // }
  //

  
  .headerSectionVideo{
    max-width: 573px;
    width: 100%;
    margin: 0 auto;
  }
  
  .subheadingHeader{
    background: linear-gradient(302.91deg, #0082FF 31.74%, #D800E1 74.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 150%;

    @media screen and (max-width : 700px){
      font-size: 50px;
    }
  }
  
  
  .headerSectionVideo{
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  
  .header-content{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
   


    :after{
      content: '';
      height: 300px;
      width: 325px;
      background-image: url(${headerDots});
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0;
      left: -8%;
      transform: translate(-8% , -15%);
      z-index: -1;
    }


    &-heading{
    p{
      font-family: 'SF Pro Display';
      font-style: normal;
      font-weight: 700;
      font-size: 89px;
      line-height: 64px;
      
   
      
      @media screen and (max-width : 700px){
        font-size: 30px;
      }
    }
      h6{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        color: #1E1E1E;
        letter-spacing: -0.011em;
        margin: 10px 0;
        
        @media screen and (max-width : 480px){
          font-size: 16px;
        }
       
      }
    }
    &-buttons{
      display: flex;
      align-items: center;
      gap: 16px;
      @media screen and (max-width : 860px){
        margin-bottom: 20px;
      }
      
      @media screen and (max-width : 420px){
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        margin: 14px 0;
      }
      
      button{
        background: #0082FF;
        border-radius: 72px;
        color: white;
        border: none;
        padding: 13px 22px;
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;

        @media screen and (max-width : 480px){
          font-size: 18px;
        }


        @media screen and (max-width : 700px){
          padding: 10px;
          padding: 10px;
        }
        
      }
      p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 64px;

        @media screen and (max-width : 480px){
          font-size: 14px;
        }
      }
    }
    
    &-avatar{
      display: flex;
      align-items: center;
      gap: 17px;
      

      @media screen and (max-width : 420px){
        flex-direction: column;
        align-items: flex-start;
   
      }
      &-img{
        display: flex;
        align-items: center;
        &-2{
          transform: translate(-30px);
        }
        &-3{
          transform: translate(-60px);
        }
      }
      &-para{
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 64px;
        color: #000000;
        transform: translateX(-60px);

        @media screen and (max-width : 420px){

          transform: translateX(10px);
        }
      }
    }
  }
    
`

export const TeamContainer = styled.div`
  
    //margin-left: calc((100vw - 1440px)/2);
    //display: grid;
    //  grid-template-columns: 120px 1fr;
    //  gap: 100px;
  //@media screen and (max-width: 1440px){
  //    margin-left: unset;
  //  gap: 0px;
  //  
  //}
    
  
  
  .team-text{
    font-size: 64px;
    line-height: 120%;
    font-weight: 500;
    writing-mode: vertical-lr;
    transform: scale(-1);
    white-space: nowrap;
    display: inline-block;
    top: 1.5rem;
    position: sticky;
    height: fit-content;
    
    @media screen and (max-width : 1440px){
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      
    }
    }
  }

`