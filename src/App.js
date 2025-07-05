import React, { useState } from 'react';
import './App.css';

function App() {
  const [emails, setEmails] = useState([{ value: '', error: '' }]);

  const handleEmailChange = (index, newValue) => {
    const updated = [...emails];
    updated[index].value = newValue;

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    updated[index].error = emailPattern.test(newValue)
      ? ''
      : 'Invalid email format';

    setEmails(updated);
  };

  const addEmailField = () => {
    setEmails([...emails, { value: '', error: '' }]);
  };

  return (
    <div className="App">
      <h2>Dynamic Email Form</h2>
      <form>
        {emails.map((email, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <input
              type="email"
              placeholder={`Email ${index + 1}`}
              value={email.value}
              onChange={(e) => handleEmailChange(index, e.target.value)}
              required
            />
            {email.error && (
              <p style={{ color: 'red', fontSize: '0.9rem' }}>{email.error}</p>
            )}
          </div>
        ))}

        <button type="button" onClick={addEmailField}>
          Add Email
        </button>
      </form>

      <h3>Entered Emails:</h3>
      <ul>
        {emails.map((email, idx) =>
          email.value ? <li key={idx}>{email.value}</li> : null
        )}
      </ul>
    </div>
  );
}

export default App;
