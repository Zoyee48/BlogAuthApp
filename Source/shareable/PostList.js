import React , { useState, useEffect }  from 'react'
import {View,Button,Flatlist,Text,ActivityIndicator,StyleSheet,TouchableOpacity} from 'react-native'
import { AsyncStorage } from 'react-native';
import {PostCard} from '../shareable/customCard'
import { getDataJSON, storeDataJSON } from "../Function/AsyncStorageFunction";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 



const PostList =(props)=>{
   
    const posts=props.posts
    const nav=props.nav
    const currUser=props.currentUser
  

    const [Name, setName] = useState("");
    const [iconName,setIconName]=useState("like1")
    const [loading, setLoading] = useState(false);
    const [likeCount,setLikeCount]=useState(0)
    const [commentCount,setCommentCount]=useState(0)
    const [comments,setComments]= useState([]);
    
   
    const [authorPostReactions, setAuthorPostReactions] = useState([]);
    const [liker, setLikers] = useState([]);


    const FindUser=async()=>{
     
        let response= await getDataJSON(posts.Email)
        let postReaction=await getDataJSON(posts.Email+"Reaction")
        let postLiker=await getDataJSON(posts.key+"likes")
        let postComments=await getDataJSON(posts.key+"Comment")
        if(postComments.length>0){
                setComments(postComments)
                setCommentCount(postComments.length)
        }

        if(postLiker.length>0){
        setLikeCount(postLiker.length)
        setLikers(postLiker)
        setAuthorPostReactions(postReaction)
        }
        setName(response.name)
        setLoading(true)
    }
    if(!loading){
    FindUser()
    }

    if(loading){
    return(
       
       <PostCard>
           <Text style={styles.authorNameStyle}> {Name}</Text>
           <Text style={styles.dateStyle}>     {posts.postDate}</Text>
           <Text style={styles.postBodyStyle}>   {posts.postText}</Text>
          
           <FontAwesome name="comment-o" size={27} color="black"  style={styles.commentStyle}
           onPress={function(){
            nav.navigation.navigate("IndivialPost",  {posts,Name,comments,likeCount,commentCount,authorPostReactions,currUser} );
           }}/>

          
           <AntDesign name={iconName} size={24} color="black"  style={styles.likeStyle} 
           onPress ={function(){
            setIconName("like1")
            let a=likeCount+1
            let authorPostCurrentReaction={postId:posts.key,reactor:currUser,status:"like"}
            authorPostReactions.push(authorPostCurrentReaction)
            storeDataJSON(posts.Email+"Reaction",authorPostReactions)
            liker.push(currUser)
            setLikeCount(a)
            storeDataJSON(posts.key+"likes",liker)
           
            
            
           }}/>
          
        <Text style={styles.likeTextStyle} > {likeCount} Likes</Text>
        <Text style={styles.commentTextStyle}>{commentCount} Comments</Text>
          
   
           

       </PostCard>
    )
    }
    else{
        return(
            <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color="white" animating={true} />
          </View>
        )
    }
}

const styles=StyleSheet.create({
    iconStyle:{
        
        position:'absolute',
        right:10,
        top:10,
    },
    commentStyle:{
        position:'absolute',
        bottom:1,
        right:10,
        marginBottom:0,
        
    },
    authorNameStyle:{
        fontFamily:'serif',
        fontSize:18,
        color:"black",
        marginBottom:5,
    },
    dateStyle:{
        
        marginBottom:5,
        color:"black",
        fontSize:10,
        fontStyle:"italic"
    },
    postBodyStyle:{
        fontFamily:'serif',
        marginBottom:10,
        color:"white",
        fontSize:15,
        
    },
    likeStyle:{
        marginBottom:3,
        bottom:0,
        width:36,
        left:0
    },
   
    likeTextStyle:{
        marginBottom:3,
        fontSize:14,
        fontFamily:'serif',
        color:"black",
        
        width:60,
        left:30,
        position:"absolute",
        bottom:0
    },
    commentTextStyle:{
        marginBottom:3,
        fontSize:14,
        fontFamily:'serif',
        color:"black",
        
        width:90,
        right:36,
        position:"absolute",
        bottom:0
    },

  
}
);

export default PostList