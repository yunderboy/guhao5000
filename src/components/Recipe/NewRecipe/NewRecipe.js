/**
 * Created by younderboy on 01-03-2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import DialogAppBar from '../../DialogAppBar';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { recipe } from '../../../actions';

const NewRecipe = ({recipeData, dispatch})=> {
    const style={
        contents: {
            overflow: 'auto',
            height: 'calc(100vh - 120px)'
        },
    };

    const handleSelectChange = (event, index, newVal)=> {
        dispatch(recipe.setPreparationForm(newVal));
    };


    return (
     <div>
         <DialogAppBar dispatch={dispatch} title={'Ny opskrift'}/>
         <div style={style.contents}>
             <Card>
                 <CardText>
                     {/* Name and description of recipe */}
                     <TextField
                         hintText="Navn"
                         floatingLabelText="Navn"
                     />
                     <br/>
                     <TextField
                         hintText="Beskrivelse"
                         floatingLabelText="Beskrivelse"
                     />
                     {/* Preparation Form */}
                     <SelectField
                         floatingLabelText="Tilberedningsform"
                         value={recipeData.preparationForm}
                         onChange={handleSelectChange}
                         selectedMenuItemStyle={{color: '#3366CC'}}
                     >
                         <MenuItem value={1} primaryText="Kogt" />
                         <MenuItem value={2} primaryText="Stægt" />
                         <MenuItem value={3} primaryText="Bagt" />
                         <MenuItem value={4} primaryText="Dampet" />
                         <MenuItem value={5} primaryText="Grilled" />
                     </SelectField>
                 </CardText>
             </Card>

             <br/>

             <Card>
                 <CardHeader title={'Ingredienser'}/>
                 <CardText>

                 </CardText>
             </Card>

         </div>
     </div>
    )
};

export default connect(
    (store) => ({
        recipeData: store.recipe,
        dispatch: store.dispatch
    })
)(NewRecipe);
