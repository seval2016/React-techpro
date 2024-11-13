const Jsx7 = () => {
  //Elimizde data olmadan Map methodunun for dongusu gibi kullanimi
  // const arr = new Array(10); Bu tip bir dizide map çalışmıyor. [] ile oluşturulan dizilerde çalışıyor.
  const arr = [...new Array(10)];
  // ... diziyi spread ile [] parantezlerinden çıkardık istediğimiz dizi formatına çevirdik. 

  return (
    <ul>
      {arr.map((_,index) => (
        <li key={index}>Product {index + 1}</li>
      ))}
    </ul>
  );
};

export default Jsx7;
