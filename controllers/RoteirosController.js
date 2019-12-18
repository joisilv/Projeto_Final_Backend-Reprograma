const { connect } = require('../models/Repository')
const roteirosModel = require('../models/RoteirosSchema')

//Criando métodos para respostas das requisições
connect()

const getAll = (request, response) => {
  roteirosModel.find((error, roteiros) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(roteiros)
  })
}

const getById = (request, response) => {
  const id = request.params.id

  return roteirosModel.findById(id, (error, roteiro) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (roteiro) {
      return response.status(200).send(roteiro)
    }

    return response.status(404).send('Roteiro não encontrado.')
  })
}

const add = (request, response) => {
  const novoRoteiro = new roteirosModel(request.body)

  novoRoteiro.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoRoteiro)
  })
}

const remove = (request, response) => {
  const id = request.params.id

  roteirosModel.findByIdAndDelete(id, (error, roteiro) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (roteiro) {
      return response.status(200).send(id)
    }

    return response.status(404).send('Roteiro não encontrado.')
  })
}

const update = (request, response) => {
  const id = request.params.id
  const roteirosUpdate = request.body
  const options = { new: true }

  roteirosModel.findByIdAndUpdate(
    id,
    roteirosUpdate,
    options,
    (error, roteiro) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (roteiro) {
        return response.status(200).send(roteiro)
      }

      return response.status(404).send('Roteiro não encontrado.')
    }
  )
}


module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
}
