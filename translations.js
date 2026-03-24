/**
 * 串間よし乃公式サイト - 日英切り替え
 */

const TRANSLATIONS = {
  // ===== Hero =====
  'hero-motto': 'Keep striving until the effort pays off',
  'hero-desc': 'Japanese pro padel player competing on the world stage.<br>Making new history in Japanese padel.',
  'hero-btn-contact': 'Contact',
  'hero-btn-profile': 'View Profile',
  'hero-stat-1-label': 'FIP Ranking (as of 2026/2/23)',
  'hero-stat-2-label': 'Countries Competed In',

  // ===== About =====
  'about-title': 'Profile',
  'about-subtitle': 'A professional padel player competing on the world stage',
  'about-floating-strong': 'World Ranking',
  'about-floating-span': '#160',
  'about-heading': 'From Tennis to Padel.<br>A <span>World</span> Challenge',
  'about-p1': 'After excelling at the Nihon University varsity tennis team, she joined an IT company and continued tennis as a hobby. While working as a company employee, she discovered padel and made the switch in January 2024. Also selected for the Japan National Team within just 1 year, competing on the world stage in 2024 and 2025.',
  'about-p2': 'Until December 2025, she balanced full-time work at an IT company with her athletic career. From January 2026, she joined Rintaroland Co., Ltd. as an athlete employee, pursuing a dual career as both an employee and professional player. She is competing worldwide, aiming to improve her FIP ranking and qualify for the Premier Padel main draw.',
  'about-info-1-strong': 'March 27, 1998',
  'about-info-1-small': 'Date of Birth',
  'about-info-2-strong': 'Tokyo, Japan',
  'about-info-2-small': 'Birthplace',
  'about-info-3-strong': 'Nihon University',
  'about-info-3-small': 'Education',
  'about-info-4-strong': 'Jan 2024 ~',
  'about-info-4-small': 'Started Padel',

  // ===== Profile Table =====
  'profile-heading': 'Player Data',
  'profile-th-1': 'Name',
  'profile-th-2': 'Date of Birth',
  'profile-td-2': 'March 27, 1998',
  'profile-th-3': 'Birthplace',
  'profile-td-3': 'Tokyo, Japan',
  'profile-th-4': 'Education',
  'profile-td-4': 'Nihon University, Faculty of Humanities and Sciences, Dept. of Mathematics',
  'profile-th-5': 'Sport',
  'profile-td-5': 'Padel (from January 2024)',
  'profile-th-6': 'FIP Ranking',
  'profile-td-6': '#160 (as of Feb 23, 2026 / 189 points)',
  'profile-th-7': 'National Team',
  'profile-td-7': 'Selected 2024 & 2025 (consecutive)',
  'profile-th-8': 'Career',
  'profile-td-8': 'Professional Padel Player / Athlete Employee at Rintaroland Co., Ltd. (Dual Career)',
  'profile-th-9': 'Goals',
  'profile-td-9': 'Improve FIP Ranking / Qualify for Premier Padel Main Draw',

  // ===== Career Journey =====
  'career-heading': 'Career Journey',
  'career-col-before': 'Tennis Era',
  'career-col-after': 'Padel Era',
  'career-1-year': 'Age 6',
  'career-1-title': 'Started Tennis',
  'career-1-desc': 'Began playing tennis at age 6',
  'career-1b-year': 'Age 8-12',
  'career-1b-title': 'Also Played Soccer',
  'career-1b-desc': 'Played soccer alongside tennis',
  'career-2-year': 'Middle & High School',
  'career-2-title': 'Fujimigaoka Tennis Club',
  'career-2-desc': 'Competed in the tennis club',
  'career-3-year': 'University',
  'career-3-title': 'Nihon University Tennis Club',
  'career-3-desc': 'Best result: Kanto Student Championship. IT staff for Kanto Student Tennis Federation',
  'career-4-year': 'After University',
  'career-4-title': 'Joined IT Company / Tennis as Hobby',
  'career-4-desc': 'Continued tennis as a hobby',
  'career-5-year': '2024.01',
  'career-5-title': 'Started Padel',
  'career-5-desc': 'Switched to padel while working as an employee',
  'career-6-title': 'World Championship / APPT Master Final',
  'career-6-desc': 'World Championship & APPT Master Final',
  'career-7-title': 'FIP Tour World Campaign / Premier Padel',
  'career-7-desc': 'Competed in 15+ countries. Left IT company in December',
  'career-8-title': 'Joined Rintaroland / Dual Career',
  'career-8-desc': 'Athlete employee, competing worldwide',

  // ===== Achievements =====
  'achievements-title': 'Achievements',
  'achievements-subtitle': 'Major tournament achievements',
  'ach-1-title': 'World Championship Debut',
  'ach-1-badge': 'World Stage',
  'ach-1-desc': 'Reached the world stage within 1 year of starting padel.',
  'ach-2-title': 'World Padel Championship',
  'ach-2-badge': 'Competed',
  'ach-2-desc': 'Competed in the World Championship. Japan National Team member.',
  'ach-3-title': 'APPT Master Final',
  'ach-3-badge-1': 'Runner-up',
  'ach-3-badge-2': 'Semi-final',
  'ach-3-desc': 'Mixed Doubles Runner-up, Women\'s Doubles Semi-finalist.',
  'ach-4-title': 'FIP Tour World Campaign',
  'ach-4-badge': 'Worldwide',
  'ach-4-desc': 'Competed worldwide on the FIP Tour. Climbing the rankings.',
  'ach-5-title': 'Cupra FIP Finals',
  'ach-5-desc': 'Competed in the FIP Finals held in China.',
  'ach-6-title': 'FIP Ranking Climbing',
  'ach-6-badge': '#160s',
  'ach-6-desc': 'Competing worldwide and climbing the rankings.',

  // ===== Results =====
  'results-title': 'Tournament Results',
  'results-subtitle': 'FIP Tour / Premier Padel Results',
  'results-th-date': 'Date',
  'results-th-tournament': 'Tournament',
  'results-th-location': 'Location',
  'results-th-result': 'Result',
  'results-view-all': 'View All Results',

  // ===== Schedule =====
  'schedule-title': 'Upcoming Tournaments',
  'schedule-subtitle': 'Cupra FIP Tour Entered Events',
  'schedule-entered': 'Entered',
  'schedule-coming': 'Coming Soon',
  'schedule-additional': 'Additional Entries',
  'schedule-tbd': 'Updated when confirmed',
  'schedule-regular': 'Regular Updates',
  'schedule-fip-note': 'Check the <a href="https://www.padelfip.com/player/yoshino-kushima/" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: underline;">FIP Official Website</a> for the latest information',

  // ===== Gallery =====
  'gallery-title': 'Gallery',
  'gallery-subtitle': 'Match and practice moments',
  'gallery-more': 'Show More',
  'gallery-close': 'Close',

  // ===== News =====
  'news-title': 'Latest News',
  'news-subtitle': 'Activity reports and media appearances',
  'news-toggle-show': 'View Past News',
  'news-toggle-hide': 'Show Latest Only',
  // News items
  'news-1-title': 'FIP Bronze Bahrain Result: R32',
  'news-1-excerpt': 'Competed in FIP Bronze Bahrain. Result: R32. Moving on to Egypt and Dubai for the next tournaments.',
  'news-1-tag': 'Match',
  'news-2-title': 'Self-Introduction | An Athlete Challenging the World',
  'news-2-excerpt': 'Published a self-introduction article on Note about the transition from tennis to padel and the challenge to compete globally.',
  'news-2-tag': 'Note',
  'news-3-title': 'Joined Rintaroland Co., Ltd.',
  'news-3-excerpt': 'Joined Rintaroland Co., Ltd. as an athlete employee from January 2026. Continuing dual career alongside professional padel.',
  'news-3-tag': 'Career',

  // ===== Sponsors =====
  'sponsors-title': 'Partners',
  'sponsors-subtitle': 'Companies and organizations supporting our activities',
  'sponsors-intro': 'Kushima Yoshino\'s activities are supported by our partners. Through the growing sport of padel, we contribute to enhancing our partners\' brand value.',
  'sponsor-cat-1': 'Partner',
  'sponsor-cat-2': 'Padel Equipment',
  'sponsor-cat-3': 'International Communications',
  'sponsor-cat-4': 'Supplements & Drinks',
  'sponsor-cat-5': 'Insoles',
  'sponsor-cat-6': 'Grip Tape',
  'sponsors-cta-title': 'Partnership Information',
  'sponsors-cta-desc': 'Padel is played by over 35 million people worldwide, expanding rapidly across Europe, the Middle East and Southeast Asia. With the sport growing in Japan too, early partners gain a powerful first-mover advantage.',
  // What I Bring
  'what-i-bring-heading': 'What I Bring',
  'wib-1-title': 'Compete on the World Stage',
  'wib-1-desc': 'Competing in 15+ international tournaments across 15+ countries each year, challenging the world',
  'wib-2-title': 'Bring Padel to Japan',
  'wib-2-desc': 'Delivering the excitement of padel to as many people as possible through experience sessions and events',
  'wib-3-title': 'Share the Story',
  'wib-3-desc': 'Sharing the behind-the-scenes of each challenge and the world of padel in real-time through SNS and media',
  // Partnership Benefits
  'partnership-benefits-heading': 'Partnership Benefits',
  'partner-1-title': 'Take Your Brand Global',
  'partner-1-desc': 'Your brand reaches the world through logo placement on apparel, equipment, and tournament venues',
  'partner-2-title': 'Tell It Together',
  'partner-2-desc': 'Joint storytelling through SNS, media coverage, and official website as true partners',
  'partner-3-title': 'Co-create Experiences',
  'partner-3-desc': 'Jointly plan and host padel experience sessions and branding events',
  'partnership-cta-btn': 'Inquire About Partnership',
  'sponsors-btn-support': 'Support Yoshino',
  'sponsors-btn-partnership': 'Partnership Details',
  // Support page
  'support-back': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back to Top',
  'support-page-title': 'Support Kushima Yoshino',
  'support-page-subtitle': 'Your support fuels the journey to the world stage',
  // Intro
  'support-intro-title': 'Challenge the World Together',
  'support-intro-text1': 'Yoshino started competing in January 2024, and in just 9 months earned a spot on the Japanese national team, winning the Asian championship and finishing 11th at the World Championships. Since 2025, she has been competing individually on the world tour and is currently ranked 160th. She continues to push for higher world rankings on the global stage.',
  'support-intro-text2': 'Competing on the world stage requires significant personal expenses. On this page, we are looking for supporters who can help fund Yoshino\'s challenge through donations. Your contributions go toward international tournament entry fees and improving her daily training environment.',
  'support-intro-text3': 'She is committed to delivering results on the court so that every supporter can truly feel that their support was worthwhile. Even a small step can be a great push toward a big dream — please consider joining her journey.',
  // Why Padel
  'why-padel-title': 'Why Padel?',
  'why-padel-desc': 'Padel is one of the fastest-growing sports in the world. Now is a special time to get involved.',
  'why-padel-1-title': '35 Million Players Worldwide',
  'why-padel-1-desc': 'Played in over 90 countries and expanding rapidly across Europe, the Middle East, and Southeast Asia. The next major racket sport after tennis.',
  'why-padel-2-title': 'Still Early Days in Japan',
  'why-padel-2-desc': 'While the sport is booming globally, Japan is just getting started. Supporting now means being part of the story from the very beginning.',
  'why-padel-3-title': 'Be a First Supporter',
  'why-padel-3-desc': 'Watch the future of Japanese padel unfold from the front row. That\'s the unique value of getting involved today.',
  // 3 Reasons to Support
  'why-support-title': '3 Reasons to Support Yoshino',
  'why-support-desc': 'Supporters get to share the journey behind the scenes and enjoy exclusive experiences.',
  'why-support-1-title': 'Share the Journey',
  'why-support-1-desc': 'Get real-time updates through activity reports and private Instagram stories as Yoshino competes around the world.',
  'why-support-2-title': 'Become Part of the Team',
  'why-support-2-desc': 'Unlike corporate sponsors, you join the challenge as an individual. Share the victories and the setbacks — be the closest supporter there is.',
  'why-support-3-title': 'Make History Together',
  'why-support-3-desc': 'Your support fuels Japan\'s representative on the world stage. Together, we\'re writing a chapter of padel history that\'s never been told.',
  // Fund Usage
  'fund-title': 'How Funds Are Used',
  'fund-desc': 'Your support goes directly toward competing on the world stage.',
  'fund-1-title': 'Travel Expenses',
  'fund-1-desc': 'Flights and accommodation for 15+ international tournaments per year — essential for improving world ranking.',
  'fund-2-title': 'Equipment & Training',
  'fund-2-desc': 'Rackets, shoes, physical training, and coaching to stay competitive at the highest level.',
  'fund-3-title': 'Padel Promotion',
  'fund-3-desc': 'Hosting experience sessions and events to grow padel in Japan.',
  // CTA
  'support-cta-title': 'For Support Plans, Please Contact Us',
  'support-cta-desc': 'We\'ll suggest a support plan that\'s right for you. Feel free to reach out.',
  'support-cta-btn': 'Contact Us',
  // Partnership page
  'partnership-back': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back to Top',
  'partnership-page-title': 'Partnership Opportunities',
  'partnership-page-subtitle': 'Enhance your brand value through the fastest-growing sport in the world',
  'ps-intro-title': 'Partnership Recruitment',
  'ps-intro-text1': 'Kushima Yoshino is looking for partner companies to support her competitive activities. We offer PR and promotional opportunities that contribute to enhancing your corporate value.',
  'ps-intro-text2': 'Padel is played by over 35 million people across 90+ countries and is one of the fastest-growing sports in the world. With padel growing in Japan too, becoming a partner now gives you first-mover brand recognition. Join Kushima Yoshino in the challenge to compete on the world stage.',
  'ps-benefit-title': 'Benefits for Partner Companies',
  'ps-benefit-desc': 'Through our partnership, we provide the following benefits.',
  'ps-b1-num': '01',
  'ps-b1-title': 'PR Through International Tournaments & Events',
  'ps-b1-desc': 'Gain exposure as a partner company at international tournaments, domestic events, and media coverage. Build connections between your company and sports fans through padel experience sessions and clinics.',
  'ps-b2-num': '02',
  'ps-b2-title': 'Enhance Your Brand Value',
  'ps-b2-desc': 'Display your company name and logo on our official website, apparel, and SNS to boost brand awareness. Reach a wide audience of padel fans and sports enthusiasts across all demographics.',
  'ps-b3-num': '03',
  'ps-b3-title': 'Social Contribution Through Athlete Support',
  'ps-b3-desc': 'Supporting an athlete who continues to challenge at international competitions contributes to sports promotion and the development of future generations. Enhance your company\'s social credibility through sports-related CSR activities.',
  'ps-b4-num': '04',
  'ps-b4-title': 'Reach New Customer Segments & Talent',
  'ps-b4-desc': 'Expand corporate awareness among those interested in padel and sports. The spirit of taking on challenges enhances your brand image and can positively impact recruitment efforts.',
  'ps-achievement-title': 'Aiming for Victory on the World Stage',
  'ps-achievement-text1': 'Kushima Yoshino started competing in padel in January 2024, and in just 9 months was selected for the Japanese national team. She won the Asian championship and finished 11th at the World Championships. Since 2025, she has been competing individually on the world tour, currently ranked 160th.',
  'ps-achievement-text2': 'Your support goes toward international tournament travel expenses, equipment costs, and training fees — all essential for competing on the world stage. Join us in supporting Yoshino\'s challenge to reach the top.',
  'pcta-title': 'For Plans, Please Contact Us',
  'pcta-desc': 'We\'ll propose a partnership plan tailored to your needs. Feel free to reach out.',
  'pcta-btn': 'Contact Us',

  // ===== Contact =====
  'contact-title': 'Contact',
  'contact-subtitle': 'Feel free to contact us for media, partnership, events, and more',
  'contact-heading': 'Feel Free to Reach Out',
  'contact-desc': 'Whether it\'s partnership, media coverage, event appearances, or padel experience sessions, don\'t hesitate to get in touch.',
  'contact-email-label': 'Email inquiry',
  'contact-note-label': 'Activity Reports',
  'form-name-label': 'Name',
  'form-company-label': 'Company',
  'form-email-label': 'Email Address',
  'form-category-label': 'Inquiry Type',
  'form-message-label': 'Message',
  'form-submit': 'Send',
  'form-placeholder-name': 'Your Name',
  'form-placeholder-company': 'Company Name',
  'form-placeholder-email': 'example@email.com',
  'form-placeholder-message': 'Please enter your message',
  'form-opt-default': 'Please select',
  'form-opt-individual-support': 'Individual Support',
  'form-opt-sponsor': 'Partnership',
  'form-opt-media': 'Media Coverage',
  'form-opt-event': 'Event Appearance',
  'form-opt-lesson': 'Padel Experience / Lessons',
  'form-opt-fan': 'Fan Mail / Support',
  'form-opt-other': 'Other',

  // ===== Footer =====
  'footer-desc': 'Bringing the excitement of padel from Japan to the world. Official website of padel player Kushima Yoshino.',
  'footer-support-sponsors': 'Partners',
  'footer-support-contact': 'Contact',
  'footer-fip': 'FIP Official',
  'footer-copyright': '&copy; 2026 Kushima Yoshino. All rights reserved.',

  // ===== Results Page =====
  'results-back': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back to Top',
  'results-page-title': 'All Results',
  'rp-stat-1': 'FIP Ranking (as of 2026/2/23)',
  'rp-stat-2': 'Points',
  'rp-stat-3': 'Tournaments',
  'rp-th-category': 'Category',
  'rp-fip-note': 'Check the latest results on the <a href="https://www.padelfip.com/player/yoshino-kushima/" target="_blank" rel="noopener">FIP Official Website</a>'
};

// ===== Language Toggle Logic =====
let currentLang = localStorage.getItem('lang') || 'ja';

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (lang === 'en' && TRANSLATIONS[key]) {
      if (!el.dataset.jaText) el.dataset.jaText = el.innerHTML;
      el.innerHTML = TRANSLATIONS[key];
    } else if (lang === 'ja' && el.dataset.jaText) {
      el.innerHTML = el.dataset.jaText;
    }
  });

  // Handle placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (lang === 'en' && TRANSLATIONS[key]) {
      if (!el.dataset.jaPlaceholder) el.dataset.jaPlaceholder = el.placeholder;
      el.placeholder = TRANSLATIONS[key];
    } else if (lang === 'ja' && el.dataset.jaPlaceholder) {
      el.placeholder = el.dataset.jaPlaceholder;
    }
  });

  // Update toggle buttons (JP | EN pair)
  document.querySelectorAll('.lang-switch').forEach(sw => {
    const btns = sw.querySelectorAll('button');
    btns.forEach(btn => {
      const isJp = btn.textContent.trim() === 'JP';
      const isActive = (lang === 'ja' && isJp) || (lang === 'en' && !isJp);
      btn.classList.toggle('active', isActive);
      // For results.html inline styles
      if (btn.style.background !== undefined && sw.style.border) {
        btn.style.background = isActive ? 'rgba(255,255,255,0.2)' : 'transparent';
        btn.style.color = isActive ? '#fff' : 'rgba(255,255,255,0.6)';
      }
    });
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';

  currentLang = lang;
  localStorage.setItem('lang', lang);
}

function switchLang(lang) {
  if (lang === currentLang) return;
  applyLanguage(lang);
}

function toggleLanguage() {
  switchLang(currentLang === 'ja' ? 'en' : 'ja');
}

// Apply saved language on load
document.addEventListener('DOMContentLoaded', () => {
  if (currentLang === 'en') {
    applyLanguage('en');
  }
});
