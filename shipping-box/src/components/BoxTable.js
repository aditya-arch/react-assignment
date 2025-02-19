
import { useContext } from 'react';
import BoxContext from '../context/BoxContext';

const BoxTable = () => {
  const { boxes } = useContext(BoxContext);

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Receiver Name</th>
          <th style={styles.th}>Weight (kg)</th>
          <th style={styles.th}>Box Color</th>
          <th style={styles.th}>Destination</th>
          <th style={styles.th}>Cost (INR)</th>
        </tr>
      </thead>
      <tbody>
        {boxes.map((box) => (
          <tr key={box.id}>
            <td style={styles.td}>{box.receiverName}</td>
            <td style={styles.td}>{box.weight}</td>
            <td style={styles.td}>
              <div
                style={{
                  backgroundColor: `rgb${box.boxColor}`,
                  width: '20px',
                  height: '20px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
            </td>
            <td style={styles.td}>{box.destinationCountry}</td>
            <td style={styles.td}>{box.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: '90%',
    borderCollapse: 'collapse',
    margin: '2rem auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  th: {
    backgroundColor: '#f4f4f4',
    padding: '0.75rem',
    textAlign: 'left',
    border: '1px solid #ccc',
  },
  td: {
    padding: '0.75rem',
    textAlign: 'left',
    border: '1px solid #ccc',
  },
};

export default BoxTable;
