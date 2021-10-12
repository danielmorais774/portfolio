import styled from 'styled-components';

import headerBackground from '../../assets/images/header-background.png';

export const Container = styled.div`
    background-color: #0F0F0F;
    color: #fff;
`;

export const Header = styled.div`
    background: -moz-linear-gradient(225deg,#171717 10%,rgb(2 2 2 / 98%) 100%), url(${headerBackground});
    background: linear-gradient(225deg,#171717 10%,rgb(2 2 2 / 98%) 100%), url(${headerBackground});
   
    .header-container{
        min-height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;

        h3{
            font-family: 'Source Code Pro', monospace;
            font-weight: 700;
        }

        p{
            font-family: 'Source Code Pro', monospace;
            font-weight: 500;
            margin-top: 30px;
        }

        @media (min-width: 995px) {
            img{
                width: 528px;
                height: 540px;
                -webkit-user-drag: none;
                -khtml-user-drag: none;
                -moz-user-drag: none;
                -o-user-drag: none;
            }
        }

        @media (max-width: 995px) {
            img{
                display: none;
            }
        }

        
    }

`;

export const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: absolute;
    left: 0px;
    right: 0px;

    height: 70px;
    background: rgba(0, 0, 0, 0.06);

    .navbar-content{
        display: flex;
        justify-content: space-between;
    } 

    .navbar-title{
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 23px;
        line-height: 28px;
        color: #fff;
    }

    ul{
        padding:0px;
        margin:0px;
        list-style:none;
    }

    @media (max-width: 480px) {
        ul{
            display: none;
        }
    }

    ul li {
        display: inline;

        & + li{
            margin-left: 70px;
        }
    }

    ul li a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
    }
    
`;

export const SectionAbout = styled.div`
    display: flex;
    align-items: center;
    min-height: 700px;

    img {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        max-width: 350px;
        border-radius: 20px;
    }

    
    h3{
        font-family: 'Source Code Pro', monospace;
        font-weight: 700;
    }

    @media (max-width: 480px) {
        img {
            width: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            max-width: 250px;
            border-radius: 20px;
        }

        h3{
            text-align: center;
            margin-top: 20px;
        }
    }


    p{
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
        margin-top: 30px;
    }
`;

export const SectionProjects = styled.div`
    min-height: 700px;
    padding: 40px 0px;

    h3{
        font-family: 'Source Code Pro', monospace;
        font-weight: 700;
        text-align: center;
    }
`;

export const SectionContact = styled.div`
    min-height: 280px;
    padding: 40px 0px;

    h3{
        font-family: 'Source Code Pro', monospace;
        font-weight: 700;
        text-align: center;
    }

    p{
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
        margin: 40px 0px;
        text-align: center;
    }

    .item-badge{
        display: flex;
        height: 32px;
        border: 1px solid #FFFFFF;
        border-radius: 5px;
        color: #FFFFFF;
        text-decoration: none;

        padding: 2px 10px;

        margin: 5px 0px;

        justify-content: center;
        align-items: center;

        p{
            display: inline;
            margin-left: 8px;
        }

        & + .item-badge{
            margin-left: 10px;
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    height: 80px;
    border-top: solid 1px;
    border-top-color: rgba(255,255,255,0.20);
    align-items: center;

    .footer-container{
        display: flex;
        justify-content: space-between;
    }

    p{
        font-size: 14px;
        display: flex;
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
        margin: 0px;

        img{
            margin: 5px 0px 0px 10px !important;
        }
    }
`;