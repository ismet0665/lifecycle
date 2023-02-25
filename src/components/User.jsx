import React, { useEffect, useState } from "react";
// useEffect videosu dk 2:55
// fetch işlemini bir koşula bağlamaz isek sonsuz döngüye girer. butona tıklama vs. kosul olmalı. Çünkü state güncellendiginde render işlemi olacagı için sürekli rerender olur. onClick={getUser} ile getUser fonk çalışması butona baglı oldugu için sürekli çagrılmaz. bu işlem manuel olur. otomatize olması için mount anında fetch yapılacak bir işlem gerekiyor. buda useEffect ile olur.useEffect içinde getUser(); fonk çagırırsak manuel olmaz. reflesh ile gelir. useEffect ilk render sonrası mount işlemi otomatik çalışır.
const User = () => {
  //   let user = "deneme"
  const [user, setUser] = useState();

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("Mounting");
    getUser();
  }, []);

  console.log("Render");
  console.log(user);
  return (
    <div>
      <h1>
        {/* Optional chaning = İsteğe bağlı zincirleme  ÖNEMLİ Çünkü ilk render da getUser() da fetch olmadıgı için bos oluyor.user?.name?.first user varsa name getir name varsa first getir vs. yada short circuit && ile yapılabilirnir.
        user && user.name gibi ama ? Optional chaning daha kısa. bu hatayı baslangıcta useState(); bos oldugu için alıyoruz.  */}
        {user?.name?.first} {user?.name?.last}
      </h1>
      <img className="rounded-circle" src={user?.picture?.large} alt="" />
      <h4>{user?.email}</h4>
      <h5>{user?.phone}</h5>
      {/* <p>{user?.dob?.date}</p> */}
      <p>{new Date(user?.dob?.date).toLocaleDateString("tr-TR")}</p>
      {/* <p>{new Date(user?.dob?.date).toLocaleDateString("ar-SA")}</p> */}
      {/* <p>{new Date(user?.dob?.date).toLocaleDateString("de-DE")}</p>  ülke kodları*/}
      {/* <p>{new Date(user?.dob?.date).toLocaleDateString("en-DE")}</p>  ülke kodları 
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl  bu api sayesinde ülke formatlarında yazılıyor. */}

      <button className="btn btn-warning" onClick={getUser}>
        Get User
      </button>
      {/*onClick={getUser} buton condition şarta baglı gibi çalışıyor. */}
    </div>
  );
};

export default User;
