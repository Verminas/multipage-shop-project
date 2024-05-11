import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string,
  justify?: string,
  align?: string,
  gap?: string,
  wrap?: string,
  maxwidth?: string,
  width?: string,
  flexshrink?: string,
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    max-width: ${props => props.maxwidth || '100%'};
    width: ${props => props.width || '100%'};
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0'};
    flex-shrink: ${props => props.flexshrink || '1'};
`