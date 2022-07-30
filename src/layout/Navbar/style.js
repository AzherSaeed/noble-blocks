
import styled from 'styled-components';

const NavBarContainer = styled.div`
  //background: rgba(255, 255, 255, 0.76);
  //box-shadow: 0px -2px 13px rgba(0, 0, 0, 0.27);
  background: transparent;
  margin-top: 30px;
  .navbar {
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    &-logo{
      margin-right: 20px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
 
    }
    
    &-bton{
      background: #0D99FF;
      border-radius: 72px;
      display: block;
      border: none;
      padding: 13px 10px;
      color: white;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      cursor: pointer;
    }
  }

  .navbar-outer {
    display: flex;
    align-items: center;
    gap: 2px;
    .navbar-navItem {
      display: flex;
      align-items: center;
      gap: 20px;
      transition: all .3s linear;
      @media screen and (max-width: 991px) {
        position: absolute;
        left: 0;
        height: auto;
        width: 100%;
        top: 100%;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 30px;
        background-color: white;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
        border: 1px solid var(--light-gray2);
        
      }

      a {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        text-decoration : none;
        color : black !important;

        :hover {
          color: #040363;
          text-decoration: none;
          text-underline-offset: 12px;
        }
      }

      .active{
        color: #040363;
        text-decoration: none;
        text-underline-offset: 12px;
      }
    }
    .toggler-active{
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
  .navbar-toggler {
    display: none;
    
    img{
      width: 30px;
    }

    @media screen and (max-width: 991px) {
      display: block;
    }
  }
`;

export default NavBarContainer;