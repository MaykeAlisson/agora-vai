import type { Node } from "react";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import NovoUsuario from "./NovoUsuario";

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NovoUsuario />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Open Sans',
  }
});

export default App;
