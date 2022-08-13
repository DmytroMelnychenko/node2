const fs = require('fs/promises');
const path = require('path')

const sortGirlsFolder = async () => {
   console.log(__dirname);
   await fs.readdir(path.join(__dirname))
}

sortGirlsFolder()