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
        MinikTakip&apos;i kullanarak uygulamanın sunduğu özellikleri (gebelik/bebek takibi, AI
        Danışman, içerik modülleri ve ilgili diğer özellikler) bu koşullara uygun şekilde
        kullanmayı kabul edersiniz.
      </p>
      <p>
        Bu sayfanın nihai sürümü; hesap sorumluluğu, uygulama içeriğinin tıbbi tavsiye niteliği
        taşımadığına ilişkin sorumluluk reddi, fikri mülkiyet, hesap kapatma/silme ve değişiklik
        bildirimi gibi maddeleri ayrıntılı olarak içerecektir. Bu maddeler onaylanana kadar bu
        sayfa yalnızca bir yer tutucudur.
      </p>

      <footer className="page-footer">
        MinikTakip · <a href="/terms/latest">en güncel sürüme git</a>
      </footer>
    </main>
  );
}
