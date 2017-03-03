/**
 * Created by younderboy on 22-02-2017.
 */
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconCenterFocusWeak from 'material-ui/svg-icons/image/center-focus-weak';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import {home} from '../../actions';
import Chip from 'material-ui/Chip';
import { push } from 'react-router-redux';

const FabFlick = ({FABsOpen, dispatch})=> {
    const style= {
        mainDiv: {
            display: 'flex',
            flexDirection: 'column-reverse',
        },
        primaryBtn: {
            flexOrder: 1,
            paddingTop: '1rem',
            marginLeft: 'auto'
        },
        secondaryFAB: {
            paddingTop: '1rem',
            paddingRight: '0.5rem',
            marginLeft: 'auto'
        }
    };


    const toggleOpen = ()=> {
        if (FABsOpen==false) {
            dispatch(home.toggleOpen(true))
        } else {
            dispatch(home.toggleOpen(false))
        }
        console.debug(FABsOpen);
    };

    function SecondaryFAB(labelName, color, action, icon) {
        this.labelName = labelName;
        this.color = color;
        this.action = action;
        this.icon = icon;
    }

    const FABs = [
        new SecondaryFAB('Scan', '#FF6600', ()=>dispatch(push('/scanProduct')), (<IconCenterFocusWeak/>)),
        new SecondaryFAB('Ny opskrift', '#3366CC', ()=>dispatch(push('/recipe/new')), (<NoteAdd/>)),
        new SecondaryFAB('Produkt', '#3366CC', ()=>dispatch(push('/')), (<NoteAdd/>)),
        new SecondaryFAB('Opskrift', '#3366CC', ()=>dispatch(push('/')), (<NoteAdd/>))
    ];



    return (
        <div style={style.mainDiv}>
            {/*Primary button*/}
            <div style={style.primaryBtn}>
                <FloatingActionButton
                    backgroundColor={'#dc0000'}
                    onClick={()=>toggleOpen()}
                >
                    <ContentAdd />
                </FloatingActionButton>
            </div>

            {/*Add product button*/}
            {
                FABsOpen ? FABs.map((FAB, index) =>(
                    <div style={{...style.secondaryFAB, flexOrder: index}}>
                        <div style={{display: 'flex'}}>
                            <div style={{justifyContent: 'flex-end'}}>
                                <Chip>
                                    {FAB.labelName}
                                </Chip>
                            </div>

                            {/* FAB */}
                            <div style={{flexOrder: '2', paddingLeft: '0.3rem'}}>
                                <FloatingActionButton
                                    backgroundColor={FAB.color}
                                    onClick={FAB.action}
                                    mini={true}
                                >
                                    {FAB.icon}
                                </FloatingActionButton>
                            </div>
                        </div>
                    </div>
                    ))
                    : <div></div>
            }

        </div>
    );
};

export default FabFlick;