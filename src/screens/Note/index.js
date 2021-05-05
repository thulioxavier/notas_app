import React, { useLayoutEffect, createRef } from 'react';
import ActionSheet from "react-native-actions-sheet";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import {TouchableOpacity} from 'react-native';

import { Checked } from '../../constants/icons';
import { Conteiner, P, SaveButton, SaveImg, Row, ContModal, ButtomMin, NoteOptions, TitleInput, BodyText, TextButton } from './styles';

const actionSheetRef = createRef();

const Note = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector(state => state.notes.list);
    const navigation = useNavigation();


    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [color, setColor] = React.useState('#050508');
    const [type, setType] = React.useState('Nota');
    const [status, setStatus] = React.useState('new');

    React.useEffect(()=>{
        if(route.params?.key != undefined && list[route.params.key] ){
            setStatus('edit');
            setTitle(list[route.params.key].title);
            setBody(list[route.params.key].body);
            setColor(list[route.params.key].color);

        }
    },[]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <SaveButton underlayColor="transparent">
                    <SaveImg source={Checked} style={{tintColor: '#F0F0F5'}} />
                </SaveButton>
            )
        });
    }, [])

    return (
        <Conteiner>
            <TitleInput
                placeholder="Título da Nota"
                onChangeText={e=> setTitle(e)}
                value={title}
                autoFocus={true}
            />
            <BodyText
                placeholder="Corpo da Nota"
                multiline={true}
                textAlignVertical="top"
                value={body}
                onChangeText={e=> setBody(e)}
            />
                <NoteOptions
                    onPress={() => {
                        actionSheetRef.current?.setModalVisible();
                    }}
                >
                    <TextButton >OPÇÕES DA NOTA</TextButton>
                </NoteOptions>

                <ActionSheet ref={actionSheetRef}>
                    <ContModal>
                        <P>Cor de marcação:</P>
                        <Row horizontal={true} showsHorizontalScrollIndicator={false}>
                            <ButtomMin style={{backgroundColor: '#050508', marginLeft: 0}} onPress={()=>setColor('#050508')}/>
                            <ButtomMin style={{backgroundColor: '#CE1929'}} onPress={()=>setColor('#CE1929')}/>
                            <ButtomMin style={{backgroundColor: '#386ED9'}} onPress={()=>setColor('#386ED9')}/>
                            <ButtomMin style={{backgroundColor: '#007C49'}} onPress={()=>setColor('#007C49')}/>
                            <ButtomMin style={{backgroundColor: '#E2520D'}} onPress={()=>setColor('#E2520D')}/>
                            <ButtomMin style={{backgroundColor: '#DDA9C2'}} onPress={()=>setColor('#DDA9C2')}/>
                            <ButtomMin style={{backgroundColor: '#F5BE0A'}} onPress={()=>setColor('#F5BE0A')}/>
                            <ButtomMin style={{backgroundColor: '#3C1195'}} onPress={()=>setColor('#3C1195')}/>
                            <ButtomMin style={{backgroundColor: '#361709'}} onPress={()=>setColor('#361709')}/>
                        </Row>
                    </ContModal>
                </ActionSheet>
        </Conteiner>
    );
}

export default Note;