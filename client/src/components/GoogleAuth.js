import React from 'react';

class GoogleAuth extends React.Component{
    //Declare state to be null so that nothing is written on page when App loads.
    state = { isSignedIn: null }

    //This section will load the entire Google Sign In library.
    //It will wait till the entire library loads and then authenticate the key.
    //After loading, it will authenticate the signer in and state is changed 
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '526453861795-m5rvehdqeadi0a1f1uetudpt49feeudn.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                })
            })
        })
    }
    //Helper function that will read state and then place appropriate 
    //status in the header bar.
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return (
                <div>
                    <button>LOG IN</button>
                </div>
                )
        } else if(this.state.isSignedIn){
            return (
                <div>
                    <button>Signed in</button>
                </div>
                )
        } else {
            return <button>Sign in</button>
        }
    }


    render(){
        return( 
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth;