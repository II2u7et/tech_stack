import React, {Component} from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux';
import {CardSection} from './common';
import * as action from '../action';

class ListItem extends Component{
    componentDidUpdate(){
        LayoutAnimation.spring();
    }

    rederDescription(){

        const {library, expanded} = this.props;
      
        if(expanded){

            console.log(library.description);
            return (
                <CardSection>
                    <Text style={{flex: 1, marginLeft: 20}}>{library.description}</Text>
                </CardSection>
            )
        }
    }

    render(){

        const {id, title} = this.props.library;

        
        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>

                    <CardSection>
                    
                        <Text style={style.title}>
                            {title}
                        </Text>

                    </CardSection>
                    
                    {this.rederDescription()}

                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const style = StyleSheet.create({
    title:{
        flex: 1,
        paddingLeft:15,
        fontWeight: 'bold',
        color: '#007dba'
    }
})

const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.id;

    return {expanded}
}

export default connect(mapStateToProps, action)( ListItem );