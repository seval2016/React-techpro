import { createContext } from "react";


// Bos bir merkezi state yapisini olusturur.
const StoreContext = createContext();

// Baska componentlerden erisilebilmesi icin export edilir
export default StoreContext;