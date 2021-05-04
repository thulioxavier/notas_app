import React, { useLayoutEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

import {Add} from '../../constants/icons';
import {NotesImage} from '../../constants/img';
import {Item} from '../../components/index';
import { Conteiner, AddButton, AddImg, NotesList, NoNotes, NoNotesImg, NoNotesText } from './styles';


const Home = () => {

    const navigation = useNavigation();
    const list = useSelector(state => state.notes.list);

    const handleNotePress = (index) =>{
        navigation.navigate('PostNote', {
            key: index,
        })
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
                        onPress={handleNotePress}
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
        </Conteiner>
    );
}

export default Home;