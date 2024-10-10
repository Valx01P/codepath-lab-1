import { pool } from '../config/database.js'

export const getGifts = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export const getGiftById = async (req, res) => {
  try {
    const id = parseInt(req.params.giftId)
    const selectQuery = await pool.query(`SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn FROM gifts WHERE id = $1`, [id])
    res.status(200).json(selectQuery.rows)
    
  } catch (error) {
    res.status(409).json( { error: error.message} )
  }
}