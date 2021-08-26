import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Progress from "react-native-progress";
import Dialog from "react-native-dialog";

import styles from "./styles";

const Card = () => {

  const [nome, setNome] = useState("Mayke");
  const [visible, setVisible] = useState(false);

  const deletarTarefa = () => {
    setVisible(false);
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardSessionTitulo}>
        <Text style={styles.textoTitulo}>Titulo Card</Text>
        <TouchableOpacity
          style={styles.btnDelete}
          onPress={() => setVisible(true)}
        >
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerDialog}>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Deletar Meta</Dialog.Title>
          <Dialog.Description>
            Deseja mesmo deletar essa meta ?
          </Dialog.Description>
          <Dialog.Button label="Cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="Deletar" onPress={deletarTarefa} />
        </Dialog.Container>
      </View>
      <View style={styles.cardSessionInfo}>
        <Text style={styles.textoProgresso}>Falta 3 passos</Text>
        <Progress.Bar style={styles.barraProgresso} progress={0.8} width={200} />
      </View>
    </View>
  );
};

export default Card;
