import styled from "styled-components"

export const StyledLoginRegConteiner = styled.div`
color:${props => props.color || props.theme.colors.primary }
width:100vw;
height:100vh;
`
export const StyledMainContentdiv = styled.div`
color:${props => props.color || props.theme.colors.primary.edge };
width:${props => props.width || 'auto' };
height:${props => props.height || 'auto' };
background-color:${props => props.background || '#FFFFFF' };
display:flex;
flex-direction:${props => props.direction || 'row' };
align-items:${props => props.items || 'start' };
margin:${props => props.margin || '0'};
padding:${props => props.padding || '0'};
border:${props => props.border || 'none'};
border-radius:${props => props.borderRadius || '0'};
`
export const StyledSpan = styled.span`
color:${props => props.color || props.theme.colors.primary.color };
width:${props => props.width || 'auto' };
max-width:${props => props.maxWidth || 'auto' };
height:${props => props.height || 'auto' };
background-color:${props => props.background || '#FFFFFF' };
display:flex;
flex-direction:${props => props.direction || 'row' };
align-items:${props => props.items || 'start' };
margin:${props => props.margin || '0'};
padding:${props => props.padding || '0'};
border:${props => props.border || 'none'};
border-radius:${props => props.borderRadius || '0'};
`
