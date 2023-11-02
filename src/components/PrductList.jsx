import React from "react";

import ProductCard from "./ProductCard";
import "./ProductList.css";
import styled from "styled-components";


const ProductList = ({ProductsData}) => {
      console.log(ProductsData)
    return (
        <>
        <Div className='crypto_list'>
            {
                ProductsData.map((item,i)=>(
                    <>
                    <ProductCard
                      key={i}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      desc={item.description}
                    
                    />
                </>
                    
                ))
            }
        </Div>
        </>
    );
};
const Div = styled.div`
.crypto_list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}

`
export default ProductList;
