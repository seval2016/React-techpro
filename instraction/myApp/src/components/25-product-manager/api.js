const API_URL = "https://66675076a2f8516ff7a71bac.mockapi.io/api/v1";

const getAllProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
};

const getProduct = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
};

const createProduct = async (product) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json", //json formatında oldugunu belirtiyoruz
    },
  });
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
};

const updateProduct = async (id, product) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json", //json formatında oldugunu belirtiyoruz
    },
  });
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
};

const deleteProduct = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
};

export default {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
