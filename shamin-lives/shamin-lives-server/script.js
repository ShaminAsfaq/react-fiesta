/**
 * A component to display the song I am listening to on Spotify.
 * Hobby concept.
 */
var axios = require('axios')
var express =  require('express')
const fetch = require("node-fetch");
const qs = require('querystring');

var app = express()
var PORT = process.env.PORT || 5000
var SpotifyWebApi = require('spotify-web-api-node');

/**
 * Each time the App runs from the scratch, this AUTHORIZATION CODE needs to be Generated by visiting the '/login' API.
 * REFRESH TOKENs are practically valid forever. In case a REFRESH TOKEN is showing to be INVALID (only scenario is, it's manually revoked), you need to RE-GENERATE
 * this AUTHORIZATION CODE and then ask the respective API for a new REFRESH TOKEN.
 */
const authorizationCode = 'AQBlvIZGvQR5Ym07snQbiD9unPMTvRK9eJycSbQ6WTTfloIgmSatWKMwCNYjMGItsBqxSRwQjniwVtvS4C5BJJ7gtQ7bQHbgTuHEhjkmkzfN_lMwZuLvpcbJbyMEjdJ808p6hvOsuEk3G5O0lwIYG1yD1rdlcqQ0SQbbreN8x3L9wrv6rmNNvX8z_PbT63vyGNu9f5-PH_98DnNvY2XMUMGcMIddDwVIqhugzGQ';

const clientSecret = 'd404a71ddc77478ab89a65b4a9baa88a';
const clientId = 'e049336609c1483e93b27a63bdefa50b';    
const redirectUri = 'http://localhost:5000';
const baseUri = 'http://localhost';
const base64 = Buffer.from(clientId + ':' + clientSecret).toString('base64');

/**
 * REFRESH TOKENs have unlimited life time. Hence, once a singel refresh token is generated, it can be stored to get new ACCESS TOKENs whenever needed.
 */
const refreshToken = 'AQDxtez-8t6CovknnW-XbqG-Oa3H27KMRuHnWIGnsYiysXVK8NGPB4QyA6SezBcODIPnUqXEPcmoX54TChj7w7_0sPPaoIezmZR8hQFTDZBSv-2Sjl6lOZ1YUcekhHSF7cs';


var credentials = {
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: encodeURIComponent(redirectUri)
  };

var spotifyApi = new SpotifyWebApi(credentials);

// Allow all in CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello!')
})


app.get('/get', async (req, res) => {

    const scopes = [
        'user-read-currently-playing'
    ];
    const state = 'initial-state';
 

    const authorizationURL = spotifyApi.createAuthorizeURL(scopes, state);
    // console.log(authorizationURL)
    // console.log(spotifyApi.getAccessToken())

    spotifyApi.authorizationCodeGrant(authorizationCode).then((data) => {
        console.log('The token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        console.log('The refresh token is ' + data.body['refresh_token']);
     
        // Set the access token on the API object to use it in later calls
        spotifyApi.setAccessToken(data.body['access_token']);
        spotifyApi.setRefreshToken(data.body['refresh_token']);
        res.send(data)
    }, (err) => {
        console.log(err)
        res.send(err)
    })
    // res.send(spotifyApi)
})

app.get('/get_refresh_token', (req, res) => {
    res.send({refreshToken});
})

app.get('/get_current_song', async (req, res) => {
    const songChangedURL = 'https://api.spotify.com/v1/me/player/currently-playing';
    var bearerToken = '';
    var currentSong = '';

    if(spotifyApi.getAccessToken()) {
        bearerToken = spotifyApi.getAccessToken();
    } else {
        bearerToken = await axios({
            method: 'GET',
            url: 'http://localhost:5000/create_new_access_token'
        })
        spotifyApi.setAccessToken(bearerToken)
    }

    // console.log(bearerToken)
    axios({
        method: 'GET',
        url: songChangedURL,
        headers: {
            'Authorization': `Bearer ${bearerToken.data}`,
        }
    }).then((green) => {
        // console.log(green.data)
        currentSong = green.data;
        res.send(green.data)
    }).catch((err) => {
        spotifyApi.resetAccessToken();
        bearerToken = axios({
            method: 'GET',
            url: 'http://localhost:5000/create_new_access_token'
        }).then((value) => {
            console.log(`Found Access Token: ${value}`)
            spotifyApi.setAccessToken(value)
            res.send(spotifyApi.getAccessToken())
        }).catch(() => {
            console.log('Error getting current song.')
            res.send(currentSong)
        })
    })
})

app.get('/create_new_access_token', async (req, res) => {
    if(spotifyApi.getAccessToken()) {
        res.send(spotifyApi.getAccessToken());
    } else {
        const URL = 'https://accounts.spotify.com/api/token';
        const grant_type = 'refresh_token';

        axios({
            method: 'POST',
            url: URL,
            data: qs.stringify({
                grant_type: grant_type,
                refresh_token: refreshToken
            }),
            headers: {
                'Authorization': `Basic ${base64}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((value) => {
            spotifyApi.setAccessToken(value.data.access_token)
            res.send(spotifyApi.getAccessToken())
        }).catch((err) => {
            console.log(err);
            res.send(err)
        })
    }
})


app.get('/get_access_token', async (req, res) => {

    if(spotifyApi.getAccessToken()) {
        res.send(spotifyApi.getAccessToken())
    }else {
        const URL = 'https://accounts.spotify.com/api/token';
        const grant_type = 'authorization_code';
        // console.log(base64)

        await axios({ method: 'POST', url: URL,
                        data: qs.stringify({
                            grant_type: grant_type,
                            code: authorizationCode,
                            redirect_uri: redirectUri
                        }),
                        headers: {
                            'Authorization': `Basic ${base64}`,
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
        }).then((value) => {
            // console.log(value.data)

            spotifyApi.setAccessToken(value.data.access_token);
            spotifyApi.setRefreshToken(value.data.refresh_token);

            res.send(spotifyApi.getAccessToken());
        }).catch((err) => {
            console.log('Please RE-GENERATE the AUTHORIZATION CODE or print the `err` value below this line from the code.')
            res.send(err);
        })
    }
})

app.get('/login', (req, res) => {

    if(authorizationCode)
        res.send(authorizationCode);
    else {
        const state = 'initial-state';
        const clientId = 'e049336609c1483e93b27a63bdefa50b';
        const scopes = [
            'user-read-currently-playing'
        ];
        const redirectUri = 'http://localhost:5000';

        res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + clientId +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirectUri));
    }
})



app.listen(PORT, '0.0.0.0', () => {
    console.log('Express is up!')
})