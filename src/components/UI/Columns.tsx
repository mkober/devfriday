import styled from "styled-components";

interface ColumnsProps {
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
    flexWrap?: string,
    marginLeft?: string,
    marginRight?: string,
    marginTop?: string,
    isCentered?: boolean,
    isGapless?: boolean,
    isGaplessDesktop?: boolean,
    isMobile?: boolean,
    isDesktopReversed?: boolean,
    isMultiline?: boolean,
    isVCentered?: boolean
}

const Columns = styled.div<ColumnsProps>`
    position: ${props => props.position || "relative"};
    padding: ${props => props.padding || "0rem"};
    margin: ${props => props.margin || "0rem"};
    margin-left: ${props => props.marginLeft || "-1rem"};
    margin-right: ${props => props.marginRight || "-1rem"};
    margin-top: ${props => props.marginTop || "-1rem"};
    display: ${props => props.display || "block"};
    align-items: ${props => props.alignItems || "flex-start"};
    justify-content: ${props => props.justifyContent || "flex-start"};
    min-height: ${props => props.minHeight || "100%"};
    height: ${props => props.height || "100%"};
    width: ${props => props.width || "100%"};
    background-color: ${props => props.backgroundColor || "rgba(255,255,255,0)" };
    flex-wrap: ${props => props.flexWrap || "wrap" };

    &:last-child {
      margin-bottom: -0.75rem;
    }
    &:not(:last-child) {
      margin-bottom: calc(1.5rem - 0.75rem);
    }

    @media screen and (min-width: 769px), print {
      &:not(.is-desktop) {
        display: flex;
      }
    }
    @media screen and (min-width: 1024px), print {
      &.is-desktop) {
        display: flex;
      }
    }

    ${props => props.isCentered && `
      justify-content: center;
    `}
    ${props => props.isGapless && `
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
    `}
    ${props => props.isGapless && `
      &:last-child) {
        margin-bottom: 0;
      }
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    `}
    ${props => props.isMobile && `
      display: flex;
    `}
    ${props => props.isDesktopReversed && `
      display: flex;
      flex-direction: row-reverse;
    `}
    ${props => props.isMultiline && `
      flex-wrap: wrap;
    `}
    ${props => props.isVCentered && `
      align-items: center;
    `}
`;

export default Columns;
