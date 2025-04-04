import styled from "styled-components";
import moment from "moment";

const CardContainer = styled.div`
     width: 90%;
     display: flex;
     flex-wrap: wrap;
`;

const CardSection = styled.section`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     gap: 20px;
     width: 45%;
     height: auto;
     margin: 10px auto;
     padding: 20px;
     background-color: white;
     cursor: pointer;

     &:hover {
          box-shadow: 0 3px 6px rgba(110, 110, 110, 0.2);
          transform: translateY(-7px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
     }
`;

function Card({ contents, handleOpen }) {
     return (
          <CardContainer>
               {contents.map((item) => (
                    <CardSection key={item.id} onClick={() => handleOpen(item)}>
                         <p>No.{item.id}</p>
                         <h3>{item.title}</h3>
                         <p>{item.body}</p>
                         <p>user id : {item.userId}</p>
                         <p>date : {moment().format("YYYY/MM/DD HH:mm:ss")}</p>
                    </CardSection>
               ))}
          </CardContainer>
     );
}
export default Card;
