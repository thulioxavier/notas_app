import React, { useLayoutEffect, createRef } from 'react';
import {useNavigation} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import ActionSheet from "react-native-actions-sheet";

import {Add} from '../../constants/icons';
import {NotesImage} from '../../constants/img';
import {Item} from '../../components/index';
import { Conteiner, AddButton, AddImg, NotesList, NoNotes, NoNotesImg, NoNotesText, Row, ContModal, ButtomMin, NoteOptions, TextButton, P} from './styles';

const actionSheetRef = createRef();


const Home = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const list = useSelector(state => state.notes.list);
    const [select, setSelect] = React.useState(false);

    const handleNotePress = (index) =>{

        navigation.navigate('PostNote', {
            key: index,
        });
        actionSheetRef.current?.setModalVisible(false);
    }

    const handleNotePressDel = (index) =>{
        dispatch({
            type: 'DEL_NOTE',
            payload: {
                key: index
            }
        });
        actionSheetRef.current?.setModalVisible(false);
    }
    const openOpc = (index) => {
        actionSheetRef.current?.setModalVisible(true);
        setSelect(index);
    }

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerRight: () => (
                <AddButton underlayColor="transparent" onPress={()=> navigation.navigate('PostNote')}>
                    <AddImg source={Add}/>
                </AddButton>
            )
        });
    },[])

    return(
        <Conteiner>
        {list.length > 0 &&
            <NotesList
                data={list}
                renderItem={({item, index})=> (
                    <Item 
                        data={item}
                        index={index}
                        onPress={() => openOpc(index)}
                    />
                )}
                
                keyExtractor={(item, index)=>index.toString()}
            />
        }

        { list.length == 0 &&

            <NoNotes>
                <NoNotesImg source={NotesImage}/>
                <NoNotesText>Nenhuma anotação aqui!</NoNotesText>
            </NoNotes>
            
        }
        <ActionSheet ref={actionSheetRef} style={{flex: 1}}>
                <ContModal>
                    <P>Opções:</P>
                    <Row>
                    <NoteOptions onPress={()=> handleNotePress(select)} >
                        <TextButton>Editar</TextButton>
                    </NoteOptions>
                    <NoteOptions onPress={()=> handleNotePressDel(select)}>
                        <TextButton>Excluir</TextButton>
                    </NoteOptions>
                    </Row>
                </ContModal>
            </ActionSheet>
        </Conteiner>
    );
}

export default Home;