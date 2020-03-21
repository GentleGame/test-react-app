import React from 'react';
import Header from "./Components/Header/index"
import Steps from "./Components/Steps/index"


class App extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return <div>
                <Header/>
                <Steps/>
        </div>
    }
}

export default App;