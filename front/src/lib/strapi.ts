import qs from "qs";

const BASE_URL = import.meta.env.STRAPI_API_URL;

if (!BASE_URL) {
  throw new Error("Falta STRAPI_API_URL en el archivo .env");
}

const QUERY_HOME_PAGE = {
  populate: {
    sections: {
      on: {
        "layout.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            link: {
              populate: "*", // trae href, label, isExternal, variante
            },
          },
        },
      },
    },
  },
};

const QUERY_CLASSES_BRAND = {
  fields: ["label"],
};

export async function getHomePage() {
  const query = qs.stringify(QUERY_HOME_PAGE);
  const response = await getStrapiData(`/api/home-page?${query}`);
  console.log(`${BASE_URL}/api/home-page?${query}`);
  return response.data;
}

export async function getClassesBrand() {
  const query = qs.stringify(QUERY_CLASSES_BRAND);
  const response = await getStrapiData(`/api/classes?${query}`);
  return response?.data ?? [];
}

export async function getStrapiData(url: string) {
  try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
