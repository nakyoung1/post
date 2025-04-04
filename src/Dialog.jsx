import {
     useState,
     useEffect,
     useRef,
     forwardRef,
     useImperativeHandle,
} from "react";
import styled from "styled-components";

const Modal = styled.dialog`
     cursor: pointer;

     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     text-align: center;
     width: 400px;
     padding: 30px;
     border: none;
     &::backdrop {
          background-color: rgba(106, 106, 106, 0.7);
     }

     & p {
          padding: 15px;
          margin-bottom: 10px;
     }
     & button {
          padding: 5px 10px;
          background-color: #6e6e6e;
          color: white;
          border: none;
          border-radius: 3px;
          cursor: pointer;
     }
     & button:hover {
          background-color: #303030;
     }
`;

const Dialog = forwardRef((props, ref) => {
     const dialogRef = useRef(null);
     const [selectedData, setSelectedData] = useState("");

     useImperativeHandle(ref, () => {
          return {
               open: () => {
                    dialogRef.current.showModal();
               },
          };
     });

     const handleClose = () => {
          dialogRef.current.close();
     };

     useEffect(() => {
          const getInfo = async () => {
               try {
                    const response = await fetch(
                         `https://jsonplaceholder.typicode.com/posts/${props.selectedItem.id}`
                    );
                    const data = await response.json();
                    setSelectedData(data);
               } catch (error) {
                    console.log("데이터를 불러오지 못했습니다");
               }
          };
          getInfo();
     }, []);

     if (props === null) return;
     else {
          return (
               <Modal ref={dialogRef} onClick={handleClose}>
                    <p>No.{props.selectedItem?.id}</p>
                    <h2>{props.selectedItem?.title}</h2>
                    <p>{props.selectedItem?.body}</p>
                    <button onClick={handleClose}>닫기</button>
               </Modal>
          );
     }
});

export default Dialog;
