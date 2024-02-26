import {View, StyleSheet} from "react-native";
import { Image, Text} from '@rneui/themed';
import { ScrollView } from "react-native-gesture-handler";


const Profile = () =>{    
    return(
        <ScrollView style={{backgroundColor: 'black'}}>
            <View style={styles.container}>
            <View style={styles.suptop}>
                </View>
                <View style={styles.suptop}>
                <Image style={styles.photoimage} source={require('../assets/img/1.png')}/>
                <View style={{color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>3</Text>
                    <Text style={{color: 'white'}}>Publicaciones</Text>
                </View>
                <View style={{color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>1K</Text>
                    <Text style={{color: 'white'}}>Seguidores</Text>
                </View>
                <View style={{color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>224</Text>
                    <Text style={{color: 'white'}}>Seguidos</Text>
                </View>
                </View>
                <View style={styles.supleft}>
                <Text style={{color: 'white'}}>jared_juarez_</Text>
                </View>
                <View style={styles.supleft}><Text style={{color: 'white'}}>Vive la vida</Text></View>

            <View style={styles.suptop}>
            <Image style={styles.photoimage} source={require('../assets/img/1.png')}/>
            
            <Image style={styles.photoimage} source={require('../assets/img/1.png')}/>
            <Image style={styles.photoimage} source={require('../assets/img/1.png')}/>
            <Image style={styles.photoimage} source={require('../assets/img/1.png')}/>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{color: 'white'}}>Yo</Text>
            <Text style={{color: 'white'}}>Dog</Text>
            <Text style={{color: 'white'}}>Life</Text>
            <Text style={{color: 'white'}}>GYM</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 3, marginTop: 10}}>
        <Image source={require('../assets/img/1.png')} style={styles.img}/>
        <Image source={require('../assets/img/1.png')} style={styles.img}/>
        <Image source={require('../assets/img/1.png')} style={styles.img}/>
      </View>
            

        </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'black',
    },
    circulo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        margin: 20
    },
    texto: {
        fontSize: 15,
        margin: 20,
        color: 'white',
    }, letraicon: {
        height: 50,
        width: 120,
        margin: 5,
        resizeMode: 'contain'
    },
    suptop:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor: 'black',
        padding: 10,
        marginTop: 40
    },
    lefticon: {
        height: 25,
        width: 45,
        resizeMode: 'contain'
    },
    supleft:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor: 'black',
        padding: 10,
    },
    middlecotainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor: 'black',
        padding: 10,
    },
    photoimage: {
        height: 80,
        width: 80,
        borderRadius: 100,
        resizeMode: 'contain',
    },
    scrll:{
        width: `100%`,
        backgroundColor: `E3E3E3`,
        height: `100%`
    },
    img:{
        width: 120,
        height: 120,
        borderRadius: 10,
        margin: 3,
      }
})


export default Profile;