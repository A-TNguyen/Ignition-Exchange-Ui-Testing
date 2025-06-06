// pages/api/ping.ts

export default async function handler(req, res) {
  try {
    const response = await fetch('http://localhost:8088/system/webdev/PaintTest/GetApi');
    
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch from Ignition' });
    }

    const data = await response.json();
    return res.status(200).json(data.json); // unwrap from { json: { ... } }

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error contacting Ignition' });
  }
}
