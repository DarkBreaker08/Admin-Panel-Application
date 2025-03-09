const API_BASE = `http://localhost:3000/`;

export const useApi = () => {
  const call = async <R, P = {}>(
    url: string,
    method: "GET" | "DELETE" | "POST",
    body?: P
  ) => {
    const commonData = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const reqData = body
      ? { ...commonData, body: JSON.stringify(body) }
      : commonData;

    try {
      const response = await fetch(`${API_BASE}${url}`, reqData);

      if (response.ok) {
        const data: R = await response.json();
        return data;
      } else {
        const error: string = await response.text();
        throw new Error(error);
      }
    } catch (e) {
      throw new Error(`An error has occured: ${e}`);
    }
  };

  const apiGet = async <R>(url: string) => {
    return await call<R>(url, "GET");
  };

  const apiPost = async <R, P>(url: string, payload: P) => {
    return await call<R, P>(url, "POST", payload);
  };

  const apiDelete = async <R>(url: string) => {
    return await call<R>(url, "DELETE");
  };

  return { apiGet, apiPost, apiDelete };
};
