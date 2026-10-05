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
        MinikTakip, gebelik ve bebek/çocuk takibine yönelik bir mobil uygulamadır. Uygulama;
        onboarding, takip ekranları ve sağlık kasası gibi özellikler aracılığıyla kullanıcıdan
        sağlık verisi de içeren bilgiler toplar ve bu verileri Firebase (Google Cloud)
        altyapısında işler.
      </p>
      <p>
        Bu sayfanın nihai sürümü; hangi verilerin toplandığını, toplama amacını, yurt dışına
        aktarım zeminini, saklama sürelerini ve veri sahibi haklarının (KVKK m.11/13) nasıl
        kullanılacağını ayrıntılı olarak açıklayacaktır. Bu bilgiler onaylanana kadar bu sayfa
        yalnızca bir yer tutucudur.
      </p>
      <p>
        Veri sahibi başvuru kanalı (bilgi talebi, düzeltme, silme):{" "}
        <a href="/kvkk/v1">kvkk-basvuru</a> sayfasından ulaşabilirsiniz.
      </p>

      <footer className="page-footer">
        MinikTakip · <a href="/privacy/latest">en güncel sürüme git</a>
      </footer>
    </main>
  );
}
