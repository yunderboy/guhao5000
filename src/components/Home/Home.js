/**
 * Created by younderboy on 21-02-2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { postCoordinates } from '../../businessLogic';


const Home = ({home, dispatch}) => {
    const styles = {
        body: {
            padding: '1rem'
        },
        paper: {
            margin: 'auto',
            width: '50%',

            textFields: {
                padding: '1rem'
            },
            submitBtn: {
                margin: 1
            }
        }
    };

    return (
        <div style={styles.body}>
            <Paper style={styles.paper}>

                <div style={styles.paper.textFields}>
                    <h3>Coordinate input</h3>
                    {/* X coordinate */}
                    <TextField
                        hintText="X"
                        floatingLabelText="X coordinate"
                        floatingLabelFixed={true}
                    />
                    {/* Y coordinate */}
                    <TextField
                        hintText="Y"
                        floatingLabelText="Y coordinate"
                        floatingLabelFixed={true}
                    />
                    {/* Z coordinate */}
                    <TextField
                        hintText="Z"
                        floatingLabelText="Z coordinate"
                        floatingLabelFixed={true}
                    />

                    <br/>
                    <RaisedButton label="Submit" primary={true} style={styles.paper.submitBtn} onTouchTap={()=>postCoordinates.postCoordinates()}/>
                </div>

            </Paper>
        </div>
    )
};

export default connect(
    (store) => ({
        home: store.home,
        dispatch: store.dispatch
    })
)(Home);
