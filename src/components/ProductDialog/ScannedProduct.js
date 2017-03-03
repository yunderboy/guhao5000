/**
 * Created by younderboy on 27-02-2017.
 */
import React from 'react';
import { productScanning } from '../../actions';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import { connect } from 'react-redux';
import DialogAppBar from '../DialogAppBar';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const ProductDialog = ({dispatch})=> {
    const style = {
        contents: {
            overflow: 'auto',
            height: 'calc(100vh - 120px)'
        },
        productName: {
            fontSize: '1.3rem'
        },
        manufacturer: {
            fontSize: '0.8rem'
        }
    };

    // NOTE: dummy data
    const product = {
        name: 'Blåbær marmelade',
        manufacturer: 'Den gamle fabrik',
        ingredientList: 'Sukker, blåbær (35%), vand, geleringsmidler (frugtpektin, johannesbrødkernemel), surhedsregulerende middel (citronsyre), konserveringsmiddel (kaliumsorbat). Fremstillet af 35g blåbær pr. 100g',
        macroNutrition: {
            energy: '879/210',
            protein: 0.5,
            carbonHydrates: 50.0,
            fats: 0.5
        }
    };

    return (
         <div>
             <DialogAppBar dispatch={dispatch} title={'Scan produkt'}/>
             <div style={style.contents}>
                 <Card>
                     <CardHeader
                         title={product.name}
                         subtitle={product.manufacturer}
                         actAsExpander={false}
                         showExpandableButton={false}
                     />
                     <CardText expandable={false}>
                         {product.ingredientList}
                     </CardText>
                 </Card>

                 <br/>

                 <Card>
                     <CardHeader
                         title={'Næringsindhold'}
                         subtitle={'pr. 100 g'}
                     />
                     <CardText>
                         <Table selectable={false}>
                             <TableBody displayRowCheckbox={false}>
                                 <TableRow>
                                     <TableRowColumn>Energi (kj/kcal)</TableRowColumn>
                                     <TableRowColumn>{product.macroNutrition.energy}</TableRowColumn>
                                 </TableRow>
                                 <TableRow>
                                     <TableRowColumn>Protein</TableRowColumn>
                                     <TableRowColumn>{product.macroNutrition.protein} g</TableRowColumn>
                                 </TableRow>
                                 <TableRow>
                                     <TableRowColumn>Kulhydrater</TableRowColumn>
                                     <TableRowColumn>{product.macroNutrition.carbonHydrates} g</TableRowColumn>
                                 </TableRow>
                                 <TableRow>
                                     <TableRowColumn>Fedt</TableRowColumn>
                                     <TableRowColumn>{product.macroNutrition.fats} g</TableRowColumn>
                                 </TableRow>
                             </TableBody>
                         </Table>
                     </CardText>
                 </Card>
             </div>
         </div>
    )
};

export default connect(
    (store) => ({
        dispatch: store.dispatch
    })
)(ProductDialog);
