const express = require('express');
const request = require("request");
const body_parser = require('body-parser');
const app = express();
// app.use(body_parser.json());

/* -------------------------------------------------------------------------- */
/*                                 App Routes                                 */
/* -------------------------------------------------------------------------- */

app.get('/', (req, res) => {
    res.send("You're on the default page.");
});

app.get('/access_token', (req, res) => {
    //access token below
    const consumer_key = "YWEcpIKT9SXQSHX21i2Fu7bBZN1pOAEa";
    const consumer_secret = "Z2TKvEVBfk4OJ8q8";
    let url = `https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`;
    let auth = "Basic " + new Buffer(consumer_key + ":" + consumer_secret).toString('base64');
    request({
        url: url,
        headers: {
            "Authorization": auth
        }
    },
    (err, response, body) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(body);
        }
    })
});

app.listen(8000, (err, live) => {
    if (err) {
        console.error(error);
    }
    console.log("Serving on Port 8000");
});