import { USER_LOGIN, USER_LOGOUT } from "./types";

//Actions : Zorunlu olmamakla beraber güncelleme işlemlerinde hangi reducer'in çağrılacağını ve varsa state 'e gönderilecek datayı belirleyen nesnedir.
//Reducer'in hangi bölümlerini kullanılacağını belirliyoruz
export const userLogin = (user) => ({
	type: USER_LOGIN,
	payload: user,
});

export const userLogout = () => ({
	type: USER_LOGOUT,
});