import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_API_TOKEN_URL } from "$env/static/private";

export async function load() {
  const clientId: string = SPOTIFY_CLIENT_ID;
  const clientSecret: string = SPOTIFY_CLIENT_SECRET;
  const url: string = SPOTIFY_API_TOKEN_URL;

  const tokenResponse = await fetch(SPOTIFY_API_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
      'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}` // base64 encoded
    },
    body: 'grant_type=client_credentials'
  });

  const data = await tokenResponse.json();
  return data;
}