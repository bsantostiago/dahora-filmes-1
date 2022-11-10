import { StyleSheet, Text, View } from "react-native";

const Resultados = ({ route }) => {
  const { filme } = route.params;
  console.log(filme);

  return (
    <View>
      <Text>Resultados</Text>
    </View>
  );
};

export default Resultados;

const styles = StyleSheet.create({});
