import React, { useLayoutEffect, createRef } from 'react';
import ActionSheet from "react-native-actions-sheet";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import {TouchableOpacity} from 'react-native';

import { Save } from '../../constants/icons';
import { Conteiner, P, SaveButton, SaveImg, Row, ContModal, ButtomMin } from './styles';

const actionSheetRef = createRef();

const Note = () => {
    let actionSheet;

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <SaveButton underlayColor="transparent">
                    <SaveImg source={Save} />
                </SaveButton>
            )
        });
    }, [])

    return (
        <Conteiner>
           
                <TouchableOpacity
                    onPress={() => {
                        actionSheetRef.current?.setModalVisible();
                    }}
                >
                    <P>Open ActionSheet</P>
                </TouchableOpacity>

                <ActionSheet ref={actionSheetRef}>
                    <ContModal>
                        <Row horizontal={true} showsHorizontalScrollIndicator={false}>
                            <ButtomMin style={{backgroundColor: '#000', marginLeft: 0}}/>
                            <ButtomMin style={{backgroundColor: '#CE1929'}}/>
                            <ButtomMin style={{backgroundColor: '#386ED9'}}/>
                            <ButtomMin style={{backgroundColor: '#007C49'}}/>
                            <ButtomMin style={{backgroundColor: '#E2520D'}}/>
                            <ButtomMin style={{backgroundColor: '#DDA9C2'}}/>
                            <ButtomMin style={{backgroundColor: '#F5BE0A'}}/>
                            <ButtomMin style={{backgroundColor: '#3C1195'}}/>
                            <ButtomMin style={{backgroundColor: '#361709'}}/>
                        </Row>
                    </ContModal>
                </ActionSheet>
        </Conteiner>
    );
}

export default Note;