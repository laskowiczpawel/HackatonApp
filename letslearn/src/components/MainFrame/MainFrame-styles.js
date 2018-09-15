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
    background-size:cover;
    position: relative;
    width: 50vw;
    height: 50vh;

    .white-front{
        visibility: ${props => props.visible}; 
    }
    .information {width: 22vw;
        top: 15px;
        left: 15px;
        position: absolute;

        border: 2px solid;
        background-color: #ff9600c9;
        border-radius: 8px;
        color: white;

    }
`;

export const GridItem2 = styled.div`
    background: ${props => `url(${props.background}) no-repeat center left`};    
    background-size:cover;
    position: relative;
    width: 50vw;
    height: 50vh;

    .white-front{
        visibility: ${props => props.visible}; 
    }

    .kitchen{
        width: 22vw;
        top: 15px;
        right: 15px;
        position: absolute;
        background-color: blue;

        border: 2px solid;
        background-color: #ff9600c9;
        border-radius: 8px;
        color: white;
    }
`;

export const GridItem3 = styled.div`
    background: ${props => `url(${props.background}) no-repeat center left`};    
    background-size:cover;
    position: relative;
    width: 50vw;
    height: 50vh;
   
    .white-front{
        visibility: ${props => props.visible}; 
    }

    .place{
        width: 22vw;
        top: 15px;
        left: 15px;
        position: absolute;

        border: 2px solid;
        background-color: #ff9600c9;
        border-radius: 8px;
        color: white;
    }
`;

export const GridItem4 = styled.div`
    background: ${props => `url(${props.background}) no-repeat center left`};    
    background-size:cover;
    position: relative;
    width: 50vw;
    height: 50vh;

    .white-front{
        visibility: ${props => props.visible}; 
    }

    .place {
        width: 22vw;
        top: 15px;
        right: 15px;
        position: absolute;

        border: 2px solid;
        background-color: #ff9600c9;
        border-radius: 8px;
        color: white;
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

