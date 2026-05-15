const express = require('express');

const {
    fetchInvestorData
} = require('./models/investorModel');

const app = express();

app.use(express.json());


// GET INVESTOR API

app.get('/api/investor/:id', async (req, res) => {

    try {

        const id = req.params.id;

        const data = await fetchInvestorData(id);

        if (data) {

            res.status(200).json(data);

        }
        else {

            res.status(404).json({
                message: "Investor not found"
            });

        }

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


const PORT = 4000;

app.listen(PORT, () => {

    if(process.env.NODE_ENV !== "test"){
        console.log(
            `Server running on port ${PORT}`
        );
    }

});

module.exports = app;