import type { Node } from 'react';
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import NovoUsuario from "./NovoUsuario";
import Home from "./Home";

const App: () => Node = () => {

  const novoUsuario = true;

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
