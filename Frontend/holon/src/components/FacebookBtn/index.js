import { Component } from "react";
import FacebookLogin from 'react-facebook-login';



export class Facebook extends Component{

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: '',

    }
  }
  responseFacebook = response => {
    console.log(response);
    if(response.status !== 'unknown'){
      this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name:response.name,
      email: response.email,
      picture: response.picture.data.url
      });
    }
    
  }

  logout = response => {
    this.setState(state => ({
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: '',
    }));
  }

  componentClicked = () => console.log("clicked");

  render(){

    let fbContent;

    if(this.state.isLoggedIn){
      fbContent = (
        <div style={{
          width: '400px',
          margin:'auto',
          background: '#f4f4f4',
          padding: '20px'
        }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>{this.state.name}</h2>
        </div>
      );

    } else {
      fbContent = (<FacebookLogin 
      appId="760103887879159"
      autoLoad={true}
      fields="name,email,picture"
      onClick={this.componentClicked}
      callback={this.responseFacebook}
      />);
    }

    return(
      <div>
        {fbContent}
      </div>
    )
  }
}

export default Facebook;