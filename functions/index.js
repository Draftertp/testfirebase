const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const axios = require('axios');


exports.project_001 = functions.https.onRequest((request, response) => {
		cors(request, response, () => {
        const { img } = request.body;
        axios.get(img,{
            responseType: 'arraybuffer'
          }).then(res => {
            const imagefile = new Buffer(res.data, 'binary').toString('base64');
            return response.send(`${JSON.stringify(imagefile)}`);
        }).catch(() => {
            return response.statusCode(500)
        })
    });
});

