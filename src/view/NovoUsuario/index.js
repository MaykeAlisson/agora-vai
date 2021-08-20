import React, { useState } from "react";
import { SafeAreaView,Text, TextInput, View } from "react-native";

import styles from "./styles";

const NovoUsuario = () => {

  const [nome, setNome] = useState('');

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.primeiroTitulo}>Ola,</Text>
        <Text style={styles.segundoTitulo}>Comece com o primeiro passo !</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputNome}
          onChangeText={setNome}
          // value={nome}
          placeholder="Qual e seu nome ?"
        />
        <Text style={styles.segundoTitulo}>Comece com o primeiro passo !</Text>
      </View>
    </SafeAreaView>
  );
};

export default NovoUsuario;
