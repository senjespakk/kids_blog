import React, { Component } from 'react';
import { connect } from 'react-redux';
import Album from './Album';
import { fetchAlbum } from "../Redux/Creator";

const mapStateToProps = (state) => {
    return({
        albums: state.albums
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchAlbum: () => {dispatch(fetchAlbum())}
})

class Main extends Component {
    constructor(props) {
        super(props);
      }
    
    componentDidMount() {
        this.props.fetchAlbum();
    }

    render(){
        return(
            <div>
                <Album albums={this.props.albums}/>
            </div>
        );
    }
}
 export default connect(mapStateToProps, mapDispatchToProps)(Main);