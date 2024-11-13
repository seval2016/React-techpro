import { createContext, useContext, useReducer } from "react";
import { userReducer } from "./auth/reducer";
import { userInitialState } from "./auth/initial-state";

/*

************************	Merkezi state oluşturma 	************************
Not 1:
- Öncelikle src içerisinde store klasorü oluşturulur içerisine bos bir merkezi state'i barındıracak context 
tanımlanır.

- Daha sonra App.js içinde oluşturulan context ile tüm uygulama sarmallanır ve value değeri ile her yerde 
kullanılacak stateler tanımlanır.

- Herhangi bir component'in içinde kullanırken useContext hook'u kullanılır.

Not 2:
Fazla sayıda state'ın olduğu büyük projelerde bu state leri organize etmek, yönetilebilirliğini artırmak ve daha 
güvenli setter'lar oluşturmak için reducer yapısı kullanılır.Reducer 4 bölümden oluşur.

Initial State : Zorunlu, bu kısmı muhakkak tanımlamak zorundayız. State de saklanacak alanlar ve ilk değerleri belirlenir.
Reducer : Zorunlu, bu kısmı muhakkak tanımlamak zorundayız. State'i güncelleyen fonksiyonların yazıldığı yer.
Actions : Zorunlu olmamakla beraber güncelleme işlemlerinde hangi reducer'in çağrılacağını ve varsa state'e gönderilecek datayı belirleyen nesnedir.
Types : Actions ve reducer bölümleinde kullanılacak olan action types'lar tanımlanır. Ön tanımlı değerler diyebiliriz.

*/


// Bos bir merkezi state olusturuldu
const StoreContext = createContext();

// useStore isimli hook u olusturduk. Component icindeki merkezi state cagirma isini kolaylastirmak icin.
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
	const [stateUser, dispatchUser] = useReducer(userReducer, userInitialState);

	const state = { stateUser, dispatchUser };

	return (
		<StoreContext.Provider value={state}>{children}</StoreContext.Provider>
	);
};