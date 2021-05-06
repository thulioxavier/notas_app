import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
    padding: 5px;
    width: 100%;
    height: auto;
    border-radius: 3px;
    border-width: 2px;
    border-color: #050508;
    margin-bottom: 10px;
`;

export const Content = styled.View`
    width: auto;
    justify-content: center;
    align-items: center;
    background-color: #050508;
    margin-left: -5px;
    margin-right: -5px;
    margin-top: -5px;
    margin-bottom: 10px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Marck = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 50px;
    margin-right: 10px;
`;

export const Title = styled.Text`
    font-size: 16px;
`;

export const Body = styled.Text`
    font-size: 14px;
    color: #3B3C43;
`;

export const MarckT = styled.View`
    width: 0; 
    height: 0; 
    border-top-width: 9px;
    border-bottom-width: 9px;
    border-left-width: 14px ;
    border-top-color: transparent;
    border-left-color: #000;
    border-bottom-color: transparent;
    margin-right: 10px;

`;