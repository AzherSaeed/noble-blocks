import styled from 'styled-components';
import {heroBg , headerDots} from '../assets'



export const HeaderContainer = styled.div`
    margin-top: 50px;


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
    background: -webkit-linear-gradient(left, #D800E1 , #0082FF);
    background: -o-linear-gradient(right, #D800E1, #0082FF);
    background: -moz-linear-gradient(right, #D800E1, #0082FF);
    background: linear-gradient(to right, #D800E1 , #0082FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 110%;
      
   
      
      @media screen and (max-width : 700px){
        font-size: 30px;
      }
    }
      h6{
        font-size: 19px;
        font-weight: normal;
        color: black;
        margin: 10px 0;
      }
    }
    &-buttons{
      display: flex;
      align-items: center;
      gap: 16px;
      
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
        padding: 13px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;


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
        font-size: 16px;
        line-height: 32px;
        opacity: 0.5;
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
  
    margin-left: calc((100vw - 1440px)/2);
    display: grid;
      grid-template-columns: 120px 1fr;
      gap: 100px;
  @media screen and (max-width: 1440px){
      margin-left: unset;
    gap: 0px;
    
  }
    
  
  
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