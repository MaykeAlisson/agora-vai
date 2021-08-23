import React, { useState } from "react";
import { Alert, Button, SafeAreaView, Text, TextInput, View } from "react-native";

import Cores from "../../util/Cores";

import styles from "./styles";

const NovoUsuario = () => {

  const [nome, setNome] = useState("");

  return (
    <SafeAreaView>
        <Text style={styles.primeiroTitulo}>Ola,</Text>
        <Text style={styles.segundoTitulo}>Comece com o primeiro passo !</Text>
      <View style={styles.sessionName}>
        <TextInput
          style={styles.inputNome}
          placeholder="Qual e seu nome ?"
          autoCapitalize="sentences"
          onChangeText={setNome}
          value={nome}
        />
        <View style={styles.btnCadastro}>
          <Button
            title={"Criar Conta"}
            color={Cores.primary}
            onPress={() => Alert.alert("oi")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NovoUsuario;
