import styled from "styled-components";

interface LevelsProps {
    display?: string,
    alignItems?: string,
    justifyContent?: string,
}

const Levels = styled.div<LevelsProps>`
    display: ${props => props.display || "flex"};
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justifyContent || "space-between"};
    margin: ${props => props.margin || "1rem 0rem 1rem 0rem"};
`;

export default Levels;
