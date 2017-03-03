/**
 * Created by younderboy on 21-02-2017.
 */
import React from 'react';
import logo from './logo.svg';
import FabFlick from '../FabFlick';
import { connect } from 'react-redux';
import Appbar from './AppBar';

const Home = ({home, dispatch}) => {
    return (
        <div>
            <Appbar/>
            <div style={{
                position: 'fixed',
                bottom: '0.5rem',
                right: '0.5rem',
            }}>
                <FabFlick FABsOpen={home.FABsOpen} dispatch={dispatch}/>
            </div>
        </div>
    )
};

export default connect(
    (store) => ({
        home: store.home,
        dispatch: store.dispatch
    })
)(Home);
