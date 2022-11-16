import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";

/* Prop de route para acesso aos dados trafegados
entre a navegação entre as telas/rotas */
const Detalhes = ({ route }) => {
  // console.log(route);

  /* Extraindo dos parametros da rota os 
  dados do objeto filme */
  const { filme } = route.params;

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <ImageBackground
          style={estilos.imagem}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
          }}
        >
          <Text> {filme.title} </Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  safeContainer: { flex: 1 },
  container: {
    flex: 1,
    /* aplicado aqui pois no iOS não funciona direto na SafeAreaView */
    padding: 8,
  },
  imagem: {
    height: 200,
  },
});
