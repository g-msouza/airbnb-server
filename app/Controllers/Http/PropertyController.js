'use strict'

const Property = use('App/Models/Property')

class PropertyController {
  
  async index ({ request, response, view }) {
    const properties = Property.all()
    return properties
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
    const property = await Property.findOrFail(params.id)
    await property.load('images')
    return property
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
    const property = await Property.findOrFail(params.id)

    if (property.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    await property.delete()
  }
}

module.exports = PropertyController