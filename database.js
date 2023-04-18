const pg = require('pg')

const PGUSER = 'postgres'
const PGDATABASE = 'postgres'
const PGPASSWORD = '2ESpZVTdo0BGp5DOaCpR2X5PAV8Ntdn81DkVTQ9JJiaGRxzg8ZvyOXEsiiOsgZYC'
const PGHOST = 'production.aibi-prod-fp.ch-dc-os-gsn-107.k8s.dyn.nesc.nokia.net'
const PGPORT = 31275

const config = {
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    host: PGHOST,
    port: PGPORT,
    ssl: { rejectUnauthorized: false }
}

const pool = new pg.Pool(config)

module.exports = pool
