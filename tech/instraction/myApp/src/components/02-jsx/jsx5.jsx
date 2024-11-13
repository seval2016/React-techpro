const Jsx5 = () => {
  const isAdmin = true;
  const discount =0;
  // JSX yapilarinda doğrudan if veya switch yapıları kullanilamaz
  // if ve swich yerine TERNARY veya SHORT CIRCUIT kullanilir

  /*{!!discount && <em>Discount</em>} gibi && ile bağlı yapılarda değerler true ise devam eder
    false bulana kadar gider. False bulamazsa en son hangisi ise onu gösterir. Mesele discount 10 veya 100 oldugunda değer 
    true olur. Normalde js de 0 false demektir fakat bu jsx de 0 verdiğimizde true bir değer gibi algılar bu da hata demektir. 
    !! değişkeni false'a zorlar ancak bu şekilde doğru değer alabiliriz. Bu sorun sadece 0 için geçerlidir. Mesela null versek doğru çalışır. */
  const el1 = <h2>Admin User</h2>;
  const el2 = <h2>Customer User</h2>;
  return (
    <div>
      {/*isAdmin ? <h2>Admin User</h2> : <h2>Customer User</h2>*/}
      {isAdmin ? el1 : el2}
      <p>{!!discount && <em>Discount</em>}</p>

      <p>
        {!!discount && (
          <>
          <em> Discount yanına bir tag daha açıldığında  muhakkak bir parentı olacak sahipsiz gezemezler</em>
            <em>Discount</em>
            <span>500₺</span>
          </>
        )}
      </p>
    </div>
  );
};
export default Jsx5;
