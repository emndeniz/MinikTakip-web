import type { Metadata } from "next";
import DraftBanner from "@/app/components/DraftBanner";

export const metadata: Metadata = {
  title: "MinikTakip — Gizlilik Politikası (Taslak)",
  robots: { index: false, follow: false },
};

export default function PrivacyV1() {
  return (
    <main className="container">
      <DraftBanner />

      <h1>MinikTakip — Gizlilik Politikası</h1>
      <div className="meta">Sürüm: v1 (taslak) · Son güncelleme: 05.10.2026</div>

      <p>
        MinikTakip, gebelik ve bebek/çocuk takibine yönelik bir mobil uygulamadır. Bu sayfa,
        hangi verileri topladığımızı, neden topladığımızı ve bu verilerle ilgili haklarınızı
        anlatır. Aşağıdaki bilgiler proje ekibinin bugüne kadar aldığı teknik/ürün kararlarına
        dayanır; <strong>hukuki bir görüş değildir</strong> ve hukuk danışmanı onayından
        (<code>OPS-003</code>) geçene kadar taslak sayılmalıdır.
      </p>

      <h2>Veri Sorumlusu</h2>
      <p>
        MinikTakip&apos;i işleten şirket henüz resmi olarak kurulmadı — bu adım mağaza yayınından
        önce tamamlanacak (bkz. Resmi yayın öncesi adımlar). Şirket kurulduğunda veri sorumlusunun
        tüzel kişilik bilgileri bu bölüme eklenecek.
      </p>

      <h2>Topladığımız Veriler</h2>
      <p>
        Uygulamanın sunduğu özellikler gereği topladığımız verilerin büyük bölümü{" "}
        <strong>sağlık verisidir</strong>:
      </p>
      <ul>
        <li>Gebelik haftası, boy/kilo, tansiyon, kan şekeri gibi takip kayıtları</li>
        <li>Aşı takvimi ve doktor kontrolü bilgileri</li>
        <li>Anne sağlığı kayıtları: ruh hali, kronik hastalıklar, ferritin/B12 gibi değerler</li>
        <li>Alerjen tanıtım takibi kayıtları</li>
        <li>Emzirme ve uyku logları</li>
        <li>Sesli Günlük ses kayıtları</li>
        <li>Dijital Sağlık Kasası&apos;na yüklediğiniz belgeler (tahlil, rapor vb.)</li>
        <li>
          Acil Kart bilgileri — T.C. kimlik numarası dahil, hastanede kimlik eşleştirme amacıyla
        </li>
        <li>Çocuğun cinsiyeti</li>
        <li>Hesap bilgileri: e-posta adresi</li>
        <li>
          Kullanım/analitik verileri (Firebase Analytics ve BigQuery&apos;e aktarılan özet
          kullanım istatistikleri)
        </li>
      </ul>
      <p>
        T.C. kimlik numarası, KVKK anlamında özel nitelikli bir veri değildir (özel nitelikli
        veri listesi kapalı uçludur ve TCKN bu listede yer almaz); ancak veri minimizasyonu
        ilkesi gereği yalnızca gerekçesi olan yerde (Acil Kart) toplanır.
      </p>

      <h2>Verileri Neden Topluyoruz</h2>
      <p>
        Verileri, uygulamanın özelliklerini (gebelik/bebek takibi, Acil Kart, Dijital Sağlık
        Kasası, Alerjen Takibi, Sesli Günlük ve ilgili diğer modüller) size sunabilmek için
        işliyoruz. AI Danışman özelliği şu anda devre dışıdır; açılırsa (<code>OPS-011</code>)
        mesajlarınızın bir yapay zeka sağlayıcısına aktarılacağı ayrıca ve açıkça belirtilecektir.
      </p>

      <h2>Yurt Dışına Aktarım</h2>
      <p>
        Verileriniz Firebase/Google Cloud altyapısında, <code>europe-west3</code> (Frankfurt)
        bölgesinde işlenir ve saklanır — yani yurt dışında. Bu aktarımın dayanacağı hukuki zemin
        (Kurul&apos;un standart sözleşmesi veya Google&apos;ın DPA&apos;sının yeterliliği) henüz
        netleşmedi (<code>OPS-004</code>); netleştiğinde bu bölüm güncellenecektir.
      </p>

      <h2>Saklama ve Silme</h2>
      <p>
        Profil ekranındaki &quot;Hesabımı Sil&quot; aksiyonuyla hesabınızı kalıcı olarak
        silebilirsiniz. Silme işlemi; Firestore&apos;daki tüm verilerinizi, Storage&apos;daki
        belgelerinizi ve ses kayıtlarınızı ve Authentication kaydınızı kapsar. Rıza
        kayıtlarınız da hesapla birlikte silinir. BigQuery&apos;e aktarılmış kullanım
        istatistiklerinin silme kapsamı ayrıca gözden geçirilmektedir. Genel saklama süreleri
        hukuk danışmanı onayıyla netleşecektir.
      </p>

      <h2>Haklarınız (KVKK m.11)</h2>
      <p>
        Verinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacına
        uygun kullanılıp kullanılmadığını öğrenme, yurt içinde/dışında aktarıldığı üçüncü
        kişileri bilme, eksik/yanlış işlenmişse düzeltilmesini isteme, silinmesini/yok
        edilmesini isteme ve bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme
        haklarına sahipsiniz. Başvuru kanalı için{" "}
        <a href="/kvkk/v1">KVKK Veri Sahibi Başvuru Kanalı</a> sayfasına bakın.
      </p>

      <h2>Değişiklikler</h2>
      <p>
        Bu politika değiştiğinde mevcut sürüm düzenlenmez; yeni bir sürüm (<code>v2</code>)
        olarak yayımlanır, çünkü rıza kaydınızın <code>version</code> alanı gördüğünüz metne
        işaret etmeye devam etmelidir.
      </p>

      <footer className="page-footer">
        MinikTakip · <a href="/privacy/latest">en güncel sürüme git</a>
      </footer>
    </main>
  );
}
