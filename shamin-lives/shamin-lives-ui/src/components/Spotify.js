/**
 * Complete Proto-Type. Need more time. Nothing is fixed here.
 * I want to show the currently playing song on my Spotify to the viewers of the Blog.
 */
import React from 'react';
import axios from 'axios';

class Spotify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: undefined
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            axios({
                method: 'GET',
                url: 'http://118.179.95.206:5000/get_current_song'
            }).then((response) => {
                console.log(response)
                if(response.data === "") {
                    response = undefined
                }
                this.setState(() => {
                    return {
                        response
                    }
                });
            });
        }, 1000)
    }

    render() {
        return (
            <div>
                {
                    this.state.response ?
                    <div className="ui card" style={{
                            position: 'fixed',
                            bottom: '1.5rem',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            marginLeft: '2rem'
                    }}>
                        <div className="content" style={{ backgroundColor: '#e2e7ea' }}>
                            <div className="center aligned header" style={{ fontSize: '13px' }}>
                                { this.state.response.data.item.name }
                            </div>
                            <div className="center aligned description" style={{ fontSize: '11px' }}>
                                <p>{ this.state.response.data.item.artists[0].name }</p>
                            </div>
                        </div>
                        <div className="extra content" style={{ backgroundColor: '#c6cfd6' }}>
                            <div className="center aligned author">
                                Now playing on Spotify&nbsp;
                                <i className="spotify icon"></i>
                            </div>
                        </div>
                    </div> : <div/>
                }
            </div>
        )
    }
}

export {
    Spotify as default
}


