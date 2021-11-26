import { ChatEngine } from 'react-chat-engine';
import HeaderFeed from '../Components/HeaderFeed';
import ChatFeed from '../Components/ChatFeed';
import '../Css/Chat.css';
import axios from 'axios';
import { GET_CHATROOM } from '../Utils/Query';
import { useQuery } from '@apollo/client';

const Chatroom = () => {
    // const user = JSON.parse(localStorage.getItem('userData'));
    // const id = user.id;

    // const { loading, error, data } = useQuery(GET_CHATROOM, {
    //     variables: { id: id}
    // });

    // if(loading){
    // return <div>Loading</div>
    // }

    // if (error){
    // return <div>{error.toString()}</div>
    // }

    // const authObject = { 'Project-ID': '8a530897-5d7d-4884-b1d4-ecc5bd6094a9', 'User-Name': user.username };

    // const check = axios.get('https://api.chatengine.io/users', {headers: authObject });
    
    // if(check.status === null){
    //     axios.post('https://api.chatengine.io/users', 
    //         {headers: {'PRIVATE-KEY': '18b60e43-a4f3-41be-a102-086d0299604d'}},
    //         {data: {'username': data.users[0].username,
    //             'secret': data.users[0].password,
    //             'email': data.users[0].email,
    //             'first_name': data.users[0].profile[0].firstName,
    //             'last_name': data.users[0].profile[0].lastName
    //         }}
    //     )
    //     .then((res)=>{
    //         console.log(JSON.stringify(res.data));
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }

    return(
        <div>
            <HeaderFeed />
            <ChatEngine
                height='85vh'
                projectID='8a530897-5d7d-4884-b1d4-ecc5bd6094a9'
                userName='Test'
                userSecret='12345'
                renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </div>
    )
}

export default Chatroom;