import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Dialog from "react-native-dialog";

import styles from "./styles";
import Card from "./components/Card";
import RNFS from "react-native-fs";
import Constantes from "../../util/Constantes";
import isEmpty from "../../util/isEmpty";
import gravarEmArquivo from "../../util/File/gravarEmArquivo";
import isNotEmpty from "../../util/isNotEmpty";

const Home = () => {

  const [db, setDb] = useState({});
  const [tarefas, setTarefas] = useState([]);
  const [nomeMeta, setNomeMeta] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {loadObj()}, []);

  const loadObj = () => {
    RNFS.readFile(Constantes.path)
      .then(dados => {
        let obj = JSON.parse(dados);
        setDb(obj);
        setTarefas(obj.metas);
      })
      .catch(error => {
        Alert.alert('Error: ', error);
        console.log('LEITURA ARQUIVO - ' + error);
      });
  };

  const createTarefa = () => {
    if (isEmpty(nomeMeta)) {
      Alert.alert('Nome invalido');
      return;
    }

    try {
      if (metaExtiste()){
        Alert.alert('Meta já existe!');
        return;
      }

      let obj = {};
      obj.nome = nomeMeta;
      obj.tasks = [];
      obj.criacao = "2021-09-01";

      let temp = db;
      temp.metas.push(obj);
      setDb(temp);
      gravarEmArquivo(temp);
    } catch (e) {
      Alert.alert('Error: ', e);
      console.log('LEITURA ARQUIVO - ' + e);
    } finally {
      setVisible(false);
    }

  };

  const metaExtiste = () => {
    return isNotEmpty(
      db.metas.find(
        element => element.nome.toLowerCase() === nomeMeta.toLowerCase(),
      ),
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
      <Text style={styles.nomeApp}>Agora Vai!</Text>
      <Text style={styles.titulo}>Ola, {db.nome} </Text>
      <Text style={styles.frase}>Frase motivacional aleatoria</Text>
      <View style={styles.sessionNew}>
        <Text style={styles.textoData}>Terça 10 de Dezembro de 2021</Text>
          <TouchableOpacity
            style={styles.btnPlus}
            onPress={() => setVisible(true)}
          >
            <MaterialIcons name="add-task" size={25} color="black" />
          </TouchableOpacity>
      </View>
      </View>
    <View style={{flex: 3}}>
      <ScrollView horizontal={true}>
        {
          tarefas.map( task => (
            <Card key={`${task.nome}-${task.criacao}`} task={task}/>
            )
          )
        }
      </ScrollView>
    </View>
      <View style={styles.containerDialog}>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Nova Meta</Dialog.Title>
          <TextInput
            style={styles.inputNomeMeta}
            placeholder="Qual nome da nova meta?"
            autoCapitalize="sentences"
            onChangeText={setNomeMeta}
            value={nomeMeta}
          />
          <Dialog.Button label="Cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="Salvar" onPress={() => createTarefa()} />
        </Dialog.Container>
        </View>
    </SafeAreaView>
  );
};

export default Home;
