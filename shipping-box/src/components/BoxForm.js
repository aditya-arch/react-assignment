
import { useState, useContext } from 'react';
import { HexColorPicker } from 'react-colorful';
import BoxContext from '../context/BoxContext';

function hexToRgbString(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `(${r}, ${g}, ${b})`;
}

const BoxForm = () => {
  const { addBox } = useContext(BoxContext);

  const [receiverName, setReceiverName] = useState('');
  const [weight, setWeight] = useState('');
  const [boxColorHex, setBoxColorHex] = useState('#000000'); 
  const [destinationCountry, setDestinationCountry] = useState('');
  const [errors, setErrors] = useState({});
  const [saveMessage, setSaveMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaveMessage(''); 


    const newErrors = {};
    if (!receiverName) newErrors.receiverName = 'Receiver name is required';
    if (!weight) newErrors.weight = 'Weight is required';
    if (!boxColorHex) newErrors.boxColor = 'Box color is required';
    if (!destinationCountry) {
      newErrors.destinationCountry = 'Destination country is required';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const validWeight = Math.max(0, parseFloat(weight));
    if (validWeight !== parseFloat(weight)) {
      setErrors({
        ...errors,
        weight: 'Weight cannot be negative. Defaulting to 0.',
      });
      setWeight(0);
      return;
    }

    const rgbString = hexToRgbString(boxColorHex);
    const countryMultipliers = {
      Sweden: parseFloat(process.env.REACT_APP_SWEDEN_MULTIPLIER),
      China: parseFloat(process.env.REACT_APP_CHINA_MULTIPLIER),
      Brazil: parseFloat(process.env.REACT_APP_BRAZIL_MULTIPLIER),
      Australia: parseFloat(process.env.REACT_APP_AUSTRALIA_MULTIPLIER),
    };

    const cost = validWeight * countryMultipliers[destinationCountry];
    addBox({
      receiverName,
      weight: validWeight,
      boxColor: rgbString, 
      destinationCountry,
      cost: cost.toFixed(2),
    });

    // Reset form
    setReceiverName('');
    setWeight('');
    setBoxColorHex('#000000');
    setDestinationCountry('');
    setErrors({});
    setSaveMessage('Box details saved successfully!');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {saveMessage && <p style={styles.success}>{saveMessage}</p>}

      {/* Receiver Name */}
      <div style={styles.formGroup}>
        <label>Receiver Name:</label>
        <input
          type="text"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
          style={styles.input}
        />
        {errors.receiverName && (
          <span style={styles.error}>{errors.receiverName}</span>
        )}
      </div>

      {/* Weight */}
      <div style={styles.formGroup}>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={styles.input}
        />
        {errors.weight && <span style={styles.error}>{errors.weight}</span>}
      </div>

      {/* Box Color (HexColorPicker) */}
      <div style={styles.formGroup}>
        <label>Box Color:</label>
        <div style={{ marginTop: '0.5rem' }}>
          <HexColorPicker
            color={boxColorHex}
            onChange={setBoxColorHex}
            style={{
              width: '160px',
              height: '110px',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          />
        </div>
        {errors.boxColor && <span style={styles.error}>{errors.boxColor}</span>}
      </div>

      {/* Destination Country */}
      <div style={styles.formGroup}>
        <label>Destination Country:</label>
        <select
          value={destinationCountry}
          onChange={(e) => setDestinationCountry(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Country</option>
          <option value="Sweden">Sweden</option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
          <option value="Australia">Australia</option>
        </select>
        {errors.destinationCountry && (
          <span style={styles.error}>{errors.destinationCountry}</span>
        )}
      </div>

      <button type="submit" style={styles.button}>
        Save
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
    display: 'block',
  },
  success: {
    color: 'green',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
};

export default BoxForm;
