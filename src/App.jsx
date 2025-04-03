import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import Card from "./Card";
import "./App.css";
import Dialog from "./Dialog";

function App() {
     const modalRef = useRef(null);
     const cardRef = useRef(null);
     const inputRef = useRef(null);

     const [contents, setContents] = useState([]);
     const [selectedItem, setSelectedItem] = useState(null);
     const [num, setNum] = useState("3");

     useEffect(() => {
          const getInfo = async () => {
               try {
                    const response = await fetch(
                         `https://jsonplaceholder.typicode.com/posts?userId=${num}`
                    );
                    const data = await response.json();
                    setContents(data);
                    console.log(contents);
               } catch (error) {
                    console.log("데이터를 불러오지 못했습니다");
               }
          };
          getInfo();
     }, [num]);

     const handleOpen = (item) => {
          setSelectedItem(item);
          modalRef.current.open();
     };
     const handleClick = () => {};

     return (
          <div id="app">
               <h2>게시판</h2>
               <div className="search">
                    <input
                         placeholder="찾고싶은 글 번호를 검색하세요."
                         ref={inputRef}
                    />
                    <button onClick={handleClick}>검색하기</button>
               </div>

               <Card
                    contents={contents}
                    ref={cardRef}
                    handleOpen={handleOpen}
                    num={num}
               />
               <Dialog selectedItem={selectedItem} ref={modalRef} />
          </div>
     );
}

export default App;
