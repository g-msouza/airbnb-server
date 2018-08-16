'use strict'

const Model = use('Model')

class Property extends Model {
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
