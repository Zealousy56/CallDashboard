export async function getCalls() {
  const response = await fetch(
    "https://69b30b45e224ec066bdb55a0.mockapi.io/api/v1/cdr"
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