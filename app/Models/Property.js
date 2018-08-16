'use strict'

const Model = use('Model')
const Database = use('Database')

class Property extends Model {

    static scopeNearBy (query, latitude, longitude, distance) {
        // calculo de distancia por geolocalização
        const haversine = `(6371 * acos(cos(radians(${latitude}))
            * cos(radians(latitude))
            * cos(radians(longitude)
            - radians(${longitude}))
            + sin(radians(${latitude}))
            * sin(radians(latitude))))`

        return query
            .select('*', Database.raw(`${haversine} as distance`))
            .whereRaw(`${haversine} < ${distance}`)
    }

    // indica o relacionamento entre property e user
    user () {
        return this.belongsTo('App/Models/User')
    }

    // indica o relacionamento entre property e image
    images () {
        return this.hasMany('App/Models/Image')
    }
}

module.exports = Property
