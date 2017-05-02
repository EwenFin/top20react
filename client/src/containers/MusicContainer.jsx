import React from 'react';
import MusicList from '../components/MusicList';
import MusicDetail from '../components/MusicDetail';

class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      singles: []

    };
  }

  componentDidMount(){

    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.onload = () => {
      if( request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        console.log(data)
        this.setState({ singles: data.feed.entry })
        console.log(this.state)
      }
    }
    request.send();
  }

  render(){
    return (
      <div>
        <MusicList music = {this.state.singles}/>
        <MusicDetail />

      </div>
    )
  }
}

export default MusicContainer;