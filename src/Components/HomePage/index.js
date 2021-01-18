import React, { Component } from 'react';
import {
   View,
  
   TouchableOpacity,
   StyleSheet,
   Text,
   Image,
   ScrollView,
   SafeAreaView
  
  } from 'react-native';



  export default class HomePage extends Component {

    render(){


      return (
             
  
                 <View style={styles.background}>
                  <View style={styles.perfil}>
                      <Image  style={styles.avatar} source={require('../../../assets/favicon.png')}/>
                      <Text style={styles.nomeText}>
                            Leonardo Henrique
                      </Text>
                   </View>

                   <View style={styles.container}>      

                          <View style={styles.pontosContainer}>
                                      <View style={styles.master}> 
                                      
                                        <Text style={styles.posicao} >1</Text>
                                        <Text style={styles.posicaoText} >MASTER</Text>
                                      </View>

                                      <View style={styles.master}> 
                                        <Text style={styles.posicao}>456</Text>
                                        <Text  style={styles.posicaoText} >PONTOS</Text>
                                      </View>

                                      <View style={styles.master}>
                                      
                                        <Text style={styles.posicao} >21</Text>
                                        <Text  style={styles.posicaoText} >INDICADOS</Text>
                                      </View>
                               </View>



                             
                                             <ScrollView style={
                                               {flex:1, width:'100%'}
                                             }>
                                             <View style={styles.todasOpc1}>

                                              <TouchableOpacity style={styles.cadastrar}>
                                                  <Text style={styles.cadastrarText}>CADASTRAR INDICADO</Text>
                                                </TouchableOpacity>

                                              </View>

                                              <View style={styles.todasOpc2}>

                                                <TouchableOpacity style={styles.cadastrar}>
                                                    <Text style={styles.cadastrarText}>MEU SALDO</Text>
                                                  </TouchableOpacity>

                                              </View>

                                              < View style={styles.todasOpc3}>

                                                <TouchableOpacity style={styles.cadastrar}>
                                                    <Text style={styles.cadastrarText}>MEUS DADOS BANCÁRIOS</Text>
                                                  </TouchableOpacity>

                                              </View>


                                              < View style={styles.todasOpc4}>

                                              <TouchableOpacity style={styles.cadastrar}>
                                                  <Text style={styles.cadastrarText}>MEU HISTÓRICO</Text>
                                                </TouchableOpacity>

                                              </View>

                                              < View style={styles.todasOpc5}>

                                              <TouchableOpacity style={styles.cadastrar}>
                                                  <Text style={styles.cadastrarText}>INFORMAÇÕES</Text>
                                                </TouchableOpacity>

                                              </View>       

                                          
                                             </ScrollView>

                               </View>       




                         </View>

                 
              


         
                         
      );
    }
 
}





const styles = StyleSheet.create({

 
  
  background:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  avatar:{
  backgroundColor: 'white',
  borderWidth: 3,
  borderRadius: 50,
  padding:10,
  marginTop:-90,
  marginBottom:16,
  height:78,
  width:80,
 

 },
 nomeText:{
  color:'#FFF',
  fontSize:15,
 fontWeight:'bold'
 },
 container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  width:'100%',
  paddingBottom:50
},
perfil:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
pontosContainer:{
  flexDirection:'row',
  flex:1,
  backgroundColor:'#FFF',
  width:'90%',
  
  marginTop:-120,
  maxHeight:100,

  borderRadius:4,
  padding:2,
  justifyContent:'center',
  alignItems:'center',
  
  shadowColor: "#000",

  shadowOffset: {
     width: 0,
	   height: 2,
     },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom:5,
  



}
,master:{
  justifyContent:'center',
  alignItems:'center',
  padding:20,

}
,
posicao:{
  color:'blue',
  fontSize:19,
 fontWeight:'bold'

},
posicaoText:{
 color:'#5d8aa8',
 fontSize:12,
 
 padding:2,
 
},
cadastrar:{
  
  padding:18,

},
cadastrarText:{
  padding:3,
},
todasOpc:{ 
  flex:1,
  width:'100%',
  maxHeight:99,
  padding:5,
},
todasOpc1:{
  flex:1,
  width:'100%',
  maxHeight:99,
  padding:13,
  backgroundColor:'#3399ff',
 

},
todasOpc2:{
  flex:1,
  width:'100%',
  maxHeight:99,
  padding:13,
  backgroundColor:'#3399',
 

},
todasOpc3:{
  flex:1,
  width:'100%',
  maxHeight:99,
  padding:13,
  backgroundColor:'#01d6fe',
 

},
todasOpc4:{
  flex:1,
  width:'100%',
  maxHeight:99,
  padding:13,
  backgroundColor:'#05fcfe',
 

},
todasOpc5:{
  flex:1,
  width:'100%',
  maxHeight:99,
  padding:13,
  backgroundColor:'#c0c0c0',
 

},
});