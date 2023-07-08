import React from 'react';

class Button extends React.Component {
  render() {
    const { label, onClick, disabled } = this.props;
    const buttonStyle = {
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: disabled ? '#ccc' : '#007bff',
      color: '#fff',
      cursor: disabled ? 'not-allowed' : 'pointer',
    };

    return (
      <button style={buttonStyle} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    );
  }
}

export default Button;
