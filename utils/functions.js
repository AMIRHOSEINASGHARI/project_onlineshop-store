import { compare, hash } from "bcryptjs";

export const createSlug = (title) => {
  const slug = title.split(" ").join("-");
  return slug;
};

export const reducePrice = (discount, price) => {
  const discountValue = (price * discount) / 100;
  const finalValue = price - discountValue;
  return finalValue;
};

export const calcProductDiscount = (discount, price) => {
  return (price * discount) / 100;
};

export const hashPassword = async (password) => {
  const hashPassword = await hash(password, 12);
  return hashPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

export const shorterText = (text, maxCharacter) => {
  if (String(text).length > maxCharacter) {
    return `${text.substring(0, maxCharacter)}...`;
  } else {
    return text;
  }
};

export const isInCart = (selectedItems, id) => {
  const result = !!selectedItems.find((el) => el._id.equals(id));
  return result;
};

export const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((el) => el._id === id);
  if (index >= 0) {
    return state.selectedItems[index].quantity;
  } else {
    return null;
  }
};

export const calcTotalProducts = (products) => {
  return products.reduce((acc, cur) => acc + cur.quantity, 0);
};

// calculates user_cart total price based on product discount
export const calcTotalPrice = (products) => {
  return products.reduce(
    (acc, cur) =>
      acc + reducePrice(cur._doc.discount, cur._doc.price) * cur.quantity,
    0
  );
};

// calculates user_cart total discount price
export const calcTotalDiscountPrice = (products) => {
  return products.reduce(
    (acc, cur) =>
      acc +
      calcProductDiscount(cur._doc.discount, cur._doc.price) * cur.quantity,
    0
  );
};
