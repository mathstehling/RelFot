import styled from 'styled-components/native'

export const InputTextSearch = styled.TextInput`
width: 100%;
flex-direction: row;
font-size: ${({ theme, font }) => theme.metrics.px(font ? 12 : 14)}px;
font-family: ${({ theme }) => theme.fonts.semiBold};
color: ${({ theme }) => theme.colors.secondary};
padding: ${({ theme, pd }) => theme.metrics.px(pd ? 5 : 12)}px;
`