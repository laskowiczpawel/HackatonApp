import styled from 'styled-components';

export const MatchWordsC = styled.div `
    color: black;
`;

export const GridArea = styled.div`
    font-size: 16px;
    display: grid; 
    grid-template-row: 1fr 1fr 1fr 1fr;
    grid-template-column: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-template-areas: 'myArea myArea myArea myArea'
    'myArea myArea myArea myArea'
    'myArea myArea myArea myArea'
    'myArea myArea myArea myArea';
`;

export const GridItem = styled.div`
    color: red;
    font-size: 1.5rem;
    height: 130px;
    width: 200px;
    align-self: center;
    justify-self: center;
    border: .5px solid orange;
    padding: 5px;
    &:hover {
        background-color: orange;
    }
`;