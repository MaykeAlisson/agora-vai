import { StyleSheet } from "react-native";

import Cores from "../../util/Cores";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Cores.backgroundHome,
  },
  nomeApp: {
    marginTop: 10,
    fontSize: 18,
    color: Cores.branco,
    textAlign: "center",
    fontWeight: "600",
  },
  titulo: {
    paddingHorizontal: 24,
    fontSize: 28,
    color: Cores.branco,
    fontWeight: "600",
  },
  frase: {
    marginTop: 10,
    paddingHorizontal: 24,
    fontSize: 18,
    color: Cores.grey,
    fontWeight: "300",
  },
  sessionNew: {
    flexDirection: "row",
    marginBottom: 20
  },
  textoData: {
    marginTop: 10,
    paddingHorizontal: 24,
    fontSize: 18,
    color: Cores.branco,
    fontWeight: "300",
  },
});

export default styles;
