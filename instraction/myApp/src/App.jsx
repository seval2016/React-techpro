
import AppRouter from "./router";
import StoreContext from "./store";
import useCurrencies from "./hooks/usecurrencies";
import Loading from "./components/00-common/loading";
import ErrorMessage from "./components/00-common/error";



const App = () => {
	const { currencies, loading, error } = useCurrencies();

	if (loading) return <Loading />;
	if (error) return <ErrorMessage>{error}</ErrorMessage>;

	return (
		<StoreContext.Provider value={{ currencies }}>
			<AppRouter />
		</StoreContext.Provider>
	);
};

export default App;