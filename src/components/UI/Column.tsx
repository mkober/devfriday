import styled from "styled-components";

interface ColumnProps {
    flex?: string,
    position?: string,
    margin?: string,
    padding?: string,
    display?: string,
    minHeight?: string,
    height?: string,
    minWidth?: string,
    width?: string,
    backgroundColor?: string,
    order?: number,
    flexBasis?: number,
    flexGrow?: number,
    flexShrink?: number,
    isGapless?: boolean,
    isGaplessDesktop?: boolean,

}

const Column = styled.div<ColumnProps>`
    flex: ${props => props.flex || "none"};
    position: ${props => props.position || "relative"};
    padding: ${props => props.padding || "1.75rem"};
    margin: ${props => props.margin || "0rem"};
    display: ${props => props.display || "block"};
    min-height: ${props => props.minHeight || "100%"};
    height: ${props => props.height || "100%"};
    width: ${props => props.width || "100%"};
    background-color: ${props => props.backgroundColor || "rgba(255,255,255,0)" };
    order: ${props => props.order || 0 };

    ${props => props.isFull && `
      width: 100%;
    `}
    ${props => props.isFourFifths && `
      @media screen and (min-width: 769px), print {
        width: 80%;
      }
    `}
    ${props => props.isThreeQuarters && `
      @media screen and (min-width: 769px), print {
        width: 75%;
      }
    `}
    ${props => props.isTwoThirds && `
      @media screen and (min-width: 769px), print {
        width: 66.6666%;
      }
    `}
    ${props => props.isThreeFifths && `
      @media screen and (min-width: 769px), print {
        width: 60%;
      }
    `}
    ${props => props.isHalf && `
      @media screen and (min-width: 769px), print {
        width: 50%;
      }
    `}
    ${props => props.isTwoFifths && `
      @media screen and (min-width: 769px), print {
        width: 40%;
      }
    `}
    ${props => props.isOneThird && `
      @media screen and (min-width: 769px), print {
        width: 33.3333%;
      }
    `}
    ${props => props.isOneQuarter && `
      @media screen and (min-width: 769px), print {
        width: 25%;
      }
    `}
    ${props => props.isOneFifth && `
      @media screen and (min-width: 769px), print {
        width: 20%;
      }
    `}
    ${props => props.isGapless && `
      padding: 0 !important;
    `}
    ${props => props.isGaplessDesktop && `
      @media screen and (min-width: 769px), print {
        padding: 0 !important;
      }
    `}
`;

export default Column;
