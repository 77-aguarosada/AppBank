import React from 'react';
import {
   View,
   KeyboardAvoidingView,
   TextInput, 
   TouchableOpacity,
   StyleSheet,
   Text,
   Image
  
  } from 'react-native';

import { Container ,Form, InpuTEmail} from './styles';

const LoginPage = () => {
  return (




    
        <KeyboardAvoidingView  style={styles.background}>
          
         
          <View style={styles.containerLogo}>
            <Image 
            source={require('../../../assets/favicon.png')}
            />
          </View>


          <View style={styles.container} >
         
                <View style={styles.tittlet}>
                      <Text style={styles.textT}>
                        DIGITE SEU CPF
                      </Text>
                </View>
                      <TextInput style={styles.input}
                    placeholder ="123.345.567-99"
                    autoCorrect ={false}  
                    onChangeText={()=>{}}            
                  />

           
             
           
            <View style={styles.tittle}>
              <Text style={styles.textT}>
                SUA SENHA 
              </Text>
            </View>

            <TextInput
            style={styles.input}
            placeholder ="******"
            autoCorrect ={false}
            onChangeText={()=>{}}            
            />


            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.text}>
               Acessar
              </Text>
          </TouchableOpacity>

          </View>

        </KeyboardAvoidingView>


  );
}


export default LoginPage;


const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    borderRadius:20,
    backgroundColor:'#FFF',
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontSize:17,
    padding:18,
    borderColor:'#dcdcdc',
    borderWidth: 1,
    //borderColor: "#20232a",
     shadowColor: "#000",
     shadowOffset: {
     width: 0,
	   height: 1,
     },
    shadowOpacity: 0.25,
   shadowRadius: 3.84,
    elevation: 5,
    

  },
  containerLogo:{
    flex:1,
    justifyContent:'center'
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50
  },
  btnSubmit:{
   
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    
    backgroundColor:'red',
    padding:18,
    borderRadius:20,
    shadowColor: "#000",
     shadowOffset: {
     width: 0,
	   height: 1,
     },
    shadowOpacity: 0.25,
   shadowRadius: 3.84,
    elevation: 5,
  },
  text:{
     color:'#FFF',
     fontSize:15,
    fontWeight:'bold'
  },
  tittle:{
    
  
   marginRight:198,
   marginBottom:5

  },
  textT:{
  
    color:'#d3d3d3',
    fontSize:15,
    fontWeight:'bold'

    
  },
  tittlet:{
    marginRight:170,
    marginBottom:5,
    
   
  }
  
});