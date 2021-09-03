import RNFS from "react-native-fs";
import Constantes from "../Constantes";

const gravarArquivo = (db) => {
  console.log('Gravando arquivo: ', JSON.stringify(db));
  return RNFS.write(Constantes.path, JSON.stringify(db), 0,'utf8')
    .then(sucess => {})
    .catch(error => {
      console.log('ESCRITA ARQUIVO - ' + error);
    });
};

export default gravarArquivo;