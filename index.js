const fs = require('fs/promises');
const path = require('path')

const sortBoysFolder = async () => {
  try {
     const folderPath = path.join(__dirname, 'boys');
     const files =  await fs.readdir(folderPath);

     for (const  file of files) {
        const pathToFile = path.join(folderPath, file);

        const data = await fs.readFile(pathToFile);

        const user = JSON.parse(data.toString());

         if (user.gender !== 'male') {
          await fs.rename(pathToFile, path.join(__dirname, 'girls', file));
         }
     }

  } catch (e) {
     console.error(e);
  }

}

sortBoysFolder('boys', 'male', );