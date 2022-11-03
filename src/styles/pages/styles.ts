import styled from "styled-components";

//Container Main padrão entre os componentes

export const Main = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height:100vh;
  padding:0 ;
  margin:0 ;
  bottom:0 ;
  /* background-color: #f6f6f6; */
  /* background-color:#333 ; */
  display: flex;
  justify-content:center ;
  align-items:center ;
  flex-direction:column ;
  flex-wrap: wrap;
  margin-top: 0;
  background-image:url('https://nlw.rocketseat.com.br/background-ignite.png') ;
  background-size:cover ;
  background-repeat:no-repeat ;
  background-position:center ;
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    margin: 0;
  }
`;
export const ContainerQuiz = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height:60vh ;
  /* background-color: #f6f6f6; */
  /* background-color:#333 ; */
  display: flex;
  justify-content:center ;
  align-items:center ;
  flex-direction:column ;
  flex-wrap: wrap;
  margin-top: 0;
 // background-image:url('https://nlw.rocketseat.com.br/background-ignite.png') ;
  background-size:cover ;
  background-repeat:no-repeat ;
  background-position:center ;
  padding-bottom:50px ;
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    margin: 0;
  }
`;

export const ContainerDemo = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  background-color: #202024;
  display: flex;
  flex-direction:column ;
  flex-wrap: wrap;
 padding:20px ;
 border-radius:20px ;
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    margin: 0;
  }
`;
export const AlignCenter = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  /* background-color: #fff; */
  display: flex;
  justify-content:center ;
  align-items:center ;
  flex-direction:row ;

 padding:20px ;

 label{
  font-size:22px ;
  color:#ccc ;
font-weight:900 ;
  font-family:sans-serif; 
 }

  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-direction:row ;
    margin: 0;
    padding:10px ;
  }
`;
export const Align_large = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  /* background-color: #fff; */
  display: flex;
  justify-content:flex-start ;
  align-items:center ;
  flex-direction:row ;
  flex-wrap: wrap;
 padding:10px ;

 label{
  font-size:18px ;
  color:#ccc ;
  width:100px ;
  font-family:sans-serif; 
 }

  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-direction:row ;
    margin: 0;
    padding:10px ;
  }
`;

export const Align_Page = styled.div`
 display: flex;
 justify-content:space-between ;
 align-items:center ;
  flex-direction:row ;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
 padding:10px ;
 span{
 
  font-size:15px ;
  background-color:transparent ;
  padding-left:10px ;
  padding-right:10px ;
  color:#fff ;
 }
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    font-size:1em ;
    padding:10px ;
  }
`;
export const Ipt_Player = styled.input`
 width:100% ;
 max-width:320px ;
  /* height:40px ; */
  line-height: 51px;
  
  border-style:none ;
  padding-left:15px ;
  margin-left:20px ;
  appearance: none;
    border-radius: 8px;
    background-color: transparent;
  border: 1px solid #f7dd43;
  color:var(--colorDefalt) ;
  outline: none;
  /* &:focus {
        outline: none;
        box-shadow: 0px 0px 2px purple;
    } */
    
  @media (max-width: 1050px) {
    width: 100%;
    max-width:360px ;
    flex-wrap: wrap;
    margin: 0;
  }
  @media (max-width: 940px) {
    width: 100%;
    max-width:320px;
    flex-wrap: wrap;
    margin: 0;
  }
`;

export const Align_Title = styled.span`
  width: 100%;
  max-width: 100%;
  height:auto ;
 font-size:22px;
 font-weight:600;
 font-family:sans-serif; 
 padding:10px;
 color:#fff;
 background-color:transparent ;
 text-align:center ;
 line-height:initial ;
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    font-size:1em ;
    padding:10px ;
  }
`;
export const Align_Btn = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  /* background-color: red; */
  display: flex;
  justify-content:center ;
  align-items:center ;
  flex-direction:row ;
  flex-wrap: wrap;
 padding:20px ;
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-direction:row ;
    margin: 0;
    padding:10px ;
  }
`;

export const Btn_Start = styled.button`
  /* width: 100%;
  max-width: 320px; */
  /* height: 40px; */
   /*border-style:none ;
  //background-color: var(--colorDemo);
  background-color:transparent ;
  border:solid 1px red ;
  border-radius:15px ; */
  border: 1px solid #f7dd43;
  display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 68px;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.0256rem;
    text-transform: uppercase;
    background-color: transparent;
    /* border: 1px solid transparent; */
    border-radius: 4px;
    margin-left:20px ;
    transition: all 0.2s ease-in-out 0s;
  :hover{
    background-color: #047c3f;
    border:1px solid #047c3f;
  }
  @media (max-width: 940px) {
    width: 100%;
    max-width: 160px;
  }
`;

export const Btn_Demo = styled.button`
  width: 100%;
  max-width: 100%;
  height: 40px;
  background-color: transparent;
  border: 1px solid #f7dd43;
  //background-color: var(--btnDefault);
 // border-style:none ;
  border-radius:5px ;
  :hover{
    background-color: #047c3f;
    border:1px solid #047c3f;
    //background-color: var(--HoverDemo);
  }
  @media (max-width: 940px) {
    width: 100%;
  max-width: 160px;
  }
`;

export const SelectGame = styled.select`
  /* width: 100%;
  max-width:400px ;
  height: 40px;
  background: #ffffff;
  color:#333 ;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  appearance: none;
    border-radius: 8px;
    border: 0.5px solid rgb(223, 223, 223); */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    outline: none;
    appearance: none;
    border-radius: 8px;
    width: 100%;
    max-width:320px ;
    font-size: 18px;
    color: rgb(103, 103, 103);
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 400;
    line-height: 51px;
    /* margin: 10px 0px; */
    padding-left:15px ;
    margin-left: 20px;
    background-color: transparent;
  border: 1px solid #f7dd43;

  option {
    box-shadow: 0px 0px 1px #ccc;
    color:#333 ;
    background-color: transparent;
    border: 1px solid #f7dd43;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height:150px ;
  /* background-color:#047c3f; */
  display: flex;
  justify-content:center ;
  align-items:center ;
  flex-direction:row ;
  
   position:relative;
  bottom:0 ;
  @media (max-width: 940px) {
    width: 100%;
    max-width: 100%;
  
    margin: 0;
    
  }
`;
export const Title_Footer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content:center ;
  align-items:center ;
  text-align:end ;
 
  label{
   
    font-size: 18px;
    font-weight: 600;
    font-family: sans-serif;
    padding: 10px;
    color: #fff;
    text-align: center;
    line-height: initial;
  }
  @media (max-width: 940px) {
width: 100%;
  max-width: 300px;
  }
`;
export const BgImgFooter = styled.img`
position:relative ;
width:150px ;
height:150px ;
background-size:cover ;
z-index:1 ;
bottom: 10px;
margin-left:20px ;

`;


export const ResultFinal = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;

  display: flex;
  justify-content:center ;
  align-items:center ;
  flex-direction:row ;
  flex-wrap: wrap;
    padding:20px ;

  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-direction:row ;
    margin: 0;
    padding:10px ;
  }
`;
export const Final_Loading = styled.div`
  width: 150px;
  height:150px ;
  border-radius:50% ;
  background-color:transparent;
  border:solid 12px #f7dd43;
    display:flex ;
    justify-content:center ;
    align-items:center ;
  @media (max-width: 1050px) {
    /* width: 100%;
    max-width: 100%;
    flex-direction:row ;
    margin: 0;
    padding:10px ; */
  }
`;
export const Final_Title = styled.span`
    font-size: 22px;
    color: #ccc;
    font-weight: 600;
    font-family: sans-serif;
  @media (max-width: 1050px) {
    font-size:15px;
  }
`;
export const ResultStart = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  
  display: flex;
  justify-content:center ;
  align-items:center ;
  flex-direction:row ;
  flex-wrap: wrap;
    padding:20px ;

  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-direction:row ;
    margin: 0;
    padding:10px ;
  }
`;