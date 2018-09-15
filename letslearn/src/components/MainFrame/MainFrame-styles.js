import styled from 'styled-components'

const blueColor = "#001F36";
const orangeColor = "#e69138ff";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const GridContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    .white-front {
        width: 100%;
        height: 100%;
        background-color: ${blueColor};
        opacity: 0.7;
    }
`;

export const GridItem1 = styled.div`
    position: relative;
    background-color: blue;
    position: relative;
    width: 50vw;
    height: 50vh;

    .information{
        width: 22vw;
        top: 15px;
        left: 15px;
        position: absolute;
        background-color: red;
    }
`;

export const GridItem2 = styled.div`
    background-color: red;
    position: relative;
    width: 50vw;
    height: 50vh;
`;

export const GridItem3 = styled.div`
    background-color: green;
    position: relative;
    width: 50vw;
    height: 50vh;
`;

export const GridItem4 = styled.div`
    background-color: gray;
    position: relative;
    width: 50vw;
    height: 50vh;
`;

export const Core = styled.div`
    border: 5px solid ${orangeColor};
    position: absolute;
    background-color: ${blueColor};
    width: 50vw;
    height: 70vh;
    border-radius: 50px;
    padding: 20px;
    box-sizing: border-box;
`;

