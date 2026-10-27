export async function getInsights(token) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/calls/insights`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch calls (${response.status})`);
  }

  const data = await response.json();

  if (data === null || typeof data !== "object" || Array.isArray(data)) {
      throw new Error("The insights API returned an unexpected response");
  }

  return data;
}

export async function getRecentCalls(page, size, token) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/calls/recent?page=${page}&size=${size}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch calls (${response.status})`);
  }

  return response.json();
}