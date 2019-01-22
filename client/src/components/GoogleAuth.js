import React from 'react';
import { connect } from 'react-redux';
import { signIn , signOut } from '../actions';

class GoogleAuth extends React.Component{


    //This section will load the entire Google Sign In library.
    //It will wait till the entire library loads and then authenticate the key.
    //After loading, it will authenticate the signer in and state is changed 
    //The program waits till the entire library is loaded/initialized and the 
    //sign-in is authenticated.
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '526453861795-m5rvehdqeadi0a1f1uetudpt49feeudn.apps.googleusercontent.com',
                scope: 'email'}).then(()=>{
                    //Authorization object is loaded
                    this.auth = window.gapi.auth2.getAuthInstance()

                    //This function wil call onAuthChange and will pass reducer as argument.
                    this.onAuthChange(this.auth.isSignedIn.get());
                    //this function listens to state throughout....keeps log in constant.
                    this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn()
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    //Helper function that will read state and then place appropriate 
    //status in the header bar.
    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null
        } else if(this.props.isSignedIn){
            return (
                <div>
                    <button onClick={this.onSignOutClick} className='ui red google button'>
                    <i className='google icon' />
                        Sign Out
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.onSignInClick} className='ui green google button'>
                        <i className='google icon' />
                            Sign In with Google
                    </button>
                </div>
            )
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

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);