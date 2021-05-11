const db = require('../database');

/**
 * An entity respresenting a curioset
 * @typedef Curioset
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} address
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} website
 * @property {string} agenda
 * @property {number} price
 * @property {number} user_id
 * @property {number} category_id
 * 
 */

/**
 * A model representing a curioset
 * @class
 */
class Curioset {
    /**
     * The Curioset constructor
     * @param {Object} data - a litteral object with properties that will be copied into the instance
     */
    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    /**
     * Find a single curioset from the database
     * @param {number} id 
     * @returns {Curioset|null} null if no curioset in the db with this id
     * @async
     * @static
     */
    static async findOne(id) {
        const {
            rows
        } = await db.query('SELECT * FROM curioset WHERE id = $1', [id]);

        if (rows[0]) {
            return new Curioset(rows[0]);
        } else {
            throw new Error(`no curioset with id ${id}`);
        }
    }

    /**
     * Find every curioset from the database
     * @returns {Array<Curioset>}
     * @async
     * @static
     */
    static async findAll() {
        const {
            rows
        } = await db.query('SELECT * FROM curioset;');

        return rows.map(row => new Curioset(row));
    }

    /**
     * Create a new curioset in the db or update an existing one
     * @async
     * @throws {Error} a potential SQL error
     */
    async save() {
        // if id, UPDATE, else, INSERT
        if (this.id) {
            // TODO : UPDATE 
        } else {
            try {
                const {
                    rows
                } = await db.query('INSERT INTO curioset (title, description, address, latitude, longitude, website, agenda, price, user_id, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id;', [
                    this.title,
                    this.description,
                    this.address,
                    this.latitude,
                    this.longitude,
                    this.website,
                    this.agenda,
                    this.price,
                    this.user_id,
                    this.category_id
                ]);

                this.id = rows[0].id;
            } catch (err) {
                throw new Error(err);
            }

        }
    }


}

module.exports = Curioset;