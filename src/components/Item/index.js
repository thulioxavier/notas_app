import React from 'react';
import {Container, Marck, Title, Body, Row, MarckT, Content} from './styles';

const Item = ({data, index, onPress}) =>{
    return(
        <>
            <Container onPress={ ()=> onPress(index)}>
                <Content>
                    <Title style={{color: '#F0F0F5', fontWeight: 'bold'}}>{data.type}</Title>
                </Content>
                <Row>
                    <Marck style={{backgroundColor: data.color}}/>
                    <Title>{data.title}</Title>
                </Row>
                <Row>
                    <MarckT/>
                    <Body>{data.date_end}</Body>
                </Row>
                
            </Container>
        </>
    )
}

export default Item;