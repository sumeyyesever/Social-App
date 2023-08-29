import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"
import { useRef } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Container = styled.div`
   min-width: 100vw;
   min-height: 100vh;
   background-color: #f0f2f5;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
  
`

const Wrapper = styled.div`
   width: 70%;
   height: 70%;
   display: flex;
   ${mobile({flexDirection:"column"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({alignItems:"flex-start"})}
`

const Logo = styled.h3`
   font-size: 60px;
   color: #4d4dff;
`

const Desc = styled.span`
  font-size: 25px;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Box = styled.form`
   min-height: 400px;
   background-color: white;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
   ${mobile({width:"250px", height:"370px", marginTop:"15px"})}
`

const Input = styled.input`
  width: 350px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid gray;
  padding-left: 5px;
 ${mobile({width:"250px"})} 

  &:focus{
    outline: none;
  }
`

const Button = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: white;
  background-color: #4d4dff;
  cursor: pointer;
   ${mobile({width:"250px"})} 
`


const LoginButton = styled.button`
   width: 300px;
   height: 50px;
   border-radius: 10px;
   border: none;
   font-size: 20px;
   background-color: #2d9649;
   color: white;
   cursor: pointer;
   ${mobile({width:"250px"})} 
`

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e)=>{
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    }
    else{
      const user = {
        username:username.current.value,
        password: password.current.value,
        email:email.current.value
      }
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }

  }

  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Hello</Logo>
                <Desc>Connect with friends and the world</Desc>
            </Left>
            <Right>
                <Box onSubmit={handleClick}>
                    <Input placeholder="E-mail" type={"email"} ref={email} required></Input>
                    <Input placeholder="Username" ref={username} required></Input>
                    <Input placeholder="Password" type={"password"} ref={password} required minLength={6}></Input>
                    <Input placeholder="Password" type={"password"} ref={passwordAgain} required ></Input>
                    <Button type="submit">Sign In</Button>
                    <Link to="/login">
                    <LoginButton>Log In To Account</LoginButton>
                    </Link>
                    
                </Box>
            </Right>
        </Wrapper>
    </Container>
  )
}
