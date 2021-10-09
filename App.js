import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura/100;
    const imc = peso / (alt * alt);

    if(imc < 18){
      alert('Você esta abaixo do peso!' + imc.toFixed(2));
    }else if (imc>= 18.6 && imc < 24.9){
      alert('Peso Ideal!'+ imc.toFixed(2));
    }else if(imc >= 24.9 && imc < 34.9){
      alert('Está acima do peso '+ imc.toFixed(2));
    }
  }
  return(
    <View style= {styles.container}>
    <Text style = {styles.title}>Calcule seu IMC</Text> 
    <Text style = {styles.subtitle}> O indice de Massa corporal, é uma medida internacional usada para calcular
       se uma pessoa está no peso ideial.</Text>
    <TextInput style= {styles.input} 
     value={peso} 
     placeholder="Peso (kg)"
     onChangeText= {(peso) => setPeso(peso)}
     keyboardType ="numeric" 
     
     >
    </TextInput>
    
    <TextInput style= {styles.input} 
     value={altura} 
     placeholder="Altura (cm)"
     onChangeText= {(altura) => setAltura(altura)}
     keyboardType ="numeric" 
     
     >
    </TextInput>

    <TouchableOpacity style={styles.button}
    onPress={handleSubmit}
    >
      
      <Text style={styles.buttonText}>Calcular</Text>

      </TouchableOpacity>
    
    </View>
  );  
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#B0C4DE',
    flex:1,
   
  },

  title:{
    textAlign: 'center',
    marginTop: 2,
    fontSize: 40,
    margin:5,
    padding: 40,
    backgroundColor: '#6495ED', 
    color: '#E3E3E3',
  },
  subtitle:{
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    margin:15,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#CFCFCF', 
    color: '#1C1C1C',
  },
  input:{
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    margin:15,
    padding: 10,
    color: '#696969',
    fontSize: 20,
  },

  button:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#6495ED',
    padding: 10,

  },
  buttonText:{
    color: '#FFF',
    fontSize: 25,

  }


});
