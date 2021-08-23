import { StyleSheet } from 'react-native';

import Cores from "../../util/Cores";

const styles = StyleSheet.create({
  primeiroTitulo: {
    marginTop: 52,
    fontSize: 18,
    color: Cores.primary,
    paddingHorizontal: 24,
    fontWeight: "600",
  },
  segundoTitulo: {
    paddingHorizontal: 24,
    fontSize: 18,
    color: Cores.primary,
    fontWeight: "600",
  },
  sessionName: {
    paddingTop: 350,
  },
  inputNome: {
    margin: 15,
    borderWidth: 1,
    padding: 10,
  },
  btnCadastro: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default styles;
