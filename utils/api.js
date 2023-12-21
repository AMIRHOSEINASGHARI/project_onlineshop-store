export async function fetchIncredibbleOffers() {
  const response = await fetch(
    "http://localhost:3000/api/products/incredibble-offers"
  );
  const data = await response.json();
  return data;
}
