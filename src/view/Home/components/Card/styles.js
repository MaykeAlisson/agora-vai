import { StyleSheet } from "react-native";

import Cores from "../../../../util/Cores";

const styles = StyleSheet.create({
  card: {
    margin: 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: Cores.branco,
    borderRadius: 10,
  },
  cardSessionTitulo: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },
  textoTitulo: {
    fontWeight: "600",
    fontSize: 18,
  },
  cardSessionInfo: {
    flexDirection: "column",
    margin: 20,
    alignItems: "center",
  },
  textoProgresso: {
    fontWeight: "500",
    fontSize: 17,
  },
  barraProgresso: {
    margin: 10,
  },
  containerDialog: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnDelete: {
    height: 40,
    borderRadius: 10,
  },
});

export default styles;
