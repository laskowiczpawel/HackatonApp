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
        opacity: 0.85;
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
        font-size: 20px;
        top: 15px;
        left: 15px;
        position: absolute;
        padding: 5px;
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
        font-size: 20px;
        width: 22vw;
        top: 15px;
        right: 15px;
        position: absolute;
        background-color: blue;
        padding: 5px;
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
        font-size: 20px;
        width: 22vw;
        top: 15px;
        left: 15px;
        position: absolute;
        padding: 5px;
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
        font-size: 20px;
        padding: 5px;
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
        justify-content: center;
        align-items: center;
        display: flex;
         
 
         .quiz-test {
             display:none;
         }

         .title {
           text-align: center;
         }
 
         h1 {
           color: lightgray;
         }
         
         ul {
            margin: auto;
         }

         .core-front {
           display: flex;
           justify-content: center;
           align-items: center;
           height: 100%;
           flex-direction: column;
         }
 
         .list-group-item {
           list-style: none;
           text-align: center;
           font-size: 18px;
           font-weight: bold;
           color: lightgray;
         }
 
         .left-list {
           position: absolute;
           display: grid;
           grid-template-columns: 1fr;
           grid-template-rows: minimax(10px, 20px);
           margin-right: 250px;
         }
 
         .button-to-quiz {
           
           display: flex;
           padding: 10px 45px;
           text-decoration: none;
           font-family: "Poppins", sans-serif;
           font-size: 20px;
           color: white;
           background: #3225e6;
           transition: 1s;
           box-shadow: 6px 6px 0 black;
           transform: skewX(-15deg);
           margin: auto;
           margin-top: 20px;
         }
 
         .button-to-quiz:focus {
           outline: none;
         }
 
         .button-to-quiz:hover {
           transition: 0.5s;
           box-shadow: 10px 10px 0 #fbc638;
         }
 
         .button-to-quiz span:nth-child(2) {
           transition: 0.5s;
           margin-right: 0px;
         }
 
         .button-to-quiz:hover span:nth-child(2) {
           transition: 0.5s;
           margin-right: 45px;
         }
 
         span {
           transform: skewX(15deg);
         }
 
         span:nth-child(2) {
           width: 20px;
           margin-left: 30px;
           position: relative;
           top: 12%;
         }
 
         /**************SVG****************/
 
   
 
         .button-to-quiz:hover path.three {
           animation: color_anim 1s infinite 0.2s;
         }
 
         .button-to-quiz:hover path.one {
           transform: translateX(0%);
           animation: color_anim 1s infinite 0.6s;
         }
 
         .button-to-quiz:hover path.two {
           transform: translateX(0%);
           animation: color_anim 1s infinite 0.4s;
         }
 
         /* SVG animations */
 
         @keyframes color_anim {0% {
             fill: white;
           }
           50% {
             fill: #fbc638;
           }
           100% {
             fill: white;
           }}
 
         .right-list {
           display: grid;
           grid-template-columns: 1fr;
           grid-template-rows: minimax(10px, 20px);
           margin-left: 250px;
           text-align: left;
         }`;

