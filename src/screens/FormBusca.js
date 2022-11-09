import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const FormBusca = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.texto}>
        Star Trek? O Poderoso Chefão? A trilogia Senhor dos Anéis?
      </Text>
      <Text style={estilos.texto}>
        Localiza um filme que você viu ou gostaria de ver!
      </Text>
      <View style={estilos.viewForm}>
        <Ionicons name="film" size={44} />
        <TextInput placeholder="Digite o filme..." style={estilos.campo} />
      </View>
      <Button title="Procurar" color="#5451a6" />
    </SafeAreaView>
  );
};

export default FormBusca;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  texto: {
    paddingVertical: 8,
  },
  viewForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  campo: {
    borderWidth: 1,
    padding: 8,
    flex: 0.9,
  },
  botao: {
    backgroundColor: "red",
    borderWidth: 2,
  },
});
