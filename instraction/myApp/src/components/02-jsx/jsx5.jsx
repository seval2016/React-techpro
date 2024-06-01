
const Jsx5 = () => {
    const isAdmin = true;
    const discount = 100;
    // JSX yapilarinda if veya switch kullanilamaz yerine TERNARY veya SHORT CIRCUIT kullanilir
    const el1 = <h2>Admin User</h2>;
    const el2 = <h2>Customer User</h2>;
    return (
        <div>
            {isAdmin ? el1 : el2}
            <p>{!!discount && <em>Discount</em>}</p>
        </div>
    );
};
export default Jsx5;











