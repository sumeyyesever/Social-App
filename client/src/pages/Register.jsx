import styled from "styled-components"

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: #f0f2f5;
   display: flex;
   align-items: center;
   justify-content: center;
  
`

const Wrapper = styled.div`
   width: 70%;
   height: 70%;
   display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Logo = styled.h3`
   font-size: 60px;
   color: #1775ee;
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

const Box = styled.div`
   height: 400px;
   background-color: white;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
`

const Input = styled.input`
  width: 350px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid gray;
  padding-left: 5px;

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
  background-color: #1775ee;
  cursor: pointer;
`


const RegisterButton = styled.button`
   width: 300px;
   height: 50px;
   border-radius: 10px;
   border: none;
   font-size: 20px;
   background-color: limegreen;
   color: white;
   cursor: pointer;
`

export default function Register() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Hello</Logo>
                <Desc>Connect with friends and the world</Desc>
            </Left>
            <Right>
                <Box>
                    <Input placeholder="E-mail" type={"email"}></Input>
                    <Input placeholder="Username"></Input>
                    <Input placeholder="Password" type={"password"}></Input>
                    <Input placeholder="Password" type={"password"}></Input>
                    <Button>Sign In</Button>
                    <RegisterButton>Log In To Account</RegisterButton>
                </Box>
            </Right>
        </Wrapper>
    </Container>
  )
}
