import type { Metadata } from "next";

// Stable, unversioned URL on purpose: this is the address filed in the Google Play
// Data safety form (account + data deletion links), so it must not change. Unlike the
// consent texts (/privacy/v1 ...), nothing here is a version a user "accepted".
// The same URL is entered in both the account-deletion and data-deletion fields.
export const metadata: Metadata = {
  title: "Delete your account and data — Minicik (My Tiny Baby - Baby Tracker)",
  description:
    "How to delete your Minicik (My Tiny Baby - Baby Tracker) account and data, inside the app or by email.",
  robots: { index: true, follow: true },
};

const DELETION_EMAIL = "kvkk@miniktakip.app";

export default function DeleteAccount() {
  return (
    <main className="container">
      <section lang="en">
        <h1>Delete your account and data</h1>
        <div className="meta">
          App: <strong>Minicik – My Tiny Baby - Baby Tracker</strong> (Android package{" "}
          <code>com.miniktakip.app</code>) · Developer: <strong>Barış Görgün</strong> ·
          miniktakip.app
        </div>

        <p>
          This page explains how to delete your Minicik (My Tiny Baby - Baby Tracker) account and
          the data associated with it. You can do it yourself inside the app, or ask us to do it
          if you can no longer open the app.
        </p>

        <h2>Option 1: Delete your account inside the app</h2>
        <ol>
          <li>Open the Minicik app and sign in.</li>
          <li>
            Go to the <strong>Profile</strong> tab.
          </li>
          <li>
            Tap <strong>Delete my account</strong> (Hesabımı Sil).
          </li>
          <li>
            Re-enter your password when asked, tick the confirmation box, and tap{" "}
            <strong>Permanently delete my account</strong>.
          </li>
        </ol>
        <p>Deletion is immediate and cannot be undone.</p>

        <h2>Option 2: Request deletion without the app</h2>
        <p>
          If you uninstalled the app or cannot sign in, send an email to{" "}
          <a href={`mailto:${DELETION_EMAIL}`}>{DELETION_EMAIL}</a> from the email address linked
          to your Minicik account, with the subject <strong>&quot;Account deletion – Minicik&quot;</strong>.
          Please write the account email and the sign-in method you used (Google, Apple, or
          email/password). To protect your data we may ask you to confirm that the account is
          yours. We process requests within 30 days.
        </p>

        <h2>What is deleted</h2>
        <ul>
          <li>Your account and sign-in credential (Firebase Authentication).</li>
          <li>Your profile and settings.</li>
          <li>
            Child profiles, growth measurements, vaccine schedule, development milestones,
            feeding, sleep, diaper and dental records.
          </li>
          <li>Your pregnancy record and diary, postpartum diary and mood entries.</li>
          <li>Tracking records: blood pressure, blood sugar, weight, medications and doctor visits.</li>
          <li>Documents in your Health Vault and your photos.</li>
          <li>Your Voice Journal recordings.</li>
          <li>
            Your assistant (AI chat) conversations and consent records tied to your account.
          </li>
          <li>All related files in cloud storage.</li>
        </ul>

        <h2>What is kept</h2>
        <ul>
          <li>
            <strong>Forum posts and replies.</strong> If you posted in the community forum, your
            posts and replies are not removed with your account. They stay visible under an
            anonymous nickname; the link between these posts and your account is permanently
            removed, so they can no longer be traced to you.
          </li>
          <li>
            Analytics and crash diagnostics that are not linked to your identity may remain in
            Google Firebase for its standard retention period.
          </li>
          <li>Data we are legally required to keep, if any, for the period the law requires.</li>
        </ul>

        <h2>Contact</h2>
        <p>
          Questions about deletion or your personal data:{" "}
          <a href={`mailto:${DELETION_EMAIL}`}>{DELETION_EMAIL}</a>. See also our{" "}
          <a href="/privacy/v1">Privacy Policy</a>.
        </p>
      </section>

      <hr />

      <section lang="tr">
        <h1>Hesabınızı ve verilerinizi silin</h1>
        <div className="meta">
          Uygulama: <strong>Minicik – My Tiny Baby - Baby Tracker</strong> (
          <code>com.miniktakip.app</code>) · Geliştirici: <strong>Barış Görgün</strong>
        </div>

        <h2>Seçenek 1: Uygulama içinden</h2>
        <ol>
          <li>Minicik uygulamasını açıp giriş yapın.</li>
          <li>
            <strong>Profil</strong> sekmesine gidin.
          </li>
          <li>
            <strong>Hesabımı Sil</strong>&apos;e dokunun.
          </li>
          <li>
            İstendiğinde şifrenizi girin, onay kutusunu işaretleyin ve{" "}
            <strong>Hesabımı Kalıcı Olarak Sil</strong>&apos;e dokunun.
          </li>
        </ol>
        <p>Silme işlemi anında yapılır ve geri alınamaz.</p>

        <h2>Seçenek 2: Uygulamaya girmeden talep</h2>
        <p>
          Uygulamayı sildiyseniz ya da giriş yapamıyorsanız, Minicik hesabınıza bağlı e-posta
          adresinden <a href={`mailto:${DELETION_EMAIL}`}>{DELETION_EMAIL}</a> adresine{" "}
          <strong>&quot;Hesap silme – Minicik&quot;</strong> konulu bir e-posta gönderin. Hesap
          e-postanızı ve giriş yönteminizi (Google, Apple veya e-posta/şifre) yazın. Hesabın size
          ait olduğunu doğrulamak için ek bilgi isteyebiliriz. Talepleri en geç 30 gün içinde
          sonuçlandırırız.
        </p>

        <h2>Neler silinir</h2>
        <ul>
          <li>Hesabınız ve giriş kimlik bilgileriniz.</li>
          <li>
            Çocuk profilleri, büyüme ölçümleri, aşı takvimi, gelişim basamakları, beslenme, uyku,
            bez ve diş kayıtları.
          </li>
          <li>Gebelik kaydınız ve günlüğünüz, lohusalık günlüğü ve ruh hâli kayıtları.</li>
          <li>Tansiyon, kan şekeri, kilo, ilaç ve doktor ziyareti kayıtları.</li>
          <li>Sağlık Kasası&apos;ndaki belgeler ve fotoğraflarınız.</li>
          <li>Sesli Günlük kayıtlarınız.</li>
          <li>Asistan (yapay zekâ) sohbetleriniz ve hesabınıza bağlı onay kayıtları.</li>
          <li>Bulut depolamadaki ilgili tüm dosyalar.</li>
        </ul>

        <h2>Neler kalır</h2>
        <ul>
          <li>
            <strong>Forum paylaşımları.</strong> Forumda paylaşım yaptıysanız konularınız ve
            yanıtlarınız hesabınızla birlikte silinmez; anonim takma adınızla görünmeye devam
            eder. Bu içerikler ile hesabınız arasındaki bağ kalıcı olarak kaldırılır, size
            ulaştırılamaz.
          </li>
          <li>
            Kimliğinizle ilişkilendirilmemiş analiz ve çökme kayıtları, Google Firebase&apos;in
            standart saklama süresi boyunca tutulabilir.
          </li>
          <li>Varsa, yasal olarak saklanması gereken veriler yasanın öngördüğü süre boyunca.</li>
        </ul>

        <h2>İletişim</h2>
        <p>
          Silme veya kişisel verilerinizle ilgili sorular:{" "}
          <a href={`mailto:${DELETION_EMAIL}`}>{DELETION_EMAIL}</a> ·{" "}
          <a href="/privacy/v1">Gizlilik Politikası</a>
        </p>
      </section>

      <footer className="page-footer">
        Minicik · <a href="/privacy/v1">Gizlilik Politikası / Privacy Policy</a> ·{" "}
        <a href="/terms/v1">Kullanım Koşulları / Terms</a>
      </footer>
    </main>
  );
}
