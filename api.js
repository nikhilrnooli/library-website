const connectDB = require('./db');

const getFeatured = async () => {
    const db = await connectDB()
    try{
        let [rows, fields] = await db.query('select * from books where publisher=\'Penguin\' ')
        return rows;
    } catch(err){
        throw err;
    }
}

// get all books
const getAll = async () => {
    const db = await connectDB();
    try{
        let [rows, fields] = await db.query('select * from books');
        return rows;
    }catch(err){
        throw err;
    }
}

// get book by id
const getBookById = async (id) => {
    const db = await connectDB();
    try {
        let [rows, fields] = await db.query('select * from books where id=?', [id])
        return rows;
    } catch(err){
        throw err;
    }
}

const getBookByName = async (bookName) => {
    const db = await connectDB();
    try {
        let [rows, fields] = await db.query('select * from books where title=?', [bookName])
        return rows;
    } catch(err){
        throw err;
    }
}

module.exports = {
    getAll,
    getFeatured,
    getBookById,
    getBookByName
}