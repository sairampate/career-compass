/**
 * Career Compass — Main Application
 * 500 Paths to Success | UNICEF India x Ministry of Education
 */

// ── APP STATE ──────────────────────────────────────────────────
const App = {
  state: {
    currentScreen: 'home',
    student: { name: '', age: '', institute: '' },
    language: 'en',
    quizAnswers: {},
    domainScores: {},
    careerScores: {},
    quizCompleted: false,
    currentQuestion: 0,
    portfolio: [],
    compareList: [],
    teacherLoggedIn: false,
    filterDomain: 'all',
    searchQuery: '',
    studentRecords: [], // simulated class data
    discoveryCompleted: false,
    discoveryAnswers: {
      aboutYou: { selfDesc: '', freeTime: '', recentExcitement: '', worldProblem: '', inspiration: '' },
      vark: { q1: '', q2: '', q3: '', q4: '', q5: '', q6: '' },
      lifeSkills: { q1: 3, q2: 3, q3: 3, q4: 3, q5: 3, q6: 3 },
      purpose: { sdgAware: '', selectedSDGs: [], futureImpact: '', doneSDG: '' },
      careerSupport: { career: '', reason: '', helpNeeded: '', financialNeed: '', talkCounselor: '' },
      snapshot: { clubs: false, project: false, onlineCourse: false, competition: false, visitedSite: false, collab: false, comments: '' }
    }
  },
  discoveryStep: 1,

  // ── TRANSLATIONS ────────────────────────────────────────────
  i18n: {
    en: {
      appName: 'Career Compass',
      tagline: '500 Paths. Your Journey Starts Here.',
      startJourney: 'Start Your Journey',
      takQuiz: 'Take Interest Quiz',
      exploreAll: 'Explore All Careers',
      myPortfolio: 'My Portfolio',
      compare: 'Compare',
      pathfinder: 'Pathfinder',
      teacherDash: 'Teacher',
      addPortfolio: '+ Portfolio',
      addCompare: '⇄ Compare',
      question: 'Question',
      of: 'of',
      next: 'Next →',
      back: '← Back',
      submit: 'Submit Quiz',
      yourTopDomains: 'Your Top Career Domains',
      interestScore: 'Interest Score',
      startingSalary: 'Starting Salary',
      highestSalary: 'Highest Salary',
      famousPeople: 'Famous Persons',
      qualifications: 'Qualifications',
      skills: 'Skills',
      entranceExams: 'Entrance Exams',
      scholarships: 'Scholarships',
      careerPath: 'Career Path',
      workEnvironment: 'Work Environment',
      grade10Focus: 'Class 10 Focus',
      grade12Stream: 'Class 12 Stream',
      viewDetails: 'View Details',
      searchPlaceholder: 'Search careers...',
      allDomains: 'All Domains',
      allSteam: 'All STEAM',
      welcomeTitle: '500 Paths to',
      welcomeTitleAccent: 'Success',
      welcomeSubtitle: 'Discover careers that match your interests from 500 professions across 13 domains.',
      yourName: 'Your Name',
      yourAge: 'Your Age',
      yourInstitute: 'Your Institute',
      enterName: 'Enter your name',
      enterInstitute: 'Enter institute name',
      selectAge: 'Select Age',
      age10_15: '10-15 Years',
      age16_21: '16-21 Years',
      age21_25: '21-25 Years',
      ageAbove25: 'Above 25 Years',
      beginExploration: 'Begin Exploration →',
      quizTitle: 'Interest Discovery Quiz',
      quizSubtitle: '13 questions · One per career domain · Discover your perfect fit',
      resultsTitle: 'Your Career DNA',
      resultsSubtitle: 'Based on your 13 answers, here\'s how each career domain matches your interests:',
      exploreYourMatches: 'Explore Your Matches →',
      portfolioTitle: 'My Career Portfolio',
      portfolioSubtitle: 'Careers you\'ve saved. Add a note about why you\'re interested.',
      compareTitle: 'Career Comparison',
      compareSubtitle: 'Compare up to 3 careers side by side',
      pathfinderTitle: 'Career Pathfinder',
      pathfinderSubtitle: 'Select a career to see your step-by-step educational roadmap',
      teacherTitle: 'Teacher Dashboard',
      teacherSubtitle: 'Monitor your class\'s career exploration',
      teacherPin: 'Teacher PIN',
      enterPin: 'Enter PIN to access dashboard',
      accessDash: 'Access Dashboard',
      printCard: '🖨 Print Card',
      savedToPortfolio: '✓ Added to your portfolio!',
      alreadySaved: 'Already in your portfolio',
      addedToCompare: '⇄ Added to comparison',
      compareLimit: 'Max 3 careers in comparison. Remove one first.',
      alreadyCompared: 'Already in comparison list',
      noResults: 'No careers match your search. Try different keywords.',
      compareEmpty: 'Add careers from the Explorer to compare them here.',
      portfolioEmpty: 'No careers saved yet. Explore and add careers to your portfolio!'
    },
    hi: {
      appName: 'करियर कम्पास',
      tagline: '500 रास्ते। आपकी यात्रा यहाँ शुरू होती है।',
      startJourney: 'यात्रा शुरू करें',
      takQuiz: 'रुचि प्रश्नोत्तरी लें',
      exploreAll: 'सभी करियर देखें',
      myPortfolio: 'मेरा पोर्टफोलियो',
      compare: 'तुलना करें',
      pathfinder: 'पथदर्शक',
      teacherDash: 'शिक्षक',
      addPortfolio: '+ पोर्टफोलियो',
      addCompare: '⇄ तुलना',
      question: 'प्रश्न',
      of: 'में से',
      next: 'अगला →',
      back: '← पीछे',
      submit: 'प्रश्नोत्तरी जमा करें',
      yourTopDomains: 'आपके शीर्ष करियर क्षेत्र',
      interestScore: 'रुचि स्कोर',
      startingSalary: 'शुरुआती वेतन',
      highestSalary: 'अधिकतम वेतन',
      famousPeople: 'प्रसिद्ध व्यक्तित्व',
      qualifications: 'योग्यताएं',
      skills: 'कौशल',
      entranceExams: 'प्रवेश परीक्षाएं',
      scholarships: 'छात्रवृत्तियां',
      careerPath: 'करियर पथ',
      workEnvironment: 'कार्य वातावरण',
      grade10Focus: 'कक्षा 10 फोकस',
      grade12Stream: 'कक्षा 12 धारा',
      viewDetails: 'विवरण देखें',
      searchPlaceholder: 'करियर खोजें...',
      allDomains: 'सभी क्षेत्र',
      allSteam: 'सभी STEAM',
      welcomeTitle: '500 रास्ते',
      welcomeTitleAccent: 'सफलता के',
      welcomeSubtitle: '13 क्षेत्रों में 500 व्यवसायों में से अपनी रुचि के अनुसार करियर खोजें।',
      yourName: 'आपका नाम',
      yourAge: 'आपकी उम्र',
      yourInstitute: 'आपका संस्थान',
      enterName: 'अपना नाम दर्ज करें',
      enterInstitute: 'संस्थान का नाम दर्ज करें',
      selectAge: 'उम्र चुनें',
      age10_15: '10-15 वर्ष',
      age16_21: '16-21 वर्ष',
      age21_25: '21-25 वर्ष',
      ageAbove25: '25 वर्ष से अधिक',
      beginExploration: 'अन्वेषण शुरू करें →',
      quizTitle: 'रुचि खोज प्रश्नोत्तरी',
      quizSubtitle: '13 प्रश्न · एक प्रति करियर क्षेत्र · अपनी सर्वश्रेष्ठ फिट खोजें',
      resultsTitle: 'आपका करियर DNA',
      resultsSubtitle: 'आपके 13 उत्तरों के आधार पर, यहाँ प्रत्येक करियर क्षेत्र आपकी रुचियों से कैसे मेल खाता है:',
      exploreYourMatches: 'अपने मैच देखें →',
      portfolioTitle: 'मेरा करियर पोर्टफोलियो',
      portfolioSubtitle: 'आपके सहेजे गए करियर। नोट जोड़ें।',
      compareTitle: 'करियर तुलना',
      compareSubtitle: 'एक साथ 3 करियर की तुलना करें',
      pathfinderTitle: 'करियर पथदर्शक',
      pathfinderSubtitle: 'चरण-दर-चरण शैक्षिक रोडमैप देखने के लिए करियर चुनें',
      teacherTitle: 'शिक्षक डैशबोर्ड',
      teacherSubtitle: 'अपनी कक्षा की करियर अन्वेषण देखें',
      teacherPin: 'शिक्षक PIN',
      enterPin: 'डैशबोर्ड एक्सेस करने के लिए PIN दर्ज करें',
      accessDash: 'डैशबोर्ड एक्सेस करें',
      printCard: '🖨 कार्ड प्रिंट करें',
      savedToPortfolio: '✓ पोर्टफोलियो में जोड़ा गया!',
      alreadySaved: 'पहले से पोर्टफोलियो में है',
      addedToCompare: '⇄ तुलना में जोड़ा गया',
      compareLimit: 'अधिकतम 3 करियर। पहले एक हटाएं।',
      alreadyCompared: 'पहले से तुलना सूची में है',
      noResults: 'कोई करियर नहीं मिला। अलग कीवर्ड आज़माएं।',
      compareEmpty: 'तुलना के लिए Explorer से करियर जोड़ें।',
      portfolioEmpty: 'अभी तक कोई करियर नहीं सहेजा गया। अपना पोर्टफोलियो बनाएं!'
    },
    te: {
      appName: 'కెరీర్ కంపాస్',
      tagline: '500 మార్గాలు. మీ ప్రయాణం ఇక్కడ ప్రారంభమవుతుంది.',
      startJourney: 'ప్రయాణం ప్రారంభించండి',
      takQuiz: 'ఆసక్తి క్విజ్ తీసుకోండి',
      exploreAll: 'అన్ని కెరీర్లు చూడండి',
      myPortfolio: 'నా పోర్ట్‌ఫోలియో',
      compare: 'పోల్చండి',
      pathfinder: 'మార్గదర్శి',
      teacherDash: 'ఉపాధ్యాయుడు',
      addPortfolio: '+ పోర్ట్‌ఫోలియో',
      addCompare: '⇄ పోల్చండి',
      question: 'ప్రశ్న',
      of: 'లో',
      next: 'తదుపరి →',
      back: '← వెనుకకు',
      submit: 'క్విజ్ సమర్పించండి',
      yourTopDomains: 'మీ అగ్ర కెరీర్ డొమైన్లు',
      interestScore: 'ఆసక్తి స్కోరు',
      startingSalary: 'ప్రారంభ వేతనం',
      highestSalary: 'అత్యధిక వేతనం',
      famousPeople: 'ప్రసిద్ధ వ్యక్తులు',
      qualifications: 'అర్హతలు',
      skills: 'నైపుణ్యాలు',
      entranceExams: 'ప్రవేశ పరీక్షలు',
      scholarships: 'స్కాలర్‌షిప్‌లు',
      careerPath: 'కెరీర్ మార్గం',
      workEnvironment: 'పని వాతావరణం',
      grade10Focus: '10వ తరగతి దృష్టి',
      grade12Stream: '12వ తరగతి స్ట్రీమ్',
      viewDetails: 'వివరాలు చూడండి',
      searchPlaceholder: 'కెరీర్లు వెతకండి...',
      allDomains: 'అన్ని డొమైన్లు',
      allSteam: 'అన్ని STEAM',
      welcomeTitle: '500 మార్గాలు',
      welcomeTitleAccent: 'విజయానికి',
      welcomeSubtitle: '13 రంగాలలో 500 వృత్తులలో మీ ఆసక్తులకు సరిపోయే కెరీర్‌ను కనుగొనండి।',
      yourName: 'మీ పేరు',
      yourAge: 'మీ వయస్సు',
      yourInstitute: 'మీ సంస్థ',
      enterName: 'మీ పేరు నమోదు చేయండి',
      enterInstitute: 'సంస్థ పేరు నమోదు చేయండి',
      selectAge: 'వయస్సు ఎంచుకోండి',
      age10_15: '10-15 సంవత్సరాలు',
      age16_21: '16-21 సంవత్సరాలు',
      age21_25: '21-25 సంవత్సరాలు',
      ageAbove25: '25 సంవత్సరాల కంటే ఎక్కువ',
      beginExploration: 'అన్వేషణ ప్రారంభించండి →',
      quizTitle: 'ఆసక్తి అన్వేషణ క్విజ్',
      quizSubtitle: '13 ప్రశ్నలు · ప్రతి కెరీర్ రంగానికి ఒకటి · మీకు సరిపోయేది కనుగొనండి',
      resultsTitle: 'మీ కెరీర్ DNA',
      resultsSubtitle: 'మీ 13 సమాధానాల ఆధారంగా, ప్రతి కెరీర్ రంగం మీ ఆసక్తులతో ఎలా సరిపోతుందో ఇక్కడ ఉంది:',
      exploreYourMatches: 'మీ మ్యాచ్‌లు చూడండి →',
      portfolioTitle: 'నా కెరీర్ పోర్ట్‌ఫోలియో',
      portfolioSubtitle: 'మీరు సేవ్ చేసిన కెరీర్లు. ఒక నోట్ జోడించండి.',
      compareTitle: 'కెరీర్ పోలిక',
      compareSubtitle: '3 కెరీర్లు పక్కపక్కన పోల్చండి',
      pathfinderTitle: 'కెరీర్ మార్గదర్శి',
      pathfinderSubtitle: 'దశల వారీ విద్యా రోడ్‌మ్యాప్ చూడటానికి ఒక కెరీర్‌ను ఎంచుకోండి',
      teacherTitle: 'ఉపాధ్యాయ డాష్‌బోర్డ్',
      teacherSubtitle: 'మీ తరగతి కెరీర్ అన్వేషణను పర్యవేక్షించండి',
      teacherPin: 'ఉపాధ్యాయ PIN',
      enterPin: 'డాష్‌బోర్డ్ యాక్సెస్ చేయడానికి PIN నమోదు చేయండి',
      accessDash: 'డాష్‌బోర్డ్ యాక్సెస్ చేయండి',
      printCard: '🖨 కార్డ్ ముద్రించండి',
      savedToPortfolio: '✓ పోర్ట్‌ఫోలియోకు జోడించబడింది!',
      alreadySaved: 'ఇప్పటికే పోర్ట్‌ఫోలియోలో ఉంది',
      addedToCompare: '⇄ పోలికకు జోడించబడింది',
      compareLimit: 'గరిష్టంగా 3 కెరీర్లు. ముందు ఒకటి తొలగించండి.',
      alreadyCompared: 'ఇప్పటికే పోలిక జాబితాలో ఉంది',
      noResults: 'మీ శోధనకు ఎటువంటి కెరీర్లు కనుగొనబడలేదు.',
      compareEmpty: 'పోలిక కోసం Explorer నుండి కెరీర్లు జోడించండి.',
      portfolioEmpty: 'ఇంకా కెరీర్లు సేవ్ చేయబడలేదు. మీ పోర్ట్‌ఫోలియో నిర్మించండి!'
    }
  },

  t(key) {
    return this.i18n[this.state.language][key] || this.i18n['en'][key] || key;
  },

  // ── INIT ─────────────────────────────────────────────────────
  init() {
    this.loadState();
    document.body.className = `lang-${this.state.language}`;
    this.renderNav();
    this.renderHomeScreen();
    this.attachNavListeners();
    this.showScreen('home');
    this.generateDemoStudentRecords();
  },

  loadState() {
    try {
      const saved = localStorage.getItem('careerCompassState');
      if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(this.state, parsed);
        
        // Clear active session elements on fresh load so the student must register/login
        this.state.student = { name: '', age: '', institute: '' };
        this.state.quizAnswers = {};
        this.state.domainScores = {};
        this.state.careerScores = {};
        this.state.quizCompleted = false;
        this.state.currentQuestion = 0;
        this.state.portfolio = [];
        this.state.compareList = [];
        this.state.portfolioNotes = {};
        this.state.discoveryCompleted = false;
        this.state.discoveryAnswers = {
          aboutYou: { selfDesc: '', freeTime: '', recentExcitement: '', worldProblem: '', inspiration: '' },
          vark: { q1: '', q2: '', q3: '', q4: '', q5: '', q6: '' },
          lifeSkills: { q1: 3, q2: 3, q3: 3, q4: 3, q5: 3, q6: 3 },
          purpose: { sdgAware: '', selectedSDGs: [], futureImpact: '', doneSDG: '' },
          careerSupport: { career: '', reason: '', helpNeeded: '', financialNeed: '', talkCounselor: '' },
          snapshot: { clubs: false, project: false, onlineCourse: false, competition: false, visitedSite: false, collab: false, comments: '' }
        };
        this.discoveryStep = 1;
      }
    } catch(e) { /* fresh start */ }
  },

  saveState() {
    try {
      localStorage.setItem('careerCompassState', JSON.stringify({
        student: this.state.student,
        language: this.state.language,
        quizAnswers: this.state.quizAnswers,
        domainScores: this.state.domainScores,
        careerScores: this.state.careerScores,
        quizCompleted: this.state.quizCompleted,
        portfolio: this.state.portfolio,
        compareList: this.state.compareList,
        portfolioNotes: this.state.portfolioNotes,
        studentRecords: this.state.studentRecords,
        discoveryCompleted: this.state.discoveryCompleted,
        discoveryAnswers: this.state.discoveryAnswers
      }));
    } catch(e) {}
  },

  // ── NAVIGATION ───────────────────────────────────────────────
  showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(`screen-${name}`);
    if (screen) {
      screen.classList.add('active');
      screen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.dataset.screen === name);
    });

    this.state.currentScreen = name;

    if (name === 'home') this.renderHomeScreen();
    if (name === 'discovery') this.renderDiscoveryScreen();
    if (name === 'explore') this.renderExploreScreen();
    if (name === 'quiz') this.renderQuizScreen();
    if (name === 'compare') this.renderCompareScreen();
    if (name === 'portfolio') this.renderPortfolioScreen();
    if (name === 'teacher') this.renderTeacherScreen();
    if (name === 'pathfinder') this.renderPathfinderScreen();
  },

  renderNav() {
    const nav = document.getElementById('main-nav');
    const lang = this.state.language;
    nav.innerHTML = `
      <a class="nav-logo" href="#" onclick="App.showScreen('home'); return false;" style="display:flex;align-items:center;gap:10px;">
        <img src="assets/etap_logo_3.png" alt="ETAP Logo" style="height:36px;width:auto;object-fit:contain;border-radius:4px;">
        <span class="nav-logo-text">Career <span>Compass</span></span>
      </a>
      <ul class="nav-links">
        <li><button class="nav-link ${this.state.student.name ? '' : 'hidden'}" data-screen="discovery" onclick="App.showScreen('discovery')">📋 Discovery Form</button></li>
        <li><button class="nav-link ${this.state.student.name ? '' : 'hidden'}" data-screen="explore" onclick="App.showScreen('explore')">${this.t('exploreAll')}</button></li>
        <li><button class="nav-link ${this.state.student.name ? '' : 'hidden'}" data-screen="quiz" onclick="App.showScreen('quiz')">🎯 Quiz</button></li>
        <li><button class="nav-link ${this.state.student.name ? '' : 'hidden'}" data-screen="compare" onclick="App.showScreen('compare')">⇄ ${this.t('compare')}</button></li>
        <li><button class="nav-link ${this.state.student.name ? '' : 'hidden'}" data-screen="pathfinder" onclick="App.showScreen('pathfinder')">🛤️ ${this.t('pathfinder')}</button></li>
        <li><button class="nav-link ${this.state.student.name ? '' : 'hidden'}" data-screen="portfolio" onclick="App.showScreen('portfolio')">📁 ${this.t('myPortfolio')}</button></li>
      </ul>
      <div class="nav-actions">
        <button class="nav-link" data-screen="teacher" onclick="App.showScreen('teacher')" style="margin-right:2px;">👩‍🏫 ${this.t('teacherDash')}</button>
        <div class="lang-selector">
          <button class="lang-btn ${lang === 'en' ? 'active' : ''}" onclick="App.setLanguage('en')">EN</button>
          <button class="lang-btn ${lang === 'hi' ? 'active' : ''}" onclick="App.setLanguage('hi')">हि</button>
          <button class="lang-btn ${lang === 'te' ? 'active' : ''}" onclick="App.setLanguage('te')">తె</button>
        </div>
        ${this.state.student.name ? `
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:0.8rem;color:var(--text-muted)">👤 ${this.state.student.name} (${this.state.student.age})</span>
            <button class="btn btn-ghost btn-sm" style="padding:4px 10px;font-size:0.75rem;color:#FF8A80;background:rgba(255,138,128,0.1);border:1px solid rgba(255,138,128,0.2);border-radius:6px;" onclick="App.resetStudent()" title="Logout and clear student session">✕ Logout</button>
          </div>
        ` : ''}
      </div>
    `;
  },

  attachNavListeners() {},

  setLanguage(lang) {
    this.state.language = lang;
    document.body.className = `lang-${lang}`;
    this.saveState();
    this.renderNav();
    this.showScreen(this.state.currentScreen);
  },

  // ── HOME SCREEN ──────────────────────────────────────────────
  renderHomeScreen() {
    const screen = document.getElementById('screen-home');
    const domainCount = window.CareerData.DOMAINS.map(d => ({
      ...d,
      count: window.CareerData.CAREERS.filter(c => c.domain === d.id).length
    }));

    screen.innerHTML = `
      <div class="container">
        <div class="hero">
          <div class="brand-header" style="margin-bottom:var(--space-8);animation:fadeInDown 0.6s ease both;display:flex;flex-direction:column;align-items:center;gap:16px;">
            <img src="assets/logo_transparent.png" alt="Logo Icon" style="max-height:220px;width:auto;object-fit:contain;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.15));">
            <div style="font-size:0.95rem;color:var(--text-muted);display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap;font-weight:500;margin-top:4px;">
              <span>📧 etapadvisors@gmail.com</span>
              <span>📞 +91-9493323555</span>
            </div>
          </div>
          <h1 class="hero-title" style="margin-top:var(--space-6);">
            <span class="highlight-blue">500 Paths</span> to<br>
            <span class="highlight">Success</span>
          </h1>
          <p class="hero-subtitle">
            ${this.t('welcomeSubtitle')}
          </p>

          ${this.state.student.name ? this.renderReturningStudent() : this.renderOnboardingForm()}
        </div>

        <div class="domains-preview">
          <div class="section-header">
            <div class="section-badge">13 Career Domains</div>
            <h2>Explore Every Path</h2>
            <p style="color:var(--text-muted);margin-top:8px;">From Agriculture to Technology — discover careers across the full spectrum of human endeavour</p>
          </div>
          <div class="domains-grid">
            ${domainCount.map(d => `
              <div class="domain-chip" onclick="App.filterAndExplore('${d.id}')" title="${d.name}">
                <div class="domain-chip-icon">${d.icon}</div>
                <div class="domain-chip-name">${d.name}</div>
                <div class="domain-chip-count">${d.count} careers</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  renderOnboardingForm() {
    return `
      <div class="onboarding-card">
        <h3>Tell us about yourself to get started</h3>
        <div class="form-grid">
          <div class="form-field full-width">
            <label class="form-label">${this.t('yourName')}</label>
            <input type="text" class="form-input" id="inp-name" placeholder="${this.t('enterName')}" value="${this.state.student.name || ''}">
          </div>
          <div class="form-field">
            <label class="form-label">${this.t('yourAge')}</label>
            <select class="form-input" id="inp-age">
              <option value="">${this.t('selectAge')}</option>
              <option value="10-15 Years" ${this.state.student.age === '10-15 Years' ? 'selected' : ''}>${this.t('age10_15')}</option>
              <option value="16-21 Years" ${this.state.student.age === '16-21 Years' ? 'selected' : ''}>${this.t('age16_21')}</option>
              <option value="21-25 Years" ${this.state.student.age === '21-25 Years' ? 'selected' : ''}>${this.t('age21_25')}</option>
              <option value="Above 25 Years" ${this.state.student.age === 'Above 25 Years' ? 'selected' : ''}>${this.t('ageAbove25')}</option>
            </select>
          </div>
          <div class="form-field">
            <label class="form-label">${this.t('yourInstitute')}</label>
            <input type="text" class="form-input" id="inp-institute" placeholder="${this.t('enterInstitute')}" value="${this.state.student.institute || ''}">
          </div>
        </div>
        <button class="btn btn-accent btn-full btn-lg" onclick="App.startJourney()">
          ${this.t('beginExploration')}
        </button>
      </div>
    `;
  },

  renderReturningStudent() {
    const quizDone = this.state.quizCompleted;
    const topDomain = this.getTopDomain();
    return `
      <div class="onboarding-card" style="text-align:left;">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
          <div style="width:56px;height:56px;background:linear-gradient(135deg,var(--indigo-500),var(--saffron-400));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;">👤</div>
          <div>
            <div style="font-size:1.1rem;font-weight:700;color:var(--white);">Welcome back, ${this.state.student.name}!</div>
            <div style="font-size:0.85rem;color:var(--text-muted);">Age: ${this.state.student.age} · ${this.state.student.institute}</div>
          </div>
        </div>
        ${quizDone && topDomain ? `
          <div style="padding:12px 16px;background:rgba(245,197,24,0.1);border:1px solid rgba(245,197,24,0.3);border-radius:12px;margin-bottom:16px;">
            <div style="font-size:0.75rem;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Your Top Match</div>
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.5rem;">${topDomain.icon}</span>
              <span style="font-weight:700;color:var(--white);">${topDomain.name}</span>
            </div>
          </div>
        ` : ''}
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn btn-accent" onclick="App.showScreen('explore')">${this.t('exploreAll')}</button>
          ${!quizDone ? `<button class="btn btn-primary" onclick="App.showScreen('quiz')">${this.t('takQuiz')}</button>` : ''}
          <button class="btn btn-ghost" onclick="App.showScreen('portfolio')">📁 ${this.t('myPortfolio')}</button>
          <button class="btn btn-ghost" style="font-size:0.78rem;" onclick="App.resetStudent()">Change Student</button>
        </div>
      </div>
    `;
  },

  startJourney() {
    const name = document.getElementById('inp-name')?.value?.trim();
    const age = document.getElementById('inp-age')?.value;
    const institute = document.getElementById('inp-institute')?.value?.trim();

    if (!name) { this.toast('Please enter your name', 'error'); return; }
    if (!age) { this.toast('Please select your age', 'error'); return; }

    this.state.student = { name, age, institute: institute || 'My Institute' };
    this.saveState();
    this.renderNav();
    this.showScreen('discovery');
  },

  resetStudent() {
    this.state.student = { name: '', age: '', institute: '' };
    this.state.quizAnswers = {};
    this.state.domainScores = {};
    this.state.careerScores = {};
    this.state.quizCompleted = false;
    this.state.currentQuestion = 0;
    this.state.portfolio = [];
    this.state.compareList = [];
    this.state.portfolioNotes = {};
    this.state.discoveryCompleted = false;
    this.state.discoveryAnswers = {
      aboutYou: { selfDesc: '', freeTime: '', recentExcitement: '', worldProblem: '', inspiration: '' },
      vark: { q1: '', q2: '', q3: '', q4: '', q5: '', q6: '' },
      lifeSkills: { q1: 3, q2: 3, q3: 3, q4: 3, q5: 3, q6: 3 },
      purpose: { sdgAware: '', selectedSDGs: [], futureImpact: '', doneSDG: '' },
      careerSupport: { career: '', reason: '', helpNeeded: '', financialNeed: '', talkCounselor: '' },
      snapshot: { clubs: false, project: false, onlineCourse: false, competition: false, visitedSite: false, collab: false, comments: '' }
    };
    this.discoveryStep = 1;
    this.saveState();
    this.renderNav();
    this.renderHomeScreen();
    this.showScreen('home');
  },

  // ── CAREER DISCOVERY QUESTIONNAIRE ───────────────────────────
  updateDiscoveryField(category, field, value) {
    if (category === 'snapshot') {
      this.state.discoveryAnswers.snapshot[field] = value;
    } else if (category === 'purpose' && field === 'selectedSDGs') {
      // Limit SDG goals to exactly 1 choice.
      this.state.discoveryAnswers.purpose.selectedSDGs = [value];
    } else {
      this.state.discoveryAnswers[category][field] = value;
    }
    this.saveState();
    this.renderDiscoveryScreen();
  },

  prevDiscoveryStep() {
    if (this.discoveryStep > 1) {
      this.discoveryStep--;
      this.renderDiscoveryScreen();
    }
  },

  nextDiscoveryStep() {
    const answers = this.state.discoveryAnswers;
    if (this.discoveryStep === 1) {
      const { selfDesc, freeTime, recentExcitement } = answers.aboutYou;
      if (!selfDesc.trim() || !freeTime.trim() || !recentExcitement.trim()) {
        this.toast('Please fill out all fields in this step', 'warning');
        return;
      }
    } else if (this.discoveryStep === 2) {
      const missing = Object.entries(answers.vark).filter(([k, v]) => !v);
      if (missing.length > 0) {
        this.toast('Please answer all 6 scenario questions', 'warning');
        return;
      }
    }
    if (this.discoveryStep < 6) {
      this.discoveryStep++;
      this.renderDiscoveryScreen();
    }
  },

  submitDiscovery() {
    const answers = this.state.discoveryAnswers;
    
    // 1. Validate Part A: About You (all fields must be non-empty)
    const { selfDesc, freeTime, recentExcitement, worldProblem, inspiration } = answers.aboutYou;
    if (!selfDesc.trim() || !freeTime.trim() || !recentExcitement.trim() || !worldProblem.trim() || !inspiration.trim()) {
      this.toast('Please fill out all questions in Part A: About You', 'warning');
      return;
    }

    // 2. Validate Part B: How You Learn (all 6 must have a selection)
    const missingVark = Object.entries(answers.vark).filter(([k, v]) => !v);
    if (missingVark.length > 0) {
      this.toast('Please answer all 6 scenario questions in Part B: How You Learn (VARK)', 'warning');
      return;
    }

    // 3. Validate Part C: Life Skills (all 6 must have a selection)
    const missingLifeSkills = Object.entries(answers.lifeSkills).filter(([k, v]) => !v);
    if (missingLifeSkills.length > 0) {
      this.toast('Please rate all 6 statements in Part C: Life Skills Profile', 'warning');
      return;
    }

    // 4. Validate Part D: Purpose - SDGs
    if (!answers.purpose.sdgAware) {
      this.toast('Please select if you have heard of the SDGs before in Part D', 'warning');
      return;
    }
    if (!answers.purpose.selectedSDGs || answers.purpose.selectedSDGs.length !== 1) {
      this.toast('Please select exactly 1 SDG Goal in Part D', 'warning');
      return;
    }
    if (!answers.purpose.futureImpact.trim()) {
      this.toast('Please explain how your future work helps address the SDG goal in Part D', 'warning');
      return;
    }
    if (!answers.purpose.doneSDG) {
      this.toast('Please answer whether you did anything toward any SDG in Part D', 'warning');
      return;
    }

    // 5. Validate Part E: Career & Support
    if (!answers.careerSupport.career.trim()) {
      this.toast('Please specify a career path or profession in Part E', 'warning');
      return;
    }
    if (!answers.careerSupport.reason.trim()) {
      this.toast('Please explain why this career excites you in Part E', 'warning');
      return;
    }
    if (!answers.careerSupport.helpNeeded.trim()) {
      this.toast('Please explain what help you need most in Part E', 'warning');
      return;
    }
    if (!answers.careerSupport.financialNeed) {
      this.toast('Please select your preference for financial support/scholarships in Part E', 'warning');
      return;
    }
    if (!answers.careerSupport.talkCounselor) {
      this.toast('Please select if you would like to talk to a career counsellor in Part E', 'warning');
      return;
    }

    this.state.discoveryCompleted = true;
    
    // Add student's response to their records / simulated class data if not present
    const record = this.state.studentRecords.find(r => r.name === this.state.student.name);
    if (record) {
      record.discoveryAnswers = JSON.parse(JSON.stringify(this.state.discoveryAnswers));
      record.discoveryCompleted = true;
    } else {
      this.state.studentRecords.push({
        id: 'stu_' + Date.now(),
        name: this.state.student.name,
        age: this.state.student.age,
        institute: this.state.student.institute,
        topDomain: '',
        topScore: 0,
        quizCompleted: false,
        discoveryCompleted: true,
        discoveryAnswers: JSON.parse(JSON.stringify(this.state.discoveryAnswers))
      });
    }

    this.saveState();
    this.renderNav();
    this.toast('✓ Career Discovery Form submitted successfully!', 'success');
    this.showScreen('portfolio');
  },

  getVarkAnalysis() {
    const answers = this.state.discoveryAnswers.vark;
    const counts = { V: 0, A: 0, R: 0, K: 0 };
    Object.values(answers).forEach(val => {
      if (counts[val] !== undefined) counts[val]++;
    });
    
    let maxCount = 0;
    Object.values(counts).forEach(c => { if (c > maxCount) maxCount = c; });
    
    const dominant = [];
    Object.entries(counts).forEach(([style, c]) => {
      if (c === maxCount && maxCount > 0) dominant.push(style);
    });
    
    const stylesInfo = {
      V: { name: 'Visual (V)', icon: '👁️', desc: 'You learn best through graphs, diagrams, charts, flowcharts, and clear visual structures. Study tips: Use color codes, mind-maps, flashcards, and draw diagrams to link concepts.' },
      A: { name: 'Auditory (A)', icon: '🎧', desc: 'You learn best through listening, lectures, group discussions, and explaining things out loud. Study tips: Record lectures to replay, explain topics aloud to someone else, and participate in study groups.' },
      R: { name: 'Read/Write (R)', icon: '📖', desc: 'You learn best through written words, books, lists, articles, and taking detailed notes. Study tips: Write down key summaries, rewrite notes in your own words, and read extra materials/handouts.' },
      K: { name: 'Kinesthetic (K)', icon: '🧪', desc: 'You learn best through hands-on experiments, real-world simulations, field trips, and physical trial-and-error. Study tips: Do practice tasks, build demo models, relate theory to concrete real-life examples, and use role-play.' }
    };
    
    let label = 'Exploring Learning Style';
    let details = 'Complete the learning preference questions in Step B to reveal your VARK profile.';
    let icon = '🧭';
    
    if (dominant.length === 1) {
      const style = dominant[0];
      label = stylesInfo[style].name;
      details = stylesInfo[style].desc;
      icon = stylesInfo[style].icon;
    } else if (dominant.length > 1) {
      label = 'Multimodal Learner';
      icon = '🌟';
      details = `You have a balanced learning style combining multiple preferences: ${dominant.map(s => stylesInfo[s].name).join(', ')}. Study tips: Use a mix of visual maps, auditory discussions, read/write summaries, and hands-on practices!`;
    }
    
    return { counts, dominant, label, details, icon };
  },

  renderDiscoveryScreen() {
    const screen = document.getElementById('screen-discovery');
    if (!screen) return;

    if (!this.state.student.name) {
      screen.innerHTML = `
        <div class="card container" style="text-align:center;padding:50px 20px;">
          <h2 style="color:var(--text-light);margin-bottom:15px;">Please Register First</h2>
          <p style="color:var(--text-muted);margin-bottom:20px;">Go to the Home Screen to register and begin your career discovery.</p>
          <button class="btn btn-primary" onclick="App.showScreen('home')">Go to Home Screen</button>
        </div>
      `;
      return;
    }

    if (this.state.discoveryCompleted) {
      this.renderDiscoveryDashboard(screen);
      return;
    }

    const answers = this.state.discoveryAnswers;

    // Default Life Skills answers to 3 if not already set
    const skillsList = [
      { key: 'q1', name: 'Communication', desc: 'I speak, write, and communicate ideas clearly to others.' },
      { key: 'q2', name: 'Problem Solving', desc: 'I look at issues from multiple sides and try different ideas to solve them.' },
      { key: 'q3', name: 'Self-Management', desc: 'I manage my time, schedule tasks, and ensure they are completed on time.' },
      { key: 'q4', name: 'Collaboration', desc: 'I work constructively with others in teams and handle peer support.' },
      { key: 'q5', name: 'Digital Citizenship', desc: 'I use digital technologies safely, respecting privacy and cyber safety.' },
      { key: 'q6', name: 'Resilience & Grit', desc: 'I bounce back quickly after mistakes and keep going despite setbacks.' }
    ];
    skillsList.forEach(sk => {
      if (answers.lifeSkills[sk.key] === undefined || answers.lifeSkills[sk.key] === null) {
        answers.lifeSkills[sk.key] = 3;
      }
    });

    const scenarios = [
      { key: 'q1', title: '1. Learning a new science topic', v: 'Diagram', a: 'Discussion/Talk', r: 'Read Notes', k: 'Hands-on Experiment' },
      { key: 'q2', title: '2. Understanding history events', v: 'Timeline or Map', a: 'Audio story', r: 'Read Article', k: 'Role-play activity' },
      { key: 'q3', title: '3. Fixing a broken gadget', v: 'Labeled diagram', a: 'Ask someone', r: 'Written steps', k: 'Try fixing it myself' },
      { key: 'q4', title: '4. Choosing a project idea', v: 'Create mind-map', a: 'Group brain-storm', r: 'Research notes', k: 'Build quick prototype' },
      { key: 'q5', title: '5. Studying for a major test', v: 'Charts/colour codes', a: 'Explain aloud', r: 'Read summaries', k: 'Practice test tasks' },
      { key: 'q6', title: '6. Learning about new careers', v: 'View Infographic', a: 'Q&A session', r: 'Read brochure', k: 'Shadow or simulate' }
    ];

    const sdgOptions = [
      { code: 3, name: 'Good Health & Well-being', icon: '🏥', color: '#E5243B' },
      { code: 4, name: 'Quality Education', icon: '📚', color: '#C5192D' },
      { code: 7, name: 'Affordable & Clean Energy', icon: '⚡', color: '#FFB314' },
      { code: 8, name: 'Decent Work & Economic Growth', icon: '💼', color: '#A21942' },
      { code: 9, name: 'Industry, Innovation & Infrastructure', icon: '⚙️', color: '#F26A2E' },
      { code: 11, name: 'Sustainable Cities & Communities', icon: '🏙️', color: '#FD9D24' },
      { code: 12, name: 'Responsible Consumption & Production', icon: '♻️', color: '#BF8B2E' },
      { code: 13, name: 'Climate Action', icon: '🍀', color: '#3F7E44' },
      { code: 16, name: 'Peace, Justice & Strong Institutions', icon: '⚖️', color: '#0A97D9' }
    ];

    screen.innerHTML = `
      <div class="card container" style="max-width:850px;margin:30px auto;padding:40px;">
        <div class="brand-header" style="margin-bottom:30px;text-align:center;">
          <img src="assets/logo_transparent.png" alt="ETAP Logo" style="max-height:100px;width:auto;object-fit:contain;margin:0 auto 10px;">
          <h2 style="color:var(--text-light);font-size:1.8rem;margin:5px 0;">Career Discovery Profile</h2>
          <p style="color:var(--text-muted);font-size:0.9rem;">Fill out this questionnaire to identify your learning style, key strengths, and values.</p>
        </div>

        <div class="form-step-content" style="margin-bottom:30px; display:flex; flex-direction:column; gap:40px;">
          
          <!-- PART A -->
          <div class="form-section-card" style="border-bottom: 1px solid #1E293B; padding-bottom: 30px;">
            <div class="form-section-title" style="font-size:1.4rem; font-weight:700; color:var(--primary); margin-bottom:15px;">👋 Part A: About You</div>
            <p class="form-section-subtitle" style="color:var(--text-muted); margin-bottom:20px;">Let's start by learning a little bit about who you are.</p>
            
            <div class="form-group" style="margin-bottom:15px;">
              <label class="form-label" for="disc-selfDesc">Tell us about yourself in a few words:</label>
              <textarea class="form-input" id="disc-selfDesc" rows="3" placeholder="something that describes you — e.g., 'curious about the world, love puzzles and football'" oninput="App.state.discoveryAnswers.aboutYou.selfDesc = this.value; App.saveState();">${answers.aboutYou.selfDesc}</textarea>
            </div>

            <div class="form-group" style="margin-bottom:15px;">
              <label class="form-label" for="disc-freeTime">What do you enjoy doing most in your free time?</label>
              <textarea class="form-input" id="disc-freeTime" rows="3" placeholder="hobbies, activities, places, or people you enjoy spending time with" oninput="App.state.discoveryAnswers.aboutYou.freeTime = this.value; App.saveState();">${answers.aboutYou.freeTime}</textarea>
            </div>

            <div class="form-group" style="margin-bottom:15px;">
              <label class="form-label" for="disc-recentExcitement">Something you feel good and excited about recently:</label>
              <textarea class="form-input" id="disc-recentExcitement" rows="3" placeholder="e.g. schoolwork, project, helping someone, a small win at home or sports" oninput="App.state.discoveryAnswers.aboutYou.recentExcitement = this.value; App.saveState();">${answers.aboutYou.recentExcitement}</textarea>
            </div>

            <div class="form-group" style="margin-bottom:15px;">
              <label class="form-label" for="disc-worldProblem">A problem in the world you'd like to help solve:</label>
              <textarea class="form-input" id="disc-worldProblem" rows="3" placeholder="health, environment, education, safety, fairness, cyber security..." oninput="App.state.discoveryAnswers.aboutYou.worldProblem = this.value; App.saveState();">${answers.aboutYou.worldProblem}</textarea>
            </div>

            <div class="form-group" style="margin-bottom:15px;">
              <label class="form-label" for="disc-inspiration">Who inspires you and why?</label>
              <textarea class="form-input" id="disc-inspiration" rows="3" placeholder="a teacher, parent, public figure — what qualities do you admire about them?" oninput="App.state.discoveryAnswers.aboutYou.inspiration = this.value; App.saveState();">${answers.aboutYou.inspiration}</textarea>
            </div>
          </div>

          <!-- PART B -->
          <div class="form-section-card" style="border-bottom: 1px solid #1E293B; padding-bottom: 30px;">
            <div class="form-section-title" style="font-size:1.4rem; font-weight:700; color:var(--primary); margin-bottom:15px;">🎯 Part B: How You Learn (VARK)</div>
            <p class="form-section-subtitle" style="color:var(--text-muted); margin-bottom:20px;">Pick the ONE method you would try first. This helps discover your learning preference.</p>
            
            <div class="vark-questions-container">
              ${scenarios.map(sc => {
                const currentVal = answers.vark[sc.key];
                return `
                  <div class="vark-question-card" style="margin-bottom:20px;">
                    <div class="vark-question-title" style="font-weight:600; margin-bottom:10px; color:var(--text-light);">${sc.title}</div>
                    <div class="vark-options-grid">
                      <button class="vark-opt-btn ${currentVal === 'V' ? 'active' : ''}" onclick="App.updateDiscoveryField('vark', '${sc.key}', 'V')">👁️ ${sc.v} (Visual)</button>
                      <button class="vark-opt-btn ${currentVal === 'A' ? 'active' : ''}" onclick="App.updateDiscoveryField('vark', '${sc.key}', 'A')">🎧 ${sc.a} (Auditory)</button>
                      <button class="vark-opt-btn ${currentVal === 'R' ? 'active' : ''}" onclick="App.updateDiscoveryField('vark', '${sc.key}', 'R')">📖 ${sc.r} (Read/Write)</button>
                      <button class="vark-opt-btn ${currentVal === 'K' ? 'active' : ''}" onclick="App.updateDiscoveryField('vark', '${sc.key}', 'K')">🧪 ${sc.k} (Kinesthetic)</button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- PART C -->
          <div class="form-section-card" style="border-bottom: 1px solid #1E293B; padding-bottom: 30px;">
            <div class="form-section-title" style="font-size:1.4rem; font-weight:700; color:var(--primary); margin-bottom:15px;">💪 Part C: Life Skills Profile</div>
            <p class="form-section-subtitle" style="color:var(--text-muted); margin-bottom:20px;">Rate how much each statement describes you. (1 = Not like me ... 5 = Very like me)</p>
            
            <div class="skills-rating-container">
              ${skillsList.map(sk => {
                const val = answers.lifeSkills[sk.key];
                return `
                  <div class="skill-rating-card" style="margin-bottom:20px;">
                    <div class="skill-meta">
                      <div class="skill-title" style="font-weight:600; color:var(--text-light);">${sk.name}</div>
                      <div class="skill-desc" style="font-size:0.85rem; color:var(--text-muted);">${sk.desc}</div>
                    </div>
                    <div class="rating-bar">
                      ${[1, 2, 3, 4, 5].map(n => `
                        <button class="rating-btn ${val === n ? 'active' : ''}" onclick="App.updateDiscoveryField('lifeSkills', '${sk.key}', ${n})">${n}</button>
                      `).join('')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- PART D -->
          <div class="form-section-card" style="border-bottom: 1px solid #1E293B; padding-bottom: 30px;">
            <div class="form-section-title" style="font-size:1.4rem; font-weight:700; color:var(--primary); margin-bottom:15px;">🌍 Part D: Purpose - UN Sustainable Development Goals</div>
            <p class="form-section-subtitle" style="color:var(--text-muted); margin-bottom:20px;">Select the ONE Sustainable Development Goal that you are most passionate about helping address in the future.</p>
            
            <div class="form-group inline-radio" style="margin-bottom:20px;">
              <label class="form-label" style="display:inline-block;margin-right:15px;color:var(--text-light);">Have you heard of the SDGs (Sustainable Development Goals) before?</label>
              <label style="color:var(--text-light); cursor:pointer;"><input type="radio" name="sdgAware" value="Yes" ${answers.purpose.sdgAware === 'Yes' ? 'checked' : ''} onclick="App.updateDiscoveryField('purpose', 'sdgAware', 'Yes')"> Yes</label>
              <label style="margin-left:15px; color:var(--text-light); cursor:pointer;"><input type="radio" name="sdgAware" value="Maybe" ${answers.purpose.sdgAware === 'Maybe' ? 'checked' : ''} onclick="App.updateDiscoveryField('purpose', 'sdgAware', 'Maybe')"> Maybe</label>
              <label style="margin-left:15px; color:var(--text-light); cursor:pointer;"><input type="radio" name="sdgAware" value="No" ${answers.purpose.sdgAware === 'No' ? 'checked' : ''} onclick="App.updateDiscoveryField('purpose', 'sdgAware', 'No')"> No</label>
            </div>

            <div class="sdg-grid-picker" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap:15px; margin-bottom:20px;">
              ${sdgOptions.map(sdg => {
                const isSelected = answers.purpose.selectedSDGs.includes(sdg.code);
                return `
                  <div class="sdg-tile ${isSelected ? 'active' : ''}" style="--sdg-color:${sdg.color}; border-left: 6px solid ${sdg.color}; cursor:pointer; padding:15px; border-radius:8px; background:#0F172A; transition:all 0.2s;" onclick="App.updateDiscoveryField('purpose', 'selectedSDGs', ${sdg.code})">
                    <div class="sdg-icon" style="font-size:1.5rem; margin-bottom:8px;">${sdg.icon}</div>
                    <div class="sdg-title" style="font-weight:600; color:var(--text-light); font-size:0.9rem;">Goal ${sdg.code}: ${sdg.name}</div>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="form-group" style="margin-top:20px; margin-bottom:20px;">
              <label class="form-label" for="disc-futureImpact">In one sentence, how could your future work help address this goal?</label>
              <input type="text" class="form-input" id="disc-futureImpact" placeholder="e.g. 'design energy-saving apps', 'teach programming to kids', 'help build solar microgrids'" value="${answers.purpose.futureImpact}" oninput="App.state.discoveryAnswers.purpose.futureImpact = this.value; App.saveState();">
            </div>

            <div class="form-group inline-radio">
              <label class="form-label" style="display:inline-block;margin-right:15px;color:var(--text-light);">In the last year, did you do anything (even small) toward any SDG?</label>
              <label style="color:var(--text-light); cursor:pointer;"><input type="radio" name="doneSDG" value="Yes" ${answers.purpose.doneSDG === 'Yes' ? 'checked' : ''} onclick="App.updateDiscoveryField('purpose', 'doneSDG', 'Yes')"> Yes</label>
              <label style="margin-left:15px; color:var(--text-light); cursor:pointer;"><input type="radio" name="doneSDG" value="No" ${answers.purpose.doneSDG === 'No' ? 'checked' : ''} onclick="App.updateDiscoveryField('purpose', 'doneSDG', 'No')"> No</label>
            </div>
          </div>

          <!-- PART E -->
          <div class="form-section-card" style="border-bottom: 1px solid #1E293B; padding-bottom: 30px;">
            <div class="form-section-title" style="font-size:1.4rem; font-weight:700; color:var(--primary); margin-bottom:15px;">🧭 Part E: Career & Support Exploration</div>
            <p class="form-section-subtitle" style="color:var(--text-muted); margin-bottom:20px;">Dreams are allowed — even if you're still completely exploring options!</p>
            
            <div class="form-group" style="margin-bottom:15px;">
              <label class="form-label" for="disc-career">A career path or profession you might want to explore:</label>
              <input type="text" class="form-input" id="disc-career" placeholder="e.g., Veterinary Doctor, Software Engineer, Designer, Teacher..." value="${answers.careerSupport.career}" oninput="App.state.discoveryAnswers.careerSupport.career = this.value; App.saveState();">
            </div>

            <div class="form-group" style="margin-bottom:15px;">
              <label class="form-label" for="disc-reason">Why does this career path excite you?</label>
              <textarea class="form-input" id="disc-reason" rows="3" placeholder="what excites you about it — people, creativity, tech, solving problems..." oninput="App.state.discoveryAnswers.careerSupport.reason = this.value; App.saveState();">${answers.careerSupport.reason}</textarea>
            </div>

            <div class="form-group" style="margin-bottom:15px;">
              <label class="form-label" for="disc-helpNeeded">What help do you need most to explore careers better?</label>
              <textarea class="form-input" id="disc-helpNeeded" rows="3" placeholder="guidance, detailed information, practice labs, confidence, coaching, scholarships..." oninput="App.state.discoveryAnswers.careerSupport.helpNeeded = this.value; App.saveState();">${answers.careerSupport.helpNeeded}</textarea>
            </div>

            <div class="form-group" style="margin-bottom:15px;">
              <label class="form-label">Would you need financial support/scholarships for future studies?</label>
              <div style="display:flex;gap:12px;margin-top:5px;flex-wrap:wrap;">
                ${['Yes', 'Partial', 'Not sure', 'No'].map(opt => `
                  <button class="vark-opt-btn ${answers.careerSupport.financialNeed === opt ? 'active' : ''}" onclick="App.updateDiscoveryField('careerSupport', 'financialNeed', '${opt}')" style="flex:1;min-width:80px;margin-bottom:0;">${opt}</button>
                `).join('')}
              </div>
            </div>

            <div class="form-group" style="margin-bottom:15px;">
              <label class="form-label">Would you like to talk to a professional career counsellor?</label>
              <div style="display:flex;gap:12px;margin-top:5px;flex-wrap:wrap;">
                ${['Yes', 'Maybe', 'Not now'].map(opt => `
                  <button class="vark-opt-btn ${answers.careerSupport.talkCounselor === opt ? 'active' : ''}" onclick="App.updateDiscoveryField('careerSupport', 'talkCounselor', '${opt}')" style="flex:1;min-width:100px;margin-bottom:0;">${opt}</button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- PART F -->
          <div class="form-section-card" style="padding-bottom: 20px;">
            <div class="form-section-title" style="font-size:1.4rem; font-weight:700; color:var(--primary); margin-bottom:15px;">🧪 Part F: Career Snapshot (STEAM Activities)</div>
            <p class="form-section-subtitle" style="color:var(--text-muted); margin-bottom:20px;">Select the activities you have participated in during the last 12–18 months.</p>
            
            <div class="steam-checkboxes">
              <label class="checkbox-card ${answers.snapshot.clubs ? 'active' : ''}">
                <input type="checkbox" ${answers.snapshot.clubs ? 'checked' : ''} onchange="App.updateDiscoveryField('snapshot', 'clubs', this.checked)">
                <div class="checkbox-label">Joined a club/team (science, coding, robotics, arts, sports, math circle)</div>
              </label>
              
              <label class="checkbox-card ${answers.snapshot.project ? 'active' : ''}">
                <input type="checkbox" ${answers.snapshot.project ? 'checked' : ''} onchange="App.updateDiscoveryField('snapshot', 'project', this.checked)">
                <div class="checkbox-label">Built or showcased a project (science fair, website, art, robot, model)</div>
              </label>

              <label class="checkbox-card ${answers.snapshot.onlineCourse ? 'active' : ''}">
                <input type="checkbox" ${answers.snapshot.onlineCourse ? 'checked' : ''} onchange="App.updateDiscoveryField('snapshot', 'onlineCourse', this.checked)">
                <div class="checkbox-label">Taken an online course or workshop (coding, design, animation, database)</div>
              </label>

              <label class="checkbox-card ${answers.snapshot.competition ? 'active' : ''}">
                <input type="checkbox" ${answers.snapshot.competition ? 'checked' : ''} onchange="App.updateDiscoveryField('snapshot', 'competition', this.checked)">
                <div class="checkbox-label">Entered a competition/challenge (hackathon, quiz, design contest)</div>
              </label>

              <label class="checkbox-card ${answers.snapshot.visitedSite ? 'active' : ''}">
                <input type="checkbox" ${answers.snapshot.visitedSite ? 'checked' : ''} onchange="App.updateDiscoveryField('snapshot', 'visitedSite', this.checked)">
                <div class="checkbox-label">Visited lab/studio/makerspace/museum/industrial or science site</div>
              </label>

              <label class="checkbox-card ${answers.snapshot.collab ? 'active' : ''}">
                <input type="checkbox" ${answers.snapshot.collab ? 'checked' : ''} onchange="App.updateDiscoveryField('snapshot', 'collab', this.checked)">
                <div class="checkbox-label">Collaborated with classmates or friends on a STEAM project</div>
              </label>
            </div>

            <div class="form-group" style="margin-top:20px;">
              <label class="form-label" for="disc-comments">Anything else you would like to share with your counsellor?</label>
              <textarea class="form-input" id="disc-comments" rows="3" placeholder="feelings about your future, particular challenges, other skills or interests..." oninput="App.state.discoveryAnswers.snapshot.comments = this.value; App.saveState();">${answers.snapshot.comments}</textarea>
            </div>
          </div>

        </div>

        <div class="form-step-navigation" style="border-top:1px solid #1E293B;padding-top:30px;text-align:center;">
          <button class="btn btn-accent btn-lg" style="padding:15px 40px; font-size:1.1rem; width:100%; max-width:400px; margin:0 auto; display:block;" onclick="App.submitDiscovery()">Save & Submit Profile ✓</button>
        </div>
      </div>
    `;
  },

  renderDiscoveryDashboard(screen) {
    const analysis = this.getVarkAnalysis();
    const answers = this.state.discoveryAnswers;
    const skillsList = [
      { key: 'q1', name: 'Communication' },
      { key: 'q2', name: 'Problem Solving' },
      { key: 'q3', name: 'Self-Management' },
      { key: 'q4', name: 'Collaboration' },
      { key: 'q5', name: 'Digital Safety' },
      { key: 'q6', name: 'Resilience' }
    ];

    const sdgNames = {
      3: '🏥 Goal 3: Good Health',
      4: '📚 Goal 4: Quality Education',
      7: '⚡ Goal 7: Clean Energy',
      8: '💼 Goal 8: Decent Work',
      9: '⚙️ Goal 9: Innovation',
      11: '🏙️ Goal 11: Cities',
      12: '♻️ Goal 12: Consumption',
      13: '🍀 Goal 13: Climate Action',
      16: '⚖️ Goal 16: Peace & Justice'
    };

    screen.innerHTML = `
      <div class="container" style="max-width:900px;margin:30px auto;">
        <div class="card" style="padding:40px;margin-bottom:30px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:20px;border-bottom:1px solid #1E293B;padding-bottom:20px;margin-bottom:35px;">
            <div>
              <span class="badge" style="background:rgba(76,175,80,0.1);color:#4CAF50;border:1px solid rgba(76,175,80,0.2);margin-bottom:8px;display:inline-block;">✓ Discovery Form Submitted</span>
              <h2 style="color:var(--text-light);font-size:2rem;margin:5px 0;">Discovery Profile</h2>
              <p style="color:var(--text-muted);font-size:0.95rem;">Student: <strong>${this.state.student.name}</strong> (${this.state.student.age} yrs) · ${this.state.student.institute}</p>
            </div>
            <div style="display:flex;gap:10px;">
              <button class="btn btn-ghost" onclick="App.state.discoveryCompleted = false; App.discoveryStep = 1; App.renderDiscoveryScreen();">✏️ Retake</button>
              <button class="btn btn-primary" onclick="App.showScreen('explore')">Explore Careers →</button>
            </div>
          </div>

          <div class="dashboard-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:30px;">
            <div class="card" style="background:#0F172A;border:1px solid #1E293B;padding:24px;">
              <h3 style="margin-top:0;color:var(--text-light);font-size:1.1rem;display:flex;align-items:center;gap:8px;">${analysis.icon} Learning Preference (VARK)</h3>
              <div style="font-size:1.4rem;font-weight:700;color:var(--primary);margin:10px 0;">${analysis.label}</div>
              <p style="color:var(--text-muted);font-size:0.88rem;line-height:1.5;">${analysis.details}</p>
              
              <div style="display:flex;gap:8px;align-items:flex-end;height:60px;margin-top:20px;padding-top:10px;border-bottom:1px solid #1E293B;">
                ${Object.entries(analysis.counts).map(([k, count]) => {
                  const pct = count > 0 ? (count / 6) * 100 : 5;
                  const colors = { V: '#2196F3', A: '#E91E63', R: '#9C27B0', K: '#4CAF50' };
                  return `
                    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">
                      <div style="width:100%;height:${pct}px;background:${colors[k]};border-radius:3px 3px 0 0;" title="${count} answers"></div>
                      <span style="font-size:0.7rem;font-weight:700;color:#ccc;">${k}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <div class="card" style="background:#0F172A;border:1px solid #1E293B;padding:24px;">
              <h3 style="margin-top:0;color:var(--text-light);font-size:1.1rem;display:flex;align-items:center;gap:8px;">💪 Life Skills Strengths</h3>
              <div style="display:flex;flex-direction:column;gap:8px;margin-top:15px;">
                ${skillsList.map(sk => {
                  const rating = answers.lifeSkills[sk.key] || 3;
                  const pct = (rating / 5) * 100;
                  return `
                    <div>
                      <div style="display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:3px;">
                        <span style="color:#ccc;">${sk.name}</span>
                        <span style="color:var(--primary);font-weight:700;">${rating}/5</span>
                      </div>
                      <div style="width:100%;height:6px;background:#1E293B;border-radius:3px;overflow:hidden;">
                        <div style="width:${pct}%;height:100%;background:var(--primary);border-radius:3px;"></div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
            <div class="card" style="background:#0F172A;border:1px solid #1E293B;padding:24px;">
              <h3 style="margin-top:0;color:var(--text-light);font-size:1.1rem;display:flex;align-items:center;gap:8px;">🌍 Purpose & SDG Passion</h3>
              <div style="display:flex;flex-direction:column;gap:12px;margin-top:15px;">
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                  ${answers.purpose.selectedSDGs.length > 0 ? answers.purpose.selectedSDGs.map(code => `
                    <span class="badge" style="background:rgba(255,152,0,0.1);color:#FF9800;border:1px solid rgba(255,152,0,0.2);padding:6px 12px;font-size:0.8rem;">
                      ${sdgNames[code] || ('Goal ' + code)}
                    </span>
                  `).join('') : '<span style="color:var(--text-muted)">No SDGs selected</span>'}
                </div>
                ${answers.purpose.futureImpact ? `
                  <div style="margin-top:5px;border-left:3px solid var(--primary);padding-left:12px;">
                    <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;">Future Contribution</div>
                    <p style="margin:4px 0 0;font-size:0.9rem;color:#ddd;font-style:italic;">"${answers.purpose.futureImpact}"</p>
                  </div>
                ` : ''}
              </div>
            </div>

            <div class="card" style="background:#0F172A;border:1px solid #1E293B;padding:24px;">
              <h3 style="margin-top:0;color:var(--text-light);font-size:1.1rem;display:flex;align-items:center;gap:8px;">🧭 Target Career Exploration</h3>
              <div style="display:flex;flex-direction:column;gap:12px;margin-top:15px;">
                <div>
                  <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;">Aspiration</div>
                  <div style="font-size:1.1rem;font-weight:700;color:var(--text-light);margin-top:3px;">
                    🎯 ${answers.careerSupport.career || 'Under Exploration'}
                  </div>
                </div>
                ${answers.careerSupport.reason ? `
                  <div>
                    <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;">Interest Motive</div>
                    <p style="margin:4px 0 0;font-size:0.85rem;color:#ccc;">${answers.careerSupport.reason}</p>
                  </div>
                ` : ''}
                <div style="display:flex;gap:10px;margin-top:5px;flex-wrap:wrap;">
                  <span class="badge" style="background:rgba(0,188,212,0.1);color:#00BCD4;border:1px solid rgba(0,188,212,0.2);font-size:0.75rem;">
                    💬 Counselor Chat: ${answers.careerSupport.talkCounselor || 'No preference'}
                  </span>
                  <span class="badge" style="background:rgba(156,39,176,0.1);color:#9C27B0;border:1px solid rgba(156,39,176,0.2);font-size:0.75rem;">
                    💰 Scholarship: ${answers.careerSupport.financialNeed || 'No preference'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  filterAndExplore(domainId) {
    if (!this.state.student.name) {
      document.getElementById('inp-name')?.focus();
      this.toast('Please enter your name first to explore careers', 'error');
      return;
    }
    this.state.filterDomain = domainId;
    this.showScreen('explore');
  },

  getTopDomain() {
    if (!this.state.domainScores || Object.keys(this.state.domainScores).length === 0) return null;
    const topId = Object.entries(this.state.domainScores).sort((a, b) => b[1] - a[1])[0][0];
    return window.CareerData.DOMAINS.find(d => d.id === topId);
  },

  // ── QUIZ SCREEN ──────────────────────────────────────────────
  renderQuizScreen() {
    const screen = document.getElementById('screen-quiz');

    if (this.state.quizCompleted) {
      this.renderQuizResults(screen);
      return;
    }

    screen.innerHTML = `
      <div class="container">
        <div class="quiz-container">
          <div style="text-align:center;margin-bottom:var(--space-8);">
            <div class="section-badge">🎯 Interest Discovery</div>
            <h2>${this.t('quizTitle')}</h2>
            <p style="color:var(--text-muted);margin-top:8px;">${this.t('quizSubtitle')}</p>
          </div>
          <div id="quiz-question-area"></div>
        </div>
      </div>
    `;

    this.renderQuestion(this.state.currentQuestion);
  },

  renderQuestion(idx) {
    const questions = window.QuizData.questions;
    const q = questions[idx];
    const area = document.getElementById('quiz-question-area');
    if (!area || !q) return;

    const progress = ((idx + 1) / questions.length) * 100;
    const domain = window.CareerData.DOMAINS.find(d => d.id === q.domain);
    const savedAnswer = this.state.quizAnswers[q.id];

    area.innerHTML = `
      <div class="quiz-progress-header">
        <div class="quiz-progress-bar-track">
          <div class="quiz-progress-bar-fill" style="width:${progress}%"></div>
        </div>
        <div class="quiz-progress-text">
          <span>${this.t('question')} ${idx + 1} ${this.t('of')} ${questions.length}</span>
          <div class="quiz-progress-domain">
            <span>${domain?.icon || ''}</span>
            <span>${q.domainLabel}</span>
          </div>
        </div>
      </div>

      <div class="quiz-card">
        <div class="quiz-steam-badge ${q.steam}">⚡ ${q.steam}</div>
        <p class="quiz-question">${q.question}</p>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option ${savedAnswer === i ? 'selected' : ''}"
              onclick="App.selectOption(${q.id}, ${i})"
              id="quiz-opt-${i}">
              <div class="quiz-option-letter">${['A','B','C','D'][i]}</div>
              <span class="quiz-option-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-actions">
          <button class="btn btn-ghost" onclick="App.quizPrev()" ${idx === 0 ? 'disabled' : ''}>
            ${this.t('back')}
          </button>
          <div style="font-size:0.8rem;color:var(--text-muted);">${idx + 1} / ${questions.length}</div>
          ${idx < questions.length - 1
            ? `<button class="btn btn-primary" onclick="App.quizNext()" ${savedAnswer === undefined ? 'disabled' : ''} id="quiz-next-btn">${this.t('next')}</button>`
            : `<button class="btn btn-accent" onclick="App.submitQuiz()" ${savedAnswer === undefined ? 'disabled' : ''} id="quiz-submit-btn">${this.t('submit')}</button>`
          }
        </div>
      </div>
    `;
  },

  selectOption(questionId, optionIdx) {
    this.state.quizAnswers[questionId] = optionIdx;
    this.saveState();

    // Update UI
    document.querySelectorAll('.quiz-option').forEach((el, i) => {
      el.classList.toggle('selected', i === optionIdx);
    });

    // Enable next/submit
    const nextBtn = document.getElementById('quiz-next-btn') || document.getElementById('quiz-submit-btn');
    if (nextBtn) nextBtn.removeAttribute('disabled');
  },

  quizNext() {
    const questions = window.QuizData.questions;
    if (this.state.currentQuestion < questions.length - 1) {
      this.state.currentQuestion++;
      this.saveState();
      this.renderQuestion(this.state.currentQuestion);
    }
  },

  quizPrev() {
    if (this.state.currentQuestion > 0) {
      this.state.currentQuestion--;
      this.saveState();
      this.renderQuestion(this.state.currentQuestion);
    }
  },

  submitQuiz() {
    // Calculate domain scores from answers
    const domainScores = {};
    window.CareerData.DOMAINS.forEach(d => { domainScores[d.id] = 0; });

    window.QuizData.questions.forEach(q => {
      const answerIdx = this.state.quizAnswers[q.id];
      if (answerIdx !== undefined) {
        const score = q.options[answerIdx].score;
        domainScores[q.domain] = (domainScores[q.domain] || 0) + score;
      }
    });

    // Normalize domain scores to 1–10 scale
    const maxScore = 10; // max per question
    Object.keys(domainScores).forEach(id => {
      domainScores[id] = Math.min(10, Math.max(1, Math.round(domainScores[id])));
    });

    this.state.domainScores = domainScores;

    // Calculate per-career interest scores based on domain scores
    const careerScores = {};
    window.CareerData.CAREERS.forEach(career => {
      const domainScore = domainScores[career.domain] || 1;
      // Add small variation per career
      const variation = (Math.random() * 0.8 - 0.4);
      careerScores[career.id] = Math.min(10, Math.max(1, Math.round(domainScore + variation)));
    });

    this.state.careerScores = careerScores;
    this.state.quizCompleted = true;
    this.saveState();

    // Add this student to teacher records
    this.state.studentRecords.push({
      name: this.state.student.name,
      age: this.state.student.age,
      institute: this.state.student.institute,
      topDomain: Object.entries(domainScores).sort((a, b) => b[1] - a[1])[0][0],
      completedAt: new Date().toISOString()
    });

    this.renderQuizResults(document.getElementById('screen-quiz'));
  },

  renderQuizResults(screen) {
    const scores = this.state.domainScores;
    const sorted = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const topDomains = sorted.map(([id, score]) => ({
      ...window.CareerData.DOMAINS.find(d => d.id === id),
      score
    })).filter(Boolean);

    screen.innerHTML = `
      <div class="container">
        <div style="max-width:900px;margin:0 auto;">
          <div class="results-hero">
            <div style="font-size:4rem;margin-bottom:16px;">🎯</div>
            <div class="section-badge">Quiz Complete!</div>
            <h2 style="margin-top:8px;">${this.t('resultsTitle')}</h2>
            <p style="color:var(--text-muted);margin-top:8px;max-width:500px;margin-left:auto;margin-right:auto;">${this.t('resultsSubtitle')}</p>
          </div>

          <div style="margin-bottom:var(--space-8);">
            <h3 style="margin-bottom:var(--space-5);text-align:center;">${this.t('yourTopDomains')}</h3>
            <div class="top-domains-grid">
              ${topDomains.slice(0, 5).map((d, i) => `
                <div class="top-domain-card rank-${i + 1}">
                  <div class="top-domain-rank">${['🥇 #1 Best Match', '🥈 #2 Match', '🥉 #3 Match', '#4 Match', '#5 Match'][i]}</div>
                  <div class="top-domain-icon">${d.icon}</div>
                  <div class="top-domain-name">${d.name}</div>
                  <div class="top-domain-score">${d.score}<span style="font-size:1rem;font-weight:400;color:var(--text-muted)">/10</span></div>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="margin-bottom:var(--space-8);">
            <h3 style="margin-bottom:var(--space-5);">All Domain Scores</h3>
            <div style="background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:var(--radius-xl);padding:var(--space-6);">
              ${Object.entries(scores).sort((a,b) => b[1]-a[1]).map(([id, score]) => {
                const domain = window.CareerData.DOMAINS.find(d => d.id === id);
                if (!domain) return '';
                return `
                  <div class="domain-bar">
                    <div class="domain-bar-label">${domain.icon} ${domain.name}</div>
                    <div class="domain-bar-track">
                      <div class="domain-bar-fill" style="width:${score * 10}%"></div>
                    </div>
                    <div class="domain-bar-count">${score}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
            <button class="btn btn-accent btn-lg" onclick="App.showScreen('explore')">${this.t('exploreYourMatches')}</button>
            <button class="btn btn-ghost" onclick="App.retakeQuiz()">↩ Retake Quiz</button>
          </div>
        </div>
      </div>
    `;
  },

  retakeQuiz() {
    this.state.quizAnswers = {};
    this.state.domainScores = {};
    this.state.careerScores = {};
    this.state.quizCompleted = false;
    this.state.currentQuestion = 0;
    this.saveState();
    this.renderQuizScreen();
  },

  // ── EXPLORE SCREEN ───────────────────────────────────────────
  renderExploreScreen() {
    const screen = document.getElementById('screen-explore');
    screen.innerHTML = `
      <div class="container">
        <div class="explore-header">
          <div>
            <div class="section-badge">500 Paths to Success</div>
            <h2>${this.t('exploreAll')}</h2>
          </div>
          <div class="explore-controls">
            <div class="search-bar">
              <span class="search-icon">🔍</span>
              <input type="text" id="career-search" placeholder="${this.t('searchPlaceholder')}"
                oninput="App.handleSearch(this.value)"
                value="${this.state.searchQuery}">
            </div>
            <select class="filter-select" id="steam-filter" onchange="App.handleSteamFilter(this.value)">
              <option value="all">${this.t('allSteam')}</option>
              <option value="Science">Science</option>
              <option value="Technology">Technology</option>
              <option value="Engineering">Engineering</option>
              <option value="Arts">Arts</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </div>
          <div class="domain-tabs" id="domain-tabs">
            <button class="domain-tab ${this.state.filterDomain === 'all' ? 'active' : ''}"
              onclick="App.setDomainFilter('all')">All Careers</button>
            ${window.CareerData.DOMAINS.map(d => `
              <button class="domain-tab ${this.state.filterDomain === d.id ? 'active' : ''}"
                onclick="App.setDomainFilter('${d.id}')">
                ${d.icon} ${d.name}
              </button>
            `).join('')}
          </div>
        </div>
        <div class="careers-grid" id="careers-grid"></div>
      </div>
    `;
    this.renderCareerCards();
  },

  getFilteredCareers() {
    let careers = [...window.CareerData.CAREERS];
    if (this.state.filterDomain !== 'all') {
      careers = careers.filter(c => c.domain === this.state.filterDomain);
    }
    if (this.state.searchQuery) {
      const q = this.state.searchQuery.toLowerCase();
      careers = careers.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        (c.skills && c.skills.some(s => s.toLowerCase().includes(q))) ||
        (c.jobTitles && c.jobTitles.some(j => j.toLowerCase().includes(q))) ||
        (c.qualifications && c.qualifications.toLowerCase().includes(q)) ||
        (c.entranceExams && c.entranceExams.some(e => e.toLowerCase().includes(q))) ||
        (c.scholarships && c.scholarships.some(s => s.toLowerCase().includes(q))) ||
        (c.careerPath && c.careerPath.some(cp => cp.toLowerCase().includes(q))) ||
        (c.famousPersons && c.famousPersons.some(fp => fp.name.toLowerCase().includes(q) || fp.bio.toLowerCase().includes(q))) ||
        (c.workEnvironment && c.workEnvironment.toLowerCase().includes(q))
      );
    }
    if (this.state.filterSteam && this.state.filterSteam !== 'all') {
      const steamDomains = window.CareerData.DOMAINS
        .filter(d => d.steam === this.state.filterSteam)
        .map(d => d.id);
      careers = careers.filter(c => steamDomains.includes(c.domain));
    }

    // Sort by quiz score if quiz done
    if (this.state.quizCompleted && this.state.careerScores) {
      careers.sort((a, b) => (this.state.careerScores[b.id] || 0) - (this.state.careerScores[a.id] || 0));
    }
    return careers;
  },

  renderCareerCards() {
    const grid = document.getElementById('careers-grid');
    if (!grid) return;

    const careers = this.getFilteredCareers();

    if (careers.length === 0) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:64px;color:var(--text-muted);">
          <div style="font-size:3rem;margin-bottom:16px;">🔍</div>
          <p>${this.t('noResults')}</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = careers.map(career => this.buildCareerCard(career)).join('');
  },

  buildCareerCard(career) {
    const domain = window.CareerData.DOMAINS.find(d => d.id === career.domain);
    const score = this.state.quizCompleted ? (this.state.careerScores[career.id] || 5) : null;
    const isInPortfolio = this.state.portfolio.includes(career.id);
    const isInCompare = this.state.compareList.includes(career.id);
    const scoreClass = score >= 7 ? 'score-high' : score >= 4 ? 'score-mid' : 'score-low';
    const scoreColor = score >= 7 ? '#4CAF50' : score >= 4 ? '#FF7A2F' : '#6B84A8';
    const circumference = 2 * Math.PI * 18;
    const dashOffset = circumference - (score / 10) * circumference;

    return `
      <div class="career-card" id="card-${career.id}">
        <div class="career-card-header">
          <div class="career-card-domain" style="color:${domain?.color || 'var(--text-muted)'}">
            ${domain?.icon || ''} ${domain?.name || career.domain}
          </div>
          ${score !== null ? `
            <div class="career-card-score ${scoreClass}">
              <div class="score-ring">
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <defs>
                    <linearGradient id="sg-${career.id}" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:${scoreColor}"/>
                      <stop offset="100%" style="stop-color:${scoreColor}"/>
                    </linearGradient>
                  </defs>
                  <circle class="track" cx="24" cy="24" r="18" />
                  <circle class="fill" cx="24" cy="24" r="18"
                    stroke="${scoreColor}"
                    stroke-dasharray="${circumference}"
                    stroke-dashoffset="${dashOffset}" />
                </svg>
                <div class="score-number">${score}</div>
              </div>
            </div>
          ` : ''}
        </div>
        <div class="career-card-body">
          <h4 class="career-card-title">${career.title}</h4>
          <div class="career-card-jobtitles">${career.jobTitles.slice(0, 3).join(' · ')}</div>
          <p class="career-card-desc">${career.description}</p>
          <div class="career-card-salary">
            <div class="salary-pill">
              <div class="salary-pill-label">Starting</div>
              <div class="salary-pill-value">${career.startingSalary}</div>
            </div>
            <div class="salary-pill">
              <div class="salary-pill-label">Peak</div>
              <div class="salary-pill-value">${career.highestSalary}</div>
            </div>
          </div>
          <div class="career-card-skills">
            ${career.skills.slice(0, 4).map(s => `<span class="skill-tag">${s}</span>`).join('')}
          </div>
        </div>
        <div class="career-card-footer">
          <button class="btn btn-ghost btn-sm" onclick="App.openCareerModal('${career.id}')">👁 ${this.t('viewDetails')}</button>
          <button class="btn btn-sm ${isInPortfolio ? 'btn-primary' : 'btn-ghost'}" onclick="App.togglePortfolio('${career.id}')">
            ${isInPortfolio ? '✓ Saved' : '+ Portfolio'}
          </button>
          <button class="btn btn-sm ${isInCompare ? 'btn-accent' : 'btn-ghost'}" onclick="App.toggleCompare('${career.id}')">
            ⇄
          </button>
        </div>
      </div>
    `;
  },

  handleSearch(val) {
    this.state.searchQuery = val;
    this.renderCareerCards();
  },

  handleSteamFilter(val) {
    this.state.filterSteam = val;
    this.renderCareerCards();
  },

  setDomainFilter(domainId) {
    this.state.filterDomain = domainId;
    document.querySelectorAll('.domain-tab').forEach(tab => {
      tab.classList.toggle('active',
        (domainId === 'all' && tab.textContent.trim() === 'All Careers') ||
        tab.getAttribute('onclick')?.includes(`'${domainId}'`)
      );
    });
    this.renderCareerCards();
  },

  // ── CAREER MODAL ─────────────────────────────────────────────
  openCareerModal(careerId) {
    const career = window.CareerData.CAREERS.find(c => c.id === careerId);
    if (!career) return;

    const domain = window.CareerData.DOMAINS.find(d => d.id === career.domain);
    const score = this.state.careerScores[careerId];
    const isInPortfolio = this.state.portfolio.includes(careerId);
    const isInCompare = this.state.compareList.includes(careerId);

    const overlay = document.getElementById('modal-overlay');
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <div class="modal-domain-icon">${domain?.icon || '💼'}</div>
          <div class="modal-header-info">
            <h3 class="modal-title">${career.title}</h3>
            <div class="modal-job-titles">${career.jobTitles.join(' · ')}</div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
              <span style="padding:3px 12px;background:rgba(255,255,255,0.06);border-radius:999px;font-size:0.75rem;color:var(--text-muted);">${domain?.name}</span>
              <span style="padding:3px 12px;background:rgba(255,255,255,0.06);border-radius:999px;font-size:0.75rem;color:var(--text-muted);">${domain?.steam}</span>
              ${score !== undefined ? `<span style="padding:3px 12px;background:rgba(41,82,204,0.2);border-radius:999px;font-size:0.75rem;font-weight:700;color:var(--indigo-300);">🎯 Interest: ${score}/10</span>` : ''}
            </div>
          </div>
          <button class="modal-close" onclick="App.closeModal()">✕</button>
        </div>
        <div class="modal-body">
          <div class="modal-section full-width">
            <div class="modal-section-title">📄 About This Career</div>
            <div class="modal-section-content">${career.description}</div>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">💰 Salary Range</div>
            <div class="modal-salary-grid">
              <div class="modal-salary-box">
                <div class="label">${this.t('startingSalary')}</div>
                <div class="value">${career.startingSalary}</div>
              </div>
              <div class="modal-salary-box">
                <div class="label">${this.t('highestSalary')}</div>
                <div class="value">${career.highestSalary}</div>
              </div>
            </div>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">🎓 Qualifications</div>
            <div class="modal-section-content">${career.qualifications}</div>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">⭐ Famous Persons</div>
            <div>
              ${career.famousPersons.map(p => `
                <div class="famous-person">
                  <div class="famous-person-name">⭐ ${p.name}</div>
                  <div class="famous-person-bio">${p.bio}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">🛠 Key Skills</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">
              ${career.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">🛤 Career Path</div>
            <div>
              ${career.careerPath.map(step => `<div class="pathway-step">${step}</div>`).join('')}
            </div>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">📝 Entrance Exams</div>
            <div>${career.entranceExams.map(e => `<span class="exam-badge">${e}</span>`).join('')}</div>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">🏆 Scholarships</div>
            <div>${career.scholarships.map(s => `<span class="scholarship-badge">🎓 ${s}</span>`).join('')}</div>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">📚 Education Roadmap</div>
            <div class="modal-section-content">
              <strong style="color:var(--indigo-300)">Class 10 Focus:</strong> ${career.grade10Focus}<br>
              <strong style="color:var(--saffron-300)">Class 12 Stream:</strong> ${career.grade12Stream}<br>
              <strong style="color:var(--teal-300)">Work Environment:</strong> ${career.workEnvironment}
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn ${isInPortfolio ? 'btn-primary' : 'btn-ghost'}" onclick="App.togglePortfolio('${career.id}');App.openCareerModal('${career.id}')">
            ${isInPortfolio ? '✓ In Portfolio' : '+ Add to Portfolio'}
          </button>
          <button class="btn ${isInCompare ? 'btn-accent' : 'btn-ghost'}" onclick="App.toggleCompare('${career.id}');App.openCareerModal('${career.id}')">
            ⇄ ${isInCompare ? 'In Comparison' : 'Add to Compare'}
          </button>
          <button class="btn btn-ghost" onclick="App.showPathfinder('${career.id}')">
            🛤 Pathfinder
          </button>
          <button class="btn btn-ghost" onclick="App.printCareerCard('${career.id}')">
            🖨 ${this.t('printCard')}
          </button>
          <button class="btn btn-ghost" style="margin-left:auto;" onclick="App.closeModal()">Close</button>
        </div>
      </div>
    `;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  },

  // ── PORTFOLIO ────────────────────────────────────────────────
  togglePortfolio(careerId) {
    const idx = this.state.portfolio.indexOf(careerId);
    if (idx === -1) {
      this.state.portfolio.push(careerId);
      this.toast('✓ ' + this.t('savedToPortfolio'), 'success');
    } else {
      this.toast(this.t('alreadySaved'));
    }
    this.saveState();
    if (this.state.currentScreen === 'explore') this.renderCareerCards();
  },

  removeFromPortfolio(careerId) {
    this.state.portfolio = this.state.portfolio.filter(id => id !== careerId);
    this.saveState();
    this.renderPortfolioScreen();
  },

  renderPortfolioScreen() {
    const screen = document.getElementById('screen-portfolio');
    const savedCareers = this.state.portfolio
      .map(id => window.CareerData.CAREERS.find(c => c.id === id))
      .filter(Boolean);

    const domainCounts = {};
    savedCareers.forEach(c => { domainCounts[c.domain] = (domainCounts[c.domain] || 0) + 1; });
    const topDomainId = Object.entries(domainCounts).sort((a, b) => b[1] - a[1])[0]?.[0];
    const topDomain = window.CareerData.DOMAINS.find(d => d.id === topDomainId);

    screen.innerHTML = `
      <div class="container">
        <div class="portfolio-header">
          <div>
            <div class="section-badge">📁 My Saved Careers</div>
            <h2>${this.t('portfolioTitle')}</h2>
            <p style="color:var(--text-muted);margin-top:4px;">${this.t('portfolioSubtitle')}</p>
          </div>
          <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
            ${this.state.quizCompleted ? `
              <button class="btn btn-accent btn-sm" onclick="App.printCertificate()">🎓 Certificate</button>
            ` : `
              <button class="btn btn-ghost btn-sm" style="opacity:0.6;cursor:not-allowed;" disabled title="Complete the interest quiz first to unlock your certificate">🎓 Certificate (Locked)</button>
            `}
            ${savedCareers.length > 0 ? `
              <button class="btn btn-ghost btn-sm" onclick="App.printPortfolio()">🖨 Print Portfolio</button>
            ` : ''}
            <button class="btn btn-ghost btn-sm" onclick="App.showScreen('explore')">+ Add More</button>
          </div>
        </div>

        <!-- Career Discovery Summary Section -->
        <div class="discovery-summary-section" style="margin-bottom: 30px;">
          ${this.state.discoveryCompleted ? `
            <div class="card" style="background: rgba(41, 82, 204, 0.05); border: 1px solid rgba(41, 82, 204, 0.15); padding: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; border-radius: 12px;">
              <div style="display: flex; gap: 15px; align-items: center;">
                <div style="font-size: 2.2rem; background: rgba(41, 82, 204, 0.1); width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 10px;">
                  ${this.getVarkAnalysis().icon}
                </div>
                <div>
                  <h3 style="color: var(--text-light); margin: 0; font-size: 1.15rem;">Career Discovery Profile: ${this.getVarkAnalysis().label}</h3>
                  <p style="color: var(--text-muted); margin: 4px 0 0; font-size: 0.88rem;">
                    🎯 SDG Goals: ${this.state.discoveryAnswers.purpose.selectedSDGs.length > 0 ? this.state.discoveryAnswers.purpose.selectedSDGs.map(c => '#' + c).join(', ') : 'None'} 
                    · 🧭 Target Career: ${this.state.discoveryAnswers.careerSupport.career || 'None'}
                  </p>
                </div>
              </div>
              <button class="btn btn-primary btn-sm" onclick="App.showScreen('discovery')">View Discovery Profile</button>
            </div>
          ` : `
            <div class="card" style="background: rgba(255, 152, 0, 0.05); border: 1px solid rgba(255, 152, 0, 0.15); padding: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; border-radius: 12px;">
              <div style="display: flex; gap: 15px; align-items: center;">
                <div style="font-size: 2rem; background: rgba(255, 152, 0, 0.1); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 10px;">📝</div>
                <div>
                  <h3 style="color: var(--text-light); margin: 0; font-size: 1.1rem;">Complete Your Career Discovery Questionnaire</h3>
                  <p style="color: var(--text-muted); margin: 4px 0 0; font-size: 0.85rem;">Discover your learning style preference, life skills metrics, and target career pathway.</p>
                </div>
              </div>
              <button class="btn btn-accent btn-sm" onclick="App.showScreen('discovery')">Complete Form</button>
            </div>
          `}
        </div>

        ${savedCareers.length > 0 ? `
          <div class="portfolio-stats">
            <div class="portfolio-stat">
              <div class="portfolio-stat-number">${savedCareers.length}</div>
              <div class="portfolio-stat-label">Careers Saved</div>
            </div>
            <div class="portfolio-stat">
              <div class="portfolio-stat-number">${Object.keys(domainCounts).length}</div>
              <div class="portfolio-stat-label">Domains Explored</div>
            </div>
            <div class="portfolio-stat">
              <div class="portfolio-stat-number">${topDomain?.icon || '—'}</div>
              <div class="portfolio-stat-label">${topDomain?.name || 'Top Domain'}</div>
            </div>
          </div>
          <div id="portfolio-cards">
            ${savedCareers.map(career => this.buildPortfolioCard(career)).join('')}
          </div>
        ` : `
          <div class="portfolio-empty">
            <div class="portfolio-empty-icon">📁</div>
            <h3 style="color:var(--text-secondary);margin-bottom:8px;">Your portfolio is empty</h3>
            <p>${this.t('portfolioEmpty')}</p>
            <button class="btn btn-accent mt-6" onclick="App.showScreen('explore')">Explore Careers</button>
          </div>
        `}
      </div>
    `;
  },

  buildPortfolioCard(career) {
    const domain = window.CareerData.DOMAINS.find(d => d.id === career.domain);
    const score = this.state.careerScores[career.id];
    const note = this.state.portfolioNotes?.[career.id] || '';

    return `
      <div class="portfolio-card" id="pcard-${career.id}">
        <div class="portfolio-card-icon">${domain?.icon || '💼'}</div>
        <div class="portfolio-card-info">
          <div class="portfolio-card-title">${career.title}</div>
          <div class="portfolio-card-domain">${domain?.name} · ${career.jobTitles[0]}</div>
          <textarea class="portfolio-note"
            placeholder="Why am I interested in this career? What steps will I take?..."
            onchange="App.saveNote('${career.id}', this.value)"
          >${note}</textarea>
        </div>
        <div class="portfolio-card-actions">
          ${score !== undefined ? `<div style="font-size:0.75rem;color:var(--indigo-300);font-weight:700;">🎯 ${score}/10</div>` : ''}
          <button class="btn btn-ghost btn-sm" onclick="App.openCareerModal('${career.id}')">👁 View</button>
          <button class="btn btn-ghost btn-sm" onclick="App.printCareerCard('${career.id}')">🖨</button>
          <button class="btn btn-ghost btn-sm" style="color:#EF9A9A;" onclick="App.removeFromPortfolio('${career.id}')">✕</button>
        </div>
      </div>
    `;
  },

  saveNote(careerId, note) {
    if (!this.state.portfolioNotes) this.state.portfolioNotes = {};
    this.state.portfolioNotes[careerId] = note;
    this.saveState();
  },

  // ── COMPARE ──────────────────────────────────────────────────
  toggleCompare(careerId) {
    const idx = this.state.compareList.indexOf(careerId);
    if (idx === -1) {
      if (this.state.compareList.length >= 3) {
        this.toast(this.t('compareLimit'), 'error');
        return;
      }
      this.state.compareList.push(careerId);
      this.toast(this.t('addedToCompare'), 'success');
    } else {
      this.state.compareList.splice(idx, 1);
    }
    this.saveState();
    if (this.state.currentScreen === 'explore') this.renderCareerCards();
  },

  renderCompareScreen() {
    const screen = document.getElementById('screen-compare');
    const compared = this.state.compareList.map(id => window.CareerData.CAREERS.find(c => c.id === id)).filter(Boolean);

    screen.innerHTML = `
      <div class="container">
        <div style="padding:var(--space-8) 0 var(--space-6);">
          <div class="section-badge">⇄ Side-by-Side</div>
          <h2>${this.t('compareTitle')}</h2>
          <p style="color:var(--text-muted);margin-top:4px;">${this.t('compareSubtitle')}</p>
        </div>

        <div class="compare-slots">
          ${[0, 1, 2].map(i => {
            const career = compared[i];
            if (career) {
              const domain = window.CareerData.DOMAINS.find(d => d.id === career.domain);
              const score = this.state.careerScores[career.id];
              return `
                <div class="compare-slot filled" style="position:relative;">
                  <button class="compare-slot-remove" onclick="App.toggleCompare('${career.id}');App.renderCompareScreen()">✕</button>
                  <div style="font-size:2rem;margin-bottom:8px;">${domain?.icon || '💼'}</div>
                  <div style="font-weight:700;color:var(--white);margin-bottom:4px;font-family:var(--font-display);">${career.title}</div>
                  <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:8px;">${domain?.name}</div>
                  ${score !== undefined ? `<div style="font-size:0.8rem;color:var(--indigo-300);font-weight:700;">🎯 Interest: ${score}/10</div>` : ''}
                </div>
              `;
            }
            return `
              <div class="compare-slot" onclick="App.showScreen('explore')">
                <div class="compare-slot-empty-icon">+</div>
                <div class="compare-slot-empty-text">Add a career from Explorer</div>
              </div>
            `;
          }).join('')}
        </div>

        ${compared.length >= 2 ? `
          <div style="overflow-x:auto;">
            <table class="compare-table">
              <thead>
                <tr>
                  <th>Category</th>
                  ${compared.map(c => `<th>${c.title}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${this.buildCompareRow('🏢 Domain', compared.map(c => window.CareerData.DOMAINS.find(d => d.id === c.domain)?.name || ''))}
                ${this.buildCompareRow('💰 Starting Salary', compared.map(c => c.startingSalary))}
                ${this.buildCompareRow('🚀 Peak Salary', compared.map(c => c.highestSalary))}
                ${this.buildCompareRow('🎓 Education', compared.map(c => c.qualifications))}
                ${this.buildCompareRow('📚 Class 12 Stream', compared.map(c => c.grade12Stream))}
                ${this.buildCompareRow('🛠 Key Skills', compared.map(c => c.skills.slice(0,3).join(', ')))}
                ${this.buildCompareRow('📝 Entrance Exams', compared.map(c => c.entranceExams.slice(0,2).join(', ')))}
                ${this.buildCompareRow('🏆 Scholarships', compared.map(c => c.scholarships.slice(0,2).join(', ')))}
                ${this.buildCompareRow('🌍 Work Environment', compared.map(c => c.workEnvironment))}
                ${this.state.quizCompleted ? this.buildCompareRow('🎯 Interest Score', compared.map(c => `${this.state.careerScores[c.id] || '—'}/10`)) : ''}
              </tbody>
            </table>
          </div>
        ` : `
          <div style="text-align:center;padding:64px;color:var(--text-muted);">
            <div style="font-size:3rem;margin-bottom:16px;">⇄</div>
            <p>${compared.length === 0 ? this.t('compareEmpty') : 'Add one more career to start comparing'}</p>
            <button class="btn btn-accent mt-6" onclick="App.showScreen('explore')">Go to Explorer</button>
          </div>
        `}
      </div>
    `;
  },

  buildCompareRow(label, values) {
    return `
      <tr>
        <td>${label}</td>
        ${values.map(v => `<td>${v}</td>`).join('')}
      </tr>
    `;
  },

  // ── PATHFINDER ───────────────────────────────────────────────
  renderPathfinderScreen() {
    const screen = document.getElementById('screen-pathfinder');
    const selectedId = this.state.selectedCareer;
    const career = selectedId ? window.CareerData.CAREERS.find(c => c.id === selectedId) : null;

    screen.innerHTML = `
      <div class="container">
        <div style="padding:var(--space-8) 0 var(--space-6);">
          <div class="section-badge">🛤 Step-by-Step Roadmap</div>
          <h2>${this.t('pathfinderTitle')}</h2>
          <p style="color:var(--text-muted);margin-top:4px;">${this.t('pathfinderSubtitle')}</p>
        </div>
        <div class="pathfinder-container">
          <div style="margin-bottom:var(--space-6);">
            <select class="filter-select" style="width:100%;border-radius:var(--radius-lg);padding:var(--space-4);"
              onchange="App.selectPathfinderCareer(this.value)">
              <option value="">-- Select a career --</option>
              ${window.CareerData.CAREERS.map(c => `
                <option value="${c.id}" ${c.id === selectedId ? 'selected' : ''}>${c.title}</option>
              `).join('')}
            </select>
          </div>
          ${career ? this.buildPathfinderTimeline(career) : `
            <div style="text-align:center;padding:64px;color:var(--text-muted);">
              <div style="font-size:3rem;margin-bottom:16px;">🛤</div>
              <p>Select a career above to see your step-by-step educational roadmap</p>
            </div>
          `}
        </div>
      </div>
    `;
  },

  showPathfinder(careerId) {
    this.state.selectedCareer = careerId;
    this.closeModal();
    this.showScreen('pathfinder');
  },

  selectPathfinderCareer(careerId) {
    this.state.selectedCareer = careerId;
    this.renderPathfinderScreen();
  },

  buildPathfinderTimeline(career) {
    const domain = window.CareerData.DOMAINS.find(d => d.id === career.domain);
    const score = this.state.careerScores?.[career.id];

    return `
      <div style="margin-bottom:var(--space-6);background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:var(--radius-xl);padding:var(--space-5);">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <span style="font-size:2rem;">${domain?.icon}</span>
          <div>
            <div style="font-size:1.25rem;font-weight:800;color:var(--white);font-family:var(--font-display);">${career.title}</div>
            <div style="font-size:0.85rem;color:var(--text-muted);">${domain?.name}</div>
          </div>
          ${score !== undefined ? `<div style="margin-left:auto;font-size:1rem;font-weight:700;color:var(--indigo-300);">🎯 ${score}/10</div>` : ''}
        </div>
        <p style="font-size:0.875rem;color:var(--text-muted);">${career.description}</p>
      </div>

      <div class="path-timeline">
        <div class="path-step" style="animation-delay:0.1s">
          <div class="path-step-label">📍 Right Now (Age Group: ${this.state.student.age || '16-21 Years'})</div>
          <div class="path-step-title">Focus Subjects: ${career.grade10Focus}</div>
          <div class="path-step-desc">Build a strong foundation in these subjects. Join relevant clubs, participate in competitions, and start exploring this field through books, YouTube, and mentors.</div>
        </div>
        <div class="path-step" style="animation-delay:0.2s">
          <div class="path-step-label">📚 Grade 11–12</div>
          <div class="path-step-title">Stream: ${career.grade12Stream}</div>
          <div class="path-step-desc">Choose this stream in Class 11. Focus on board exam preparation and start researching entrance exams. Consider relevant internships or shadowing experiences.</div>
        </div>
        <div class="path-step" style="animation-delay:0.3s">
          <div class="path-step-label">🎯 Entrance Exams to Target</div>
          <div class="path-step-title">${career.entranceExams.join(' · ')}</div>
          <div class="path-step-desc">Begin preparation for these exams from Class 11. Join coaching if needed. Attempt mock tests regularly and track your progress.</div>
        </div>
        <div class="path-step" style="animation-delay:0.4s">
          <div class="path-step-label">🏫 Undergraduate Education</div>
          <div class="path-step-title">${career.qualifications.split('|')[0].trim()}</div>
          <div class="path-step-desc">Complete your undergraduate degree. Take up internships, projects, and extracurriculars in this domain. Build your network and portfolio.</div>
        </div>
        <div class="path-step" style="animation-delay:0.5s">
          <div class="path-step-label">💼 Entry Level Career</div>
          <div class="path-step-title">Starting Salary: ${career.startingSalary}</div>
          <div class="path-step-desc">${career.careerPath[0] || 'Begin as a junior professional'}. Focus on skill building, certifications, and building your professional reputation.</div>
        </div>
        <div class="path-step" style="animation-delay:0.6s">
          <div class="path-step-label">🚀 Career Growth Path</div>
          <div class="path-step-title">${career.careerPath.join(' → ')}</div>
          <div class="path-step-desc">With experience, mentorship, and continuous learning, advance through the career ladder. Peak salaries can reach <strong>${career.highestSalary}</strong>.</div>
        </div>
        <div class="path-step" style="animation-delay:0.7s;border-color:rgba(245,197,24,0.3);background:rgba(245,197,24,0.05)">
          <div class="path-step-label" style="color:var(--gold);">🏆 Inspiration</div>
          <div class="path-step-title" style="color:var(--gold);">Learn from the Best</div>
          <div class="path-step-desc">
            ${career.famousPersons.map(p => `<strong>${p.name}</strong> — ${p.bio}`).join('<br>')}
          </div>
        </div>
        <div class="path-step" style="animation-delay:0.8s;">
          <div class="path-step-label">🎓 Scholarships to Apply For</div>
          <div class="path-step-title">Financial Support Available</div>
          <div class="path-step-desc">${career.scholarships.join(' · ')}</div>
        </div>
      </div>

      <div style="display:flex;gap:12px;margin-top:var(--space-6);">
        <button class="btn btn-ghost" onclick="App.printPathfinder('${career.id}')">🖨 Print Roadmap</button>
        <button class="btn btn-ghost" onclick="App.togglePortfolio('${career.id}')">
          ${this.state.portfolio.includes(career.id) ? '✓ In Portfolio' : '+ Save to Portfolio'}
        </button>
      </div>
    `;
  },

  // ── TEACHER DASHBOARD ─────────────────────────────────────────
  renderTeacherScreen() {
    const screen = document.getElementById('screen-teacher');

    if (!this.state.teacherLoggedIn) {
      screen.innerHTML = `
        <div class="container">
          <div class="teacher-login">
            <div style="font-size:4rem;margin-bottom:16px;">👩‍🏫</div>
            <div class="section-badge">Teacher Access</div>
            <h2 style="margin:12px 0 8px;">${this.t('teacherTitle')}</h2>
            <p style="color:var(--text-muted);margin-bottom:32px;">${this.t('teacherSubtitle')}</p>
            <div class="form-field" style="margin-bottom:16px;">
              <label class="form-label">${this.t('teacherPin')}</label>
              <input type="password" class="form-input" id="teacher-pin" placeholder="${this.t('enterPin')}">
            </div>
            <p style="font-size:0.75rem;color:var(--text-muted);margin-bottom:16px;">Default PIN: 1234</p>
            <button class="btn btn-accent btn-full" onclick="App.teacherLogin()">${this.t('accessDash')}</button>
          </div>
        </div>
      `;
      return;
    }

    this.renderTeacherDashboard(screen);
  },

  teacherLogin() {
    const pin = document.getElementById('teacher-pin')?.value;
    if (pin === '1234') {
      this.state.teacherLoggedIn = true;
      this.renderTeacherDashboard(document.getElementById('screen-teacher'));
    } else {
      this.toast('Incorrect PIN. Try 1234', 'error');
    }
  },

  generateDemoStudentRecords() {
    if (this.state.studentRecords?.length > 0) return;
    const names = ['Priya S.', 'Arjun K.', 'Divya M.', 'Rahul T.', 'Sneha R.', 'Karthik P.', 'Ananya B.', 'Vikram N.', 'Meera J.', 'Suresh L.'];
    const domains = window.CareerData?.DOMAINS?.map(d => d.id) || [];
    const ageOptions = ['10-15 Years', '16-21 Years', '21-25 Years', 'Above 25 Years'];
    const varkOptions = ['V', 'A', 'R', 'K'];
    
    this.state.studentRecords = names.map((name, i) => {
      const topDomainId = domains[i % domains.length];
      const selectedVark = varkOptions[i % varkOptions.length];
      return {
        id: 'stu_demo_' + i,
        name,
        age: ageOptions[i % 4],
        institute: 'Demo Institute',
        topDomain: topDomainId,
        quizCompleted: true,
        discoveryCompleted: true,
        discoveryAnswers: {
          aboutYou: {
            selfDesc: `A curious student interested in exploring pathways and careers in ${topDomainId}.`,
            freeTime: 'Doodling, playing local sports, and reading science articles.',
            recentExcitement: 'Building a simple model with friends for the science exhibit.',
            worldProblem: 'Clean water distribution and environment safety.',
            inspiration: 'Dr. A.P.J. Abdul Kalam, because of his scientific mindset and humble nature.'
          },
          vark: {
            q1: selectedVark, q2: selectedVark, q3: selectedVark,
            q4: selectedVark, q5: selectedVark, q6: selectedVark
          },
          lifeSkills: { q1: 4, q2: 3, q3: 4, q4: 5, q5: 4, q6: 4 },
          purpose: {
            sdgAware: 'Yes',
            selectedSDGs: [i % 2 === 0 ? 3 : 4, i % 2 === 0 ? 9 : 13],
            futureImpact: `I want to apply technology to make improvements in ${topDomainId} and help my community.`,
            doneSDG: 'Yes'
          },
          careerSupport: {
            career: topDomainId.charAt(0).toUpperCase() + topDomainId.slice(1).replace(/_/g, ' ') + ' Specialist',
            reason: 'It perfectly matches my practical interest scores and learning styles.',
            helpNeeded: 'Career advice, scholarship listings, and hands-on preparation guides.',
            financialNeed: i % 3 === 0 ? 'Yes' : 'Partial',
            talkCounselor: 'Yes'
          },
          snapshot: {
            clubs: true, project: i % 2 === 0, onlineCourse: true,
            competition: false, visitedSite: true, collab: true,
            comments: 'Looking forward to the guidance workshop.'
          }
        },
        completedAt: new Date().toISOString()
      };
    });
  },

  showStudentProfileModal(studentId) {
    const record = this.state.studentRecords.find(r => r.id === studentId || r.name === studentId);
    if (!record) return;

    const modal = document.getElementById('modal-overlay');
    if (!modal) return;

    let profileHtml = '';
    if (record.discoveryCompleted && record.discoveryAnswers) {
      const answers = record.discoveryAnswers;
      const varkAnswers = answers.vark;
      const counts = { V: 0, A: 0, R: 0, K: 0 };
      Object.values(varkAnswers).forEach(val => { if (counts[val] !== undefined) counts[val]++; });
      let maxCount = 0;
      Object.values(counts).forEach(c => { if (c > maxCount) maxCount = c; });
      const dominant = [];
      Object.entries(counts).forEach(([style, c]) => { if (c === maxCount && maxCount > 0) dominant.push(style); });

      const stylesInfo = {
        V: '👁️ Visual (V)',
        A: '🎧 Auditory (A)',
        R: '📖 Read/Write (R)',
        K: '🧪 Kinesthetic (K)'
      };
      const learningStyle = dominant.length === 1 ? stylesInfo[dominant[0]] : (dominant.length > 1 ? '🌟 Multimodal (' + dominant.join(', ') + ')' : 'Exploring');

      const skillsMap = { q1: 'Communication', q2: 'Problem Solving', q3: 'Self-Management', q4: 'Collaboration', q5: 'Digital Safety', q6: 'Resilience' };
      const sdgNames = { 3: '🏥 Goal 3: Health', 4: '📚 Goal 4: Education', 7: '⚡ Goal 7: Clean Energy', 8: '💼 Goal 8: Decent Work', 9: '⚙️ Goal 9: Innovation', 11: '🏙️ Goal 11: Cities', 12: '♻️ Goal 12: Consumption', 13: '🍀 Goal 13: Climate', 16: '⚖️ Goal 16: Peace' };

      profileHtml = `
        <div class="modal-card" style="max-width:700px;max-height:85vh;overflow-y:auto;position:relative;background:#0F172A;border:1px solid #1E293B;padding:30px;border-radius:16px;">
          <div class="modal-close-btn" onclick="App.closeModal()" style="position:absolute;top:20px;right:20px;cursor:pointer;font-size:1.2rem;color:var(--text-muted);">✕</div>
          <div style="border-bottom: 1px solid #1E293B; padding-bottom: 15px; margin-bottom: 20px;">
            <span class="badge" style="background:rgba(41,82,204,0.1);color:#4CA1FF;margin-bottom:6px;display:inline-block;border:1px solid rgba(41,82,204,0.15);">Student Profile</span>
            <h2 style="color:var(--text-light);margin:5px 0 0;font-size:1.6rem;">${record.name}</h2>
            <p style="color:var(--text-muted);font-size:0.9rem;margin:4px 0 0;">Age: ${record.age} · Institute: ${record.institute}</p>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">
            <div class="card" style="background:#1E293B;border:1px solid rgba(255,255,255,0.05);padding:15px;">
              <h4 style="margin:0 0 8px;color:var(--primary);font-size:0.9rem;">🎯 VARK Learning Style</h4>
              <div style="font-size:1.15rem;font-weight:700;color:var(--white);">${learningStyle}</div>
              <div style="display:flex;gap:8px;align-items:flex-end;height:35px;margin-top:10px;border-bottom:1px solid #334155;">
                ${Object.entries(counts).map(([k, c]) => `
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;">
                    <div style="width:100%;height:${(c/6)*100}%;background:#2952CC;border-radius:2px 2px 0 0;"></div>
                    <span style="font-size:0.65rem;color:#888;margin-top:2px;">${k}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="card" style="background:#1E293B;border:1px solid rgba(255,255,255,0.05);padding:15px;">
              <h4 style="margin:0 0 8px;color:var(--primary);font-size:0.9rem;">💪 Life Skills Profile</h4>
              <div style="display:flex;flex-direction:column;gap:4px;">
                ${Object.entries(answers.lifeSkills).map(([k, v]) => `
                  <div style="display:flex;justify-content:space-between;font-size:0.75rem;">
                    <span style="color:#aaa;">${skillsMap[k]}</span>
                    <span style="color:var(--white);font-weight:700;">${v}/5</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="card" style="background:#1E293B;border:1px solid rgba(255,255,255,0.05);padding:15px;margin-bottom:20px;">
            <h4 style="margin:0 0 8px;color:var(--primary);font-size:0.9rem;">🌍 Purpose & SDG Goals</h4>
            <p style="margin:0 0 10px;font-size:0.85rem;color:#ccc;"><strong>SDGs Selected:</strong> ${answers.purpose.selectedSDGs.map(c => sdgNames[c] || c).join(', ') || 'None'}</p>
            <p style="margin:0;font-size:0.85rem;color:#ccc;font-style:italic;">"${answers.purpose.futureImpact || 'No specific impact defined.'}"</p>
          </div>

          <div class="card" style="background:#1E293B;border:1px solid rgba(255,255,255,0.05);padding:15px;margin-bottom:20px;">
            <h4 style="margin:0 0 8px;color:var(--primary);font-size:0.9rem;">🧭 Career Dream & Support Needs</h4>
            <p style="margin:0 0 6px;font-size:0.85rem;color:#ccc;"><strong>Target Career:</strong> ${answers.careerSupport.career || 'None'}</p>
            <p style="margin:0 0 10px;font-size:0.85rem;color:#ccc;"><strong>Why:</strong> ${answers.careerSupport.reason || '—'}</p>
            <p style="margin:0 0 10px;font-size:0.85rem;color:#ccc;"><strong>Support Needed:</strong> ${answers.careerSupport.helpNeeded || '—'}</p>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              <span class="badge" style="background:rgba(0,188,212,0.1);color:#00BCD4;border:1px solid rgba(0,188,212,0.2);font-size:0.75rem;">Counselling: ${answers.careerSupport.talkCounselor}</span>
              <span class="badge" style="background:rgba(156,39,176,0.1);color:#9C27B0;border:1px solid rgba(156,39,176,0.2);font-size:0.75rem;">Scholarship: ${answers.careerSupport.financialNeed}</span>
            </div>
          </div>

          <div class="card" style="background:#1E293B;border:1px solid rgba(255,255,255,0.05);padding:15px;">
            <h4 style="margin:0 0 8px;color:var(--primary);font-size:0.9rem;">🧪 STEAM Snapshot (12-18 Months)</h4>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:0.8rem;color:#ccc;">
              <div>${answers.snapshot.clubs ? '✅' : '❌'} Joined club/team</div>
              <div>${answers.snapshot.project ? '✅' : '❌'} Built project</div>
              <div>${answers.snapshot.onlineCourse ? '✅' : '❌'} Online workshop</div>
              <div>${answers.snapshot.competition ? '✅' : '❌'} Entered competition</div>
              <div>${answers.snapshot.visitedSite ? '✅' : '❌'} Visited industrial site</div>
              <div>${answers.snapshot.collab ? '✅' : '❌'} Collaborated with peers</div>
            </div>
            ${answers.snapshot.comments ? `<p style="margin:10px 0 0;font-size:0.8rem;color:#888;">Comments: ${answers.snapshot.comments}</p>` : ''}
          </div>
        </div>
      `;
    } else {
      profileHtml = `
        <div class="modal-card" style="max-width:500px;text-align:center;padding:40px 20px;background:#0F172A;border:1px solid #1E293B;border-radius:16px;">
          <div class="modal-close-btn" onclick="App.closeModal()">✕</div>
          <div style="font-size:3rem;margin-bottom:15px;">📝</div>
          <h2 style="color:var(--text-light);margin-bottom:10px;">Form Pending</h2>
          <p style="color:var(--text-muted);margin-bottom:20px;">${record.name} has not completed the Career Discovery Questionnaire yet.</p>
          <button class="btn btn-primary" onclick="App.closeModal()">Close</button>
        </div>
      `;
    }

    modal.innerHTML = profileHtml;
    modal.classList.add('active');
  },

  renderTeacherDashboard(screen) {
    const records = this.state.studentRecords || [];
    const quizCompleted = records.length;
    const domainCount = {};
    records.forEach(r => {
      domainCount[r.domainId || r.topDomain] = (domainCount[r.domainId || r.topDomain] || 0) + 1;
    });
    const topDomains = Object.entries(domainCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 7)
      .map(([id, count]) => ({
        domain: window.CareerData.DOMAINS.find(d => d.id === id),
        count
      }))
      .filter(d => d.domain);

    const maxCount = Math.max(...topDomains.map(d => d.count), 1);

    screen.innerHTML = `
      <div class="container">
        <div style="padding:var(--space-8) 0 var(--space-6);display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
          <div>
            <div class="section-badge">👩‍🏫 Teacher Dashboard</div>
            <h2>${this.t('teacherTitle')}</h2>
          </div>
          <div style="display:flex;gap:10px;">
            <button class="btn btn-ghost" onclick="App.printDashboard()">🖨 Print Report</button>
            <button class="btn btn-ghost" onclick="App.state.teacherLoggedIn=false;App.renderTeacherScreen()">🔒 Lock</button>
          </div>
        </div>

        <div class="dashboard-grid">
          <div class="dashboard-card">
            <div class="dashboard-card-title">👤 Students Registered</div>
            <div class="stat-big">${records.length}</div>
            <div class="stat-label">Total participating students</div>
          </div>
          <div class="dashboard-card">
            <div class="dashboard-card-title">🎯 Quiz Completions</div>
            <div class="stat-big">${quizCompleted}</div>
            <div class="stat-label">Students who completed the quiz</div>
          </div>
          <div class="dashboard-card">
            <div class="dashboard-card-title">📋 Discovery Profiles</div>
            <div class="stat-big">${records.filter(r => r.discoveryCompleted).length}</div>
            <div class="stat-label">Discovery questionnaires submitted</div>
          </div>
        </div>

        <div class="dashboard-grid" style="margin-top:var(--space-5);">
          <div class="dashboard-card" style="grid-column:1/-1;">
            <div class="dashboard-card-title">📊 Top Career Domains of Interest</div>
            <div style="margin-top:var(--space-4);">
              ${topDomains.length > 0 ? topDomains.map(({domain, count}) => `
                <div class="domain-bar">
                  <div class="domain-bar-label">${domain.icon} ${domain.name}</div>
                  <div class="domain-bar-track">
                    <div class="domain-bar-fill" style="width:${(count/maxCount)*100}%"></div>
                  </div>
                  <div class="domain-bar-count">${count}</div>
                </div>
              `).join('') : '<p style="color:var(--text-muted)">Complete the quiz to see class data</p>'}
            </div>
          </div>
        </div>

        <div class="dashboard-card" style="margin-top:var(--space-5);">
          <div class="dashboard-card-title">👥 Student Activity Log</div>
          <div style="margin-top:var(--space-4);overflow-x:auto;">
            <table class="compare-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Age</th>
                  <th>Top Domain</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${records.map(r => {
                  const domain = window.CareerData.DOMAINS.find(d => d.id === r.topDomain);
                  const quizStatus = r.quizCompleted !== false ? `<span style="padding:3px 8px;background:rgba(76,175,80,0.15);border-radius:999px;font-size:0.7rem;color:#81C784;font-weight:700;display:inline-block;margin-right:4px;">✓ Quiz Done</span>` : '';
                  const discStatus = r.discoveryCompleted ? `<span style="padding:3px 8px;background:rgba(33,150,243,0.15);border-radius:999px;font-size:0.7rem;color:#64B5F6;font-weight:700;display:inline-block;">✓ Discovery Done</span>` : '';
                  return `
                    <tr>
                      <td style="color:var(--white);font-weight:600;">${r.name}</td>
                      <td>Age: ${r.age}</td>
                      <td>${domain ? `${domain.icon} ${domain.name}` : '—'}</td>
                      <td>${quizStatus} ${discStatus}</td>
                      <td>
                        <button class="btn btn-ghost btn-sm" onclick="App.showStudentProfileModal('${r.id || r.name}')" style="padding:4px 10px;font-size:0.72rem;background:rgba(41,82,204,0.1);color:#4CA1FF;border-radius:6px;border:1px solid rgba(41,82,204,0.15);">🔍 Profile</button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="dashboard-card" style="margin-top:var(--space-5);">
          <div class="dashboard-card-title">⏱ Workshop Session Timer</div>
          <div style="margin-top:var(--space-4);display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
            <div id="timer-display" style="font-family:var(--font-display);font-size:3rem;font-weight:900;color:var(--white);letter-spacing:0.05em;">00:00</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <button class="btn btn-ghost btn-sm" onclick="App.startTimer(5)">5 min</button>
              <button class="btn btn-ghost btn-sm" onclick="App.startTimer(10)">10 min</button>
              <button class="btn btn-ghost btn-sm" onclick="App.startTimer(15)">15 min</button>
              <button class="btn btn-ghost btn-sm" onclick="App.startTimer(30)">30 min</button>
              <button class="btn btn-accent btn-sm" onclick="App.stopTimer()">⏹ Stop</button>
            </div>
          </div>
          <div style="margin-top:16px;">
            <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Discussion Prompts</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${[
                '🗣 "Which career surprised you most? Why?"',
                '🔍 "What skills do your top 3 careers have in common?"',
                '💭 "If salary wasn\'t a factor, which career would you choose?"',
                '🤝 "Find someone with a completely different top domain — what do you learn?"',
                '🎯 "What\'s one action you can take this week toward your dream career?"'
              ].map(p => `<div style="padding:10px 14px;background:var(--glass-bg);border-radius:var(--radius-md);font-size:0.875rem;color:var(--text-secondary);">${p}</div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  timerInterval: null,
  timerSeconds: 0,

  startTimer(minutes) {
    clearInterval(this.timerInterval);
    this.timerSeconds = minutes * 60;
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      this.updateTimerDisplay();
      if (this.timerSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.toast('⏰ Time is up!', 'success');
      }
    }, 1000);
  },

  stopTimer() {
    clearInterval(this.timerInterval);
    this.timerSeconds = 0;
    this.updateTimerDisplay();
  },

  updateTimerDisplay() {
    const el = document.getElementById('timer-display');
    if (!el) return;
    const m = Math.floor(this.timerSeconds / 60).toString().padStart(2, '0');
    const s = (this.timerSeconds % 60).toString().padStart(2, '0');
    el.textContent = `${m}:${s}`;
    el.style.color = this.timerSeconds <= 30 && this.timerSeconds > 0 ? 'var(--saffron-400)' : 'var(--white)';
  },

  // ── PRINT FUNCTIONS ──────────────────────────────────────────
  printCareerCard(careerId) {
    const career = window.CareerData.CAREERS.find(c => c.id === careerId);
    if (!career) return;
    const domain = window.CareerData.DOMAINS.find(d => d.id === career.domain);

    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${career.title} - Career Card</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px 20px; color: #222; }
          .header { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 3px solid #1E3FA8; }
          .icon { font-size: 3rem; }
          .title { font-size: 2rem; font-weight: 900; color: #0D1B4B; }
          .domain { font-size: 0.9rem; color: #666; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          .section { margin-bottom: 20px; }
          .section-title { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #666; margin-bottom: 6px; }
          .section-content { font-size: 0.9rem; color: #333; }
          .salary { display: flex; gap: 16px; }
          .salary-box { flex: 1; padding: 12px; background: #E8F5E9; border-radius: 8px; text-align: center; }
          .salary-box .val { font-size: 1.1rem; font-weight: 700; color: #2E7D32; }
          .tag { display: inline-block; margin: 2px; padding: 3px 8px; background: #E3F2FD; border-radius: 999px; font-size: 0.72rem; }
          .famous { margin-bottom: 8px; }
          .famous-name { font-weight: 700; color: #1E3FA8; }
          .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #ddd; font-size: 0.78rem; color: #999; text-align: center; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="icon">${domain?.icon || '💼'}</div>
          <div>
            <div class="title">${career.title}</div>
            <div class="domain">${domain?.name} · ${career.jobTitles.join(', ')}</div>
          </div>
        </div>
        <div class="section"><div class="section-title">About This Career</div><div class="section-content">${career.description}</div></div>
        <div class="salary">
          <div class="salary-box"><div class="section-title">Starting Salary</div><div class="val">${career.startingSalary}</div></div>
          <div class="salary-box"><div class="section-title">Peak Salary</div><div class="val">${career.highestSalary}</div></div>
        </div>
        <br>
        <div class="grid">
          <div class="section"><div class="section-title">Qualifications</div><div class="section-content">${career.qualifications}</div></div>
          <div class="section"><div class="section-title">Class 12 Stream</div><div class="section-content">${career.grade12Stream}</div><br><div class="section-title">Class 10 Focus</div><div class="section-content">${career.grade10Focus}</div></div>
          <div class="section"><div class="section-title">Key Skills</div><div>${career.skills.map(s => `<span class="tag">${s}</span>`).join('')}</div></div>
          <div class="section"><div class="section-title">Career Path</div><div class="section-content">${career.careerPath.join(' → ')}</div></div>
          <div class="section"><div class="section-title">Entrance Exams</div><div>${career.entranceExams.map(e => `<span class="tag">${e}</span>`).join('')}</div></div>
          <div class="section"><div class="section-title">Scholarships</div><div>${career.scholarships.map(s => `<span class="tag">${s}</span>`).join('')}</div></div>
        </div>
        <div class="section"><div class="section-title">Famous Persons in This Field</div>${career.famousPersons.map(p => `<div class="famous"><div class="famous-name">⭐ ${p.name}</div><div>${p.bio}</div></div>`).join('')}</div>
        <div class="section"><div class="section-title">Work Environment</div><div class="section-content">${career.workEnvironment}</div></div>
        <div class="footer">500 Paths to Success · Conducted by ETAP ADVISORS in association with Ministry of Education, UNICEF India & NCERT | Contact: etapadvisors@gmail.com</div>
        <script>window.print();<\/script>
      </body>
      </html>
    `);
    win.document.close();
  },

  printPortfolio() {
    const careers = this.state.portfolio
      .map(id => window.CareerData.CAREERS.find(c => c.id === id))
      .filter(Boolean);

    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${this.state.student.name} - Career Portfolio</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px 20px; }
          .header { text-align: center; margin-bottom: 32px; border-bottom: 3px solid #1E3FA8; padding-bottom: 16px; }
          .title { font-size: 2rem; font-weight: 900; color: #0D1B4B; }
          .career { margin-bottom: 24px; padding: 20px; border: 1px solid #ddd; border-radius: 8px; page-break-inside: avoid; }
          .career-title { font-size: 1.2rem; font-weight: 700; color: #1E3FA8; margin-bottom: 4px; }
          .note { margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px; font-style: italic; font-size: 0.9rem; }
          .footer { margin-top: 32px; text-align: center; font-size: 0.75rem; color: #999; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="title">📁 Career Portfolio</div>
          <div>${this.state.student.name} · Age: ${this.state.student.age} · ${this.state.student.institute}</div>
          <div style="margin-top:4px;font-size:0.85rem;color:#666;">500 Paths to Success · Conducted by ETAP ADVISORS (etapadvisors@gmail.com)</div>
        </div>
        ${careers.map((c, i) => {
          const domain = window.CareerData.DOMAINS.find(d => d.id === c.domain);
          const note = this.state.portfolioNotes?.[c.id] || '';
          const score = this.state.careerScores?.[c.id];
          return `
            <div class="career">
              <div class="career-title">${i + 1}. ${domain?.icon} ${c.title}</div>
              <div style="font-size:0.85rem;color:#666;margin-bottom:6px;">${domain?.name} | Starting: ${c.startingSalary} | Peak: ${c.highestSalary}</div>
              <div style="font-size:0.85rem;">${c.description}</div>
              ${score !== undefined ? `<div style="margin-top:6px;font-size:0.8rem;font-weight:700;color:#1E3FA8;">🎯 Interest Score: ${score}/10</div>` : ''}
              ${note ? `<div class="note">💭 My thoughts: ${note}</div>` : ''}
            </div>
          `;
        }).join('')}
        <div class="footer">Printed from Career Compass · 500 Paths to Success · Conducted by ETAP ADVISORS in association with Ministry of Education & UNICEF India</div>
        <script>window.print();<\/script>
      </body>
      </html>
    `);
    win.document.close();
  },

  printPathfinder(careerId) {
    const career = window.CareerData.CAREERS.find(c => c.id === careerId);
    if (!career) return;
    const domain = window.CareerData.DOMAINS.find(d => d.id === career.domain);

    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${career.title} - Career Roadmap</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px 20px; }
          .header { margin-bottom: 24px; padding-bottom: 16px; border-bottom: 3px solid #1E3FA8; }
          .title { font-size: 2rem; font-weight: 900; color: #0D1B4B; }
          .step { margin-bottom: 16px; padding: 16px 20px; border-left: 4px solid #1E3FA8; background: #f9f9f9; border-radius: 0 8px 8px 0; }
          .step-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #1E3FA8; margin-bottom: 4px; }
          .step-title { font-size: 1rem; font-weight: 700; color: #222; margin-bottom: 4px; }
          .step-desc { font-size: 0.875rem; color: #555; }
          .footer { margin-top: 24px; text-align: center; font-size: 0.75rem; color: #999; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="title">${domain?.icon} ${career.title} — Career Roadmap</div>
          <div style="font-size:0.9rem;color:#666;">${this.state.student.name} · Age: ${this.state.student.age} · ${this.state.student.institute}</div>
        </div>
        <div class="step"><div class="step-label">Right Now</div><div class="step-title">Focus: ${career.grade10Focus}</div></div>
        <div class="step"><div class="step-label">Grade 11-12</div><div class="step-title">Stream: ${career.grade12Stream}</div></div>
        <div class="step"><div class="step-label">Entrance Exams</div><div class="step-title">${career.entranceExams.join(', ')}</div></div>
        <div class="step"><div class="step-label">Undergraduate</div><div class="step-title">${career.qualifications.split('|')[0]}</div></div>
        <div class="step"><div class="step-label">Career Path</div><div class="step-title">${career.careerPath.join(' → ')}</div></div>
        <div class="step"><div class="step-label">Salary Range</div><div class="step-title">Starting: ${career.startingSalary} | Peak: ${career.highestSalary}</div></div>
        <div class="step" style="border-color:#F5C518;"><div class="step-label" style="color:#D4A800;">Inspiration</div><div class="step-title">${career.famousPersons.map(p => p.name).join(', ')}</div><div class="step-desc">${career.famousPersons.map(p => `${p.name}: ${p.bio}`).join(' | ')}</div></div>
        <div class="footer">Career Compass · 500 Paths to Success · Conducted by ETAP ADVISORS in association with Ministry of Education & UNICEF India</div>
        <script>window.print();<\/script>
      </body>
      </html>
    `);
    win.document.close();
  },

  printDashboard() {
    window.print();
  },

  printCertificate() {
    if (!this.state.quizCompleted) {
      this.toast('Please complete the interest quiz first to earn your certificate!', 'error');
      return;
    }
    const student = this.state.student;
    const topDomain = this.getTopDomain();
    const date = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const certificateId = 'CC-' + Math.floor(100000 + Math.random() * 900000);

    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Participation Certificate - ${student.name}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Noto+Sans:wght@400;700&display=swap');
          body { font-family: 'Noto Sans', sans-serif; background: #fafafa; margin: 0; padding: 40px; display: flex; justify-content: center; align-items: center; min-height: 100vh; box-sizing: border-box; }
          .certificate-container { background: #fff; border: 20px solid #0D1B4B; padding: 45px 50px; width: 850px; height: 600px; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.1); box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: space-between; text-align: center; }
          .inner-border { border: 2px solid #F06318; width: 100%; height: 100%; padding: 25px 30px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: space-between; position: relative; }
          .badge-gov { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #666; margin-bottom: 6px; }
          .gov-logos { display: flex; gap: 30px; align-items: center; justify-content: center; margin-bottom: 12px; }
          .logo-text { font-size: 0.85rem; font-weight: 800; color: #0D1B4B; font-family: 'Outfit', sans-serif; text-transform: uppercase; }
          .certificate-title { font-family: 'Outfit', sans-serif; font-size: 2.3rem; font-weight: 900; color: #0D1B4B; text-transform: uppercase; letter-spacing: 0.05em; margin: 10px 0 4px; }
          .presentation-line { font-style: italic; font-size: 0.95rem; color: #555; margin: 4px 0; }
          .student-name { font-family: 'Outfit', sans-serif; font-size: 2rem; font-weight: 800; color: #F06318; border-bottom: 2px dashed #0D1B4B; padding: 2px 30px; margin: 6px 0; display: inline-block; }
          .details-line { font-size: 0.95rem; color: #333; max-width: 650px; line-height: 1.5; margin: 6px 0; }
          .top-match-badge { display: inline-flex; align-items: center; gap: 8px; background: #FFF0E8; border: 1px solid #FF7A2F; border-radius: 999px; padding: 4px 18px; font-weight: 700; color: #D4500A; font-size: 0.85rem; margin-top: 8px; }
          .signatures { display: flex; justify-content: space-between; width: 100%; margin-top: 24px; padding: 0 40px; box-sizing: border-box; }
          .sig-block { display: flex; flex-direction: column; align-items: center; }
          .sig-line { width: 150px; border-top: 1px solid #333; margin-bottom: 6px; }
          .sig-title { font-size: 0.68rem; text-transform: uppercase; font-weight: 700; color: #666; letter-spacing: 0.05em; }
          .sig-org { font-size: 0.6rem; color: #999; }
          .cert-id { position: absolute; bottom: 12px; left: 12px; font-size: 0.65rem; color: #999; font-family: monospace; }
          .cert-date { position: absolute; bottom: 12px; right: 12px; font-size: 0.65rem; color: #999; font-family: monospace; }
          @media print {
            body { background: none; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }
            .certificate-container { box-shadow: none; border-width: 15px; margin: 0 auto; page-break-inside: avoid; }
            @page { size: landscape; margin: 0; }
          }
        </style>
      </head>
      <body>
        <div class="certificate-container">
          <div class="inner-border">
            <div>
              <div class="badge-gov">National Career Exploration Initiative</div>
              <div class="gov-logos" style="display:flex;gap:20px;align-items:center;justify-content:center;margin-top:6px;">
                <img src="assets/etap_logo_3.png" alt="ETAP Logo" style="height:32px;width:auto;object-fit:contain;">
                <span class="logo-text">ETAP ADVISORS</span>
                <span style="font-size:1.2rem;color:#ccc;">|</span>
                <span class="logo-text">🇮🇳 Ministry of Education</span>
                <span style="font-size:1.2rem;color:#ccc;">|</span>
                <span class="logo-text">🟦 UNICEF India</span>
              </div>
            </div>
            
            <div>
              <div class="certificate-title">Certificate of Completion</div>
              <div class="presentation-line">This is proudly presented to</div>
              <div class="student-name">${student.name}</div>
              <div class="details-line">
                of <strong>${student.institute}</strong> (Age: ${student.age}) for actively participating in and successfully completing the **Career Compass** workshop based on the national curriculum **"500 Paths to Success: Navigating Life After Institute"**.
              </div>
              <div class="top-match-badge">
                <span>🎯 Top Career Match:</span>
                <span>${topDomain?.icon || ''} ${topDomain?.name || 'Self-Exploration'}</span>
              </div>
            </div>

            <div class="signatures">
              <div class="sig-block">
                <div style="font-family:'Courier New', monospace;font-size:0.85rem;font-style:italic;color:#555;margin-bottom:2px;">ETAP ADVISORS</div>
                <div class="sig-line"></div>
                <div class="sig-title">Workshop Director</div>
                <div class="sig-org">ETAP ADVISORS Counsel</div>
              </div>
              <div class="sig-block">
                <div style="font-family:'Courier New', monospace;font-size:0.85rem;font-style:italic;color:#2952CC;margin-bottom:2px;font-weight:700;">YuWaah!</div>
                <div class="sig-line"></div>
                <div class="sig-title">Representative</div>
                <div class="sig-org">UNICEF India</div>
              </div>
            </div>
          </div>
          <div class="cert-id">ID: ${certificateId}</div>
          <div class="cert-date">Date: ${date}</div>
        </div>
        <script>window.print();<\/script>
      </body>
      </html>
    `);
    win.document.close();
  },

  // ── TOAST ────────────────────────────────────────────────────
  toast(message, type = '') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
};

// ── STARTUP ───────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  App.init();
  // Close modal on overlay click
  document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) App.closeModal();
  });
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') App.closeModal();
  });
});
