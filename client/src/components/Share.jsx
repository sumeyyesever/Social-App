import { EmojiEmotions, InsertPhoto, Label, LocationOn } from "@mui/icons-material"
import styled from "styled-components"


const Container = styled.div`
   width: 100%;
   height: 170px;
   border-radius: 10px;
   margin: 10px;
   -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);

`

const Wrapper = styled.div`
   padding: 10px;
`

const Top = styled.div`
   display: flex;
   align-items: center;
   
`

const Image = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`

const Input = styled.input`
  width: 80%;
  height: 20px;
  border: none;
  font-size: 15px;

  &:focus{
    outline:none;
  }
`

const Hr = styled.hr`
   margin: 15px 15px;
`

const Bottom = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`

const Options = styled.div`
   display: flex;
   align-items: center;
   margin-top: 15px;
   margin-left: 10px;
`

const Option = styled.div`
   display: flex;
   align-items: center;
   margin-right: 15px;
`

const OptionText = styled.span`
   font-size: 15px;
   font-weight: 500;
`

const Button = styled.button`
   margin-right: 15px;
   padding: 10px;
   border: none;
   border-radius: 10px;
   font-size: 15px;
   font-weight: 500;
   color: white;
   background-color: #1996bd;
`

export default function Share() {
  return (
    <Container>
        <Wrapper>
            <Top>

                <Image src="assets/person/1.jpeg"></Image>
                <Input placeholder="What's Up?"></Input>
            </Top>
            <Hr></Hr>
            <Bottom>
                <Options>
                    <Option>
                        <InsertPhoto style={{color:"#158f34"}} />
                        <OptionText>Photo or Video</OptionText>
                    </Option>
                    <Option>
                        <Label style={{color:"#14d9b8"}}/>
                        <OptionText>Tag</OptionText>
                    </Option>
                    <Option>
                        <LocationOn style={{color:"#8714d9"}}/>
                        <OptionText>Location</OptionText>
                    </Option>
                    <Option>
                        <EmojiEmotions style={{color:"#cf25a4"}}/>
                        <OptionText>Feelz</OptionText>
                    </Option>
                </Options>
                <Button>Share</Button>
            </Bottom>
        </Wrapper>
    </Container>
  )
}
