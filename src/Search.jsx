import { forwardRef } from "react";
import styled from "styled-components";

const Input = styled.input`
     padding: 0 8px;
     text-align: left;
     border: none;
     border-bottom: 1px solid black;
     &:focus {
          outline: none;
          box-shadow: 0 3px 6px rgba(110, 110, 110, 0.2);
     }
`;
const SearchBtn = styled.button`
     cursor: pointer;
     border: none;
     border-bottom: 1px solid black;
     background-color: #fff;
     &:hover {
          background-color: #333;
          color: white;
     }
`;

const Search = forwardRef(({ handleClick }, ref) => {
     const onKeyPress = (e) => {
          if (e.key === "Enter") handleClick();
     };
     return (
          <div className="search">
               <Input
                    placeholder="작성자의 번호를 검색하세요.(1~10)"
                    ref={ref}
                    onKeyPress={onKeyPress}
               />
               <SearchBtn onClick={handleClick}>검색하기</SearchBtn>
          </div>
     );
});

export default Search;
