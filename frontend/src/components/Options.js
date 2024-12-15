import React from 'react';

const Options = ({ options, onSelect }) => {
    return (
        <div style={styles.optionsContainer}>
            {options.map((option, idx) => (
                <button key={idx} style={styles.optionButton} onClick={() => onSelect(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

const styles = {
    optionsContainer: {
        marginTop: '5px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
    optionButton: {
        padding: '5px',
        backgroundColor: '#ddd',
        border: '1px solid black',
        cursor: 'pointer',
        fontSize: '12px',
        textAlign: 'left',
    },
};


export default Options;
