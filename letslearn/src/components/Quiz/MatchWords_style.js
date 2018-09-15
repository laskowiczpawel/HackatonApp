import styled from 'styled-components';

export const MatchWordsC = styled.div `
    color: black;
`;

export const GridArea = styled.div`
    display: grid;
    grid-template-row: 1fr 1fr 1fr 1fr;
    grid-template-column: 1fr 1fr 1fr 1fr;
    grid-template-areas: 'myArea myArea myArea myArea'
    'myArea myArea myArea myArea'
    'myArea myArea myArea myArea'
    'myArea myArea myArea myArea';
`;

export const GridItem = styled.div`
    color: red;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: orange;
    }
`;