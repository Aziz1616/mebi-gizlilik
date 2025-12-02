import React from 'react';

function App() {
  // Tasarım Stilleri (CSS dosyası ile uğraşmamanız için buraya ekledim)
  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: '40px 20px',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      color: '#333',
      backgroundColor: '#fff'
    },
    header: {
      textAlign: 'center',
      borderBottom: '2px solid #e53935', // MEB Kırmızısı
      paddingBottom: '20px',
      marginBottom: '30px'
    },
    title: {
      fontSize: '2rem',
      color: '#2c3e50',
      marginBottom: '10px'
    },
    date: {
      fontSize: '0.9rem',
      color: '#7f8c8d'
    },
    section: {
      marginBottom: '30px'
    },
    sectionTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      borderLeft: '4px solid #e53935',
      paddingLeft: '10px',
      marginBottom: '15px'
    },
    text: {
      marginBottom: '10px',
      textAlign: 'justify'
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '15px'
    },
    listItem: {
      marginBottom: '8px'
    },
    footer: {
      marginTop: '50px',
      paddingTop: '20px',
      borderTop: '1px solid #eee',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#7f8c8d'
    },
    link: {
      color: '#e53935',
      textDecoration: 'none',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      {/* BAŞLIK ALANI */}
      <header style={styles.header}>
        <h1 style={styles.title}>MEBİ Gizlilik Politikası ve Kullanım Koşulları</h1>
        <p style={styles.date}>Son Güncelleme: 02.12.2025</p>
      </header>

      {/* İÇERİK ALANI */}
      <main>
        
        {/* 1. HAKKIMIZDA */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Hakkımızda</h2>
          <p style={styles.text}>
            Bu gizlilik politikası ve kullanım koşulları, <strong>Türkiye Cumhuriyeti Milli Eğitim Bakanlığı Materyal ve İçerik Geliştirme Daire Başkanlığı</strong> ("Kurum" veya "Geliştirici") 
            tarafından geliştirilen <strong>MEBİ</strong> mobil uygulaması ve <a href="http://mebi.eba.gov.tr" style={styles.link}>http://mebi.eba.gov.tr</a> servisi için geçerlidir. 
            Uygulamayı cihazınıza yükleyerek veya siteye erişim sağlayarak bu sözleşmedeki şartları kabul etmiş sayılırsınız.
          </p>
        </section>

        {/* 2. TOPLANAN BİLGİLER (HUAWEI İÇİN KRİTİK ALAN) */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>2. Toplanan Bilgiler ve Kullanım Amacı</h2>
          <p style={styles.text}>
            Uygulamamız, kullanıcıların gizliliğine en üst düzeyde önem vermektedir ve veri toplama politikamız aşağıdaki gibidir:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Kişisel Veriler:</strong> Uygulama içerisinde kullanıcıdan doğrudan kayıt formu aracılığıyla ad, soyad veya e-posta gibi kişisel veriler talep edilmemektedir. 
              Giriş işlemleri E-Devlet kapısı veya EBA entegrasyonu üzerinden güvenli bir şekilde sağlanmaktadır.
            </li>
            <li style={styles.listItem}>
              <strong>Teknik Veriler ve Cihaz Bilgileri:</strong> Uygulamanın kararlı çalışabilmesi, hataların tespit edilmesi ve hizmet kalitesinin artırılması amacıyla; 
              Cihaz Modeli, İşletim Sistemi Sürümü, IP Adresi ve Hata Kayıtları (Crash Logs) gibi anonim teknik veriler otomatik olarak işlenebilir.
            </li>
            <li style={styles.listItem}>
              <strong>Oturum Bilgileri:</strong> Sisteme giriş yaptığınızda, oturum güvenliğinin ve devamlılığının sağlanması amacıyla cihazınızda geçici kimlik doğrulama verileri (Token/Cookies) tutulmaktadır.
            </li>
          </ul>
        </section>

        {/* 3. KABUL BEYANI */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>3. Kabul Beyanı</h2>
          <p style={styles.text}>
            MEBİ (http://mebi.eba.gov.tr) adresine veya mobil uygulamasına hangi sebepten dolayı giriş yaparsanız yapın, 
            işbu metinde yer alan kuralları kabul etmiş sayılırsınız.
          </p>
        </section>

        {/* 4. FİKRİ MÜLKİYET */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Fikri Mülkiyet</h2>
          <p style={styles.text}>
            MEBİ uygulamasının orijinal içeriği, özellikleri, tasarımı ve işlevleri <strong>T.C. Milli Eğitim Bakanlığı Materyal ve İçerik Geliştirme Daire Başkanlığı</strong>'na aittir. 
            Tüm hakları saklıdır. MEBİ'de paylaşılan her türlü yazı, içerik ve düzenlemelerin telif hakları <strong>5846 sayılı Fikir ve Sanat Eserleri Kanunu</strong> ile korunmaktadır. 
            MEBİ’nin gönderileri ve içerikleri kaynak belirtilmeksizin kopyalanamaz, çoğaltılamaz ve izinsiz kullanılamaz.
          </p>
        </section>

        {/* 5. SONLANDIRMA */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>5. Hizmetin Sonlandırılması</h2>
          <p style={styles.text}>
            MEBİ, kullanıcıların siteye veya uygulamaya erişimini engelleyebilir. Bu işlemi herhangi bir bildirimde bulunmaksızın yapma hakkını saklı tutar. 
            Tüm bu sınırlama ve müdahaleler mülkiyet hükümleri, garanti muafiyetleri ve tazminat yükümlülüğü olmaksızın gerçekleştirilebilir.
          </p>
        </section>

        {/* 6. ÜÇÜNCÜ TARAF BAĞLANTILAR */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>6. Üçüncü Taraf Bağlantılar</h2>
          <p style={styles.text}>
            MEBİ, uygulama veya site içerisindeki 3. parti site bağlantılarının şikayet edilmesi durumunda bu bağlantılara müdahale etme hakkına sahiptir. 
            MEBİ, paylaştığı içeriklerdeki indirme bağlantıları ya da herhangi bir 3. parti siteye yönlendirme bağlantısından doğabilecek ihtilaflardan sorumlu değildir.
          </p>
        </section>

        {/* 7. UYGULANACAK HUKUK */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>7. Uygulanacak Hukuk</h2>
          <p style={styles.text}>
            Bu anlaşma dahilindeki herhangi bir maddeyi kapsayan detaylı kurallar ve politikaların ihtilafı durumunda <strong>Türkiye Cumhuriyeti kanunları</strong> geçerlidir.
          </p>
        </section>

        {/* 8. DEĞİŞİKLİKLER */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>8. Değişiklikler</h2>
          <p style={styles.text}>
            MEBİ, bu anlaşma kapsamında güncellenen şartları sitede veya uygulamada yayınlamak ile yükümlüdür. 
            <strong>T.C. Milli Eğitim Bakanlığı Materyal ve İçerik Geliştirme Daire Başkanlığı</strong>, bu maddelerin tamamını tek taraflı olarak değiştirme hakkını saklı tutar. 
            Değişikliklerin ardından MEBİ’yi kullanmaya devam etmeniz, yeni şartların kabul edildiğini gösterir.
          </p>
        </section>
      </main>

      {/* FOOTER / İLETİŞİM */}
      <footer style={styles.footer}>
        <h3 style={{color: '#333', marginBottom: '10px'}}>İletişim</h3>
        <p>
          Gizlilik politikamız veya uygulamamızla ilgili soru ve görüşleriniz için resmi e-posta adresimizden bize ulaşabilirsiniz:
        </p>
        <p style={{marginTop: '10px'}}>
          <strong>Geliştirici:</strong> T.C. Milli Eğitim Bakanlığı Materyal ve İçerik Geliştirme Daire Başkanlığı<br />
          <strong>E-Posta:</strong> <a href="mailto:mebi@meb.gov.tr" style={styles.link}>mebi@meb.gov.tr</a>
        </p>
        <p style={{marginTop: '20px', fontSize: '0.8rem'}}>
          &copy; {new Date().getFullYear()} T.C. Milli Eğitim Bakanlığı. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}

export default App;