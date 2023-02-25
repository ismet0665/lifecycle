//?=============================================================
//?                 LIFECYCLE METOTLARI
//?      https://reactjs.org/docs/react-component.html
//?      https://tr.reactjs.org/docs/react-component.html
//?=============================================================

//* Lifecycle metotlari componentlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React metotlaridir.
//! Ornegin bir component olusturuldugunda, DOM'a basilsiginda, guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)
//*Bir insanın dogması, güncellenmesi, ölmesi !!!!

//* 1- Mounting = Eklenmesi,baglanmak // Bİr component dom a girdigi zaman. cocugun hayata gelmesi
//* 2- Updating = güncelleme // çocugun yaş alması
//* 3- Unmounting = ölme
// constructor() anne karnında olusması render()  Dogma anı olarak düşünebiliriz.
// componentDidMount() dogduktan hemen sonra yapılması gereken işlemler. bu fonk reactın özel fonk biz içini yazıyoruz.
// Updating cocugun Yaş alması dogum günü kutlaması
// Unmouting component dom dan kaldırıldıktan sonra. ölmesi defin işlemi.
// componentDidMount, componentDidUpdate,componentWillUnmount  "React.Component" içinde ki dahili fonksiyonlardın.
// class LifeCycleMethods extends React.Component extends ederek miras alarak direk fonk. kullanabiliyoruz.

import React from "react";

class LifeCycleMethods extends React.Component {
  //! 1-) Bir componentin olusturulmasinda cagrilir. constructor ilk çalışır. yapıcı fonksiyon.constructor olusturdugunuda dom a render basıyor.
  constructor(props) {
    console.log("1- Constructor running");
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //! 3-) Bir component DOM agacina eklendiginde calistirilir.Bir bileşen, DOM ağacına eklendikten hemen sonra componentDidMount() çalıştırılır.//! (İlk render sonrasi). BİR KERE ÇALIŞIR. SONRAKİ RENDER LARDA ÇALIŞMAZ.
  //! Her yasam dongusu icin bir kere calisir. API’den veri çekmek gerekiyorsa.network request lerin isteklerin başlangıç yeri.component dom a gelir gelmez api den hemen veri çekme işlemi için. dolar kuru bir defa çek kullan. her 5dk da güncellenebilir.
  componentDidMount() {
    console.log("3-componentdidmount");
  }

  //! diyelim ki componentDidMount ile apiden dolar kurunu çektik. 5 dk bir tekrar apiden veri çekmesini istiyorsak timer ile çekeriz. state leri güncelleriz. state değiştikten hemen sonra çalışır. componentDidUpdate güncelleme sonrası ilk çalışan fonk.
  //! 4-) Bu metot ilk render haric diger tüm render'lardan sonra cagrilir.
  //!  prevState ve prevProps degerlerini parametre olarak alabilir. componentDidUpdate(prevProps, prevState, snapshot) önceki prop ile sonraki prop değerlerini karşılaştırıp, buna bağlı olarak ağ isteklerini gerçekleştirmek için de uygun bir yerdir.previous = öncesi.
  componentDidUpdate(prevState) {
    console.log("4-componentDidUpdate");
    // if(prevState.dolarParite - this.dolarParite > 3){
    //   mailgönder()
    // if blogunda bir önceki state ile şimdiki state arasında 3 den büyük fark varsa mail gönder dedik.
    // }
  }

  //! 5-) Bir component DOM agacindan kaldiriltiktan hemen sonra cagirlir.
  //! componentDidMount başlatılan istekler setInternal gibi clearInterval ile kaldırmamız lazım yoksa arka planda çalışmaya devam eder. component dom dan kaldırılsa bile timer hala kalır ve arka planda saymaya devam eder. clearınterval edilmeli. işi bitenleri bellekten ramden kaldırmak için yoksa bellekte yer işgal eder. Özetle temizlik işlemi defin işlemi.
  componentWillUnmount() {
    console.log("5-componentWillUnmount");
  }

  render() {
    //! 2-) Her bir state yada prop degistiginde (render) cagrilir.
    console.log("2-Rendered");
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
