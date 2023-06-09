import { openDb } from "../configDB.js"

export async function createTable(){
  openDb().then(db=>{
    db.exec('CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY, name TEXT NOT NULL, username TEXT UNIQUE NOT NULL, email TEXT UNIQUE NOT NULL )')
  })
}

export async function insertUsers(users){
  openDb().then(db=>{
    db.run('INSERT INTO users (name, username, email) VALUES (?,?,?)', [users.name, users.username, users.email])
  })
}