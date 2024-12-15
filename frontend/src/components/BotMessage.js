import React from 'react';
import Options from './Options';

const BotMessage = ({ text, options, onSelect }) => {
    return (
        <div style={styles.botMessage}>
            <p>{text}</p>
            {options && <Options options={options} onSelect={onSelect} />}
        </div>
    );
};

const styles = {
    botMessage: {
        backgroundColor: '#f9f9f9',
        margin: '5px 0',
        padding: '5px',
        border: '1px solid #ddd',
        fontSize: '14px',
    },
};


export default BotMessage;
