import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component{
    renderInput(formProps){
        return <input {...formProps.input}/>
    }
    
    
    render(){
        return(
            <form>
                <h3>Title:</h3>
                <Field name='title' component={this.renderInput}/>
                <h3>Description:</h3>
                <Field name='description' component={this.renderInput}/>
            </form>
        )
    }
}



export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);