import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import ImagePickerExample from '../shareable/ImageUpload'
import ScreenHeader from '../shareable/ScreenHeader'
import { AuthContext } from '../provider/AuthProvider'
import { PostCard } from '../shareable/customCard'

const ProfileScreenActivity = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={{ flex: 1 }}>
                    <ScreenHeader props={props} ></ScreenHeader>


                    <View style={{ justifyContent: "center", marginHorizontal: 125, marginVertical: 40, backgroundColor: "#404040" }}>
                        <ImagePickerExample props={props} />
                    </View>

                    <Text style={styles.nameStyle}>     {auth.CurrentUser.name} </Text>

                    <PostCard>
                        <View style={{ backgroundColor: "#5730a", height: 250, borderColor: "#003", borderWidth: 2 }}>


                            <Text style={styles.profileInfoStyle} >ID: {auth.CurrentUser.sid} </Text>
                            <Text style={styles.profileInfoStyle} >Born on: {auth.CurrentUser.dob} </Text>
                            <Text style={styles.profileInfoStyle}>Works at: {auth.CurrentUser.work}</Text>
                            <Text style={styles.profileInfoStyle} >Address: {auth.CurrentUser.address}</Text>
                        </View>
                    </PostCard>

                    <Button
                        title="Delete Profile"
                        color="#000066"
                        onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />


                </View>
            )}
        </AuthContext.Consumer>
    )
}

const styles = StyleSheet.create({
    buttonView: {
        marginLeft: 30,
        marginRight: 30,
        marginVertical: 15,
    },

    nameStyle: {
        fontFamily: "serif",
        fontSize: 25,
        color: "black",
        marginHorizontal: 60
    },
    profileInfoStyle: {
        fontFamily: "serif",
        fontSize: 20,
        color: "black",
        marginHorizontal: 30,
        marginVertical: 12
    }
}
);

export default ProfileScreenActivity