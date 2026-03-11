// Bot koruması için honeypot ve davranış analizi

export class BotProtection {
  // Honeypot form alanları
  static honeypotFields = [
    'website',
    'url', 
    'company',
    'fax',
    'phone2'
  ];
  
  // Form gönderim hızı kontrolü
  static submissionTimes = new Map<string, number>();
  
  /**
   * Honeypot alanı oluştur (botlar doldurur, gerçek kullanıcılar görmez)
   */
  static createHoneypotField(): string {
    const fieldName = this.honeypotFields[Math.floor(Math.random() * this.honeypotFields.length)];
    return `
      <div style="position:absolute;left:-9999px;top:-9999px;opacity:0;pointer-events:none;" aria-hidden="true">
        <input type="text" name="${fieldName}" tabindex="-1" autocomplete="off" 
               style="width:1px;height:1px;padding:0;margin:0;border:0;"
               placeholder="Leave this empty">
      </div>
    `;
  }
  
  /**
   * Form honeypot kontrolü
   */
  static checkHoneypot(formData: FormData): boolean {
    for (const field of this.honeypotFields) {
      const value = formData.get(field);
      if (value && value.toString().trim() !== '') {
        console.log(`🤖 Honeypot triggered: ${field}`);
        return false; // Bot tespit edildi
      }
    }
    return true; // Güvenli
  }
  
  /**
   * Form gönderim hızı kontrolü (botlar çok hızlı doldurur)
   */
  static checkSubmissionSpeed(sessionId: string, minTimeMs: number = 3000): boolean {
    const now = Date.now();
    const lastSubmission = this.submissionTimes.get(sessionId);
    
    if (!lastSubmission) {
      this.submissionTimes.set(sessionId, now);
      return true;
    }
    
    const elapsed = now - lastSubmission;
    
    // Çok hızlı gönderim (bot)
    if (elapsed < minTimeMs) {
      console.log(`⚡ Too fast submission: ${elapsed}ms`);
      return false;
    }
    
    // Zamanı güncelle
    this.submissionTimes.set(sessionId, now);
    return true;
  }
  
  /**
   * Mouse hareketi kontrolü (gerçek kullanıcılar hareket eder)
   */
  static hasMouseMovement(): Promise<boolean> {
    return new Promise((resolve) => {
      let hasMoved = false;
      
      const checkMovement = () => {
        hasMoved = true;
        cleanup();
        resolve(true);
      };
      
      const cleanup = () => {
        document.removeEventListener('mousemove', checkMovement);
        document.removeEventListener('touchstart', checkMovement);
        document.removeEventListener('scroll', checkMovement);
      };
      
      document.addEventListener('mousemove', checkMovement, { once: true });
      document.addEventListener('touchstart', checkMovement, { once: true });
      document.addEventListener('scroll', checkMovement, { once: true });
      
      // 5 saniye sonra kontrol et
      setTimeout(() => {
        cleanup();
        resolve(hasMoved);
      }, 5000);
    });
  }
  
  /**
   * JavaScript desteği kontrolü (basit botlar JS çalıştırmaz)
   */
  static generateToken(): string {
    return btoa(Date.now().toString() + Math.random().toString());
  }
  
  /**
   * Cloudflare Turnstile entegrasyonu için hazırlık
   * (reCAPTCHA yerine - SEO dostu)
   */
  static async verifyTurnstile(token: string, secret: string): Promise<boolean> {
    try {
      const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secret,
          response: token,
        }),
      });
      
      const data = await response.json();
      return data.success === true;
    } catch (error) {
      console.error('Turnstile verification failed:', error);
      return false;
    }
  }
}

// Cloudflare Pages Analytics için bot tespiti
export function isBotRequest(userAgent: string): boolean {
  const botPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /curl/i,
    /wget/i,
    /python/i,
    /java/i,
    /scrapy/i,
    /httpclient/i
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
}