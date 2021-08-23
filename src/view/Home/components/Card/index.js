import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const Card = () => {

  const [nome, setNome] = useState("Mayke");

  return (
    <View style={styles.sessionNew}>
      <Text style={styles.textoData}>Titulo Card</Text>
      <Icon
        name="remove"
        size={18}
        color="red"
        onPress={() => Alert.alert("delete card")}
      />
      <Text style={styles.textoData}>Falta 3 passos</Text>
      <Text style={styles.textoData}>Barra de progresso</Text>
    </View>
  );
};

export default Card;
