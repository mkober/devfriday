import styled from "styled-components";

interface ContainerProps {
    position?: string,
    margin?: string,
    padding?: string,
    display?: string,
    alignItems?: string,
    justifyContent?: string,
    height?: string,
    width?: string,
}

const Container = styled.div<ContainerProps>`
    position: ${props => props.position || "relative"};
    padding: ${props => props.padding || "0rem"};
    margin: ${props => props.margin || "0rem"};
    display: ${props => props.display || "block"};
    align-items: ${props => props.alignItems || "flex-start"};
    justify-content: ${props => props.justifyContent || "flex-start"};
    height: ${props => props.height || "100%"};
    width: ${props => props.width || "100%"};
`;

export default Container;
