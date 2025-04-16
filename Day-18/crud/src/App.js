import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

const App = () => {

  useEffect(() => {
     const getData = async () => {
       try {
       const res = await Axios.get('https://fakestoreapi.com/products/1',);
         console.log(res.data);
      } catch (error) {
        console.error(error);
      }
 };

 getData();

    //Update data
     const putData=async()=>{
         try{
            const product = { title: 'Updated Product', price: 39.99 };
            Axios.put('https://fakestoreapi.com/products/1', product)
               .then(response => console.log(response.data,response.status,response.message))
              .catch(error => console.error(error));
         }
        catch(error){
             console.error(error);

        }
 }
     putData();

    //Create data
     const postData=async()=>{
       try{
            const product = { title: 'Updated Product', price: 39.99 };
            const res=await Axios.post('https://fakestoreapi.com/products', product)
            console.log(res.data,res.status,res.message);

        }
         catch(error){
            console.error(error);

        }
    }
    postData();
    //Delete data
    const deleteData=async()=>{
        try{
            const product = { title: 'Updated Product', price: 39.99 };
            const res=await Axios.delete('https://fakestoreapi.com/products/1',product);
            console.log(res);
        }
        catch(error){
            console.error(error);

        }
    }
    deleteData();
}, []);

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

export default App;
