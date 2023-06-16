export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337"
  }${"/"}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
