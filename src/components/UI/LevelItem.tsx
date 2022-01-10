import styled from "styled-components";

interface LevelItemProps {
    display?: string,
    alignItems?: string,
    justifyContent?: string,
    flexBasis?: string,
    flexShrink?: number,
    flexGrow?: number,
}

const LevelItem = styled.div<LevelItemProps>`
    display: ${props => props.display || "flex"};
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justifyContent || "center"};
    flex-basis: ${props => props.flexBasis || "auto"};
    flex-shrink: ${props => props.flexBasis || 0};
    flex-grow: ${props => props.flexGrow|| 1};
`;

export default LevelItem;
