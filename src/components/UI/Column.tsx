import styled from "styled-components";

interface ColumnProps {
    position?: string,
    margin?: string,
    padding?: string,
    display?: string,
    minHeight?: string,
    height?: string,
    minWidth?: string,
    width?: string,
    backgroundColor?: string,
    order?: number
}

const Column = styled.div<ColumnProps>`
    position: ${props => props.position || "relative"};
    padding: ${props => props.padding || "0rem"};
    margin: ${props => props.margin || "0rem"};
    display: ${props => props.display || "block"};
    min-height: ${props => props.minHeight || "100%"};
    height: ${props => props.height || "100%"};
    min-width: ${props => props.minWidth || "100%"};
    width: ${props => props.width || "100%"};
    background-color: ${props => props.backgroundColor || "#FFF" };
    order: ${props => props.order || 0 };
`;

export default Column;
