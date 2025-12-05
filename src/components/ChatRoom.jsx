import { useState, useEffect, useRef } from 'react';
import { auth, loginWithGoogle, logout, db } from '../firebase';
import { ref, push, onValue, query, orderByChild, limitToLast } from 'firebase/database';
import './ChatRoom.css';

export default function ChatRoom() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const isFirstLoad = useRef(true); // Track first load

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Listen to messages
  useEffect(() => {
    const messagesRef = ref(db, 'messages');
    const messagesQuery = query(messagesRef, orderByChild('createdAt'), limitToLast(50));

    const unsubscribe = onValue(messagesQuery, (snapshot) => {
      const messagesList = [];
      snapshot.forEach((childSnapshot) => {
        messagesList.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      setMessages(messagesList);
    });

    return () => unsubscribe();
  }, []);

  // Auto scroll to bottom - ONLY after first load
  useEffect(() => {
    if (isFirstLoad.current && messages.length > 0) {
      // Skip auto-scroll on first load
      isFirstLoad.current = false;
      return;
    }
    
    // Auto-scroll for new messages
    if (!isFirstLoad.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    try {
      const messagesRef = ref(db, 'messages');
      await push(messagesRef, {
        text: newMessage,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: Date.now()
      });
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chatroom">
      <div className="chatroom-header">
        <h3>Live Chat</h3>
        {user ? (
          <div className="user-info">
            <img src={user.photoURL} alt={user.displayName} />
            <span>{user.displayName}</span>
            <button onClick={logout} className="btn-logout">Logout</button>
          </div>
        ) : (
          <button onClick={loginWithGoogle} className="btn-login">
            Sign in with Google
          </button>
        )}
      </div>

      <div className="messages-container">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.uid === user?.uid ? 'own-message' : ''}`}
          >
            <img src={msg.photoURL} alt={msg.displayName} className="message-avatar" />
            <div className="message-content">
              <span className="message-author">{msg.displayName}</span>
              <p className="message-text">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {user && (
        <form onSubmit={handleSendMessage} className="message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="message-input"
          />
          <button type="submit" className="btn-send">Send</button>
        </form>
      )}
    </div>
  );
}