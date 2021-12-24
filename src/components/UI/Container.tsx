import styled from "styled-components";

interface ContainerProps {
    position?: string,
    margin?: string,
    padding?: string,
    display?: string,
    alignItems?: string,
    justifyContent?: string,
    minHeight?: string,
    height?: string,
    minWidth?: string,
    width?: string,
    backgroundColor?: string,
}

const Container = styled.div<ContainerProps>`
    position: ${props => props.position || "relative"};
    padding: ${props => props.padding || "0rem"};
    margin: ${props => props.margin || "0rem"};
    display: ${props => props.display || "block"};
    align-items: ${props => props.alignItems || "flex-start"};
    justify-content: ${props => props.justifyContent || "flex-start"};
    min-height: ${props => props.minHeight || "100%"};
    height: ${props => props.height || "100%"};
    min-width: ${props => props.minWidth || "100%"};
    width: ${props => props.width || "100%"};
    background-color: ${props => props.backgroundColor || "#FFF" };
`;

export default Container;
