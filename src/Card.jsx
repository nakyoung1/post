import { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";

const CardContainer = styled.div`
     display: flex;
     flex-wrap: wrap;
`;

const CardSection = styled.section`
     border: 1px solid black;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     gap: 15px;
     width: 45%;
     height: auto;
     margin: 10px auto;
     padding: 20px;
     cursor: pointer;
`;

function Card({ contents, handleOpen, num }) {
     return (
          <CardContainer>
               {contents.length === undefined ? (
                    <CardSection
                         key={contents.id}
                         onClick={() => handleOpen(contents)}
                    >
                         <p>No.{contents.id}</p>
                         <h3>{contents.title}</h3>
                         <p>{contents.body}</p>
                         <p>user id : {contents.userId}</p>
                         <p>date : {moment().format("YYYY/MM/DD HH:mm:ss")}</p>
                    </CardSection>
               ) : (
                    contents.map((item) => (
                         <CardSection
                              key={item.id}
                              onClick={() => handleOpen(item)}
                         >
                              <p>No.{item.id}</p>
                              <h3>{item.title}</h3>
                              <p>{item.body}</p>
                              <p>user id : {item.userId}</p>
                              <p>
                                   date :{" "}
                                   {moment().format("YYYY/MM/DD HH:mm:ss")}
                              </p>
                         </CardSection>
                    ))
               )}
               {}
          </CardContainer>
     );
}
export default Card;
