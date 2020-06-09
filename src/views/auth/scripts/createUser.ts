import { IUserCreate } from '../types/IUserCreate'
import fs from 'fs'
import path from 'path'

export async function createUser (values: IUserCreate) {
    const data = JSON.stringify(values, null, 2)
    const dirPath = path.join(__dirname, `./bin/userData/user.json`)
    const contentFormat = 'utf8'
    try {
        await fs.writeFile(dirPath, data, contentFormat, (error) => {
            if (error) {
                throw error
            } 
            else {
                console.log('The file has been saved!', dirPath, data)
            }
        })
    } catch(error) {
        console.log(error);
    }
}