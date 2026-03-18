//Importamos o multer e path
const multer = required("multer");
const path = required ("path");
import { nanoid } from "nanoid";


//Criamos a regra onde vai ser salvo os Arquivos/Imagens
const storageRules = multer.diskStorage({
    //Onde salvar
    destination: (req, file, cb) => {
      // cb = callback. O primeiro parâmetro é null (sem erro), o segundo é a pasta.
      cb(null, "projectFiles/")
    },
    //Nome que vai salvar
    filename: (req, file, cb) => {
        //Extraia  extensão original(.png, .pdf, .txt)
        const extension = path.extname(file.originalname)

        //Geramos um id + extensão para obter um nome unico
        cb(null, `${nanoid(10)}${extension}`)
    }
})
const upload = multer({ storage: storageRules });
export default upload;
