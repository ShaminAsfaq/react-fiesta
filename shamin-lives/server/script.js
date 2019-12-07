//  Another MASSACRE


/**
 * Complete Proto-Type. Need more time. Nothing is fixed here.
 * I want to show the currently playing song on my Spotify to the viewers of the Blog.
 */
var axios = require('axios')
var express =  require('express')
const fetch = require("node-fetch");

var app = express()
var PORT = process.env.PORT || 5000
var SpotifyWebApi = require('spotify-web-api-node');
var authorizationCode = 'AQB07r224qlj1N66Ytm7_Ly-SA2pRF3CLktf3iIMK2zXrplPERdsFMzEBtA58n8dElolGFWB6p0Ui1SPGaerbfYMapdudO7j1mHZ8KGjuUvH5sNbdU_RvCvFYCDjrB9WF3AekWwzoVAYC4rypf3f0KoqFBjRCoHaa6XU7JDQjVuVlPwymRzNBtXNZfgzXNRU5SO8OQVxcVmgAi715RCSamuOtLU4sCDgJyMDQx4';

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
    const clientId = 'e049336609c1483e93b27a63bdefa50b';
    const clientSecret = '78e9cfed93fa4cfeacfa1bb8dcd9a821';
    
    const redirectUri = 'http://118.179.95.206:5000';

    var credentials = {
        clientId: clientId,
        clientSecret: clientSecret,
        redirectUri: encodeURIComponent(redirectUri)
      };

    var spotifyApi = new SpotifyWebApi(credentials);

    const authorizationURL = spotifyApi.createAuthorizeURL(scopes, state);
    // console.log(authorizationURL)
    // console.log(spotifyApi.getAccessToken())

    // authorizationCode = 'AQB07r224qlj1N66Ytm7_Ly-SA2pRF3CLktf3iIMK2zXrplPERdsFMzEBtA58n8dElolGFWB6p0Ui1SPGaerbfYMapdudO7j1mHZ8KGjuUvH5sNbdU_RvCvFYCDjrB9WF3AekWwzoVAYC4rypf3f0KoqFBjRCoHaa6XU7JDQjVuVlPwymRzNBtXNZfgzXNRU5SO8OQVxcVmgAi715RCSamuOtLU4sCDgJyMDQx4';

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

app.get('/refresh', async (req, res) => {
    const URL = 'https://accounts.spotify.com/api/token';
    const clientId = 'e049336609c1483e93b27a63bdefa50b';
    const clientSecret = '78e9cfed93fa4cfeacfa1bb8dcd9a821';
    const grant_type = 'authorization_code';
    // authorizationCode
    const redirectUri = 'http://118.179.95.206:5000';

    const base64 = Buffer.from(clientId + ':' + clientSecret).toString('base64');
    console.log(base64)

    // var response = await axios.post(URL, { data: { grant_type: `${grant_type}`, code: `${authorizationCode}`, redirect_uri: `${redirectUri}` },  headers: { "Content-type": "application/x-www-form-urlencoded", "Authorization": 'Basic ' + base64 } })

    var response = axios({ method: 'POST', url: URL,
                    headers: {
                        'Autorizacion': `Basic ${base64}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }, 
                    data: {
                         grant_type: `${grant_type}`,
                         code: `${authorizationCode}`,
                         redirect_uri: `${redirectUri}`
                    } 
    }).then().catch((err) => {
        res.send(err)
    })

    
    console.log(await response)
    res.send(response)
})

app.get('/login', (req, res) => {

    if(authorizationCode)
        res.send(authorizationCode);
    else {
        const state = 'initial-state';
        const clientId = 'e049336609c1483e93b27a63bdefa50b';
        const clientSecret = '78e9cfed93fa4cfeacfa1bb8dcd9a821';
        const scopes = [
            'user-read-currently-playing'
        ];
        const redirectUri = 'http://118.179.95.206:5000';

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