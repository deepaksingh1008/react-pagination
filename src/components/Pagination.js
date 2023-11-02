import React from "react";
import { styled } from "styled-components";
import "./Pagination.css";

const Wrapper = styled.div`
    .pagination {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 1rem;

      button {
        width: 40px;
        height: 40px;
        font-family: inherit;
        font-weight: 600;
        font-size: 16px;
        margin: 0 10px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
        background: transparent;
        color: #eee;
        border-color: #eee;

        .active {
          font-weight: 900;
          border-color: #101010;
          background: #ffe400;
          color: #101010;
        }
      }
    }
  `;

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <Wrapper className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </Wrapper>
  );
};

export default Pagination;
