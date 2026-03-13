import express from 'express'
import { usuarios } from './dados/usuarios.js'
import { listaTarefas } from './dados/tarefas.js'
import { devs } from './dados/devs.js'

const app = express()

app.get('/login', (req, res) => {
  res.json(usuarios)
})

app.get('/tarefas', (req, res) => {
  res.json(listaTarefas)
})

app.get('/usuarios', (req, res) => {
  res.json(devs)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})