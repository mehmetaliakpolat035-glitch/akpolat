export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
  featured?: boolean;
}

export const blogCategories = [
  { id: 'genel-ariza', name: 'Genel Arıza Konuları', slug: 'genel-ariza' },
  { id: 'marka-ariza', name: 'Markaya Özel Arızalar', slug: 'marka-ariza' },
  { id: 'ariza-kodlari', name: 'Arıza Kodları', slug: 'ariza-kodlari' },
  { id: 'sss', name: 'Sıkça Sorulan Sorular', slug: 'sss' },
  { id: 'kendi-yap', name: 'Kendin Yap Çözümler', slug: 'kendi-yap' },
  { id: 'parca', name: 'Yedek Parça Bilgisi', slug: 'parca' },
  { id: 'bakim', name: 'Bakım ve Temizlik', slug: 'bakim' },
  { id: 'rehber', name: 'Kullanım Rehberi', slug: 'rehber' },
  { id: 'yerel', name: 'Yerel Hizmetler', slug: 'yerel' },
  { id: 'genel', name: 'Genel Bilgiler', slug: 'genel' },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Çamaşır Makinesi Su Almıyor - 12 Neden ve Kesin Çözümler',
    slug: 'camasir-makinesi-su-almiyor',
    excerpt: 'Çamaşır makinesi su almıyor sorunu en yaygın beyaz eşya arızalarından biridir. Su vanası, elektronik kart, su giriş valfi ve hortum tıkanıklığı gibi birçok nedenden kaynaklanabilir. Bu kapsamlı rehberde tüm nedenleri ve adım adım çözüm yöntemlerini bulacaksınız.',
    content: `<h2>Çamaşır Makinesi Neden Su Almaz?</h2>

<p>Çamaşır makinesinin su almaması, modern hayatın en can sıkıcı sorunlarından biridir. Bu problemi anlamak için önce makinenin su alma sisteminin nasıl çalıştığını bilmek gerekir. Çamaşır makinesi, program başladığında elektronik kartın komutuyla su giriş valfini açar ve suyu kazana doldurur. Bu süreçte birçok bileşen devreye girer.</p>

<h3>En Yaygın 12 Neden</h3>

<h4>1. Su Vanası Kapalı veya Arızalı</h4>
<p>En basit ama en sık görülen sorun su vanasının kapalı olmasıdır. Kontrol edin, vananın tamamen açık olduğundan emin olun. Vanayı saat yönünde çevirerek açabilirsiniz. Vanadan su geliyor ama makine almıyorsa, vana arızalı olabilir. Paslanmış veya kireçlenmiş vanalar su akışını kısıtlayabilir.</p>

<p><strong>Çözüm:</strong> Vanayı kontrol edin, gerekirse temizleyin veya değiştirin. Vananın giriş ve çıkış filtrelerini temizleyin.</p>

<h4>2. Su Giriş Hortumu Tıkalı veya Kıvrık</h4>
<p>Zamanla su giriş hortumunda kireç birikimi veya tortulanma olabilir. Özellikle sert su kullanan bölgelerde bu sorun daha yaygındır. Hortumun kıvrık olduğu durumlarda su akışı tamamen kesilebilir.</p>

<p><strong>Çözüm:</strong> Hortumun düz olduğundan emin olun. Hortumun makine girişindeki filtreyi çıkarıp temizleyin. Hortumun diğer ucundaki eleği de temizleyin.</p>

<h4>3. Su Giriş Valfi (Elektromanyetik Valf) Arızası</h4>
<p>Su giriş valfi, elektrik sinyaliyle açılıp kapanan bir mekanizmadır. Bobin arızası, valf mekanizmasının sıkışması veya elektrik bağlantısındaki sorunlar valfin çalışmamasına neden olur. Valfin omru genellikle 5-8 yıldır.</p>

<p><strong>Çözüm:</strong> Multimetre ile valf bobinini kontrol edin. Normalde 2-4 kOhm arası direnç göstermelidir. Arızalıysa valfi değiştirin. Teknik servis yardımı önerilir.</p>

<h4>4. Basınç Anahtarı (Presostat) Arızası</h4>
<p>Presostat, kazandaki su seviyesini algılar ve su doldurma işlemini kontrol eder. Arızalı presostat makinenin su almasını engelleyebilir veya sürekli su almasına neden olabilir.</p>

<p><strong>Çözüm:</strong> Presostatın hortum bağlantılarını kontrol edin. Hortum tıkalıysa temizleyin. Elektronik presostat arızalıysa değiştirilmesi gerekir.</p>

<h4>5. Su Basıncı Yetersizliği</h4>
<p>Çamaşır makineleri minimum 0,5 bar su basıncı gerektirir. Apartmanların üst katlarında, su kesintilerinin yaşandığı bölgelerde veya pompa kullanılmayan sistemlerde bu sorun yaşanabilir.</p>

<p><strong>Çözüm:</strong> Su basıncını ölçün. Yetersizse hidrofor veya basınç artırıcı pompa kullanın.</p>

<h4>6. Elektronik Kart Arızası</h4>
<p>Elektronik kart, su alma valfine komut gönderen beynidir. Güç dalgalanmaları, yaşlanma veya nem nedeniyle kart arızalanabilir. Bu durumda makine hiçbir fonksiyonu yerine getiremeyebilir.</p>

<p><strong>Çözüm:</strong> Teknik servis çağırın. Kart tamiri veya değişimi gerekir.</p>

<h4>7. Kapı Kilidi (Emniyet Kilidi) Arızası</h4>
<p>Kapı kilidi, makinenin kapısı tamamen kapanmadan çalışmasını engeller. Kilidin mikro anahtarı arızalıysa veya kilitleme mekanizması bozuksa, makine su alma işlemine başlamaz.</p>

<p><strong>Çözüm:</strong> Kapının tamamen kapandığından emin olun. Kilidi kontrol edin, gerekirse değiştirin.</p>

<h4>8. Su Giriş Filtresi Tıkalı</h4>
<p>Su giriş valfinin arkasındaki küçük filtre, kireç ve pas parçacıklarını tutar. Zamanla bu filtre tıkanabilir ve su akışını engelleyebilir.</p>

<p><strong>Çözüm:</strong> Makineyi kapatın, vanayı kapatın. Hortumu sökün ve filtreyi fırça yardımıyla temizleyin.</p>

<h4>9. Su Sebili (Aquastop) Hortumu Arızası</h4>
<p>Modern çamaşır makinelerinde su sızıntısını önlemek için akıllı hortumlar kullanılır. Bu hortumlar tıkanabilir veya mekanizması bozulabilir.</p>

<p><strong>Çözüm:</strong> Hortumu kontrol edin, gerekirse standart hortumla değiştirin veya yeni aquastop hortumu takın.</p>

<h4>10. Program Seçici Arızası</h4>
<p>Mekanik veya elektronik program seçici arızalıysa, makine hiçbir programa başlamayabilir veya sadece belirli fonksiyonları çalıştıramayabilir.</p>

<p><strong>Çözüm:</strong> Farklı programlar deneyin. Sorun devam ederse teknik servis çağırın.</p>

<h4>11. Motor Arızası</h4>
<p>Motor arızası genellikle makinenin hiç çalışmamasına neden olur, ancak bazı durumlarda su alma aşamasında da sorun yaratabilir. Karbon fırçalar bitmiş olabilir.</p>

<p><strong>Çözüm:</strong> Motor kontrolü ve tamiri için teknik servis gerekir.</p>

<h4>12. Kazan Taşması Koruması Aktif</h4>
<p>Kazanda suyun aşırı yükseldiğini algılayan sensörler, emniyet için su almayı engelleyebilir. Bu durum genellikle presostat arızasından kaynaklanır.</p>

<p><strong>Çözüm:</strong> Presostatı kontrol edin. Kazanın drenajını sağlayın.</p>

<h2>Kendiniz Çözebileceğiniz Adımlar</h2>

<h3>1. Adım: Temel Kontroller</h3>
<ul>
<li>Su vanasının açık olduğundan emin olun</li>
<li>Elektrik fişinin takılı olduğunu kontrol edin</li>
<li>Kapağın tam kapandığını kontrol edin</li>
<li>Program seçicinin doğru konumda olduğundan emin olun</li>
</ul>

<h3>2. Adım: Hortum Kontrolü</h3>
<ul>
<li>Su giriş hortumunu kontrol edin, kıvrık olmamalı</li>
<li>Hortum girişindeki filtreyi temizleyin</li>
<li>Hortumda çatlak veya delik olup olmadığını kontrol edin</li>
</ul>

<h3>3. Adım: Filtre Temizliği</h3>
<ul>
<li>Makineyi kapatın ve fişini çekin</li>
<li>Su vanasını kapatın</li>
<li>Su giriş hortumunu sökün</li>
<li>Valf arkasındaki filtreyi fırça ve sirke ile temizleyin</li>
<li>Takın ve test edin</li>
</ul>

<h2>Ne Zaman Servis Çağırmalısınız?</h2>

<p>Aşağıdaki durumlarda profesyonel teknik servis desteği almanız gerekir:</p>

<ul>
<li>Temel kontrolleri yaptınız ama sorun devam ediyorsa</li>
<li>Su giriş valfi değişimi gerekiyorsa</li>
<li>Elektronik kart veya presostat arızası şüphesi varsa</li>
<li>Motor veya pompa arızası durumunda</li>
<li>Garanti kapsamındaysanız (kendi tamiriniz garantiyi geçersiz kılabilir)</li>
</ul>

<h2>Çamaşır Makinesi Su Almama Sorunu Onarım Maliyetleri</h2>

<p>Ortalama onarım maliyetleri (2026):</p>

<ul>
<li>Su giriş valfi değişimi: 400-700 TL</li>
<li>Presostat değişimi: 350-600 TL</li>
<li>Su giriş hortumu değişimi: 150-300 TL</li>
<li>Kapı kilidi değişimi: 300-500 TL</li>
<li>Elektronik kart tamiri: 800-1500 TL</li>
<li>Motor tamiri/değişimi: 1000-2000 TL</li>
</ul>

<p><strong>Not:</strong> Fiyatlar marka ve modele göre değişiklik gösterebilir. Yerel servisler için arıza tespit ücreti genellikle 200-400 TL arasındadır.</p>

<h2>Sorunu Önlemek İçin Bakım İpuçları</h2>

<ul>
<li>Ayda bir su giriş filtresini temizleyin</li>
<li>3 ayda bir kireç çözücü kullanın</li>
<li>Hortumları düzenli olarak kontrol edin, kıvrılmaları önleyin</li>
<li>Su vanasını tam açık tutun, yarım açık vanalar valfi zorlar</li>
<li>Yılda bir kez profesyonel bakım yaptırın</li>
<li>Sert su kullanıyorsanız su yumuşatıcı cihaz düşünün</li>
</ul>

<h2>Sıkça Sorulan Sorular</h2>

<h4>Çamaşır makinesi az su alıyor, sebep ne olabilir?</h4>
<p>Kısmen tıkalı su giriş filtresi, yetersiz su basıncı veya arızalı presostat neden olabilir. Filtreyi temizleyin ve basıncı kontrol edin.</p>

<h4>Yeni makine neden su almıyor?</h4>
<p>Tesisat bağlantısı yanlış yapılmış olabilir, giriş hortumunda tıkanıklık olabilir veya ulaşım sırasında valf hasar görmüş olabilir. Teknik servisten kurulum kontrolü isteyin.</p>

<h4>Su alma süresi normalde ne kadar sürer?</h4>
<p>Normal şartlarda 1-3 dakika içinde gerekli su miktarı alınır. 5 dakikadan uzun sürüyorsa bir sorun vardır.</p>

<h4>Kendi valfimi değiştirebilir miyim?</h4>
<p>Evet, teknik bilginiz varsa valf değişimi yapabilirsiniz. Ancak yanlış bağlantı sızıntıya neden olabilir. Emin değilseniz servis çağırın.</p>

<h2>Sonuç</h2>

<p>Çamaşır makinesi su almama sorunu genellikle basit nedenlerden kaynaklanır. Su vanası, hortum ve filtre gibi temel kontrolleri yaparak çoğu sorunu kendiniz çözebilirsiniz. Ancak elektronik parça değişimi gerektiren durumlarda profesyonel destek almanız daha güvenli olacaktır. Düzenli bakım ile bu sorunların çoğunu önleyebilirsiniz.</p>
    `,
    category: 'genel-ariza',
    tags: ['çamaşır makinesi', 'su almıyor', 'arıza', 'çözüm', 'su giriş valfi', 'elektromanyetik valf', 'presostat'],
    createdAt: '2026-03-11',
    featured: true,
  },
  {
    id: '2',
    title: 'Bulaşık Makinesi Su Boşaltmıyor - 10 Adımda Kesin Çözüm',
    slug: 'bulasik-makinesi-su-bosaltmiyor',
    excerpt: 'Bulaşık makinesi su boşaltmıyor sorunu, kullanıcıların en sık karşılaştığı problemlerden biridir. Tahliye pompası, filtre tıkanıklığı, gider hortumu ve elektronik arızaları bu kapsamlı rehberde ele alıyoruz.',
    content: `
<h2>Bulaşık Makinesi Neden Su Boşaltmaz?</h2>

<p>Bulaşık makinesinin program sonunda suyu boşaltmaması, makinenin içinde kirli su birikmesine ve kötü koku oluşmasına neden olur. Bu sorun genellikle mekanik tıkanıklıklardan kaynaklanır ve çoğu zaman kullanıcı tarafından çözülebilir.</p>

<h3>Su Boşaltmama Nedenleri</h3>

<h4>1. Filtre Tıkanıklığı (%70 Vaka)</h4>
<p>Bulaşık makinesinin alt kısmındaki filtre, yemek artıklarını tutar. Düzenli temizlenmezse tamamen tıkanabilir ve su tahliyesini engelleyebilir. Filtrede biriken yağ ve gıda parçacıkları zamanla katılaşır.</p>

<p><strong>Çözüm:</strong> Filtreyi her 5-6 kullanımda bir çıkarın ve musluk altında fırça yardımıyla temizleyin. Sıcak su ve bulaşık deterjanı kullanın.</p>

<h4>2. Tahliye Pompası Arızası</h4>
<p>Tahliye pompası, kazan içindeki suyu dışarı atar. Pompa motoru arızalanabilir, pervanesi kırılabilir veya pompayı kilitleyen bir cisim sıkışabilir. Pompa arızası genellikle zırıltı sesiyle kendini belli eder.</p>

<p><strong>Çözüm:</strong> Makineyi kapatın, suyu elle tahliye edin (kaba çekin). Pompayı söküp içindeki cismi çıkarın. Motor arızalıysa pompa değişmelidir.</p>

<h4>3. Gider Hortumu Tıkalı veya Kıvrık</h4>
<p>Gider hortumu, makineden mutfak giderine kadar uzanır. Hortum içinde yağ ve gıda birikintileri olabilir veya mobilya arkasında kıvrık olabilir.</p>

<p><strong>Çözüm:</strong> Hortumun düz olduğundan emin olun. Hortumu söküp sirke ve karbonat karışımı ile temizleyin.</p>

<h4>4. Gider Borusu Tıkalı</h4>
<p>Mutfak gideri tıkalıysa, makine suyu dışarı atamaz. Gider yavaş akıyorsa veya hiç akmıyorsa sorun makinede değil, tesisatta olabilir.</p>

<p><strong>Çözüm:</strong> Mutfak giderini kontrol edin. Gider açıcı kullanın veya tesisatçı çağırın.</p>

<h4>5. Basınç Anahtarı (Presostat) Arızası</h4>
<p>Presostat, kazandaki su seviyesini ölçer. Arızalı presostat, makineye "hala su var" veya "su yok" şeklinde yanlış sinyal gönderebilir.</p>

<p><strong>Çözüm:</strong> Presostat hortumlarını kontrol edin, tıkalıysa temizleyin. Arıza devam ederse değiştirilmesi gerekir.</p>

<h4>6. Elektronik Kart Arızası</h4>
<p>Kart, pompayı çalıştırma sinyalini gönderir. Kart arızalıysa pompa hiç çalışmaz veya yanlış zamanda çalışır.</p>

<p><strong>Çözüm:</strong> Elektronik kart tamiri veya değişimi için teknik servis gerekir.</p>

<h4>7. Kapak Kilidi Arızası</h4>
<p>Kapak tam kapanmazsa veya kilit arızalıysa, emniyet nedeniyle tahliye yapılmayabilir.</p>

<p><strong>Çözüm:</strong> Kapağı kontrol edin, kilidi değiştirin.</p>

<h4>8. Gıda Parçacığı Pompada Sıkışmış</h4>
<p>Kırık cam, kemik, sert gıda parçacıkları pompaya kaçabilir ve pervaneyi kilitleyebilir.</p>

<p><strong>Çözüm:</strong> Pompayı söküp içindeki cismi çıkarın.</p>

<h4>9. Aquastop Aktif</h4>
<p>Bazı modellerde su sızıntısı algılandığında aquastop sistemi tüm fonksiyonları kilitler.</p>

<p><strong>Çözüm:</strong> Zeminde su olup olmadığını kontrol edin. Aquastop hortumunu kontrol edin.</p>

<h4>10. Program Seçici Arızası</h4>
<p>Program bozukluğu, tahliye aşamasına geçişi engelleyebilir.</p>

<p><strong>Çözüm:</strong> Makineyi resetleyin (fişten çekip takın). Farklı program deneyin.</p>

<h2>Adım Adım Çözüm Rehberi</h2>

<h3>Adım 1: Güvenlik Önlemleri</h3>
<ul>
<li>Makineyi kapatın</li>
<li>Fişini çekin</li>
<li>Kirli suyu havlu ile çekin (zemine dökülmemesi için)</li>
</ul>

<h3>Adım 2: Filtre Temizliği</h3>
<ul>
<li>Alt rafı çıkarın</li>
<li>Filtre kapağını sola çevirerek açın</li>
<li>Filtreyi çıkarın ve fırçayla temizleyin</li>
<li>Metal eleği de temizleyin</li>
<li>Takın ve deneyin</li>
</ul>

<h3>Adım 3: Pompa Kontrolü</h3>
<ul>
<li>Filtre kapağında küçük bir kapak daha olabilir (pompa girişi)</li>
<li>Bu kapağı açın ve içeriyi kontrol edin</li>
<li>Cam, kemik, vb. cisim varsa cımbızla çıkarın</li>
<li>Pervanenin döndüğünü kontrol edin</li>
</ul>

<h3>Adım 4: Gider Hortumu Kontrolü</h3>
<ul>
<li>Hortumun kıvrık olmadığını kontrol edin</li>
<li>Yüksekliği 60-100 cm arasında olmalı (sifon bağlantısı)</li>
<li>Hortum içini tel veya fırça ile temizleyin</li>
</ul>

<h2>Ne Zaman Teknik Servis Çağırmalısınız?</h2>

<ul>
<li>Filtre ve pompa temizliğine rağmen sorun devam ediyorsa</li>
<li>Pompa motoru arızalıysa (ses geliyor ama su atmıyorsa)</li>
<li>Elektronik kart arızası şüphesi varsa</li>
<li>Presostat değişimi gerekiyorsa</li>
<li>Garanti kapsamındaysanız</li>
</ul>

<h2>Onarım Maliyetleri (2026)</h2>

<ul>
<li>Tahliye pompası değişimi: 400-800 TL</li>
<li>Gider hortumu değişimi: 200-400 TL</li>
<li>Presostat değişimi: 350-600 TL</li>
<li>Elektronik kart tamiri: 800-1500 TL</li>
<li>Kapı kilidi değişimi: 300-500 TL</li>
</ul>

<h2>Önleme ve Bakım İpuçları</h2>

<ul>
<li>Filtreyi haftada bir temizleyin</li>
<li>Tabaktaki büyük yemek artıklarını önceden kazıyın</li>
<li>Cam ve porselen eşyaları dikkatli yerleştirin</li>
<li>Ayda bir boş makineye 1 su bardağı sirke koyup çalıştırın (kireç için)</li>
<li>Deterjanı önerilen miktarda kullanın (fazla köpük yapar)</li>
<li>Tuz ve parlatıcıyı düzenli doldurun</li>
</ul>

<h2>SSS</h2>

<h4>Bulaşık makinesi suyu yarım boşaltıyor, neden?</h4>
<p>Pompa kısmen arızalı veya içinde cisim sıkışmış olabilir. Pompayı kontrol edin.</p>

<h4>Program bitiyor ama hala su var, normal mi?</h4>
<p>Hayır, normal değil. Tüm programlar sonunda su tamamen tahliye edilir. Arıza vardır.</p>

<h4>Tahliye hortumu ne kadar uzun olmalı?</h4>
<p>Maksimum 2-3 metre olmalı. Uzun hortum suyun tam boşaltılmasını engeller.</p>
    `,
    category: 'genel-ariza',
    tags: ['bulaşık makinesi', 'su boşaltmıyor', 'tahliye pompası', 'filtre', 'gider hortumu'],
    createdAt: '2026-03-10',
    featured: true,
  },
  {
    id: '3',
    title: 'Buzdolabı Soğutmuyor - 15 Neden ve Kesin Çözümler',
    slug: 'buzdolabi-sogutmuyor',
    excerpt: 'Buzdolabı soğutmuyor sorunu gıdaların bozulmasına ve ciddi ekonomik kayba neden olur. Kompresör, gaz kaçağı, termostat, buzlanma ve elektronik arızaların detaylı çözümlerini bu rehberde bulabilirsiniz.',
    content: `
<h2>Buzdolabı Neden Soğutmaz?</h2>

<p>Buzdolabı soğutmama sorunu, beyaz eşya arızalarının en maliyetlilerinden biridir. Gıdaların bozulması, ilaçların çöpe gitmesi ve ani masraflar yaşanabilir. Soğutmama sorununun birçok farklı nedeni olabilir; bazıları basit çözülebilirken bazıları profesyonel müdahale gerektirir.</p>

<h2>Buzdolabı Soğutmama Nedenleri ve Çözümleri</h2>

<h3>Elektrik ve Temel Kontroller</h3>

<h4>1. Fiş ve Priz Kontrolü</h4>
<p>Bazen en basit şeyleri atlarız. Buzdolabının fişi tam takılı olmayabilir, prizde arıza olabilir veya sigorta atmış olabilir. Işık yanıyor olması her zaman elektrik olduğu anlamına gelmez; bazen düşük voltaj sorunu olabilir.</p>

<p><strong>Çözüm:</strong> Farklı bir prizde deneyin. Prizden başka bir cihaz çalıştırarak test edin. Fişi çıkarıp tekrar takın.</p>

<h4>2. Kablo Hasarı</h4>
<p>Buzdolabı arkasındaki güç kablosu, zamanla hasar görebilir, fareler tarafından ısırılabilir veya preslenebilir.</p>

<p><strong>Çözüm:>Kabloda yıpranma veya hasar varsa değiştirin.</p>

<h3>Soğutma Sistemi Arızaları</h3>

<h4>3. Termostat Arızası (En Yaygın)</h4>
<p>Termostat, buzdolabının sıcaklığını algılayan ve kompresörü çalıştıran bileşendir. Arızalı termostat şu belirtileri gösterir: Kompresör hiç çalışmaz, sürekli çalışır veya düzensiz çalışır.</p>

<p><strong>Belirtiler:</strong></p>
<ul>
<li>Buzdolabı hiç soğutmuyor</li>
<li>Sürekli çalışıyor ama soğutmuyor</li>
<li>İçi donuyor (aşırı soğutma)</li>
</ul>

<p><strong>Çözüm:</strong> Termostatın ayar düğmesini çevirerek test edin. Klik sesi gelmiyorsa arızalıdır. Değiştirilmesi gerekir.</p>

<h4>4. Kompresör Arızası (En Pahalı)</h4>
<p>Kompresör, buzdolabının kalbidir. Gazı sıkıştırarak soğutma döngüsünü sağlar. Arızalı kompresör genellikle değişmelidir ve maliyetlidir.</p>

<p><strong>Belirtiler:</strong></p>
<ul>
<li>Kompresör hiç çalışmıyor</li>
<li>Kompresör sıcak ve titreşimli (normalde hafif ılık olur)</li>
<li>Tıkırtı sesi geliyor ama çalışmıyor</li>
<li>Sık aralıklarla çalışıp duruyor</li>
</ul>

<p><strong>Çözüm:</strong> Kompresör değişimi maliyetlidir (1500-4000 TL). 10+ yaşında buzdolabı varsa yenisini almayı düşünün.</p>

<h4>5. Gaz Kaçağı (En Ciddi)</h4>
<p>Soğutucu gaz (R600a, R134a vb.) kaçağı, buzdolabının yavaş yavaş soğutma gücünü kaybetmesine neden olur. Gaz kaçağı varsa buzdolabı asla tam olarak soğutmaz.</p>

<p><strong>Belirtiler:</strong></p>
<ul>
<li>Yavaş yavaş soğutma azalıyor (birkaç gün/hafta içinde)</li>
<li>Kompresör sürekli çalışıyor</li>
<li>Arka tarafta yağ lekeleri (gaz ve yağ birlikte kaçar)</li>
<li>Dondurucu çalışıyor ama alt raflar soğumuyor</li>
</ul>

<p><strong>Çözüm:</strong> Gaz kaçağı bulunup tamir edilmeli, sonra gaz doldurulmalıdır. Maliyet 800-2000 TL arasındadır.</p>

<h4>6. Kondenser (Yapısak) Fan Arızası</h4>
<p>Kondenser fanı, kompresörün arkasındaki ısıyı dağıtır. Fan çalışmazsa kompresör aşırı ısınır ve emniyet termiği atarak durur.</p>

<p><strong>Belirtiler:</strong> Kompresör sıcak, fan dönmüyor, kısa süre çalışıp duruyor.</p>

<p><strong>Çözüm:</strong> Fan motoru veya fan kartı değişmelidir. Maliyet 300-800 TL.</p>

<h4>7. Kondenser Tıkanıklığı</h4>
<p>Kondenser (arkadaki siyah boru serpantini) toz ve kirden tıkanabilir. Bu, ısı yayılımını engeller ve soğutmamaya neden olur.</p>

<p><strong>Çözüm:</strong> Buzdolabını çekin, arkayı elektrikli süpürge veya fırça ile temizleyin. Yılda bir kez yapılmalı.</p>

<h4>8. Buharlaştırıcı Buzlanması (No-Frost)</h4>
<p>No-frost buzdolaplarında buzlanma sensörü arızalanırsa veya defrost sistemi bozulursa, buharlaştırıcı buzlanır ve hava dolaşımı engellenir.</p>

<p><strong>Belirtiler:</strong> Arka duvarda buzlanma var, fan sesi geliyor ama soğutma yok.</p>

<p><strong>Çözüm:</strong> Buzdolabını kapatıp 24 saat açık bırakın (buzlar erisin). Sorun devam ederse sensör veya defrost rezistansı değişmelidir.</p>

<h3>Hava Dolaşımı Sorunları</h3>

<h4>9. Kapı Contası Bozukluğu</h4>
<p>Elastik conta çatladıysa veya esnememişse, soğuk hava dışarı kaçar. Bu özellikle yaz aylarında sorun yaratır.</p>

<p><strong>Test:</strong> Kapıya para sıkıştırın, kapatın, çekin. Para kolayca çıkıyorsa conta bozuktur.</p>

<p><strong>Çözüm:</strong> Conta değişimi 400-1000 TL arasındadır.</p>

<h4>10. İç Fan Arızası</h4>
<p>Buzdolabı içindeki fan, soğuk havayı dağıtır. Fan çalışmazsa, kompresör soğutsa bile hava dolaşmaz.</p>

<p><strong>Belirtiler:</strong> Fan sesi yok, buzdolabı içi ılık ama dondurucu soğuk.</p>

<p><strong>Çözüm:</strong> Fan motoru değişimi 300-700 TL.</p>

<h4>11. Gıda Yerleşimi Hatalı</h4>
<p>Raf üzerindeki gıdalar fanı kapatıyor olabilir. Bu basit bir kullanıcı hatasıdır.</p>

<p><strong>Çözüm:</strong> Fan girişinin önünü açın, gıdaları düzenli yerleştirin.</p>

<h3>Elektronik ve Sensör Arızaları</h3>

<h4>12. Kart Arızası</h4>
<p>Modern buzdolaplarında elektronik kart bulunur. Kart arızalandığında kompresör kontrolü yapılamaz.</p>

<p><strong>Çözüm:</strong> Kart tamiri veya değişimi gerekir. Maliyet 800-2000 TL.</p>

<h4>13. Sıcaklık Sensörü Arızası</h4>
<p>NTC sensörleri yanlış sıcaklık bilgisi gönderirse, kart yanlış kararlar alır.</p>

<p><strong>Çözüm:</strong> Sensör değişimi 200-500 TL.</p>

<h3>Ortam ve Kullanım Hataları</h3>

<h4>14. Çevre Sıcaklığı Çok Yüksek</h4>
<p>Buzdolapları 16-32°C arası ortam sıcaklığı için tasarlanmıştır. Yazın balkonda veya sıcak mutfaklarda verim düşer.</p>

<p><strong>Çözüm:</strong> Oda sıcaklığını düşürün veya buzdolabını serin bir yere taşıyın.</p>

<h4>15. Yeni Cihazın Yerleşim Süresi</h4>
<p>Yeni alınan veya taşınan buzdolabı, yerleşim süresi nedeniyle ilk 4-6 saat soğutmaya başlamayabilir.</p>

<p><strong>Çözüm:</strong> 6 saat bekleyin. Hala soğutmuyorsa arıza vardır.</p>

<h2>Evde Yapabileceğiniz Kontroller</h2>

<h3>1. Resetleme</h3>
<ul>
<li>Fişi 5 dakika çekin</li>
<li>Takın ve 2 saat bekleyin</li>
</ul>

<h3>2. Kondenser Temizliği</h3>
<ul>
<li>Buzdolabını çekin</li>
<li>Arka taraftaki siyah boru serpantisini fırça/süpürge ile temizleyin</li>
</ul>

<h3>3. Kapı Contası Testi</h3>
<ul>
<li>Kağıt/kâğıt para testi yapın</li>
<li>Contayı ılık su ve sabunla temizleyin</li>
</ul>

<h3>4. İç Düzen Kontrolü</h3>
<ul>
<li>Fan girişinin açık olduğundan emin olun</li>
<li>Raf üzerindeki gıdaları düzenleyin</li>
</ul>

<h2>Onarım Maliyetleri Özeti (2026)</h2>

<table border="1" cellpadding="5">
<tr><th>Arıza</th><th>Tahmini Maliyet</th><th>Karar</th></tr>
<tr><td>Termostat Değişimi</td><td>300-600 TL</td><td>Onarım mantıklı</td></tr>
<tr><td>Gaz Kaçağı Tamir + Gaz</td><td>800-2000 TL</td><td>5+ yaş ise yenisini alın</td></tr>
<tr><td>Kompresör Değişimi</td><td>1500-4000 TL</td><td>8+ yaş ise yenisini alın</td></tr>
<tr><td>Fan Motoru Değişimi</td><td>300-800 TL</td><td>Onarım mantıklı</td></tr>
<tr><td>Kart Tamiri</td><td>800-2000 TL</td><td>Premium model ise onarın</td></tr>
<tr><td>Kapı Contası</td><td>400-1000 TL</td><td>Onarım mantıklı</td></tr>
</table>

<h2>Önemli Tavsiyeler</h2>

<ul>
<li>Buzdolabı 10+ yaşında ve kompresör/gaz kaçağı varsa YENİSİNİ ALIN. Onarım masrafı yeni buzdolabı fiyatına yaklaşır.</li>
<li>Garanti kapsamındaysa kesinlikle yetkili servisi arayın.</li>
<li>Yılda bir kondenser temizliği yapın.</li>
<li>Kapıyı uzun süre açık bırakmayın.</li>
<li>Sıcak gıdaları soğutmadan koymayın.</li>
</ul>

<h2>Sonuç</h2>

<p>Buzdolabı soğutmama sorunu basit bir kontrolle (fiş, kontak) çözülebileceği gibi, ciddi bir arıza (kompresör, gaz kaçağı) da olabilir. Kondenser temizliği ve kontak kontrolü gibi basit işlemleri kendiniz yapabilirsiniz. Ancak gaz ve kompresör işlemleri için profesyonel yardım almanız hem güvenlik hem de ekonomik açıdan önemlidir.</p>
    `,
    category: 'genel-ariza',
    tags: ['buzdolabı', 'soğutmuyor', 'kompresör', 'gaz kaçağı', 'termostat', 'arıza'],
    createdAt: '2026-03-09',
    featured: true,
  },
  {
    id: '4',
    title: 'Çamaşır Makinesi Bakımı: Ayda Bir Yapmanız Gereken 10 İşlem',
    slug: 'camasir-makinesi-bakimi',
    excerpt: 'Düzenli bakım ile çamaşır makinenizin ömrünü 5 yıl uzatabilirsiniz. Kireç temizliği, filtre kontrolü, lastik conta bakımı ve diğer önemli bakım adımlarını öğrenin.',
    content: `
<h2>Neden Çamaşır Makinesi Bakımı Önemli?</h2>

<p>Düzenli bakım yapılan bir çamaşır makinesi ortalama 12-15 yıl çalışırken, bakımsız makineler 7-8 yılda arızalanır. Ayrıca düzenli bakım, elektrik ve su faturalarınızda %20-30 tasarruf sağlar. Kireçlenme, küf ve kötü kokuları önler.</p>

<h2>Ayda Bir Yapılması Gerekenler</h2>

<h3>1. Kazan Temizliği (Drum Clean)</h3>
<p><strong>Neden:</strong> Kazan iç yüzeyinde deterjan kalıntıları, kireç ve küf birikir.</p>

<p><strong>Nasıl:</strong></p>
<ul>
<li>Makineyi boş çalıştırın</li>
<li>90°C program seçin</li>
<li>2 su bardağı beyaz sirke veya çamaşır suyu ekleyin</li>
<li>Program bitince kapağı açık bırakın</li>
</ul>

<h3>2. Filtre Temizliği</h3>
<p><strong>Neden:</strong> Filtre tıkanırsa makine su alamaz veya boşaltamaz. Para, toka, saç tokası gibi cisimler birikebilir.</p>

<p><strong>Nasıl:</strong></p>
<ul>
<li>Makineyi kapatın</li>
<li>Ön alt kısımdaki filtre kapağını açın</li>
<li>Filtreyi saat yönünde çevirerek çıkarın</li>
<li>Musluk altında fırça ile temizleyin</li>
<li>Takın ve kapağı kapatın</li>
</ul>

<h3>3. Su Giriş Filtresi Temizliği</h3>
<p><strong>Neden:</strong> Kireç ve pas tıkanıklığı su akışını engeller.</p>

<p><strong>Nasıl:</strong></p>
<ul>
<li>Su vanasını kapatın</li>
<li>Giriş hortumunu sökün</li>
<li>Valf içindeki plastik eleği çıkarıp temizleyin</li>
<li>Sirke ile bekletip fırçalayın</li>
</ul>

<h3>4. Lastik Conta Temizliği</h3>
<p><strong>Neden:</strong> Conta aralarında küf ve kirlilik birikir, kokular oluşur.</p>

<p><strong>Nasıl:</strong></p>
<ul>
<li>Contayı nazikçe geriye doğru çekin</li>
<li>Islak bezle silin</li>
<li>Karbonat ve su karışımı ile temizleyin</li>
<li>Tamamen kuruyana kadar kapağı açık bırakın</li>
</ul>

<h3>5. Deterjan Çekmecesi Temizliği</h3>
<p><strong>Neden:</strong> Deterjan kalıntıları birikir, küflenir ve kokar.</p>

<p><strong>Nasıl:</strong> Çekmeceyi çıkarıp musluk altında fırça ile temizleyin. Kurutup takın.</p>

<h3>6. Makineyi Açık Bırakma</h3>
<p><strong>Neden:</strong> Hava sirkülasyonu küf ve kokuyu önler.</p>

<p><strong>Nasıl:</strong> Her yıkamadan sonra kapağı ve deterjan çekmecesini 2-3 saat açık bırakın.</p>

<h3>7. Kireç Çözücü Kullanımı</h3>
<p><strong>Neden:</strong> Özellikle sert su bölgelerinde kireç birikimi makineyi yıpratır.</p>

<p><strong>Nasıl:</strong> Ayda bir kireç çözücü ürün kullanın veya 2 su bardağı sirke ile 60°C boş program yapın.</p>

<h3>8. Yüksek Sıcaklıkta Yıkama</h3>
<p><strong>Neden:</strong> Sadece 30-40°C yıkama küf oluşumuna neden olur.</p>

<p><strong>Nasıl:</strong> Ayda en az bir kez 60-90°C program kullanın.</p>

<h3>9. Hortum Kontrolü</h3>
<p><strong>Neden:</strong> Hortumlar çatlayabilir, kıvrılabilir.</p>

<p><strong>Nasıl:</strong> Su giriş ve tahliye hortumlarını kontrol edin. Kıvrıkları düzeltin, çatlak varsa değiştirin.</p>

<h3>10. Denge Ayarı Kontrolü</h3>
<p><strong>Neden:</strong> Dengesiz makine aşırı titreşim yapar, parçaları yıpratır.</p>

<p><strong>Nasıl:</strong> Makineyi dengeleyin, ayaklarının sert zeminle temas ettiğinden emin olun.</p>

<h2>Yılda Bir Yapılması Gerekenler</h2>

<ul>
<li><strong>Profesyonel bakım:</strong> Yetkili servisten genel kontrol ve bakım yaptırın</li>
<li><strong>Tahliye pompası kontrolü:</strong> Pompayı söküp içindeki cisimleri temizleyin</li>
<li><strong>Kapı kilidi yağlama:</strong> Mekanik kilidi hafifçe yağlayın</li>
<li><strong>Elektrik kablosu kontrolü:</strong> Kablo ve fişte yıpranma olup olmadığını kontrol edin</li>
</ul>

<h2>Yapılmaması Gerekenler</h2>

<ul>
<li>Çok fazla deterjan kullanmayın (köpük yapar, pompayı zorlar)</li>
<li>Sıcak çamaşırları koymayın (lastik contayı yıpratır)</li>
<li>Fazla yüklemeyin (kapağı zorlar, motoru yıpratır)</li>
<li>Metal tokaları, fermuarları açık bırakmayın (kazanı çizip paslanmaya neden olur)</li>
<li>Kağıt mendil, sakız vb. cebinizde unutmayın</li>
</ul>

<h2>Bakım Malzemeleri</h2>

<ul>
<li>Beyaz sirke (kireç ve küf için)</li>
<li>Karbonat (koku ve leke için)</li>
<li>Eski diş fırçası (filtre ve detay temizlik için)</li>
<li>Mikrofiber bez</li>
<li>Ticari kireç çözücü (ayda bir)</li>
</ul>

<h2>Sonuç</h2>

<p>Düzenli bakım yaparak çamaşır makinenizin ömrünü uzatabilir, arızaları önleyebilir ve daha hijyenik yıkama yapabilirsiniz. Ayda bir saatinizi ayırarak bu 10 adımı uygulayın, makineniz size uzun yıllar sorunsuz hizmet edecektir.</p>
    `,
    category: 'bakim',
    tags: ['çamaşır makinesi', 'bakım', 'temizlik', 'kireç çözme', 'küf önleme'],
    createdAt: '2026-03-05',
    featured: true,
  },
  {
    id: '5',
    title: 'Kombi E01, E02, E03 Arıza Kodları ve Çözümleri',
    slug: 'kombi-ariza-kodlari',
    excerpt: 'Kombinizde E01 ateşleme, E02 aşırı ısınma, E03 baca hatası gibi kodlar mı görüyorsunuz? Tüm arıza kodlarının anlamlarını ve çözüm adımlarını öğrenin.',
    content: `
<h2>Kombi Arıza Kodları Rehberi</h2>

<p>Modern kombiler arıza durumlarında ekranda hata kodları gösterir. Bu kodlar, sorunun ne olduğunu anlamanıza ve bazı durumlarda kendiniz çözmenize yardımcı olur. Ancak gaz ve elektronik sistemler riskli olduğundan, karmaşık arızalarda mutlaka yetkili servis çağırın.</p>

<h2>En Yaygın Arıza Kodları</h2>

<h3>E01 - Ateşleme Arızası</h3>
<p><strong>Anlamı:</strong> Kombi gazı yakamıyor. Ateşleme trafosu, elektrot veya gaz valfi sorunu.</p>

<p><strong>Nedenleri:</strong></p>
<ul>
<li>Gaz vanası kapalı</li>
<li>Gaz basıncı düşük</li>
<li>Ateşleme elektrodu kirli/konum değişmiş</li>
<li>Ateşleme trafosu arızalı</li>
<li>Kart arızası</li>
</ul>

<p><strong>Çözüm:</strong></p>
<ul>
<li>Gaz vanasını kontrol edin</li>
<li>Kombiyi resetleyin (fişten çekip takın)</li>
<li>Reset sonrası tekrar deneyin</li>
<li>Devam ederse servis çağırın</li>
</ul>

<h3>E02 - Aşırı Isınma (Güvenlik Termostatı)</h3>
<p><strong>Anlamı:</strong> Su sıcaklığı 95-100°C'yi geçti, güvenlik termostatı devreye girdi.</p>

<p><strong>Nedenleri:</strong></p>
<ul>
<li>Sirkülasyon pompası çalışmıyor</li>
<li>Sistemde hava var</li>
<li>Tıkalı filtre/radyatör</li>
<li>Genleşme tankı basıncı düşük</li>
<li>Üç yollu vana arızalı</li>
</ul>

<p><strong>Çözüm:</strong></p>
<ul>
<li>Kombiyi soğuması için 30 dk kapalı bırakın</li>
<li>Reset atıp tekrar deneyin</li>
<li>Pompanın çalıştığını dinleyin (hafif vızıltı)</li>
<li>Sistemi havadan arındırın</li>
<li>Devam ederse servis gerekir</li>
</ul>

<h3>E03 - Baca/Hava Basıncı Hatası</h3>
<p><strong>Anlamı:</strong> Hava akışı yetersiz veya baca tıkalı.</p>

<p><strong>Nedenleri:</strong></p>
<ul>
<li>Baca tıkalı</li>
<li>Rüzgar etkisi</li>
<li>Fan arızalı</li>
<li>Hava basınç şalteri arızalı</li>
</ul>

<p><strong>Çözüm:</strong></p>
<ul>
<li>Rüzgar durunca tekrar deneyin</li>
<li>Bacayı kontrol edin</li>
<li>Reset atın</li>
<li>Devam ederse servis çağırın</li>
</ul>

<h3>E10 - Düşük Su Basıncı</h3>
<p><strong>Anlamı:</strong> Sistem suyu azalmış (genellikle 0.5-0.8 bar altı).</p>

<p><strong>Çözüm:</strong> Musluk altındaki doldurma musluğunu açın, bar göstergesi 1.0-1.5 arası gelince kapatın.</p>

<h3>E15 - Yüksek Su Basıncı</h3>
<p><strong>Anlamı:</strong> Basınç 3 bar üzerine çıkmış.</p>

<p><strong>Çözüm:</strong> Radyatörlerin hava purjöründen biraz su salın veya tahliye musluğundan su bırakın.</p>

<h2>Markaya Göre Kod Farklılıkları</h2>

<h4>Vaillant Kombi Kodları</h4>
<ul>
<li>F.0 - Ateşleme arızası</li>
<li>F.1 - Aşırı ısınma</li>
<li>F.4 - Baca hatası</li>
<li>F.22 - Düşük basınç</li>
<li>F.28 - Gaz valfi hatası</li>
</ul>

<h4>Buderus Kombi Kodları</h4>
<ul>
<li>6A - Ateşleme arızası</li>
<li>6A (171) - Ateşleme başarısız</li>
<li>A9 (101) - Aşırı ısınma</li>
<li>5U (117) - Baca hatası</li>
</ul>

<h4>Bosch Kombi Kodları</h4>
<ul>
<li>EA - Ateşleme arızası</li>
<li>CE - Aşırı ısınma</li>
<li>C6 - Fan hatası/baca</li>
<li>C7 - Düşük basınç</li>
</ul>

<h4>E.C.A Kombi Kodları</h4>
<ul>
<li>E01 - Ateşleme</li>
<li>E02 - Aşırı ısınma</li>
<li>E03 - Baca</li>
<li>E10 - Düşük basınç</li>
</ul>

<h2>Reset Nasıl Yapılır?</h2>

<h3>Yöntem 1 - Fişten Çekme</h3>
<ul>
<li>Kombiyi kapatın</li>
<li>Fişi 1 dakika çekin</li>
<li>Takın ve çalıştırın</li>
</ul>

<h3>Yöntem 2 - Reset Tuşu</h3>
<ul>
<li>Bazı modellerde "Reset" tuşu vardır</li>
<li>5 saniye basılı tutun</li>
<li>Kod temizlenir</li>
</ul>

<h2>Ne Zaman Servis Çağrılır?</h2>

<p>Aşağıdaki durumlarda kendiniz müdahale etmeyin:</p>

<ul>
<li>Reset sonrası kod tekrar geliyorsa</li>
<li>Gaz kokusu alırsanız (acil gaz servisi: 187)</li>
<li>Suyu doldurmanıza rağmen basınç düşüyorsa (sızıntı var)</li>
<li>Birkaç farklı kod birden görüyorsanız</li>
<li>Elektronik veya gaz valfi sorunu şüphesi varsa</li>
</ul>

<h2>Bakım İle Arızaları Önleme</h2>

<ul>
<li>Yılda bir yetkili servis bakımı yaptırın</li>
<li>Filtreleri temizleyin</li>
<li>Suyu kontrol edin, düşükse doldurun</li>
<li>Radyatörleri havadan arındırın</li>
<li>Bacanın önünün açık olduğundan emin olun</li>
</ul>

<h2>Onarım Maliyetleri (2026)</h2>

<ul>
<li>Ateşleme trafosu: 400-800 TL</li>
<li>Ateşleme elektrodu: 200-400 TL</li>
<li>Pompa değişimi: 800-1500 TL</li>
<li>Üç yollu vana: 600-1200 TL</li>
<li>Fan motoru: 500-1000 TL</li>
<li>Kart tamiri: 1000-2000 TL</li>
</ul>

<p>Not: Fiyatlar marka ve modele göre değişir.</p>
    `,
    category: 'ariza-kodlari',
    tags: ['kombi', 'arıza kodu', 'E01', 'E02', 'E03', 'hata kodu', 'reset'],
    createdAt: '2026-02-28',
    featured: true,
  },
  {
    id: '17',
    title: 'İzmir Beyaz Eşya Servisi - En Yakın ve Hızlı Teknik Servis Hizmeti',
    slug: 'izmir-beyaz-esya-servisi',
    excerpt: 'İzmir beyaz eşya servisi arıyorsanız, En Yakın Servis Hizmetleri olarak Konak, Karşıyaka, Bornova, Buca ve tüm ilçelerde hızlı teknik servis hizmeti sunuyoruz. Aynı gün servis, yerinde tamir, uygun fiyat.',
    content: `<h2>İzmir Beyaz Eşya Servisi Hizmetleri</h2>

<p>İzmir'de beyaz eşya servisi ihtiyacınız mı var? Buzdolabı, çamaşır makinesi, bulaşık makinesi, klima ve kombi gibi ev aletleriniz için profesyonel teknik servis hizmeti arıyorsanız doğru yerdesiniz. En Yakın Servis Hizmetleri olarak İzmir'in tüm ilçelerinde hızlı, garantili ve uygun fiyatlı servis çözümleri sunuyoruz.</p>

<h2>İzmir'de Servis Verdiğimiz Bölgeler</h2>

<p>İzmir genelinde yaygın servis ağımız ile her noktaya ulaşıyoruz:</p>

<ul>
<li><strong>Konak:</strong> Tarihi merkez ve çevresinde hızlı servis</li>
<li><strong>Karşıyaka:</strong> Anadolu yakasında 7/24 servis desteği</li>
<li><strong>Bornova:</strong> Ege Üniversitesi çevresi ve tüm mahalleler</li>
<li><strong>Buca:</strong> Yeni gelişen bölgelerde aktif servis</li>
<li><strong>Çiğli:</strong> Organize sanayi ve konut bölgeleri</li>
<li><strong>Gaziemir:</strong> Havalimanı çevresi ve sanayi bölgesi</li>
<li><strong>Balçova:</strong> Teleferik ve çevre mahalleler</li>
<li><strong>Narlıdere:</strong> İnciraltı ve sahil kesimi</li>
<li><strong>Güzelbahçe:</strong> Yelki ve çevre köyler dahil</li>
<li><strong>Urla:</strong> İskele ve kırsal bölgeler</li>
</ul>

<h2>İzmir Çamaşır Makinesi Servisi</h2>

<p>Çamaşır makineniz bozulduğunda hemen yardımcı oluyoruz:</p>

<ul>
<li>Su almıyor veya boşaltmıyor</li>
<li>Sıkmıyor veya titreşim yapıyor</li>
<li>Kapı kilitlenmiyor</li>
<li>Köpürme yapıyor</li>
<li>Program çalışmıyor</li>
<li>Su sızıntısı yapıyor</li>
</ul>

<p><strong>Markalar:</strong> Bosch, Arçelik, Beko, Samsung, LG, Vestel, Profilo, Siemens</p>

<h2>İzmir Buzdolabı Servisi</h2>

<p>Buzdolabı arızalarında hızlı çözüm:</p>

<ul>
<li>Soğutmuyor veya dondurmuyor</li>
<li>Gaz dolumu gerekiyor</li>
<li>Kompresör arızası</li>
<li>Buzlanma yapıyor</li>
<li>Su damlatıyor</li>
<li>Fan çalışmıyor</li>
</ul>

<p><strong>Özellik:</strong> Yerinde gaz dolumu, kompresör değişimi, termostat tamiri</p>

<h2>İzmir Bulaşık Makinesi Servisi</h2>

<p>Bulaşık makinenizi gün içinde tamir ediyoruz:</p>

<ul>
<li>Yıkamıyor veya durulamıyor</li>
<li>Su ısıtmıyor</li>
<li>Kapak kapanmıyor</li>
<li>Tablet eritmiyor</li>
<li>Su sızıntısı</li>
<li>Ses yapıyor</li>
</ul>

<h2>İzmir Klima Servisi</h2>

<p>Yaz-kış klima servis hizmetleri:</p>

<ul>
<li>Klima bakımı ve temizliği</li>
<li>Gaz dolumu (R410A, R32)</li>
<li>Soğutmuyor sorunu</li>
<li>Montaj ve demontaj</li>
<li>Kart tamiri</li>
<li>Kompresör değişimi</li>
</ul>

<h2>Neden İzmir'de Bizi Seçmelisiniz?</h2>

<h3>Aynı Gün Servis Hizmeti</h3>
<p>Sabah arayan müşterilere öğleden önce, öğleden sonra arayanlara akşama kadar servis sağlıyoruz. Acil durumlarda 2 saat içinde kapınızdayız.</p>

<h3>Yerinde Tamir Garantisi</h3>
<p>Parça değişimi gerekmeyen arızaların %90'ını evinizde, yerinde çözüyoruz. Zaman kaybı yok, cihazı servise götürme derdi yok.</p>

<h3>Uygun Fiyat Politikası</h3>
<p>Yetkili servislere göre %30-40 daha uygun fiyatlar. İşçilik garantili, şeffaf fiyatlandırma. Önce fiyat bilgisi, sonra onay.</p>

<h3>Garantili İşçilik</h3>
<p>Tüm tamirlerimiz 1 yıl işçilik garantilidir. Aynı arıza tekrarlarsa ücretsiz servis.</p>

<h3>Orjinal Yedek Parça</h3>
<p>Tüm markaların orijinal yedek parçalarını kullanıyoruz. Uygun fiyatlı aftermarket alternatifleri de sunuyoruz.</p>

<h2>İzmir Teknik Servis Çalışma Saatleri</h2>

<ul>
<li><strong>Hafta içi:</strong> 08:00 - 20:00</li>
<li><strong>Cumartesi:</strong> 09:00 - 18:00</li>
<li><strong>Pazar:</strong> 10:00 - 16:00 (Acil servis)</li>
<li><strong>Bayramlar:</strong> Acil servis hizmeti</li>
</ul>

<h2>İzmir Servis Telefonu</h2>

<p><strong>0850 304 15 17</strong> numaralı telefondan 7/24 bize ulaşabilirsiniz. Çağrı merkezimiz İzmir'deki en yakın servis ustasını yönlendirir.</p>

<h2>Servis Ücretleri ve Fiyatlar (2026)</h2>

<ul>
<li>Kontrol ve teşhis ücreti: 250-400 TL</li>
<li>Çamaşır makinesi tamiri: 400-1500 TL</li>
<li>Buzdolabı tamiri: 500-2000 TL</li>
<li>Klima gaz dolumu: 800-1500 TL</li>
<li>Bakım paketi: 300-600 TL</li>
</ul>

<p>Not: Fiyatlar arıza tipine ve parça ihtiyacına göre değişir.</p>

<h2>Müşteri Yorumları</h2>

<p>"Karşıyaka'da buzdolabım bozuldu, 2 saat içinde geldiler, kompresörü değiştirdiler. Çok memnun kaldım." - Ayşe K.</p>

<p>"Bornova'da çamaşır makinem su almıyordu, aynı gün çözdüler. Fiyat da uygundu." - Mehmet T.</p>

<p>"Buca'da klima bakımı yaptırdım, temiz ve profesyonel işçi. Teşekkürler." - Zeynep A.</p>
    `,
    category: 'yerel',
    tags: ['izmir beyaz eşya servisi', 'izmir teknik servis', 'izmir klima servisi', 'izmir servis', 'konak', 'karşıyaka', 'bornova', 'buca'],
    createdAt: '2026-03-01',
    featured: true,
  },
  {
    id: '18',
    title: 'Manisa Beyaz Eşya Servisi - Hızlı ve Garantili Teknik Servis',
    slug: 'manisa-beyaz-esya-servisi',
    excerpt: 'Manisa beyaz eşya servisi için En Yakın Servis Hizmetleri olarak Merkez, Akhisar, Turgutlu, Salihli ve tüm ilçelerde profesyonel teknik servis hizmeti sunuyoruz. Aynı gün servis, uygun fiyat.',
    content: `<h2>Manisa Beyaz Eşya Servisi Hizmetleri</h2>

<p>Manisa'da beyaz eşya servisi mi arıyorsunuz? En Yakın Servis Hizmetleri olarak Manisa merkez ve tüm ilçelerinde çamaşır makinesi, buzdolabı, bulaşık makinesi, klima ve kombi tamir hizmetleri sunuyoruz. Yerinde servis, aynı gün müdahale, garantili işçilik.</p>

<h2>Manisa'da Servis Verdiğimiz Bölgeler</h2>

<p>Manisa genelinde geniş servis ağımızla hizmetinizdeyiz:</p>

<ul>
<li><strong>Manisa Merkez:</strong> Şehzadeler ve Yunusemre ilçeleri</li>
<li><strong>Akhisar:</strong> Merkez ve köyler dahil</li>
<li><strong>Turgutlu:</strong> Merkez ve Urganlı</li>
<li><strong>Salihli:</strong> Merkez ve Adala bölgesi</li>
<li><strong>Alaşehir:</strong> Merkez ve köyler</li>
<li><strong>Soma:</strong> Merkez ve Kınık</li>
<li><strong>Kırkağaç:</strong> Merkez ve çevre</li>
<li><strong>Saruhanlı:</strong> Merkez ve kasabalar</li>
<li><strong>Gölmarmara:</strong> Tüm mahalleler</li>
<li><strong>Gördes:</strong> Tüm bölgeler</li>
<li><strong>Demirci:</strong> Merkez ve köyler</li>
<li><strong>Köprübaşı:</strong> Tüm mahalleler</li>
<li><strong>Sarıgöl:</strong> Merkez ve bağlı köyler</li>
<li><strong>Selendi:</strong> Tüm bölgeler</li>
<li><strong>Ahmetli:</strong> Merkez ve kasabalar</li>
</ul>

<h2>Manisa Çamaşır Makinesi Servisi</h2>

<p>Tüm marka ve modellerde çamaşır makinesi tamiri:</p>

<ul>
<li><strong>Su almıyor:</strong> Vana, hortum, valf kontrolü ve tamiri</li>
<li><strong>Sıkmıyor:</strong> Motor, kapak kilit, kayış tamiri</li>
<li><strong>Boşaltmıyor:</strong> Pompa, filtre, hortum temizliği</li>
<li><strong>Ses yapıyor:</strong> Rulman, amortisör kontrolü</li>
<li><strong>Titreşim yapıyor:</strong> Ayak dengeleme ve amortisör</li>
<li><strong>Kapı kilitlenmiyor:</strong> Kilit mekanizması değişimi</li>
</ul>

<p><strong>Hizmet verdiğimiz markalar:</strong> Bosch, Arçelik, Beko, Samsung, LG, Vestel, Regal, Profilo, Siemens, Hotpoint, Indesit</p>

<h2>Manisa Buzdolabı Servisi</h2>

<p>Buzdolabı arızalarında uzman çözüm:</p>

<ul>
<li><strong>Soğutmuyor:</strong> Gaz kaçağı, kompresör, termostat</li>
<li><strong>Dondurucu çalışmıyor:</strong> Buz makinesi ve fan tamiri</li>
<li><strong>Buzlanma yapıyor:</strong> Rezistans ve termostat değişimi</li>
<li><strong>Su damlatıyor:</strong> Tahliye ve conta değişimi</li>
<li><strong>Ses yapıyor:</strong> Kompresör ve fan motoru</li>
<li><strong>Işık yanmıyor:</strong> Lamba ve anahtar tamiri</li>
</ul>

<p><strong>Özel hizmet:</strong> Yerinde gaz dolumu, kompresör değişimi, anakart tamiri</p>

<h2>Manisa Bulaşık Makinesi Servisi</h2>

<p>Bulaşık makinesi sorunlarında hızlı müdahale:</p>

<ul>
<li><strong>Yıkamıyor:</strong> Pompa, filtre, sprey kolu temizliği</li>
<li><strong>Su ısıtmıyor:</strong> Rezistans ve termostat</li>
<li><strong>Tablet eritmiyor:</strong> Tablet gözü ve kapak mekanizması</li>
<li><strong>Kapak kapanmıyor:</strong> Kilit ve yay değişimi</li>
<li><strong>Su sızıntısı:</strong> Conta, Hortum, pompa conta</li>
<li><strong>Köpürme yapıyor:</strong> Parlatıcı ve tuz ayarı</li>
</ul>

<h2>Manisa Klima Servisi</h2>

<p>Klima bakım, tamir ve montaj hizmetleri:</p>

<ul>
<li>Yıllık bakım ve temizlik</li>
<li>Gaz dolumu (R410A, R32, R134A)</li>
<li>Soğutmuyor/ısıtmıyor tamiri</li>
<li>Kart tamiri ve değişimi</li>
<li>Kompresör değişimi</li>
<li>Fan motoru tamiri</li>
<li>Montaj ve demontaj</li>
<li>Boru çekimi ve gaz kaçağı tespiti</li>
</ul>

<h2>Manisa Kombi Servisi</h2>

<p>Kış hazırlığı ve kombi tamiri:</p>

<ul>
<li>Yıllık bakım ve petek temizliği</li>
<li>Arıza kodları ve tamiri (E01, E02, E03)</li>
<li>Pompa değişimi</li>
<li>Üç yollu vana tamiri</li>
<li>Genleşme tankı değişimi</li>
<li>Kart tamiri</li>
</ul>

<h2>Manisa'da Neden Bizi Tercih Etmelisiniz?</h2>

<h3>Aynı Gün Servis Garantisi</h3>
<p>Manisa merkez ve ilçelerinde aynı gün içinde kapınızdayız. Acil durumlarda 2 saat içinde müdahale.</p>

<h3>Yerinde Tamir Avantajı</h3>
<p>Arızaların çoğunu evinizde, yerinde çözüyoruz. Cihazı servise götürme derdi yok.</p>

<h3>Ekonomik Fiyatlar</h3>
<p>Yetkili servislere göre %30-40 daha uygun fiyatlarla kaliteli hizmet.</p>

<h3>1 Yıl İşçilik Garantisi</h3>
<p>Tüm tamirlerimizde 1 yıl işçilik garantisi. Aynı arıza tekrarlarsa ücretsiz servis.</p>

<h3>Orjinal Parça Kullanımı</h3>
<p>Tüm markaların orijinal yedek parçalarını temin ediyoruz. Garantili parça değişimi.</p>

<h2>Manisa Servis Çalışma Saatleri</h2>

<ul>
<li><strong>Hafta içi:</strong> 08:00 - 20:00</li>
<li><strong>Cumartesi:</strong> 09:00 - 18:00</li>
<li><strong>Pazar:</strong> 10:00 - 16:00 (Acil servis)</li>
<li><strong>Resmi tatiller:</strong> Acil servis hizmeti</li>
</ul>

<h2>Manisa Servis Telefonu</h2>

<p><strong>0850 304 15 17</strong> numaralı telefondan 7 gün 24 saat bize ulaşabilirsiniz. Çağrı merkezimiz Manisa'daki en yakın servis ustasını yönlendirir.</p>

<h2>Manisa Servis Ücretleri (2026)</h2>

<ul>
<li>Teknik kontrol ve arıza tespiti: 250-400 TL</li>
<li>Çamaşır makinesi tamiri: 400-1500 TL (parça hariç)</li>
<li>Buzdolabı tamiri: 500-2000 TL (parça hariç)</li>
<li>Klima bakımı: 300-500 TL</li>
<li>Klima gaz dolumu: 800-1500 TL (gaz tipine göre)</li>
<li>Kombi bakımı: 400-700 TL</li>
</ul>

<p><strong>Not:</strong> Fiyatlar arıza tipine, cihaz modeline ve parça ihtiyacına göre değişir. Kesin fiyat için ücretsiz keşif yapılır.</p>

<h2>Müşteri Memnuniyeti</h2>

<p>"Akhisar'da çamaşır makinem bozuldu, aynı gün geldiler, gayet hızlı ve profesyonel çalıştılar." - Fatma Y.</p>

<p>"Turgutlu'da buzdolabım soğutmuyordu, gaz dolumu yaptılar, şu an çok iyi çalışıyor." - Ali K.</p>

<p>"Merkez'de klima bakımı yaptırdım, tertemiz işçi, fiyat da makul. Teşekkürler." - Selin B.</p>
    `,
    category: 'yerel',
    tags: ['manisa beyaz eşya servisi', 'manisa teknik servis', 'manisa klima servisi', 'manisa servis', 'akhisar', 'turgutlu', 'salihli'],
    createdAt: '2026-03-02',
    featured: true,
  },
  {
    id: '19',
    title: 'Bosch Servis - Yetkili Servis Kalitesinde Özel Servis Hizmeti',
    slug: 'bosch-servis',
    excerpt: 'Bosch servis için bizi arayın! Bosch buzdolabı, çamaşır makinesi, bulaşık makinesi, klima ve kombi servisi için uzman teknik servis. Garantili işçilik, orijinal parça, uygun fiyat.',
    content: `<h2>Bosch Servis Hizmetleri</h2>

<p>Bosch marka ev aletleriniz mi arızalandı? Endişelenmeyin! En Yakın Servis Hizmetleri olarak Bosch cihazlarınız için yetkili servis kalitesinde, özel servis fiyatlarıyla profesyonel teknik servis sunuyoruz. Tüm Bosch modellerinde uzman ekibimizle hizmetinizdeyiz.</p>

<h2>Bosch Çamaşır Makinesi Servisi</h2>

<p>Bosch çamaşır makinelerinde karşılaşılan sorunlar ve çözümleri:</p>

<h3>Sık Karşılaşılan Arızalar</h3>

<ul>
<li><strong>F18 / Su boşaltma hatası:</strong> Pompa tıkanıklığı veya arızası</li>
<li><strong>F23 / Su taşma hatası:</strong> AquaStop sistemi aktif, su sızıntısı var</li>
<li><strong>F16 / Kapı kilit hatası:</strong> Kapı kilit mekanizması arızası</li>
<li><strong>E18 / Filtre tıkanıklığı:</strong> Pompa filtresi temizlenmeli</li>
<li><strong>Su almıyor:</strong> Su valfi, hortum veya elektronik kart</li>
<li><strong>Sıkmıyor:</strong> Motor, kayış veya kapak kilidi</li>
</ul>

<h3>Bosch Çamaşır Makinesi Modelleri</h3>

<p>Hizmet verdiğimiz seriler: Serie 2, Serie 4, Serie 6, Serie 8, Logixx, Maxx, Classic</p>

<h3>Bakım Önerileri</h3>

<ul>
<li>Ayda bir pompa filtresini temizleyin</li>
<li>6 ayda bir kireç çözücü kullanın</li>
<li>Kapı contasını kurulayın, açık bırakın</li>
<li>Fazla deterjan kullanmayın</li>
</ul>

<h2>Bosch Buzdolabı Servisi</h2>

<p>Bosch buzdolabı arızalarında uzman çözüm:</p>

<h3>Arıza Kodları ve Anlamları</h3>

<ul>
<li><strong>E1:</strong> Sensör hatası</li>
<li><strong>E2:</strong> Defrost hatası</li>
<li><strong>E3:</strong> Fan motoru arızası</li>
<li><strong>E4:</strong> Kompresör arızası</li>
</ul>

<h3>Yaygın Sorunlar</h3>

<ul>
<li><strong>Soğutmuyor:</strong> Gaz kaçağı, kompresör, termostat</li>
<li><strong>Buzlanma yapıyor:</strong> Rezistans, termostat, kapak contası</li>
<li><strong>Su birikiyor:</strong> Tahliye tıkanıklığı</li>
<li><strong>Ses yapıyor:</strong> Kompresör, fan, buz makinesi</li>
</ul>

<h3>Bosch Buzdolabı Serileri</h3>

<p>KGN, KGV, KGN39, KGN49, KGN56, KGN76, KGN86 serilerinde uzman servis</p>

<h2>Bosch Bulaşık Makinesi Servisi</h2>

<p>Bosch bulaşık makinesi sorunları ve çözümleri:</p>

<h3>Hata Kodları</h3>

<ul>
<li><strong>E15:</strong> Su sızıntısı algılandı (AquaStop)</li>
<li><strong>E22:</strong> Filtre tıkalı</li>
<li><strong>E24:</strong> Su boşaltma sorunu</li>
<li><strong>E25:</strong> Pompa tıkalı veya arızalı</li>
</ul>

<h3>Sık Görülen Arızalar</h3>

<ul>
<li>Yıkamıyor veya durulamıyor</li>
<li>Su ısıtmıyor</li>
<li>Kapak kapanmıyor</li>
<li>Tablet eritmiyor</li>
<li>Su sızıntısı</li>
<li>Bulaşıklar ıslak kalıyor</li>
</ul>

<h2>Bosch Klima Servisi</h2>

<p>Bosch inverter ve split klima servisi:</p>

<h3>Arıza Kodları</h3>

<ul>
<li><strong>E1:</strong> İç ünite sensör hatası</li>
<li><strong>E2:</strong> Dış ünite sensör hatası</li>
<li><strong>E5:</strong> Kompresör aşırı ısınma</li>
<li><strong>F1:</strong> Soğutucu gaz kaçağı</li>
</ul>

<h3>Servis Hizmetleri</h3>

<ul>
<li>Yıllık bakım ve temizlik</li>
<li>Gaz dolumu (R410A, R32)</li>
<li>Kart tamiri</li>
<li>Kompresör değişimi</li>
<li>Montaj ve demontaj</li>
</ul>

<h2>Bosch Kombi Servisi</h2>

<p>Bosch kombi arıza kodları ve çözümleri:</p>

<h3>Arıza Kodları</h3>

<ul>
<li><strong>EA:</strong> Ateşleme hatası</li>
<li><strong>CE:</strong> Baca/ventilasyon hatası</li>
<li><strong>C6:</strong> Fan hatası</li>
<li><strong>C7:</strong> Hava akış hatası</li>
<li><strong>F0:</strong> İletişim hatası</li>
</ul>

<h3>Bakım İçeriği</h3>

<ul>
<li>Genel kontrol ve temizlik</li>
<li>Yanma odası temizliği</li>
<li>Eşanjör temizliği</li>
<li>Baca kontrolü</li>
<li>Su basıncı kontrolü</li>
<li>Gaz kontrolü</li>
</ul>

<h2>Neden Bosch Servis İçin Bizi Seçmelisiniz?</h2>

<h3>Bosch Uzmanlığı</h3>
<p>Ekibimiz tüm Bosch modellerinde özel eğitim almıştır. Arıza kodlarını doğru yorumlar, doğru çözüm üretir.</p>

<h3>Orijinal Bosch Parça</h3>
<p>Bosch orijinal yedek parçalarını kullanıyoruz. Parça kodları ile doğru parça temini.</p>

<h3>Uygun Fiyat</h3>
<p>Yetkili servislere göre %30-40 daha ekonomik fiyatlarla aynı kalitede hizmet.</p>

<h3>Hızlı Servis</h3>
<p>Aynı gün içinde servis imkanı. Acil durumlarda 2 saat içinde müdahale.</p>

<h3>Garantili İşçilik</h3>
<p>Tüm Bosch tamiri işçiliklerimiz 1 yıl garantilidir.</p>

<h2>Bosch Servis Ücretleri (2026)</h2>

<ul>
<li>Arıza tespiti: 250-400 TL</li>
<li>Çamaşır makinesi tamiri: 500-1800 TL</li>
<li>Buzdolabı tamiri: 600-2200 TL</li>
<li>Bulaşık makinesi tamiri: 500-1600 TL</li>
<li>Klima bakımı: 350-600 TL</li>
<li>Kombi bakımı: 450-750 TL</li>
</ul>

<p><strong>Not:</strong> Fiyatlar arıza tipine ve parça ihtiyacına göre değişir.</p>

<h2>Bosch Servis Çalışma Saatleri</h2>

<ul>
<li><strong>Hafta içi:</strong> 08:00 - 20:00</li>
<li><strong>Cumartesi:</strong> 09:00 - 18:00</li>
<li><strong>Pazar:</strong> 10:00 - 16:00</li>
<li><strong>7/24 Acil:</strong> 0850 304 15 17</li>
</ul>

<h2>Servis Bölgelerimiz</h2>

<p>Tüm Türkiye genelinde Bosch servis hizmeti sunuyoruz. İzmir, Manisa, İstanbul, Ankara, İzmir, Bursa, Antalya ve 81 ilde hizmet ağımız bulunmaktadır.</p>
    `,
    category: 'marka-ariza',
    tags: ['bosch servis', 'bosch beyaz eşya servisi', 'bosch çamaşır makinesi', 'bosch buzdolabı', 'bosch klima', 'bosch kombi'],
    createdAt: '2026-03-03',
    featured: true,
  },
  {
    id: '20',
    title: 'Aynı Gün Servis Hizmeti - 2 Saatte Kapınızda Hızlı Teknik Servis',
    slug: 'ayni-gun-servis',
    excerpt: 'Aynı gün servis mi arıyorsunuz? Beyaz eşya, klima ve kombi arızalarınızda 2 saatte kapınızda hızlı teknik servis. Yerinde tamir, uygun fiyat, garantili işçilik. 7/24 servis çağrı hattı.',
    content: `<h2>Aynı Gün Servis Nedir?</h2>

<p>Aynı gün servis, beyaz eşya, klima, kombi ve ev aletlerinizin arızalandığı gün içinde teknik servis desteği almanızı sağlayan hızlı servis hizmetidir. En Yakın Servis Hizmetleri olarak verdiğiniz servis taleplerini aynı gün içinde karşılıyor, sorunlarınızı geciktirmeden çözüyoruz.</p>

<h2>Neden Aynı Gün Servis Önemlidir?</h2>

<p>Günümüzde beyaz eşyalar ev yaşamının vazgeçilmez parçalarıdır. Bir çamaşır makinesi veya buzdolabı arızası, günlük rutininizi altüst edebilir. Aynı gün servis hizmeti ile:</p>

<ul>
<li>Zaman kaybını önlersiniz: Bekleme süresi yok, hemen çözüm</li>
<li>Yiyecekleriniz bozulmaz: Buzdolabı arızalarında kritik önem</li>
<li>Müşteri memnuniyeti: Hızlı hizmet = mutlu müşteri</li>
<li>İş akışınız bozulmaz: Çamaşır ve bulaşık birikmez</li>
</ul>

<h2>Aynı Gün Servis Süreci</h2>

<h3>1. Çağrı Alma (0-15 dk)</h3>
<p>0850 304 15 17 numaralı telefondan bize ulaşın. Çağrı merkezi temsilcimiz arıza tipini öğrenir, cihaz marka ve modelini not alır, adres bilgilerinizi kaydeder.</p>

<h3>2. Usta Yönlendirme (15-30 dk)</h3>
<p>Adresinize en yakın servis ustası belirlenir ve yönlendirilir.</p>

<h3>3. Yolda Bilgilendirme (30-60 dk)</h3>
<p>Usta yola çıktığında SMS veya telefon ile bilgilendirilirsiniz.</p>

<h3>4. Servis ve Tamir (60-120 dk)</h3>
<p>Usta kapınıza gelir, arızayı teşhis eder, onarımı yapar. Yerinde çözülemeyen durumlarda cihaz servise alınabilir.</p>

<h2>Aynı Gün Servis Ücretleri</h2>

<p>Aynı gün servis hizmetinde ekstra ücret talep etmiyoruz. Standart servis ücretleri geçerlidir:</p>

<ul>
<li>Arıza tespiti: 250-400 TL</li>
<li>Çamaşır makinesi tamiri: 400-1500 TL</li>
<li>Buzdolabı tamiri: 500-2000 TL</li>
<li>Bulaşık makinesi tamiri: 400-1400 TL</li>
<li>Klima bakım/tamir: 300-2000 TL</li>
<li>Kombi bakım/tamir: 400-2500 TL</li>
</ul>

<h2>Servis Çağırma</h2>

<p>Telefon: 0850 304 15 17<br>
Çalışma saatleri: 7 gün 24 saat çağrı alımı<br>
Servis süresi: Aynı gün içinde</p>
    `,
    category: 'genel',
    tags: ['aynı gün servis', 'hızlı servis', 'acil servis', 'servis çağır', 'servis telefonu', '2 saatte servis'],
    createdAt: '2026-03-04',
    featured: true,
  },
  {
    id: '21',
    title: 'Yerinde Servis Hizmeti - Evinizde Tamir, Zaman Kaybetmeyin',
    slug: 'yerinde-servis',
    excerpt: 'Yerinde servis hizmeti ile beyaz eşya, klima ve kombi arızalarınızı evinizde çözüyoruz. Cihazı servise götürme derdi yok. Hızlı, ekonomik ve garantili teknik servis. 7/24 servis numarası.',
    content: `<h2>Yerinde Servis Nedir?</h2>

<p>Yerinde servis, arızalanan beyaz eşya, klima veya kombinizin evinizde, kullanım alanında tamir edilmesidir. Cihazı söküp servise götürme, bekletme ve geri getirme zahmeti olmadan, ustamız evinize gelir ve arızayı yerinde çözer. En Yakın Servis Hizmetleri olarak yerinde servis oranımız %90'ın üzerindedir.</p>

<h2>Neden Yerinde Servis?</h2>

<h3>Zaman Tasarrufu</h3>
<p>Servise götür-götürme, bekleme süresi yok. Usta kapınıza gelir, aynı gün sorun çözülür.</p>

<h3>Ekonomik</h3>
<p>Nakliye ücreti yok. Sök-tak işçiliği yok. Daha az işçilik maliyeti. Toplamda %20-30 tasarruf.</p>

<h3>Güvenli</h3>
<p>Cihazınız evden çıkmaz, zarar görmez. Sizin gözünüzün önünde tamir edilir.</p>

<h3>Kolay</h3>
<p>Ağır cihazları taşıma derdi yok. Merdiven, asansör sorunu yok. Büyük cihazlar için ideal.</p>

<h2>Yerinde Servis Ücretleri (2026)</h2>

<p>Yerinde servis standart servis ücretleri ile aynıdır. Ekstra ücret talep edilmez:</p>

<ul>
<li>Kontrol ve teşhis: 250-400 TL</li>
<li>Çamaşır makinesi onarımı: 400-1500 TL</li>
<li>Buzdolabı onarımı: 500-2000 TL</li>
<li>Bulaşık makinesi onarımı: 400-1400 TL</li>
<li>Klima bakım/onarım: 300-2000 TL</li>
<li>Kombi bakım/onarım: 400-2500 TL</li>
</ul>

<h2>İletişim ve Servis Talebi</h2>

<p>Telefon: 0850 304 15 17<br>
Çalışma saatleri: Hafta içi 08:00-20:00, Cumartesi 09:00-18:00, Pazar 10:00-16:00<br>
Acil servis: 7/24 çağrı alımı</p>
    `,
    category: 'genel',
    tags: ['yerinde servis', 'evde tamir', 'yerinde tamir', 'servis hizmeti', 'servis ustası', 'teknik servis'],
    createdAt: '2026-03-05',
    featured: true,
  },
  {
    id: '22',
    title: 'Çamaşır Makinesi Sıkmıyor - 10 Neden ve Kesin Çözümler',
    slug: 'camasir-makinesi-sikmiyor',
    excerpt: 'Çamaşır makinesi sıkmıyor sorunu en yaygın beyaz eşya arızalarındandır. Motor, kapak kilidi, kayış ve elektronik kart arızaları neden olabilir. Bu kapsamlı rehberde tüm nedenleri ve çözümleri bulacaksınız.',
    content: `<h2>Çamaşır Makinesi Neden Sıkmaz?</h2>

<p>Çamaşır makinesinin sıkmaması, çamaşırların sulanmış, ağır ve uzun süre kurumasına neden olur. Bu sorun mekanik, elektronik veya kullanıcı hatasından kaynaklanabilir.</p>

<h2>Çamaşır Makinesi Sıkmıyor - 10 Neden</h2>

<h3>1. Kapak Kilidi Arızası (En Sık Neden)</h3>
<p>Kapak kilidi, makinenin kapısı tamamen kapanmadan sıkma işlemine geçmesini engeller. Güvenlik nedeniyle kilitlenmemiş kapı varsa sıkma başlamaz.</p>

<p><strong>Belirtiler:</strong> Kapı düzgün kapanmıyor, sıkma başlamadan program duruyor</p>

<p><strong>Çözüm:</strong> Kapak kilidi değişimi (250-500 TL)</p>

<h3>2. Motor Arızası</h3>
<p>Motor, kazanı döndüren temel bileşendir. Motor arızalıysa sıkma işlemi gerçekleşemez.</p>

<p><strong>Belirtiler:</strong> Motor sesi yok, yanmış koku, program çalışıyor ama kazan dönmüyor</p>

<p><strong>Çözüm:</strong> Karbon fırça (100-200 TL) veya motor değişimi (800-1500 TL)</p>

<h3>3. Kayış Koptu veya Gevşedi</h3>
<p>Motorun kazana güç ilettiği kayış koptuysa veya gevşediyse sıkma gerçekleşmez.</p>

<p><strong>Belirtiler:</strong> Motor sesi var ama kazan dönmüyor, kazan el ile döndürülebiliyor</p>

<p><strong>Çözüm:</strong> Kayış değişimi (150-300 TL)</p>

<h3>4. Elektronik Kart Arızası</h3>
<p>Kart, sıkma komutunu motora iletemiyor olabilir. Güç katı, triyak veya mikroişlemci arızalı olabilir.</p>

<p><strong>Çözüm:</strong> Kart tamiri (500-1500 TL) veya kart değişimi (800-2000 TL)</p>

<h3>5. Su Boşaltma Sorunu</h3>
<p>Makine suyu boşaltamazsa, güvenlik nedeniyle sıkma yapmaz.</p>

<p><strong>Çözüm:</strong> Pompa filtresi temizliği veya pompa değişimi (200-500 TL)</p>

<h3>6. Dengesiz Yük</h3>
<p>Çamaşırlar tek tarafa yığılmışsa makine denge sensörü nedeniyle sıkma yapmayabilir.</p>

<p><strong>Çözüm:</strong> Çamaşırları eşit dağıtın, amortisör değişimi (300-600 TL)</p>

<h3>7. Amortisör Arızası</h3>
<p>Amortisörler makinenin sarsıntısını absorbe eder. Arızalıysa denge bozulur.</p>

<p><strong>Çözüm:</strong> Amortisör değişimi (300-600 TL)</p>

<h3>8. Presostat Arızası</h3>
<p>Presostat makinedeki su seviyesini algılar. Arızalıysa suyun boşaldığını algılayamaz.</p>

<p><strong>Çözüm:</strong> Presostat değişimi (200-400 TL)</p>

<h3>9. Program Seçici Arızası</h3>
<p>Program seçici arızalıysa sıkma fonksiyonuna geçemeyebilir.</p>

<p><strong>Çözüm:</strong> Program seçici değişimi (400-800 TL)</p>

<h3>10. Kazan Yatağı Arızası</h3>
<p>Kazan yatağı aşırı yıpranmışsa kazan düzgün dönmez ve sıkma yapılamaz.</p>

<p><strong>Çözüm:</strong> Kazan yatağı değişimi (800-2000 TL)</p>

<h2>Kendi Kendine Çözüm Adımları</h2>

<ul>
<li>Kapı tam kapanıyor mu kontrol edin</li>
<li>Su boşalmış mı kontrol edin</li>
<li>Çamaşırları eşit dağıtın</li>
<li>Makineyi resetleyin (fişi 5 dk çekin)</li>
<li>Filtreleri temizleyin</li>
</ul>

<h2>Onarım Maliyetleri (2026)</h2>

<ul>
<li>Kapak kilidi: 250-500 TL</li>
<li>Karbon fırça: 100-200 TL</li>
<li>Kayış: 150-300 TL</li>
<li>Pompa: 200-500 TL</li>
<li>Amortisör: 300-600 TL</li>
<li>Kart tamiri: 500-1500 TL</li>
<li>Motor: 800-1500 TL</li>
</ul>
    `,
    category: 'genel-ariza',
    tags: ['çamaşır makinesi sıkmıyor', 'çamaşır makinesi arıza', 'çamaşır makinesi tamiri', 'beyaz eşya arıza', 'teknik servis'],
    createdAt: '2026-03-06',
    featured: true,
  },
  {
    id: '23',
    title: 'Buzdolabı Soğutmuyor - 8 Neden ve Çözüm Rehberi',
    slug: 'buzdolabi-sogutmuyor',
    excerpt: 'Buzdolabı soğutmuyor sorunu ciddi bir beyaz eşya arızasıdır. Gaz kaçağı, kompresör, termostat ve fan motoru arızaları neden olabilir. Bu kapsamlı rehberde nedenleri ve çözümleri bulacaksınız.',
    content: `<h2>Buzdolabı Neden Soğutmaz?</h2>

<p>Buzdolabının soğutmaması, içindeki gıdaların bozulmasına ve ciddi ekonomik kayba neden olur. Bu sorun soğutma sisteminin herhangi bir bileşenindeki arızadan kaynaklanabilir.</p>

<h2>Acil Durum - Hemen Yapılması Gerekenler</h2>

<ul>
<li>Dolabı sık sık açmayın</li>
<li>Buzdolabına yeni gıda koymayın</li>
<li>Kapağı mümkün olduğunca kapalı tutun</li>
<li>İçindeki gıdaları komşularınıza veya buzluğa aktarın</li>
<li>Aynı gün servis çağırın (0850 304 15 17)</li>
</ul>

<h2>Buzdolabı Soğutmuyor - 8 Neden</h2>

<h3>1. Gaz Kaçağı (En Yaygın Neden)</h3>
<p>Soğutucu gaz kaçağı en sık karşılaşılan sorundur. Gaz azaldıkça soğutma performansı düşer.</p>

<p><strong>Belirtiler:</strong> Yavaş soğutma kaybı, kompresör sürekli çalışıyor, dondurucu soğutuyor ama buzdolabı ılık</p>

<p><strong>Çözüm:</strong> Gaz kaçağı tespiti, onarım ve gaz dolumu (1200-2500 TL)</p>

<h3>2. Kompresör Arızası</h3>
<p>Kompresör soğutma sisteminin kalbidir. Arızalıysa sistem çalışmaz.</p>

<p><strong>Çözüm:</strong> Kompresör değişimi (1500-3000 TL)</p>

<h3>3. Termostat Arızası</h3>
<p>Termostat, dolabın sıcaklığını kontrol eder ve kompresörü açıp kapatır.</p>

<p><strong>Çözüm:</strong> Termostat değişimi (200-500 TL)</p>

<h3>4. Fan Motoru Arızası</h3>
<p>No-Frost sistemli dolaplarda fan, soğuk havayı dağıtır. Fan çalışmazsa soğutma olmaz.</p>

<p><strong>Çözüm:</strong> Fan motoru değişimi (300-700 TL)</p>

<h3>5. Buzlanma ve Rezistans Arızası</h3>
<p>No-Frost sistem buzlanmayı rezistans ile önler. Rezistans arızalıysa buzlanma olur.</p>

<p><strong>Çözüm:</strong> Manuel buz çözme veya rezistans değişimi (400-800 TL)</p>

<h3>6. Kapak Contası Sorunu</h3>
<p>Yıpranmış contadan hava sızdıkça dolap soğutamaz.</p>

<p><strong>Çözüm:</strong> Kapak contası değişimi (300-800 TL)</p>

<h3>7. Elektronik Kart Arızası</h3>
<p>Kart, kompresör ve fan kontrolünü sağlar. Arızalıysa sistem yönetilemez.</p>

<p><strong>Çözüm:</strong> Kart tamiri (500-1500 TL) veya kart değişimi (1000-2500 TL)</p>

<h3>8. Kondansatör Kirlenmesi</h3>
<p>Kondansatör tozlanırsa ısı yayamaz, sistem verimsiz çalışır.</p>

<p><strong>Çözüm:</strong> Kondansatör temizliği (ücretsiz - kendiniz yapabilirsiniz)</p>

<h2>Kendi Kendine Kontrol Listesi</h2>

<ul>
<li>Fiş takılı mı? Sigorta atmış mı?</li>
<li>Termostat ayarı doğru mu?</li>
<li>Kapak tam kapanıyor mu?</li>
<li>Kondansatör kirli mi?</li>
<li>Dolap duvara çok yakın mı?</li>
</ul>

<h2>Onarım Maliyetleri (2026)</h2>

<ul>
<li>Gaz dolumu: 800-1500 TL</li>
<li>Kaçak onarımı + gaz: 1200-2500 TL</li>
<li>Termostat: 200-500 TL</li>
<li>Fan motoru: 300-700 TL</li>
<li>Rezistans: 400-800 TL</li>
<li>Kapak contası: 300-800 TL</li>
<li>Kompresör: 1500-3000 TL</li>
<li>Kart tamiri: 500-1500 TL</li>
</ul>
    `,
    category: 'genel-ariza',
    tags: ['buzdolabı soğutmuyor', 'buzdolabı arıza', 'buzdolabı gaz dolumu', 'beyaz eşya arıza', 'teknik servis'],
    createdAt: '2026-03-07',
    featured: true,
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedBlogs = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getBlogsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};
