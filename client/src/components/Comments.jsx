import styled from "styled-components"
import { mobile } from "../responsive";
import {PostComments} from "./../dummyData";

const Container = styled.div`
   margin-top: 10px;
`

const Write = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Image = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;


`

const Input = styled.div`
  width: 450px;
  height: 30px;
  border: 1px solid darkgray;
  margin-right: 10px;
  padding: 3px;

  &:focus{
    outline: none;
  }
  /* ${mobile({width:"370px"})} */
   
`

const Button = styled.button`
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
   font-weight: 500;
   color: white;
   background-color: #957cbf;
   cursor: pointer;
`

const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  
`

const Info = styled.div`
    display: flex;
    flex: 5;
    flex-direction: column;
    align-items: flex-start;
`

const Name = styled.span`
   font-weight: 500;
   margin-bottom: 3px;
`

const Desc = styled.p`
  color: #555;
  font-size: 14px;
`

const Date = styled.span`
flex: 1;
font-size: 12px;
`





export default function Comments({message}) {
  return (
    <Container>
        <Write>
            <Image src="/assets/person/1.jpg"></Image>
            <Input contentEditable placeholder="Write a Comment"></Input>
            <Button>Sent</Button>
        </Write>
        {PostComments.map((c)=>(
          <Comment>
          <Image src={c.photo}></Image>
            <Info>
                <Name>{c.username}</Name>
                <Desc>{c.desc}</Desc>
            </Info>
            <Date>1 hour ago</Date>
          </Comment>
        ))}
          
    </Container>
  )
}
