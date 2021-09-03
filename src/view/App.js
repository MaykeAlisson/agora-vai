import type { Node } from 'react';
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Alert } from 'react-native';

import NovoUsuario from "./NovoUsuario";
import Home from "./Home";
import Constantes from "../util/Constantes";
import RNFS from "react-native-fs";
import isEmpty from "../util/isEmpty";
import isNotEmpty from "../util/isNotEmpty";

const App: () => Node = () => {

  const [novoUsuario, setNovoUsuario] =useState(true);

  useEffect(() => {verificaUsuario()},[]);

  const verificaUsuario = () => {
    RNFS.exists(Constantes.path)
      .then(result => {
        if (result){
          RNFS.readFile(Constantes.path)
            .then(dados => {
              console.log(dados);
              let obj = JSON.parse(dados);
              if(isNotEmpty(obj.nome)){
                setNovoUsuario(false);
              }
            })
            .catch(error => {
              console.log('LEITURA ARQUIVO - ' + error);
            });
          return;
        }
        console.log('LEITURA ARQUIVO - NAO EXIST');
      })
      .catch(error => {
        Alert.alert('Ocorreu um erro interno');
        console.log('ARQUIVO EXIST - ' + error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {
        novoUsuario
          ? <NovoUsuario/>
          : <Home/>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Open Sans',
  }
});

export default App;
