import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

const PaymentQR = () => {
  const [amount, setAmount] = useState(10) // Default ₹10
  const upiID = 'rakeshreddy512@ybl' // Your actual UPI ID
  const payeeName = 'Rakesh Peddamallu'

  // Properly formatted UPI QR Code Link
  const generateUPILink = (amt) =>
    `upi://pay?pa=${upiID}&pn=${encodeURIComponent(
      payeeName
    )}&mc=&tid=${Date.now()}&tr=${Date.now()}&tn=${encodeURIComponent(
      'Support My Blog ❤️'
    )}&am=${amt}&cu=INR`

  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 'inherit',
      }}
      className="text-center p-4 bg-gray-100 rounded-lg shadow-md w-80 mx-auto"
    >
      <h2 className="text-lg font-bold text-gray-800 mb-2">
        Support My Blog ❤️
      </h2>
      <h3>If this blog helped you, consider a small contribution!</h3>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: 'white',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        }}
      >
        <label
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '8px',
            color: '#000',
          }}
        >
          Select Amount:
        </label>
        <select
          style={{
            width: '150px',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '14px',
            textAlign: 'center',
            cursor: 'pointer',
            marginBottom: '12px',
          }}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        >
          <option value="10">₹10</option>
          <option value="50">₹50</option>
          <option value="100">₹100</option>
          <option value="500">₹500</option>
          <option value="1000">₹1000</option>
        </select>

        <a
          href={generateUPILink(amount)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            textAlign: 'center',
            marginTop: '10px',
          }}
        >
          <QRCodeCanvas
            value={generateUPILink(amount)}
            size={180}
            level="H"
            includeMargin={true}
            style={{
              border: '8px solid white',
              borderRadius: '8px',
              boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)',
            }}
          />
        </a>
      </div>

      <h3>Your support keeps this going! 🚀🙏</h3>
    </div>
  )
}

export default PaymentQR
