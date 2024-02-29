const express = require("express");
const router = express.Router();
const axios = require("axios");

const adminLayout = '../views/layouts/admin';

router.get('/alpha', async (req, res) => {
    try {
        // const city = req.query.city;
        // let location, sunriseSunsetData;

        // const googleMapsApiKey = "AIzaSyDsUA7j-lZ0J3sPtd_Lreq9v4cDnFWfMX0";
        // const geocodingResponse = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=${googleMapsApiKey}`);
        // location = geocodingResponse.data.results[0].geometry.location;

        // const sunriseSunsetResponse = await axios.get(`https://api.sunrisesunset.io/json?lat=${location.lat}&lng=${location.lng}`);
        // sunriseSunsetData = sunriseSunsetResponse.data.results;

        // if (sunriseSunsetData) {
        //     sunriseSunsetData.sunrise = moment(sunriseSunsetData.sunrise, 'hh:mm A').format('HH:mm');
        //     sunriseSunsetData.sunset = moment(sunriseSunsetData.sunset, 'hh:mm A').format('HH:mm');
        //   }

        res.render('admin/alpha', {
            title: 'Air Quality Data',
            description: 'Portfolio platform',
            // location,
            // sunriseSunsetData,
            layout: adminLayout
        });
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

module.exports = router;