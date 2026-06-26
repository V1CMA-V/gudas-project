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
              populate: "*",
            },
          },
        },
        "layout.history-section": {
          // ✅ el componente
          populate: {
            home: {
              // ✅ el campo repeatable (como se llama en Strapi)
              populate: {
                image: {
                  // ✅ el único campo que necesita populate
                  fields: ["url", "alternativeText"],
                },
              },
            },
            numbers: {
              populate: "*",
            },
          },
        },
        "layout.gallery-home": {
          // ✅ sección de galería de la home
          populate: {
            gallery: {
              // ✅ campo repeatable con cada imagen
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
        "layout.testimonials-section": {
          // ✅ sección de testimonios
          populate: {
            testimonials: {
              // ✅ campo repeatable con cada testimonio
              populate: {
                avatar: {
                  fields: ["url", "alternativeText"],
                },
              },
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

const QUERY_CLASSES = {
  fields: ["label", "description", "level", "isActive", "isFeatured"],
  populate: {
    image: {
      fields: ["url", "alternativeText"],
    },
  },
};

const QUERY_SCHOOL_INFO = {
  populate: {
    logo: {
      fields: ["url", "alternativeText"],
    },
  },
};

export async function getHomePage() {
  const query = qs.stringify(QUERY_HOME_PAGE);
  const response = await getStrapiData(`/api/home-page?${query}`);
  return response.data;
}

export async function getSchoolInfo() {
  const query = qs.stringify(QUERY_SCHOOL_INFO);
  const response = await getStrapiData(`/api/school-info?${query}`);
  return response.data;
}

export async function getClassesBrand() {
  const query = qs.stringify(QUERY_CLASSES_BRAND);
  const response = await getStrapiData(`/api/classes?${query}`);
  return response?.data ?? [];
}

export async function getClasses() {
  const query = qs.stringify(QUERY_CLASSES);
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
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
