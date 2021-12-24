import styled from "styled-components";

interface TitleProps {
    fontSize?: string,
    textDecoration?: string,
    textTransform?: string,
    textAlign?: string,
    margin?: string,
    padding?: string,
    display?: string,
    minHeight?: string,
    height?: string,
    minWidth?: string,
    width?: string,
}

const Title = styled.h1<TitleProps>`
    font-size: ${props => props.fontSize || "2rem"};
    text-decoration: ${props => props.textDecoration || "none"};
    text-transform: ${props => props.textTransform || "none"};
    text-align: ${props => props.textAlign || "left"};
    padding: ${props => props.padding || "0rem"};
    margin: ${props => props.margin || "0rem"};
    display: ${props => props.display || "block"};
    min-height: ${props => props.minHeight || "auto"};
    height: ${props => props.height || "auto"};
    min-width: ${props => props.minWidth || "100%"};
    width: ${props => props.width || "100%"};
`;

export default Title;