import styled, { css }  from "styled-components";

interface ButtonProps {
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
    backgroundColor?: string,
    color?: string,
    borderRadius?: string,
    hoverBackgroundColor?: string,
    border?: string,
    borderColor?: string,
}

const Button = styled.a<ButtonProps>`
    font-size: ${props => props.fontSize || "1rem"};
    text-decoration: ${props => props.textDecoration || "none"};
    text-transform: ${props => props.textTransform || "Uppercase"};
    text-align: ${props => props.textAlign || "left"};
    padding: ${props => props.padding || ".8rem"};
    margin: ${props => props.margin || "0rem"};
    display: ${props => props.display || "inline-block"};
    min-height: ${props => props.minHeight || "auto"};
    height: ${props => props.height || "auto"};
    min-width: ${props => props.minWidth || "auto"};
    width: ${props => props.width || "auto"};
    background-color: ${props => props.backgroundColor || "rgba(3, 138, 191, 1)"};
    color: ${props => props.color || "rgba(255, 255, 255, 1)"};
    border-radius: ${props => props.borderRadius || "4px"};
    border: 1px solid ${props => props.borderColor || "rgba(255,255,255,1)"} ;

    ${props => css`
      &:hover {
        background-color: ${props => props.hoverBackgroundColor || "rgba(255, 255, 255, 1)"};
        color: ${props => props.backgroundColor || "rgba(3, 138, 191, 1)"};
        border: 1px solid rgba(3, 138, 191, 1);
        transition: .25s ease-out;
      }
    `}
`;

export default Button;
