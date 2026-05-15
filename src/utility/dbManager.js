const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(

    "C:\\Users\\HP\\Downloads\\portofolio_db\\porfolio.db",

    (error) => {

        if (error) {

            console.log(error.message);

        } else {

            if (process.env.NODE_ENV !== "test") {

                console.log("Database connected");

            }

            db.all(

                "SELECT * FROM investor",

                [],

                (err, rows) => {

                    if (err) {

                        console.log(err.message);

                    } else {

                        if (process.env.NODE_ENV !== "test") {

                            console.log(rows);

                        }

                    }

                }

            );

        }

    }

);

module.exports = {
    db
};