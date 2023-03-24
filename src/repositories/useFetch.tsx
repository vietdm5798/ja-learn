type Data = Record<any, any>;

export const useFetch = () => {
  const apiHost = "http://localhost:3000/api/";
  const get = async (url: string, data: Data = {}) => {
    if (Object.keys(data).length > 0) {
      url += "?" + new URLSearchParams(data);
    }
    return await fetch(apiHost + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  const post = async (url: string, data: Data = {}) => {
    return await fetch(apiHost + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  return { get, post };
};
