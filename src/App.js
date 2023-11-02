import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import ProductList from "./components/PrductList";
import Pagination from "./components/Pagination";
import styled from "styled-components";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [sort, setSort] = useState(false);
  const [filter, setFilter] = useState("");
  const fetchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setCoinsData(response.data);
    console.log("respone=>", response.data);
  };

  const sorting = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?sort=desc"
    );
    setCoinsData(response.data);
    console.log("sorting->", response.data);
  };
  
 const handleSelect = (e)=>{
        let filter = e.target.value
        console.log("filter",filter)
        let data;
        if(filter == '1'){
        data = coinsData.filter((item)=>item.price<=10 && item.price>=1);
        setCoinsData(data);
        }
        else if(filter == '10'){
            data = coinsData.filter((item)=>item.price<=30 && item.price>=10);
            setCoinsData(data);
        }
        else if(filter == '30'){
            data = coinsData.filter((item)=>item.price<=70 && item.price>=30);
            setCoinsData(data);
        }
        else{
            data = coinsData.filter((item)=>item.price>=70 && item.price<=1000);
            setCoinsData(data);
        }
       console.log("data=>",data);
      // setCoinsData(data);
 }

  useEffect(() => {
    if (!sort) {
      fetchProduct();
    } else {
      sorting();
    }
  }, [sort]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);
  console.log("currentPosts=>", currentPosts);
  return (
    <div className="app">
      <h1>Product</h1>
      <div>
        <Button onClick={(e) => setSort(!sort)}>Sort</Button>
        <Select name="Price" onChange={ handleSelect}>
           <option value="">Filter</option>
          <option value="1">1 to 10</option>
          <option value="10" >10 to 30</option>
          <option value="30" >30 t0 70</option>
          <option value="70">70 to 500</option>
          filter
        </Select>
      </div>
      <ProductList ProductsData={currentPosts} />
      <Pagination
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

 const Button = styled.button`
      padding: 12px 30px;
      margin: 11px;
      cursor:pointer
    &:hover{
        background-color: #008CBA;
    }
 
 `
 const Select = styled.select`
 padding: 12px 30px;
 margin: 11px;
cursor:pointer;
 `
export default App;
