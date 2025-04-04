import { useState, useRef, useEffect } from "react";

import Card from "./Card";
import "./App.css";
import Dialog from "./Dialog";
import Search from "./Search";

function App() {
     const modalRef = useRef(null);
     const cardRef = useRef(null);
     const inputRef = useRef(null);

     const [contents, setContents] = useState([]);
     const [selectedItem, setSelectedItem] = useState(null);
     const [num, setNum] = useState("");

     useEffect(() => {
          const getInfo = async () => {
               let url = `https://jsonplaceholder.typicode.com/posts`;
               if (num) {
                    url += `?userId=${num}`;
               }
               try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setContents(data);
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
     const handleClick = () => {
          setNum(inputRef.current.value);
          inputRef.current.value = "";
     };

     return (
          <div id="app">
               <header>
                    <h2>POSTIN</h2>
                    <Search ref={inputRef} handleClick={handleClick} />
               </header>

               <p className="total">Total : {contents.length}</p>
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
