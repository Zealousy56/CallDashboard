export async function getCalls() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/calls/insights`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch calls (${response.status})`);
  }

  const calls = await response.json();
  if (!Array.isArray(calls)) {
    throw new Error("The calls API returned an unexpected response");
  }

  return calls;
}