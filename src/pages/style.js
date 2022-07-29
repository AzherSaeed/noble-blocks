import styled from 'styled-components';



export const HeaderContainer = styled.div`
  
    margin-top: 100px;
  
  
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
    &-heading{
    p{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 46px;
      line-height: 150%;
      
      @media screen and (max-width : 700px){
        font-size: 30px;
      }
    }}
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