import footer_icon from '../assets/icons/tel_icon.svg';
import footer_mail from '../assets/footer/mail_hraviratoms.svg';
import footer_facebook_icon from '../assets/footer/facebook_icon.svg';
import footer_instagram_icon from '../assets/footer/instagram_icon.svg';
import footer_tiktok_icon from '../assets/footer/tik-tok.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src="/hraviratoms_logo.webp" alt="Hraviratoms logo" className="footer-logo-img" />
        </div>

        <p className="footer-domain">hraviratoms.com</p>

        <div className="footer-contact">
          <div style={{display: 'flex', gap: '8px', padding: '4px', alignItems: 'center'}}>
            <img src={footer_icon} width="20" height="20" alt="" />
            <a href="tel:+37455522285">+374 55 52 22 85</a>
          </div>
        </div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
          <img src={footer_mail} width="22" height="22" alt="mail_icon" />
          <a href="mailto:hraviratoms.com@gmail.com?subject=Without%20Minimum%20Subject&body=As%20a%20letter" target="_blank" rel="noreferrer">hraviratoms.com@gmail.com</a>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-social">
          <a href="https://www.facebook.com/share/1Bo7zzyW7E/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
            <img src={footer_facebook_icon} alt="facebook_icon" />
          </a>
          <a href="https://www.instagram.com/hraviratoms_com?igsh=MTFwczgyaXpsMXVidw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
            <img src={footer_instagram_icon} alt="instagram_icon" />
          </a>
          <a href="https://www.tiktok.com/@hraviratoms_com" target="_blank" rel="noopener noreferrer">
            <img src={footer_tiktok_icon} alt="TikTok - hraviratoms" />
          </a>
          <a href="https://t.me/hraviratoms_com" target="_blank" rel="noopener noreferrer">
            <img src="/telegram_icon.svg" alt="Telegram - hraviratoms" />
          </a>
          <a href="https://www.youtube.com/@Hraviratomser" target="_blank" rel="noopener noreferrer">
            <img src="/youtube_icon.svg" alt="YouTube - Hraviratomser" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
