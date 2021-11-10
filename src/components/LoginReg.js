import React from 'react';
import styled from 'styled-components';

const LoginReg = (props) => {

    const StyledLoginRegConteiner = styled.div`
        color:${props => props.color || props.theme.colors.primary }
    `
    const StyledMainContentdiv = styled.div`
        color:${props => props.color || props.theme.colors.primary.edge };
        width:${props => props.width || 'auto' };
        background-color:${props => props.background || '#FFFFFF' };
        display:flex;
        flex-direction:${props => props.direction || 'row' };
        align-self:${props => props.self || 'center' };
        margin:${props => props.margin || '0'};
        border:${props => props.border || 'none'};
        border-radius:${props => props.borderRadius || '0'};
    `

    return (
        <StyledLoginRegConteiner>
            <StyledMainContentdiv width={'25vw'} direction={'column'}  margin={`50px auto`} border={`4px solid`} borderRadius={'20px'}>
                dd<span>sad</span>
                dd<span>s</span>
                dd<span>sad</span>
                dd<span>s</span>
                dd<span>sad</span>
                dd<span>s</span>
                dd<span>sad</span>
                dd<span>s</span>
                dd<span>sad</span>
                dd<span>s</span>
            </StyledMainContentdiv>
        </StyledLoginRegConteiner>
    )
}

export default LoginReg;