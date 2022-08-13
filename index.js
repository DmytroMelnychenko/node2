const fs = require('fs/promises');
const path = require('path')

const sortBoysFolder = async (readFolder, gender, writeFolder) => {
  try {
     const folderPath = path.join(__dirname, readFolder);
     const files =  await fs.readdir(folderPath);

     for (const  file of files) {
        const pathToFile = path.join(folderPath, file);

        const data = await fs.readFile(pathToFile);
         console.log(data)
        const user = JSON.parse(data.toString());

         if (user.gender !== gender) {
          await fs.rename(pathToFile, path.join(__dirname, writeFolder, file));
         }
     }

  } catch (e) {
     console.error(e);
  }

}

sortBoysFolder('boys', 'male','girls');
sortBoysFolder('girls', 'female','boys');