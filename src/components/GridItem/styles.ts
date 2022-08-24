import styled from 'styled-components';

type ContainerProps = {
   shownBackground: boolean;
}
export const Container = styled.div<ContainerProps>`
     background-color:${props =>props.shownBackground ? '#e2e3e3': 'rgba(0, 0, 0,0.7)'};
     border-radius:10px;
     cursor: pointer;
     display: flex;
     justify-content: center;
     height:100px;
     transition: all 0.3s;
`;
type IconProps = {
   opacity?: number;
}
export const Icon = styled.img<IconProps>`
   width:80px;
   padding:5px ;
   opacity: ${props => props.opacity ? props.opacity: 1};
   
`;