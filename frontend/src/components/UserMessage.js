import React from 'react';

const UserMessage = ({ text }) => {
    return (
        <div style={styles.userMessage}>
            <p>{text}</p>
        </div>
    );
};

const styles = {
    userMessage: {
        backgroundColor: '#fff',
        margin: '5px 0',
        padding: '5px',
        border: '1px solid #ccc',
        fontSize: '14px',
        textAlign: 'right',
    },
};


export default UserMessage;
