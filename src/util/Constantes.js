import RNFS from "react-native-fs";

const getPath = () => {
  return RNFS.ExternalDirectoryPath + '/agoravai_db.json';
}

const Constantes = {
  nome_app: "Agora Vai!",
  version: 1,
  path: getPath(),
};

export default Constantes;
