
import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  max-width:1200px;
  margin:auto;
  display:flex;
  padding-top:50px;
 

  @media (max-width: 1100px){
    flex-direction:column;
    
  }
`;

export const Info = styled.div`
  display:flex;
  flex-direction:column;
  width:auto;

  @media (max-width: 1100px){
    margin-bottom:40px;
    align-items:center;
  }
`;

export const LongoLink = styled.a`
 text-decoration:none;
 color:rgb(72, 110, 181);
 font-weight:600;
 font-style:oblique;
 display:block;
 @media (max-width:750px){
  background-color:rgba(0,0,0, 0.1);
 }
 div{
    margin-top:-9px;
    margin-left:70px
 }
`;

export const InfoArea = styled.div`
  width:100%;
  margin:10px 0;

  @media (max-width: 1100px){
    display:flex;
    justify-content:space-around;
    text-align: center;
  
  }
`;

export const GridArea = styled.div`
 width: 100%;
 display:flex;
 justify-content:flex-end;

 @media (max-width: 1100px){
    justify-content:center;
    margin:0 auto;
 }
`;
export const Grid = styled.div`
 width:96%;
 display:grid;
 grid-template-columns:repeat(6,1fr);
 gap:10px;

@media (max-width:650px){
  grid-template-columns:repeat(4,1fr);
  
}
@media (max-width:450px){
  grid-template-columns:repeat(3,1fr);
}

`;