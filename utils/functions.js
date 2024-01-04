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

export const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((el) => el.id === id);
  return result;
};

export const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((el) => el.id === id);
  if (index >= 0) {
    return state.selectedItems[index].quantity;
  } else {
    return null;
  }
};
