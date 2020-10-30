import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import {Header} from './component/common';
import LibraryList from './component/LibraryList'

const App = () => {

    return(
       <Provider store={createStore(reducer)}>
           <View style={{flex:1}}>
                <Header title="Tech Stack"/>
                <LibraryList/>
            </View>
       </Provider>
    )
}

export default App;