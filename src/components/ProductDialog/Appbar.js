/**
 * Created by younderboy on 01-03-2017.
 */
import React from 'react';
import AppBar1 from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux';

const AppBar = ({dispatch, title}) => {

    return (
        <AppBar1
            title={"Tilføj produkt"}
            style={{backgroundColor: '#dc0000'}}
            iconElementLeft={<IconButton onTouchTap={()=>dispatch(push('/home'))}><NavigationClose /></IconButton>}
            iconElementRight={<FlatButton onTouchTap={()=>dispatch(push('/home'))} label="Tilføj" />}
        />
    )
};

export default AppBar;
