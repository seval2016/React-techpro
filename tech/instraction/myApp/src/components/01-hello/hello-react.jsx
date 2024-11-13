
/*

Facbook tarafından, facebook'un hızlandırılması ve hantallığının ortadan kaldırılması amacıyla 
geliştirilmiştir.
Daha sonra Faceboo'un instagramı satın almasıyla birlikte o platformda da kullanılmaya başlanıldı

Ardından açık kaynak kodu ile tüm dünya ile paylaşıldı.

İlk zamanlar html-js kullanımına uygun olmadığı için ilk zamanlar kabul görmemiş
Büyük firmalar da kullanmaya başlayınca populer hale gelmiş

React'ta projeler komponentlerden oluşur.
Componentler bir yapbozun parçaları gibibir araya getirilerek uygulama ortaya çıkarılır. Her react uygulaması
bir component'den oluşur. Component isimleri PascalCase formatında yazılır.

Her component'in kendi özelliklerini barındıran bir state'i vardır. State'ler içinde component'in 
durumu,datası,stil özellikleri gibi bilgiler tutulabilir.

State'lerin değişimleri takip edilerek,buna göre çeşitli kodlama hamleleri yapılabilir.
Satate'ler child componentlere veya parent component'lere aktarılabilir.

==== React Neden Hızlı ? ====

component yapısı ile Ract daha hızlı çünkü normal uygulamalarda bir yerde değişiklik oldugunda 
komple bütün sayfa yenilenir fakat eğer sistem React ile yazıldıysa tüm sayfa component'lerden oluştuğu
için sadece değişen component yenilenir. Ne kadar küçük parçalara bölünürse o kadar performans artar.

Virtual DOM :  
React'in en önemli özelliklerinden biri Virtual DOM'dur. Virtual DOM, Real DOM'un kopyasını 
oluşturur. Bu kopya DOM, React uygulamanızın herhangi bir yerde değişikliklerini takip eder.
Değişiklikler Virtual DOM'da yapılır. Sonra React, Virtual DOM'u Real DOM ile
kopyasını karsılastırır. ve Real Dom'da ki ilgili kısmı günceller.


==== Kurulumu ====

terminalde <-|
1.Adım : npm create vite@latest (her yeni proje için başlangıçta bir kere çalıştırılır)
2.Adım : Bu koddan sonra projenin ismi sorulur, proje ismi yazıldıktan sonra framework sorulur framework olarak react seçilir
3.Adım : typescript mi js mi kullanacaksınız diye sorulur. JS seçilir
4.Adım : cd myApp <-|
5.Adım : npm i veya npm install (node_modules adında projenin ihtiyacı olan bağımlılıkları kurar)<-| 
6.Adım : npm run dev -> projeyi çalıştırmak için
7.Adım : Projeyi durdurmak için Ctrl + c

dist klasörü : proje bittikten sonra yayınlanacak klasör dosyası. 

npm run dev : uygulamayı development modunda çalıştırır.
npm run build : uygulamayı yayına hazırlar dist clasörünü oluşturur
npm run lint : eslint'i çalıştırıp tüm uygulamayı gözden geçirir.
npm run preview : dist klasöründeki yayına hazır uygulamayı çalıştırır.
*/



const HelloReact = () => {
  return <h2>hello React</h2>
};

export default HelloReact;