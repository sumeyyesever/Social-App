import { EmojiEmotionsOutlined, InsertPhotoOutlined, LabelOutlined, LocationOnOutlined } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
   max-width: 100%;
   height: fit-content;
   border-radius: 10px;
   margin: 10px 10px 0 10px;
   -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);


`

const Wrapper = styled.div`
   padding: 10px 10px 0 10px;
   

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
/*   ${mobile({display:"none"})} */
  
`

const Input = styled.div`

   width: 500px;
  
  

  &:focus{
    outline: none;
  }
  &:empty:before{
    content: attr(data-placeholder);
  }

`

const Hr = styled.hr`
   margin: 25px 15px 0 15px;
`

const Bottom = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`

const Options = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 15px;
   
  

 
`
const OptionText = styled.span`
   font-size: 13px;
   font-weight: 300;
   background-color: #525453;
   color: white;
   padding: 0 2px;
   height: 18px;
   border-radius: 3px;
   visibility: hidden;
   /*  -webkit-transition: visibility 0s, opacity 0.5s linear; 
    transition: visibility 0s, opacity 0.5s linear; */
`

const Option = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
   cursor: pointer;
   

   &:hover ${OptionText}{
    visibility: visible;
   }
`



const Button = styled.button`
   margin-right: 15px;
   padding: 10px;
   border: none;
   border-radius: 10px;
   font-size: 15px;
   font-weight: 500;
   color: white;
   background-color: #957cbf;
   cursor: pointer;
`

export default function Share() {
  return (
    <Container>
        <Wrapper>
            <Top>

                <Image src="/assets/person/1.jpg"></Image>
                <Input contentEditable="true" data-placeholder="What's Up"></Input>
            </Top>
            <Hr></Hr>
            <Bottom>
                <Options>
                    <Option>
                        <InsertPhotoOutlined style={{color:"#957cbf"}} />
                        <OptionText>Media</OptionText>
                    </Option>
                    <Option>
                        <LabelOutlined style={{color:"#957cbf"}}/>
                        <OptionText>Tag</OptionText>
                    </Option>
                    <Option>
                        <LocationOnOutlined style={{color:"#957cbf"}}/>
                        <OptionText>Loc</OptionText>
                    </Option>
                    <Option>
                        <EmojiEmotionsOutlined style={{color:"#957cbf"}}/>
                        <OptionText>Feel</OptionText>
                    </Option>
                </Options>
                <Button>Share</Button>
            </Bottom>
        </Wrapper>
    </Container>
  )
}
