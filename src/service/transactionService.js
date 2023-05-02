import { axiosClassic } from './axios';

export async function addToCart(userId, gameId) {
  try {
    const response = await axiosClassic.post(`/user/${userId}/cart/${gameId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function removeFromCart(userId, gameId) {
  try {
    const response = await axiosClassic.post(`/user/${userId}/removeFromCart/${gameId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
