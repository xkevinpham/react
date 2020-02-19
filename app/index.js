import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//Component
//State
//Lifecycle
//UI



class App extends React.Component {
    render(){
        return (
        <div>
            Hello World!
        </div>
        )
    }
}

ReactDOM.render(
    //React Element
    <App/>,
    //Where to render the Element to
    document.getElementById('app')

)