import type { Metadata } from "next";
import DraftBanner from "@/app/components/DraftBanner";

export const metadata: Metadata = {
  title: "MinikTakip — Kullanım Koşulları (Taslak)",
  robots: { index: false, follow: false },
};

export default function TermsV1() {
  return (
    <main className="container">
      <DraftBanner />

      <h1>MinikTakip — Kullanım Koşulları</h1>
      <div className="meta">Sürüm: v1 (taslak) · Son güncelleme: 05.10.2026</div>

      <p>
        MinikTakip&apos;i kullanarak aşağıdaki koşulları kabul etmiş olursunuz. Bu metin, proje
        ekibinin bugüne kadar aldığı ürün kararlarına dayanan bir taslaktır;{" "}
        <strong>hukuki bir görüş değildir</strong> ve hukuk danışmanı onayından
        (<code>OPS-003</code>) geçene kadar nihai kabul edilmemelidir.
      </p>

      <h2>Hizmetin Tanımı</h2>
      <p>
        MinikTakip, gebelik ve bebek/çocuk takibine yönelik bir mobil uygulamadır. Takip ekranı,
        Acil Kart, Dijital Sağlık Kasası, Alerjen Tanıtım Takibi, Sesli Günlük, Beslenme ve Diş
        Sağlığı rehberleri gibi modüller sunar. AI Danışman özelliği şu anda devre dışıdır.
      </p>

      <h2>Tıbbi Tavsiye Değildir</h2>
      <p>
        Uygulamadaki içerik ve takip araçları bilgilendirme amaçlıdır;{" "}
        <strong>tıbbi teşhis, tedavi veya profesyonel sağlık tavsiyesinin yerine geçmez</strong>.
        Sağlığınız veya çocuğunuzun sağlığıyla ilgili kararlar için bir sağlık uzmanına
        danışmalısınız.
      </p>

      <h2>Hesabınız</h2>
      <p>
        Hesabınızla ilişkili bilgilerin doğruluğundan ve hesap güvenliğinden siz
        sorumlusunuz. Hesabınızı ve ilişkili tüm verilerinizi dilediğiniz zaman Profil
        ekranındaki &quot;Hesabımı Sil&quot; aksiyonuyla kalıcı olarak silebilirsiniz — bu işlem
        geri alınamaz.
      </p>

      <h2>Fikri Mülkiyet</h2>
      <p>
        Uygulamanın tasarımı, yazılımı ve editöryal içeriği MinikTakip&apos;e aittir. Dijital
        Sağlık Kasası&apos;na veya Albüm&apos;e yüklediğiniz kendi içerikleriniz (belge, fotoğraf
        vb.) size aittir; bunları yalnızca hizmeti size sunmak amacıyla işleriz.
      </p>

      <h2>Değişiklikler</h2>
      <p>
        Bu koşullar değiştiğinde mevcut sürüm düzenlenmez; yeni bir sürüm (<code>v2</code>)
        olarak yayımlanır. Önemli değişikliklerde uygulama içinden ayrıca bilgilendirilirsiniz.
      </p>

      <h2>Uygulanacak Hukuk</h2>
      <p>
        Veri sorumlusunun tüzel kişiliği henüz kurulmadığı için bu bölüm (uygulanacak hukuk ve
        yetkili mahkeme) hukuk danışmanı onayıyla birlikte netleştirilecektir.
      </p>

      <footer className="page-footer">
        MinikTakip · <a href="/terms/latest">en güncel sürüme git</a>
      </footer>
    </main>
  );
}
