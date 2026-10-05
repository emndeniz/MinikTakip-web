import Image from "next/image";

export default function Home() {
  return (
    <main className="container" style={{ paddingTop: 56, textAlign: "center" }}>
      <Image
        src="/coming-soon.png"
        alt=""
        width={220}
        height={220}
        priority
        style={{ borderRadius: 32, marginBottom: 24 }}
      />
      <h1 style={{ fontSize: "1.6rem", marginBottom: 8 }}>MinikTakip</h1>
      <p style={{ color: "var(--foreground-dim)" }}>
        Gebelik ve bebek/çocuk takibi için hazırlanıyoruz — yakında burada.
      </p>
      <footer className="page-footer">
        <a href="/privacy/latest">Gizlilik Politikası</a>
        {" · "}
        <a href="/terms/latest">Kullanım Koşulları</a>
        {" · "}
        <a href="/kvkk/latest">KVKK Başvuru</a>
      </footer>
    </main>
  );
}
