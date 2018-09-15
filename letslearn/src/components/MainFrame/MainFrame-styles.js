import styled from 'styled-components';

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

    .white-background{
        background-color: white;
        position: absolute;
    }
`;

export const GridItem1 = styled.div`
    background: ${props => `url(${props.background}) no-repeat center left`}; 
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
    background: ${props => `url(${props.background}) no-repeat center left`};    
    position: relative;
    width: 50vw;
    height: 50vh;

    .kitchen{
        width: 22vw;
        top: 15px;
        right: 15px;
        position: absolute;
        background-color: blue;
    }
`;

export const GridItem3 = styled.div`
    background: ${props => `url(${props.background}) no-repeat center left`};    
    position: relative;
    width: 50vw;
    height: 50vh;

    .place{
        width: 22vw;
        top: 15px;
        left: 15px;
        position: absolute;
        background-color: red;
    }
`;

export const GridItem4 = styled.div`
    background-color: gray;
    position: relative;
    width: 50vw;
    height: 50vh;

    .place {
        width: 22vw;
        top: 15px;
        right: 15px;
        position: absolute;
        background-color: blue;
}`;

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

