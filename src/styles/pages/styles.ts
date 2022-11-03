import styled from "styled-components";

//Container padrão entre os componentes

export const ContainerQuiz = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height:100vh;
  background-color: #f6f6f6;
  display: flex;
  justify-content:center ;
  align-items:center ;
  flex-direction:column ;
  flex-wrap: wrap;
  margin-top: 0;
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
  background-color: #fff;
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
  background-color: #fff;
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
  background-color: #fff;
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
 background-color:#fff ;
 span{
  font-size:15px ;
  background-color:red ;
  
 
  padding-left:10px ;
  padding-right:10px ;
  color:#333 ;
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
  background-color:#fff ;
  border-style:none ;
  padding-left:15px ;
  margin-left:20px ;
  appearance: none;
    border-radius: 8px;
    border: 0.5px solid rgb(223, 223, 223);
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
 color:#333;
 background-color:blue ;
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
  background-color: red;
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
  width: 100%;
  max-width: 200px;
  height: 40px;
  border-style:none ;
  background-color: var(--colorDemo);
  border-radius:15px ;
  :hover{
    background-color: var(--HoverDemo);
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
  background-color: var(--btnDefault);
  border-style:none ;
  border-radius:5px ;
  :hover{
    background-color: var(--HoverDemo);
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
    background: #ffffff;
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
    border: 0.5px solid rgb(223, 223, 223);

  option {
    box-shadow: 0px 0px 1px #ccc;
    color:#333 ;
    background: #ffffff;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    
  }
`;