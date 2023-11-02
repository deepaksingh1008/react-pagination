import React from "react";

import "./ProductCard.css";
import styled from "styled-components";

const Div = styled.div`
          .card{
            width: 350px;
           height: 500px;
          cursor: pointer;
          background: rgb(231, 231, 231);
        border-radius: 20px;
        gap: 2px;
       overflow: hidden;
       box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
       padding: 1rem 2rem;
       transition: all 0.3s ease;


       &:hover{
        transform: scale(1.1);
       }
          }

    .card_image{
        width: 200px;
        height: 200px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card_info{
        margin-top: 1rem;

        h2{
            margin-bottom: 10px;
            color: black;
        }
        h3{
            color: #272727;
         

        }
        p{
            color: #272727;
            overflow: hidden;
        }
    } 


`


const ProductCard = ({ image, title, price, desc }) => {


    return (
        <Div className='card'>
            <Div className='card_image'>
                <img src={image} alt={title} />
            </Div>
            <Div className='card_info'>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <p>{desc}</p>

            </Div>
        </Div>
    );
};

export default ProductCard;
