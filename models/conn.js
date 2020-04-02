const pgp = require('pg-promise')({
    query: function (e) {
        console.log('QUERY:', e.query)
    }
});
const option = {
    host: 'local',
    database: 'ART'
};
const db = pgp(option);

module.exports = db;