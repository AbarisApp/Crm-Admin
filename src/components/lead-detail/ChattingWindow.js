import React, { useEffect, useState } from 'react';
import { geChatting, postChatting } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../common/loader/Loader';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setChats, setComments } from '../../slice/auth';
function ChattingWindow() {
    const [messages, setMessages] = useState();
    const dispatch = useDispatch()
    const getChattings = async () => {
        try {
            const res = await geChatting(parem.id)
            // setMessages(res.data)
            // dispatch(setChats(res.data.length));
        } catch (error) {

        }
    }

    useEffect(() => {
        getChattings()
    }, [])



    const [newMessage, setNewMessage] = useState('');

    const handleSend = async () => {
        if (newMessage.trim()) {
            setLoader(true)
            try {
                const res = await postChatting({ chat: newMessage, user_id: parem.id })
                if (res.statusCode == '200') {
                    toastSuccessMessage()
                    getChattings()

                } else {
                    toastSuccessError()
                }
                setTimeout(() => {
                    setLoader(false)
                }, 1000);
            } catch (error) {

            }
            setNewMessage('');
        }
    };
    const setNewMessageKey = (e) => {
        if (e.key === 'Enter') {
            handleSend()
        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(`Message send Successfull`, {
            position: "top-right",
        });
    };
    const toastSuccessError = (message) => {
        toast.error(`Faild `, {
            position: "top-right",
        });
    };

    const [loader, setLoader] = useState(false)
    const parem = useParams()

    return (
        <div className="chat-window">
            {/* <div className="chat-header">
                Mobile Phone - +91 0885174628
            </div> */}
            {loader && <Loadar />}
            <ToastContainer />
            <div className="chat-body">
                {messages?.map((message, index) => (
                    <div key={index} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                        {/* <div className="message-sender">{message.sender}</div> */}
                        <div className="message-text">{message.chat}</div>
                    </div>
                ))}
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    placeholder="Type a message"
                    value={newMessage}
                    onKeyDown={setNewMessageKey}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default ChattingWindow;
