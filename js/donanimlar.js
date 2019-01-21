var donanimlar = {
  icDonanimlar: {
    anakart: {
      iframeSrc: "https://www.youtube.com/embed/4GhN21wySKM",
      title: "Anakart",
      htmlDoc: "index.html",
      innerHtml: `
          <div class="info-content">
          <h1>Anakart</h1>
          <p>
            Anakart bilgisayarın tüm parçalarını üstünde barındıran ve bu
            parçalar arasındaki en önemli bağ olan birincil devre kartıdır.
            Anakart olmadan hiçbir sistemi çalıştıramayacağınız gibi, en iyi
            entegrasyonu sağlayan performans anakartlar,
            <b>Chipsetler</b> ile birlikte entegredir. Anakartların parçalar
            üzerindeki etkileşimleri özelliklerine göre değişmektedir.
            Günümüzde anakart üreticileri olarak Intel, Gigabyte, MSI ve
            Asus örnekleri verilebilir. Bu firmalar yıllardır en iyisini
            üretmek için kıyasıya rekabet halinde yarışmaktadırlar. Ufak bir
            not vermekte fayda var: Anakartlar aynı Chipsetleri kullansalar
            bile üzerindeki donanım ve araçlar sürekli performansa dayalı
            çalışarak en iyisini üretmek için yarışmaktadır. Kısacası
            anakart bilgisayar birimlerini çekip çeviren ve tüm
            dağılımlarını sağlayan önemli bir <b>elektronik</b> parçadır.
          </p>
          <div class="btn-group-action">
              <button onclick="bringTopic('islemci')" class="btn btn-success">&lt; Önceki Birim</button>
              <button onclick="bringTopic('sesKarti')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/ic-donanimlar/anakart.png" alt="anakart" />
        </div>
        
      `
    },
    ekranKarti: {
      iframeSrc: "https://www.youtube.com/embed/5wHdhcpIfRI",
      title: "Ekran Kartı",
      htmlDoc: "index.html",
      innerHtml: `
          <div class="info-content">
          <h1>Ekran Kartı</h1>
          <p>
          Bilgisayara sorunsuz <b> görüntü </b> aktarabilmek için PCI, AGP ve PCI Express veriyollarını kullanarak VGA, HDMI ve DVI türde görüntü veren iç donanım birimidir. Ekran kartı olmadan bilgisayara görüntü aktaramayacağınız gibi, bilgisayarın en önemli parçaları arasında yer almaktadır. Anakart üzerinde bulunan PCI, AGP veya PCI Express slotlarına takılarak çalışır. Ek olarak ekran kartının çıkış slotlarından monitöre bağlanarak görüntü aktarımı sorunsuz sağlanmış olur.
          Günümüzde pek çok çeşit ekran kartı bulunduğu gibi, şuanda en iyi ekran kartı modeli <b> Nvidia GeForce GTX 1080 </b> olarak belirlenmiştir.
          </p>
          <div class="btn-group-action">
          <button class="btn disabled btn-success">&lt; Önceki Birim</button>
          <button onclick="bringTopic('gucKaynagi')" class="btn btn-success">Sonraki Birim &gt;</button>
        </div>
        </div>
        <div class="info-image">
          <img src="imgs/ic-donanimlar/ekran-karti.png" alt="ekranKarti" />
        </div>
      `
    },
    gucKaynagi: {
      iframeSrc: "https://www.youtube.com/embed/BNaP25Uz8jI",
      title: "Güç Kaynağı",
      htmlDoc: "index.html",
      innerHtml: `
          <div class="info-content">
          <h1>Güç Kaynağı</h1>
          <p>
          Hani bir tabir vardır internette sürekli gezer: <i> "ben olmadan hiçbirinizin kıymeti yok" </i> diye. İşte şuan ki bahsetmiş olduğumuz iç donanım birimi olan Güç kaynağı da tam bu tabire uyuyor diyebilirim. Güç kaynağı olmadan bilgisayarınıza elektrik veremez ve parçaları çalıştıramazsınız. Diyelim ki bir şekilde elektrik vererek çalıştırmayı denediniz, bu seferde parçaları anında havaya uçurabilirsiniz.
          Çünkü güç kaynakları hem şebekeden gelen elektriği düşürerek parçalara dağıtır, hem de tüm bilgisayar için gerekli enerji gereksinimini sağlayarak sorunsuz bir şekilde çalışmasını sağlar. Günümüzde güç kaynakları bilgisayarların donanımlarına göre değişmekte olduğu gibi 50 W'dan başlayarak 1800 W'a kadar güç kaynağı bulabilirsiniz.
          </p>
          <div class="btn-group-action">
          <button onclick="bringTopic('ekranKarti')" class="btn btn-success">&lt; Önceki Birim</button>
          <button onclick="bringTopic('agKarti')" class="btn btn-success">Sonraki Birim &gt;</button>
        </div>
        </div>
        <div class="info-image">
          <img src="imgs/ic-donanimlar/guc-kaynagi.png" alt="gucKaynagi" />
        </div>
      `
    },
    ram: {
      iframeSrc: "https://www.youtube.com/embed/3tFe7XqWZ4Q",
      title: "RAM",
      htmlDoc: "index.html",
      innerHtml: `
          <div class="info-content">
          <h1>RAM</h1>
          <p>
          Bilgilerin depoda <b>geçici</b> olarak tutularak saklandığı hafıza türüne denilmektedir. Bilgisayarlar çalışmış oldukları programlar ve işlemler ile ilgili bilgileri RAM ( Random Access Memory )'a kaydederek belirli bir süre hafızasında tutarlar. RAM'lar bilgisayarlar için önemli parçalar arasında 4.sırada diyebilirim.
          </p>
          <div class="btn-group-action">
          <button onclick="bringTopic('hardDisk')" class="btn btn-success">&lt; Önceki Birim</button>
          <button onclick="bringTopic('islemci')" class="btn btn-success">Sonraki Birim &gt;</button>
        </div>
        </div>
        <div class="info-image">
          <img src="imgs/ic-donanimlar/ram.png" alt="ram" />
        </div>
      `
    },
    islemci: {
      iframeSrc: "https://www.youtube.com/embed/_dcHTghCCJk",
      title: "İşlemci",
      htmlDoc: "index.html",
      innerHtml: `
          <div class="info-content">
          <h1>İşlemci</h1>
          <p>
          Hazır önemli parçalardan ilerliyorken olmazsa olmazlardan birisi İşlemcileri de atlamak olmaz tabii ki. Tabiri caizse <b> bilgisayarların beyni </b> olarak nitelendirilen işlemciler olmadan hareket dahi edemezler. Tıpkı insanların beynine benzetilen bu durumda nasıl ki bir insan beyni olmadan hiçbir işleme ve harekete tabii tutulamayacağı için, işlemciler de aynı kefededir. Klavyeden basmış olduğunuz bir tuş ile fareyi hareket ettirdiğiniz alanlar dahil tüm işlemler işlemciye iletilir ve çok kısa bir süre içerisinde eyleme dönüşerek çalışır.
          Yani klavyeden A harfine bastığınızda komut bunu işlemciye göndererek "kardeş bak yukarıda A komutu geldi, onaylıyor musunuz ?" sorusunu iletir. İşlemci de herhangi bir olumsuz durum yok ise onaylayarak milisaliseler içerisinde ekrana yansıtır.
          </p>
          <div class="btn-group-action">
              <button onclick="bringTopic('ram')" class="btn btn-success">&lt; Önceki Birim</button>
              <button onclick="bringTopic('anakart')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/ic-donanimlar/islemci.png" alt="islemci" />
        </div>
      `
    },
    agKarti: {
      iframeSrc: "https://www.youtube.com/embed/Qm1enJSMzek",
      title: "Ağ Kartı",
      htmlDoc: "index.html",
      innerHtml: `
          <div class="info-content">
          <h1>Ağ Kartı</h1>
          <p>
          Bilgisayar ağlarında bilgisayarla ağ arasında iletişim kurmasını sağlayan bir iç donanım birimidir. Asıl görevi bilgisayarın ağ içerisinde dâhil olan bütün sistemlerle iletişim haline (veri transferi v.s) geçmesini sağlamaktır. Diğer adları network kartı, ağ arabirim kartıdır. Bu kartın çıkışına bağlanabilen kablo sayesinde paylaşıma açık olan diğer bilgisayarlara bilgileri aktarabilir. Anakarttın genişleme yuvalarına takılır. Ethernet kartı sayesinde bilgisayarlar arası veri paylaşımı olur. Kullanımı masaüstü ve diz üstü bilgisayarlarda farklıdır. Hıza ve teknolojiye göre farklılığı olan Ethernet kartları vardır.
          Ethernet kartlarının bilgisayara takılmadan önce bazı özelliklerinin ayarlanması gerekir. Birden fazla kablo tipini tiplerden birine ayarlanmalıdır. Teknolojinin gelişmesiyle birlikte kablosuz ağlar üretilmiştir masaüstü bigisayar kullanımı azaldığı için kabolusuz ağlar tercih edilmektedir. Bu kart verileri paketlere böler ve bahsettiğimiz çıkış kablolar sayesinde veriler iletilir.
          </p>
          <div class="btn-group-action">
              <button onclick="bringTopic('gucKaynagi')" class="btn btn-success">&lt; Önceki Birim</button>
              <button onclick="bringTopic('hardDisk')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/ic-donanimlar/internet.png" alt="agKarti" />
        </div>
      `
    },
    hardDisk: {
      iframeSrc: "https://www.youtube.com/embed/FAsY4_qZD3Q",
      title: "Hard Disk",
      htmlDoc: "index.html",
      innerHtml: `
          <div class="info-content">
          <h1>Hard Disk</h1>
          <p>
          Bilgisayarda yazmış olduğumuz, yüklemiş olduğumuz veya kullanmaya hazır olarak planladığımız tüm verileri <b>kalıcı</b> olarak saklamak için kullanılan birimdir. HDD içerisinde bulunan döner mil üzerine sıralanmış metal ve plastik alaşımlarından yapılma tabaka ile kaplı plakalardan oluşmaktadır. Verileri kaydederken yine içerisinde yer alan okuma ve yazma kafalarını kullanarak kaydetme işlemlerini sağlamaktadır.
          </p>

          <div class="btn-group-action">
              <button onclick="bringTopic('agKarti')" class="btn btn-success">&lt; Önceki Birim</button>
              <button onclick="bringTopic('ram')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/ic-donanimlar/hard-disk.png" alt="hardDisk" />
        </div>
      `
    },
    sesKarti: {
      iframeSrc: "https://www.youtube.com/embed/axUCecKSlEc",
      title: "Ses Kartı",
      htmlDoc: "index.html",
      innerHtml: `
          <div class="info-content">
          <h1>Ses Kartı</h1>
          <p>
          Klasik bir yorum olacak belki ama en doğru yorumlardan birisidir Ses kartları için: Bilgisayarda bulunan dijital ses verilerini alarak analog ses sinyallerine ve aynı zamanda analog ses sinyallerini de bilgisayarda işlenebilecek dijital sinyallere dönüştüren iç donanım birimidir. Ses kartları bu işlemleri çok hızlı gerçekleştirdiği için mili saniyeler içerisinde verileri dönüştürerek bizim duyabileceğimiz şekilde yansıtmaktadır.
          </p>
          <p>
          PCH Online olarak bilgisayar iç donanım birimleri hakkında detaylı ve en genel hali ile aktarmaya çalıştık. Aslına bakılırsa iç donanım birimleri kendi içerisinde de dallara ayrıldığı gibi, bahsetmiş olduğumuz 7 genel madde 15 - 20 maddeye kadar çıkabilmektedir. İlerleyen zamanlarda da detaylı olarak iç donanım birimlerini ele alacağız.
          </p>

          <div class="btn-group-action">
              <button onclick="bringTopic('anakart')" class="btn btn-success">&lt; Önceki Birim</button>
              <button onclick="bringTopic('fan')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/ic-donanimlar/seskarti.png" alt="sesKarti" />
        </div>
      `
    },
    fan: {
      iframeSrc: "https://www.youtube.com/embed/9QzPw89IxBE",
      title: "Fan",
      htmlDoc: "index.html",
      innerHtml: `
          <div class="info-content">
          <h1>Fan</h1>
          <p>
          Genellikle laptoplarda çok şikayet aldığımız ve oyun oynarken, performans gerektiren uygulamalar veya grafik programlarında <b><q>çok ısınıyor bu nalet</q></b> dediğimiz bilgisayarları soğutmaya yaran birime Fan denilmektedir. Fanlar bilgisayarların içerisine monte edilmiş, parçaları soğutmak için görev yapan iç donanım birimidir. Ancak kimi zaman bilgisayarlarımızdan çok fazla performans beklediğimiz anlar olabilir. 
          Bu anlarda fanlar yeteri düzeyde soğutma işlemleri sağlayamadıkları için ısınma sorunları ortaya çıkar. Bu durum da fan sistemlerinin iyi entegre edilmemesi veya yeterli düzeyde olmamasından kaynaklanmaktadır.
          </p>

          <div class="btn-group-action">
              <button onclick="bringTopic('sesKarti')" class="btn btn-success">&lt; Önceki Birim</button>
              <button class="disabled btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/ic-donanimlar/fan.png" alt="fan" />
        </div>
      `
    }
  },
  disDonanimlar: {
    monitor: {
      iframeSrc: "https://www.youtube.com/embed/tkeHRkSOUVM",
      title: "Monitör",
      htmlDoc: "dis-donanimi.html",
      innerHtml: `
          <div class="info-content">
          <h1>Monitör</h1>
          <p>
          Aslında bilgisayarların olmazsa olmazlarından biriside monitörlerdir. Bilgisayarlardan anlık olarak ekrana verileri yazarak bizim çeşitli grafik birimleri, sayılar ve modeller olarak görüntülediğimiz aygıt diyebiliriz. Monitörler olmaz ise kullanmış olduğumuz bilgisayar isterse trilyonlar etsin, bu sağlıklı bir vücuda sahip olup gözlerin görmemesi durumudur.
          Dış donanım birimleri arasında en önemli birimlerin başında gelmektedir. Kullanıcılar monitör seçimlerinde CRT, LCD ve Plazma monitörler olarak tercih etmektedirler.
          </p>
          <div class="btn-group-action">
              <button class="btn btn-success disabled">&lt; Önceki Birim</button>
              <button onclick="bringTopic('fare')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/dis-donanim/monitor.png" alt="monitor" />
        </div>
      `
    },
    fare: {
      iframeSrc: "https://www.youtube.com/embed/ndYuHvDtwA0",
      title: "Fare",
      htmlDoc: "dis-donanimi.html",
      innerHtml: `
          <div class="info-content">
          <h1>Fare</h1>
          <p>
         <b> İşaretçi </b> olarak da bilinir. Ekrandaki ok işaretini yani imleci <b> hareket </b>ettirmeye yarar.
          Üzerindeki sol tuş, sağ tuş ve tekerlek sayesinde bilgisayara komut vermemizi sağlar.
          Kablosuz veya kablolu olabilir.
           Günümüzde <b>optik ve lazer</b> fareler kullanılır.
          </p>
          <div class="btn-group-action">
              <button onclick="bringTopic('monitor')" class="btn btn-success">&lt; Önceki Birim</button>
              <button onclick="bringTopic('klavye')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/dis-donanim/fare.png" alt="fare" />
        </div>
      `
    },
    klavye: {
      iframeSrc: "https://www.youtube.com/embed/7Z1A3kVvs0Y",
      title: "Klavye",
      htmlDoc: "dis-donanimi.html",
      innerHtml: `
          <div class="info-content">
          <h1>Klavye</h1>
          <p>
          Bilgisayara bilgi girmemizi sağlayan daktilo benzeri donanımdır.
          Klavye sol üst köşedeki harfe göre adlandırılır. Örneğin: Sol üst köşede F harfi varsa “F klavye”, Q harfi varsa “Q klavye” olarak adlandırılır.
          </p>

          <div class="btn-group-action">
          <button onclick="bringTopic('fare')" class="btn btn-success">&lt; Önceki Birim</button>
          <button onclick="bringTopic('yazici')" class="btn btn-success">Sonraki Birim &gt;</button>
        </div>
        </div>
        <div class="info-image">
          <img src="imgs/dis-donanim/kalvye.png" alt="klavye" />
        </div>
      `
    },
    hariciDepolama: {
      iframeSrc: "https://www.youtube.com/embed/ijzFWffNO2s",
      title: "Harici Depolama",
      htmlDoc: "dis-donanimi.html",
      innerHtml: `
          <div class="info-content">
          <h1>Harici Depolama</h1>
          <p>
          Harici depolama aygıtları da bilgisayarımıza USB yolu ile bağlanabilen ekstra olarak taşınabilir niteliği bulunan dış donanım birimleri arasında yer almaktadırlar. Harici depolama aygıtları olarak günümüzde yaygın olarak kullanılan cihazlar aşağıdaki gibidir:
          </p>
          <ul>
            <li> USB ( Flaş ) Bellekler </li>
            <li> Harici Hard Diskler ve SSD Diskler </li>
            <li> Disket Sürücüler </li>
            <li> Blue-Ray </li>
            <li> Hafıza Kartları olarak sıralayabiliriz. </li>
          </ul>
          <div class="btn-group-action">
              <button onclick="bringTopic('yazici')" class="btn btn-success">&lt; Önceki Birim</button>
              <button onclick="bringTopic('kamera')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/dis-donanim/haricidisk.png" alt="hariciDepolama" />
        </div>
      `
    },
    yazici: {
      iframeSrc: "https://www.youtube.com/embed/S3Sxu01Eul0",
      title: "Yazıcı ve Tarayıcılar",
      htmlDoc: "dis-donanimi.html",
      innerHtml: `
          <div class="info-content">
          <h1>Yazıcı ve Tarayıcılar</h1>
          <p>
          Bilgisayarda yapmış olduğumuz işlemleri bazen kağıda dökmemiz veya kağıt üzerindekileri bilgisayara aktarmamız gerekebilir. Bunun için günümüzde en yaygın olarak kullanılan Yazıcılar ve Tarayıcılar dış donanım birimleri olarak nitelendirilmektedirler.
          Örnek vermek gerekirse bir kağıt üzerinde 10 bin kelime olduğunu düşünün <i> <b> ( nasıl bir kağıtsa) </b> </i>, bu kağıt üzerindeki yazıları bilgisayara oturup saatler harcayarak yazmak yerine Tarayıcıdan bilgisayarınıza taratarak verileri aktarabilirsiniz. Aynı şekilde bu işlem Yazıcılar için de geçerlidir.
          Günümüzde yaygın olarak kullanılan yazıcı çeşitleri ise aşağıdaki gibidir:
          </p>
          <ul>
            <li style="float: left; margin:0 20px;"> Nokta vuruşlu yazıcılar </li>
            <li style="float: left; margin:0 20px;"> Lazer Yazıcılar </li>
            <li style="float: left; margin:0 20px;"> Mürekkep Püskürtmeli Yazıcılar </li>
          </ul>
          <div class="btn-group-action">
              <button onclick="bringTopic('klavye')" class="btn btn-success">&lt; Önceki Birim</button>
              <button onclick="bringTopic('hariciDepolama')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/dis-donanim/yazici.png" alt="yazici" />
        </div>
      `
    },
    kamera: {
      iframeSrc: "https://www.youtube.com/embed/ryoKpCgtwQo",
      title: "Kamera",
      htmlDoc: "dis-donanimi.html",
      innerHtml: `
          <div class="info-content">
          <h1>Kamera</h1>
          <p>
          Çok fazla önemsenmeyen, olmasa da olabilecek dış donanım birimleri arasında yer alan webcamlar genellikle bilgisayara USB aracılığı ile bağlanarak görüntü aktarmaya yarayan donanım birimidir. Webcam'lar genel anlamda fiyat ve performans açısından farklılık gösterebilir. 
          Tıpkı bir cep telefonunun kamerası nasıl 8 MP yerine 16 MP olduğunda fiyatta 100 - 150 TL arası oynuyorsa, Webcam'lar için de aynı durum söz konusudur.
          </p>
          <div class="btn-group-action">
              <button onclick="bringTopic('hariciDepolama')" class="btn btn-success">&lt; Önceki Birim</button>
              <button onclick="bringTopic('hoparlor')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/dis-donanim/webcam.png" alt="kamera" />
        </div>
      `
    },
    hoparlor: {
      iframeSrc: "https://www.youtube.com/embed/lw-NOwxQ2jw",
      title: "Hoparlör",
      htmlDoc: "dis-donanimi.html",
      innerHtml: `
          <div class="info-content">
          <h1>Hoparlör</h1>
          <p>
          Yine önemli dış donanım birimleri arasında yer alan hoparlörler, bilgisayarların ses giriş ve çıkışlarının yönetimlerinden sorumludurlar.
          <q>Sessiz bir bilgisayar tıpkı sağır bir insana benzer - PCH Atasözü</q>nden yola çıkacak olursak bilgisayarımızda gerçekleştirmiş olduğumuz sesli komutların bize analog ve dijital olarak dönmesi gerekmektedir. Bu işlemleri A'dan Z'ye gerçekleştiren birime hoparlör denmektedir.
          </p>
          <div class="btn-group-action">
              <button onclick="bringTopic('kamera')" class="btn btn-success">&lt; Önceki Birim</button>
              <button onclick="bringTopic('kasa')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/dis-donanim/hoparlor.png" alt="hoparlor" />
        </div>
      `
    },
    kasa: {
      iframeSrc: "https://www.youtube.com/embed/8y-3R4RbEJw",
      title: "Kasa",
      htmlDoc: "dis-donanimi.html",
      innerHtml: `
          <div class="info-content">
          <h1>Kasa</h1>
          <p>
          Bilgisayarın iç donanımlarının bulunduğu kasa bu parçaların korunmasını ve bir arada durmasını sağlar.
          Kasayı, vücudumuzdaki iskelet olarak düşünebiliriz.
          </p>
          <div class="btn-group-action">
              <button onclick="bringTopic('hoparlor')" class="btn btn-success">&lt; Önceki Birim</button>
              <button onclick="bringTopic('kullaklik')" class="btn btn-success">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/dis-donanim/kasa.png" alt="kasa" />
        </div>
      `
    },
    kullaklik: {
      iframeSrc: "https://www.youtube.com/embed/7aLhJr0DT5g",
      title: "Mikrofon ve Kulaklık",
      htmlDoc: "dis-donanimi.html",
      innerHtml: `
          <div class="info-content">
          <h1>Mikrofon ve Kulaklık</h1>
          <p>
          Bilgisayarın önemli parçalarından birisi olan Mikrofon, bilgisayara dışarıdan <b>ses kaydetmeyi</b> sağlayan bilgisayar bileşenlerinden birisidir. Mikrofon kablo yardımıyla bilgisayar kasasına takılır. Mikrofonla ses kaydederken ses kaydedici bir program olması gerekiyor. Kaydettiğiniz bu sesleri de istediğiniz gibi kullanabilirsiniz.
          </p>
          <p>
          Kulaklık, bundan yıllar önce hayatımıza ilk defa orduların radyo sinyallerini kontrol etmesiyle giriş yapmış ve daha sonradan MP3 playerlar yardımıyla müzik dinlemek ve daha iyi bir ses kalitesi elde etmemiz için kullanılmaya başlanmış olan minik hoparlör ses sistemleridir.
          </p>
          <div class="btn-group-action">
              <button onclick="bringTopic('kasa')" class="btn btn-success">&lt; Önceki Birim</button>
              <button class="btn btn-success disabled">Sonraki Birim &gt;</button>
          </div>
        </div>
        <div class="info-image">
          <img src="imgs/dis-donanim/kullaklik.png" alt="kullaklik" />
        </div>
      `
    }
  }
}

var girisCikis = {
  giris: {
    iframe: 'https://www.youtube.com/embed/yxj4EdrUvic?start=2&end=122',
    innerHtml: `
    <div class="row">
    <div class="col-sm-4">
      <div class="image-block text-center">
        <img
          width="150"
          height="100"
          src="imgs/dis-donanim/kalvye.png"
          alt="klavye"
        />
      </div>
      <h4>Klavye</h4>
    </div>
    <div class="col-sm-4">
      <div class="image-block text-center">
        <img
          width="150"
          height="100"
          src="imgs/dis-donanim/fare.png"
          alt="fare"
        />
      </div>
      <h4>Fare</h4>
    </div>
    <div class="col-sm-4">
      <div class="image-block text-center">
        <img
          width="150"
          height="100"
          src="imgs/dis-donanim/webcam.png"
          alt="webcam"
        />
      </div>
      <h4>Webcam</h4>
    </div>
    <div class="col-sm-4">
      <div class="image-block text-center">
        <img
          width="150"
          height="100"
          src="imgs/dis-donanim/mikrofon.png"
          alt="mikrofon"
        />
      </div>
      <h4>Mikrofon</h4>
    </div>
    <div class="col-sm-4">
      <div class="image-block text-center">
        <img
          width="150"
          height="100"
          src="imgs/dis-donanim/tarayici.png"
          alt="tarayici"
        />
      </div>
      <h4>Tarayıcı</h4>
    </div>
    <div class="col-sm-4">
      <div class="image-block text-center">
        <img
          width="150"
          height="100"
          src="imgs/dis-donanim/optik-okuyucu.png"
          alt="optikOkuyucu"
        />
      </div>
      <h4>Optik Okuyucu</h4>
    </div>
  </div>
    `
  },
  islem: {
    iframe: 'https://www.youtube.com/embed/HXidmS2s1oE',
    innerHtml: `
       <div class="row">
              <div class="col-sm-6">
                <div class="image-block text-center">
                  <img
                    width="150"
                    height="100"
                    src="imgs/ic-donanimlar/ram.png"
                    alt="ram"
                  />
                </div>
                <h4>RAM</h4>
              </div>
              <div class="col-sm-6">
                <div class="image-block text-center">
                  <img
                    width="150"
                    height="100"
                    src="imgs/ic-donanimlar/islemci.png"
                    alt="islemci"
                  />
                </div>
                <h4>İşlemci</h4>
              </div>
              <div class="col-sm-6">
                <div class="image-block text-center">
                  <img
                    width="150"
                    height="100"
                    src="imgs/ic-donanimlar/ekran-karti.png"
                    alt="ekranKarti"
                  />
                </div>
                <h4>Ekran Kartı</h4>
              </div>
              <div class="col-sm-6">
                <div class="image-block text-center">
                  <img
                    width="150"
                    height="100"
                    src="imgs/ic-donanimlar/anakart.png"
                    alt="anakart"
                  />
                </div>
                <h4>Anakart</h4>
              </div>
            </div>
    `
  },
  cikis: {
    iframe: 'https://www.youtube.com/embed/yxj4EdrUvic?start=122',
    innerHtml: `
    <div class="row">
    <div class="col-sm-6">
      <div class="image-block text-center">
        <img
          width="150"
          height="100"
          src="imgs/dis-donanim/yazici.png"
          alt="yazici"
        />
      </div>
      <h4>Yazıcı</h4>
    </div>
    <div class="col-sm-6">
      <div class="image-block text-center">
        <img
          width="150"
          height="100"
          src="imgs/dis-donanim/monitor.png"
          alt="monitor"
        />
      </div>
      <h4>Monitör</h4>
    </div>
    <div class="col-sm-6">
      <div class="image-block text-center">
        <img
          width="150"
          height="100"
          src="imgs/dis-donanim/hoparlor.png"
          alt="hoparlor"
        />
      </div>
      <h4>Hoparlör</h4>
    </div>
    <div class="col-sm-6">
      <div class="image-block text-center">
        <img
          width="150"
          height="100"
          src="imgs/dis-donanim/cizici.png"
          alt="cizici"
        />
      </div>
      <h4>Çizici</h4>
    </div>
  </div>
    `
  }
}

var etkinlikler = {
  one: {
    iframe: 'https://learningapps.org/watch?v=pvw83p92519'
  },
  two: {
    iframe: 'https://learningapps.org/watch?v=pab2rrjb219'
  },
  three: {
    iframe: 'https://learningapps.org/watch?v=peek6p0xt19'
  },
  four: {
    iframe: 'https://learningapps.org/watch?v=pb39tojxt19'
  },
  five: {
    iframe: 'https://learningapps.org/watch?v=pxc06b1gk19'
  }
}