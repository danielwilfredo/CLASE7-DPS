import * as React from 'react';
import { Text, View , Image, ScrollView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

function Feed() {
  return (
    <ScrollView>

    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{fontSize: 25,
      fontWeight:'bold',
      fontFamily:''}}>Real Madrid Club de Fútbol</Text>
        <Image
          style={{
            width:400,
            height:250,
            resizeMode: 'contain',
          }}
          source={require('./src/img/equipo.jpg')}/>
      <Text style={{textAlign:'justify', padding:15}}>El Real Madrid fue fundado el 6 de marzo de 1902 por Julián Palacios y los hermanos Juan y Carlos Padrós, como una sociedad deportiva. En la actualidad es considerado uno de los equipos más fuertes de la Liga Europea, en su largo recorrido ha obtenido numerosos títulos, entre estos: 33 Ligas, 6 mundiales de clubes, 4 supercopas, entre otros, incluso ha sido nombrado por la FIFA el Mejor Club del Siglo XX.</Text>
      <Text style={{textAlign:'justify', padding:15}}>El equipo nace en los primeros años de la década de 1900, impulsado por la pasión de Julián Palacios quien en 1900, se dio a la tarea de buscar los primeros jugadores que formarían parte de la escuadra del equipo, poco tiempo después se unen a este proyecto los catalanes Juan y Carlos Padrós, con la ayuda de estos es fundado el 6 de marzo de 1902 el Real Madrid, sociedad deportiva, más tarde la directiva del equipo en manos de Julián Padrós propone al entonces alcalde de Madrid, Alberto Aguilera, la formación del primer torneo de Futbol español, esta competición fue establecida en homenaje a S.M. el rey Alfonso XIII. El torneo se llevó a cabo en el Hipódromo, en este participaron cinco sociedades deportivas; después de esta se creó al Capa de España, el Real consiguió cuatro títulos de las seis primeras temporadas.</Text>
    </View>
    </ScrollView>
  );
}

function Profile() {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{fontSize: 25,
      fontWeight:'bold',
      fontFamily:''}}>Jugadores más sobresalientes</Text>


<View style={{ flexDirection: "row", marginLeft: 48, marginBottom:40 }}>
        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/benzema.jpg')}/>
            <Text style={styles.textoact}>Karim Benzema</Text>
            <Text style={styles.textoact}>Delantero</Text>
        </View>

        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/portero.jpg')}/>
            <Text style={styles.textoact}>Thibaut Courtois</Text>
            <Text style={styles.textoact}>Portero</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 48, marginBottom:40 }}>
        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/hazard.jpg')}/>
            <Text style={styles.textoact}>Eden Hazard</Text>
            <Text style={styles.textoact}>Delantero</Text>
        </View>

        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/isco.jpg')}/>
            <Text style={styles.textoact}>Francisco Alarcon Isco</Text>
            <Text style={styles.textoact}>Mediocampista</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 48, marginBottom:40 }}>
        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/kroos.jpg')}/>
            <Text style={styles.textoact}>Tony Kroos</Text>
            <Text style={styles.textoact}>Mediocampista</Text>
            </View>

      <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/marcelo.jpg')}/>
            <Text style={styles.textoact}>Marcelo Vieira</Text>
            <Text style={styles.textoact}>Defensa</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 48, marginBottom:40 }}>
        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/casemiro.jpg')}/>
            <Text style={styles.textoact}>Carlos Enrrique Casimiro</Text>
            <Text style={styles.textoact}>Mediocampista</Text>
        </View>

      <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/alaba.jpg')}/>
            <Text style={styles.textoact}>David Alaba</Text>
            <Text style={styles.textoact}>Defensa</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 48, marginBottom:40 }}>
        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/asensio.jpg')}/>
              <Text style={styles.textoact}>Marco Asensio</Text>
            <Text style={styles.textoact}>Mediocampista</Text>
        </View>

      <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/vini.jpg')}/>
               <Text style={styles.textoact}>Vinicius Jr</Text>
            <Text style={styles.textoact}>Delantero</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 48, marginBottom:40 }}>
        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/modric.jpg')}/>
                     <Text style={styles.textoact}>Luka Modric</Text>
            <Text style={styles.textoact}>Mediocampista</Text>
        </View>

      <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/nacho.jpg')}/>
            <Text style={styles.textoact}>Nacho Fernandez</Text>
            <Text style={styles.textoact}>Defensa</Text>
        </View>
      </View>


    </View>
    </ScrollView>
  );
}

function Pantalla1() {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", fontFamily: "" }}>
          Estadio Santiago Bernabéu
        </Text>
      </View>

      <View style={styles.listado}>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require("./src/img/estadio1.jpg")}
          />
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require("./src/img/estadio2.jpg")}
          />
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require("./src/img/estadio3.jpg")}
          />
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require("./src/img/estadio4.jpg")}
          />
        </View>
      </View>
      <Text style={{textAlign:'justify', padding:15}}>
      El Real Madrid es uno de los tres equipos que nuestra ciudad aporta al fútbol profesional, junto con el Atlético de Madrid y el Rayo Vallecano. Poseedor de múltiples títulos europeos e internacionales, el club blanco abre sus puertas 363 días al año para que los amantes del fútbol y el deporte conozcan sus históricas instalaciones, en una de las visitas que no puedes dejar de hacer en tu viaje a Madrid.
        </Text>
      <Text style={{textAlign:'justify', padding:15}}>
      El Santiago Bernabéu (llamado así en honor al mítico dirigente madridista, que presidió el club de 1943 a 1978) fue inaugurado en 1947 y en la actualidad puede albergar a más de 80 000 espectadores. El estadio cuenta, además, con 245 palcos VIP.      </Text>
    <Text>
    </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        tabBarActiveTintColor: '#40afbf',
        tabBarActiveBackgroundColor: "#cccccc",
        tabBarInactiveTintColor: "#FFF",
        tabBarInactiveBackgroundColor: "#697689"
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Jugadores"
        component={Profile}
        options={{
          tabBarLabel: 'Jugadores',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Estadio"
        component={Pantalla1}
        options={{
          tabBarLabel: 'Estadio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="stadium-variant" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  img:{
    width:400,
    height:150,
  },
  banner:{
    marginTop:0,
    flex:1
  },
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10
  },
  contenedor:{
    flex: 1,
    marginTop:-50,
    marginRight:20,
    marginLeft:20,
  },
  contenedor2:{
    marginTop:0,
    marginRight:20,
    marginLeft:20,
  },
  titulo2:{
    fontWeight:'bold',
    fontSize:18,
  },
  texto: {
    textAlign:'justify'
  },
  mejores:{
    width: "100%",
      height: 200,
      marginVertical: 5,
      borderRadius:5,
      resizeMode:'cover'
  },
  temporadas:{
    width:400,
    height:150,
  },
  actores:{
    width:120,
    height:200,
    borderRadius:10,
  },
  textoact: {
    textAlign:'center',
    marginRight: 50,
    fontSize:12,
    fontWeight:'bold',
  },
  listaItem: {
    flexBasis: "49.5%",
  },    listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }, 
});