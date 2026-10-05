import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MinikTakip — KVKK Veri Sahibi Başvuru Kanalı",
  robots: { index: false, follow: false },
};

export default function KvkkV1() {
  return (
    <main className="container">
      <div className="banner">
        <strong>Taslak — hukuki inceleme bekliyor.</strong>
        Bu sayfadaki başvuru adresi henüz operasyonel olarak kurulmadı (kutuya bakacak
        kişi/süreç tanımlanmadı). Uygulama mağazalara ya da gerçek kullanıcılara açılmadan önce
        kutunun fiilen takip edildiği doğrulanmalıdır.
      </div>

      <h1>KVKK Veri Sahibi Başvuru Kanalı</h1>
      <div className="meta">Sürüm: v1 (taslak) · Son güncelleme: 05.10.2026</div>

      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun 11. ve 13. maddeleri kapsamında;
        verinizin işlenip işlenmediğini öğrenme, düzeltme, silme ve aktarıldığı üçüncü kişileri
        öğrenme gibi haklarınızı kullanmak için aşağıdaki adrese yazılı olarak
        başvurabilirsiniz. Başvurunuza en geç <strong>30 gün içinde</strong> yanıt verilir.
      </p>

      <p>
        <strong>Başvuru adresi:</strong>{" "}
        <a href="mailto:kvkk@miniktakip.app">kvkk@miniktakip.app</a>
      </p>

      <p>
        Uygulama içinden hesabınızı silmek için ayrıca bir başvuruya gerek yoktur — Profil
        ekranındaki &quot;Hesabımı Sil&quot; aksiyonu verinizi doğrudan kaldırır.
      </p>

      <footer className="page-footer">
        MinikTakip · <a href="/privacy/v1">Gizlilik Politikası</a> ·{" "}
        <a href="/terms/v1">Kullanım Koşulları</a>
      </footer>
    </main>
  );
}
