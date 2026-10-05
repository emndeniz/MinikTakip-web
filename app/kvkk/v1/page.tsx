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
        6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun 11. ve 13. maddeleri kapsamında
        aşağıdaki haklara sahipsiniz:
      </p>
      <ul>
        <li>Kişisel verinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
        <li>
          İşlenmesini gerektiren sebepler ortadan kalkmışsa silinmesini veya yok edilmesini
          isteme
        </li>
        <li>Yapılan düzeltme/silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
        <li>
          İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize
          bir sonucun ortaya çıkmasına itiraz etme
        </li>
        <li>Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
      </ul>

      <p>
        Bu haklarınızı kullanmak için aşağıdaki adrese yazılı olarak başvurabilirsiniz.
        Başvurunuza en geç <strong>30 gün içinde</strong> yanıt verilir.
      </p>

      <p>
        <strong>Başvuru adresi:</strong>{" "}
        <a href="mailto:kvkk@miniktakip.app">kvkk@miniktakip.app</a>
      </p>

      <p>
        Uygulama içinden hesabınızı silmek için ayrıca bir başvuruya gerek yoktur — Profil
        ekranındaki &quot;Hesabımı Sil&quot; aksiyonu verinizi doğrudan kaldırır. Hesap
        silindiğinde rıza kayıtlarınız da hesapla birlikte silinir; bu davranışın değişip
        değişmeyeceği hukuk danışmanı görüşüyle netleşecektir.
      </p>

      <footer className="page-footer">
        MinikTakip · <a href="/privacy/v1">Gizlilik Politikası</a> ·{" "}
        <a href="/terms/v1">Kullanım Koşulları</a>
      </footer>
    </main>
  );
}
