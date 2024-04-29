import fs from "fs"
export default function easySaveJsonFile(FolderPath,File,Data){
    fs.mkdirSync(FolderPath,{recursive:true})
    fs.writeFileSync(`${FolderPath}/${File}`,JSON.stringify(Data))
}