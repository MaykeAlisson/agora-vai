import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Progress from "react-native-progress";
import Dialog from "react-native-dialog";

import PropTypes from "prop-types";

import styles from "./styles";

const Card = ({ task, deletar }) => {

  const [visible, setVisible] = useState(false);

  const deletarTarefa = (nome) => {
    deletar(nome);
    setVisible(false);
  };

  return (
    <View key={`${task.nome}-${task.criacao}`} style={styles.card}>
      <View style={styles.cardSessionTitulo}>
        <Text style={styles.textoTitulo}>{task.nome}</Text>
        <TouchableOpacity
          style={styles.btnDelete}
          onPress={() => setVisible(true)}
        >
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.cardBody} onPress={() => Alert.alert('click')}>
        <View style={styles.containerDialog}>
          <Dialog.Container visible={visible}>
            <Dialog.Title>Deletar Meta</Dialog.Title>
            <Dialog.Description>
              Deseja deletar {task.nome} ?
            </Dialog.Description>
            <Dialog.Button label="Cancelar" onPress={() => setVisible(false)} />
            <Dialog.Button label="Deletar" onPress={() => deletarTarefa(task.nome)} />
          </Dialog.Container>
        </View>
        <View style={styles.cardSessionInfo}>
          <Text style={styles.textoProgresso}>Falta 3 passos</Text>
          <Progress.Bar style={styles.barraProgresso} progress={0.8} width={200} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

Card.propType = {
  task: PropTypes.object,
  deletar: PropTypes.func,
};

Card.defaultProps = {
  task: {},
  default: () => {
  },
};

export default Card;
