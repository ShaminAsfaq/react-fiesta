/**
 * Complete Proto-Type. Need more time. Nothing is fixed here.
 * I want to show the currently playing song on my Spotify to the viewers of the Blog.
 */

import React from 'react';
import axios from 'axios';

// var express =  require('express')

import express from 'express';

const Spotify = () => {
    var app = express()
    // Allow all in CORS
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    const getSpotifyStatus = async () => {
        const songChangedURL = 'https://api.spotify.com/v1/me/player/currently-playing';
        const authorizationToken = 'BQCrKSCy2qi_Ue17ywCQtzlVvpks1SqMuqQLsWjeBWkYU6eI_y_3ThfaybEx91oagJjCyiiWZxu0skYhvRalXBQD1S6gXRKQIQv18qdITwBjTX7YDv3fkpGPgMtFSjk7MH_StRNDCJuoPMYIm3Tx26shBUQHHnUB7gMKg4g';
    
        const clientId = 'e049336609c1483e93b27a63bdefa50b';
        const responseType = 'code';
        const redirectUrl = '';
        const authorizeUrl = 'GET https://accounts.spotify.com/authorize'

        //var response = await axios.get(songChangedURL, { headers: {"Authorization" : `Bearer ${authorizationToken}`} });
        var response = await axios.get(songChangedURL, { headers: {"client_id" : `${authorizationToken}`, "response_type": `${responseType}`, "redirect_uri": `${{redirectUrl}}`} });

        

        console.log(await response);
    }

    getSpotifyStatus();

    return (
        <div className="ui card" style={{
                position: 'fixed',
                bottom: '2rem',
                justifyContent: 'center',
                cursor: 'pointer',
                marginLeft: '2rem'
            }}>
            <div className="content">
                <div className="center aligned header">Song Name</div>
                <div className="center aligned description">
                    <p>This will contain the currently playing Spotify Song</p>
                </div>
            </div>
            <div className="extra content">
                <div className="center aligned author">
                    <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg"/> Jenny
                </div>
            </div>
      </div>
    )
}

export {
    Spotify as default
}


