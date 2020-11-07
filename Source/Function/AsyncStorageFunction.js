import { AsyncStorage } from 'react-native';



const storeDataJSON = async (key, value) => {
  try {
   
    const jsonValue = JSON.stringify(value);
    console.log(key)
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    alert(error);
  }
};


const getDataJSON = async (key) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data != null) {
      const jsonData = JSON.parse(data);
     
     
      return jsonData;
    } else {
      return ""
    }
  } catch (error) {
    alert(error);
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    alert("Data Removed Successfully");
  } catch (error) {
    alert(error);
  }
};

export { storeDataJSON, getDataJSON, removeData };