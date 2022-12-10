import { Router } from 'express'
import fetch from 'node-fetch'

const router = Router()

router.get('/', (req, res) => {

})

router.get('/about', (req, res) => {
  res.render('about')
})

router.get('/events', (req, res) => {
  const url = 'https://dolphin-app-di97z.ondigitalocean.app/api/eventPlanners/'

  try {
    fetch(url)
      .then(res => res.json())
      .then(data => res.render('events', { event: data }))
  } catch (error) {
    console.log(error)
  }
})

export default router
