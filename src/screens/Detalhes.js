import { StyleSheet, Text, View, SafeAreaView } from "react-native";

/* Prop de route para acesso aos dados trafegados
entre a navegação entre as telas/rotas */
const Detalhes = ({ route }) => {
  // console.log(route);

  /* Extraindo dos parametros da rota os 
  dados do objeto filme */
  const { filme } = route.params;

  return (
    <SafeAreaView>
      <Text>Detalhes</Text>
    </SafeAreaView>
  );
};

export default Detalhes;

const styles = StyleSheet.create({});
