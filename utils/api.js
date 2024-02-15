import { LOCAL_API_URL } from "./apiConfig";

export const createUser = async (userData) => {
  const res = await fetch(`${LOCAL_API_URL}/api/auth/register`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const addComment = async (form) => {
  const res = await fetch(`${LOCAL_API_URL}/api/product/add-comment`, {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const dispatchHandler = async (action, payload) => {
  const res = await fetch(
    `${LOCAL_API_URL}/api/user-cart?action_type=${action}&product_id=${payload}`,
    {
      method: "PATCH",
    }
  );
  const data = await res.json();
  return data;
};
