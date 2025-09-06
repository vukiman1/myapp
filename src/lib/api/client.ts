// lib/api/client.ts
export async function apiFetch<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include", // QUAN TRỌNG: gửi kèm cookies HttpOnly
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json() as Promise<T>;
}
