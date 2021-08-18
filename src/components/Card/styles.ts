import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 0px;

    .image-container{
        position: relative;
        width: auto;
        height: auto;
        max-height: 250px;
        background-color: #cecece;
        border-radius: 10px;

        overflow: hidden;

        .content-overlay {
            background: rgba(0,0,0,0.7);
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            opacity: 0;
            -webkit-transition: all 0.4s ease-in-out 0s;
            -moz-transition: all 0.4s ease-in-out 0s;
            transition: all 0.4s ease-in-out 0s;
        }
    }

    .image-container:hover .content-overlay{
        opacity: 1;
    }

    .content-details {
        display: flex;
        justify-content: center;
        position: absolute;
        text-align: center;
        padding-left: 1em;
        padding-right: 1em;
        width: 100%;
        min-height: 20px;
        top: 50%;
        left: 50%;
        opacity: 0;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-transition: all 0.3s ease-in-out 0s;
        -moz-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;

        .image-button{
            display: flex;
            height: 40px;
            width: 40px;
            border-radius: 4px;
            background-color: #BA68C8;
            border: none;

            justify-content: center;
            align-items: center;

            & + .image-button{
                margin-left: 10px;
            }
        }
    }

    .image-container:hover .content-details{
        top: 50%;
        left: 50%;
        opacity: 1;
    }

    .fadeIn-top{
        top: 20%;
    }

    img{
        height: 100%;
        width: 100%;
    }

    h3{
        font-family: 'Source Code Pro', monospace;
        font-weight: 700;
        font-size: 17px;
        text-align: start;
        margin: 10px 0px;
    }

    p{
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
        margin: 10px 0px;
    }

    .badge-container{
        /* display: inline-block; */
    }

    .item-badge{
        display: inline-block;
        height: 32px;
        border: 1px solid #FFFFFF;
        border-radius: 5px;

        padding: 2px 8px;

        p{
            margin: auto;
        }

        & + .item-badge{
            margin-left: 10px;
        }
    }
`;
