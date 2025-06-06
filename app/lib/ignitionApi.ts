export async function pingIgnition() {
  const res = await fetch('http://localhost:8088/system/webdev/PaintTest/GetApi', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to ping Ignition: ${res.status}`);
  }

  const data = await res.json();
  return data.json; // Important!
}
