import React, { useEffect, useState } from "react";

//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//? class componentlerdeki lifecycle methodlarını fonk. componentlerde kullanmamızı saglayan yapı.
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir. side effect = bir iş olurken arkaplanda başka bir iş yapılmasına side effect denir. örn ilaçın yan etkisi gibi.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount Bu fonk useEffect ile yapmak mümkün.
//! metotlarinin bir birlesimi gibi dusunulebilir.
// useEffectSnippet ile oluşturabiliriz.

// useEffect(() => {
//  ComponentDidMount (Dependency Array boş ise sadece ComponentDidMount olarakçalışır.) Dependency Array doluysa
// ComponentDidMount + componentDidUpdate hem mount anında hemde count stati güncellendiginde çalışır.
//   return () => {
//     second
//   }
// }, [third]) Dependency Array

//! 1- useEffect(() => {
//*   /* ComponentDidMount code */ bu şekli sadece ComponentDidMount da çalışır.
//*      Kodlar
//! }, []); Burdaki array Dependency Array = bagımlılık array? diye adlandırılıyor. Boş ise ComponentDidMount olarak çalışır.

//! 2- useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */ hem ilk render sonrası ComponentDidMount olarak çalışır hemde state ler değiştiğinde componentDidUpdate olarak çalışır.
//! }, [state1, state2]);
//****************************************** */
//! 3- useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */ Eğer return varsa componentWillUnmount olarak çalışır.
//!   };
//! }, []);

// ***********************************************
//! 4- useEffect(() => { Tamamının çalışma şekli.
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [state1, state2]); //? Dependency Array yukarda componentDidMount mu yoksa componentDidUpdate mi olacagına karar verir.
// ***********************************************

// UseEffectHook componentin çalışma sırası 1- yukardan aşagı kodlar okunur çalışır return kısmında dom a basılır en son useEffect hook u çalışır.!!! gibi.
const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //  useEffect(() => {
  //! componentDidMount kısmında => fetch, async-await ,localStorage, setTimeout, setInterval(); işlemler yapılır.
  //     console.log("componentDidMount")
  //     setTimeout(() => alert("Data Fetched"), 1000)  burda sanki apiden veri çekme işlemi yapıldı gibi kurguladık. 1sn sonra veri geldi. Burda ki espiri apiden 1 defa veri çekme işlemi oluyor.
  //   }, []) //? Dependecy array bos

  //   useEffect(() => {
  //     console.log("componentDidMount + componenentDidUpdate")
  //     setTimeout(() => alert("Data Fetched"), 1000)
  //   }, [count]) //? Dependecy array = count state array dolu ise componenentDidUpdate olacagı için yukardakinin aksine her istekde çalışır.

  const fetchData = () => {
    console.log("Data Fetching");
  };

  useEffect(() => {
    console.log("Mounting");
    const timer = setInterval(fetchData, 1000);
    //return kısmında anonymous fonk () => yazıyoruz. isimsiz fonk. sadece fonk return ediyor. bu fonk. component kaldırıldıktan sonra devreye giren fonk. gibi düşünebiliriz.
    return () => {
      clearInterval(timer); // ile timer kaldırılmazsa arkaplanda sürekli çalışır.sonsuz döngü olur.
      console.log("Unmounting");
    };
  }, []);

  console.log("Rendering");

  return (
    <div className="container text-center">
      <h1 className="text-danger">LIFECYCLE METHODS</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
