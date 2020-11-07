import React from 'react'
import {Header} from "react-native-elements";
import {StyleSheet} from 'react-native';
import {AuthContext} from '../provider/AuthProvider';

const ScreenHeader=({props})=>{
    return(
      <AuthContext.Consumer>
      {(auth) => (   
        <Header
                    backgroundColor="#064994"
        
        leftComponent={{
            icon: "menu",
            color: "white",
            onPress: function () {
              props.navigation.toggleDrawer();
              console.log(props)
              console.log("okay")
            },
          }}
            
            centerComponent={{ text: "The Office", style: { color: "white" } }}
            
          
           
            rightComponent={{
                icon: "lock-outline",
                color: "white",
                onPress: function () {
                  auth.setIsLoggedIn(false);
                  auth.setCurrentUser({});
                },
              }}
    
   
/>
    )}
 </AuthContext.Consumer>

    )
}


export default ScreenHeader