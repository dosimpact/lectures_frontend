import * as fs from 'fs'

export const fileExists = (filepath:string): Promise<boolean> => 
  new Promise( resolve => fs.access(filepath, error => resolve(error ? false : true)) )
