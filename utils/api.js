export const createUser = async (userData) => {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

export const addComment = async (form) => {
  const res = await fetch("/api/product/add-comment", {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};
