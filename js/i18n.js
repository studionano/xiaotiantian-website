// Internationalization (i18n) support
const translations = {
    en: {
        'page.title': 'XiaoTianTian Tech - AI Empowering Sports',
        'nav.brand': 'XiaoTianTian Tech',
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'hero.title': 'SmartHit Tennis App',
        'hero.subtitle': 'AI auto-detects rallies, Hawk-Eye trajectory playback, supports any frame rate video, instant analysis.<br>Clean interface, results in three steps—focus on every shot.',
        'hero.cta': 'Download on App Store',
        'products.title': 'SmartHit Tennis',
        'products.desc': 'SmartHit Tennis is an intelligent video analysis app designed for tennis enthusiasts and professional athletes. Using advanced AI small object detection technology, SmartHit Tennis can automatically identify and clip effective rallies from tennis videos, letting you focus on the highlights. The built-in intelligent analysis engine professionally evaluates your shot trajectory, footwork, and technique, providing data-driven performance reports.',
        'products.downloadOn': 'Download on the',
        'products.appStore': 'App Store',
        'products.imgAlt': 'SmartHit Tennis App Screenshot',
        'products.feature1': 'AI Video Processing',
        'products.feature2': 'Pro Sports Analytics',
        'products.feature3': 'Local Processing',
        'products.feature4': 'Personalized Training',
        'features.title': 'Features',
        'features.analytics.title': 'Data Analytics',
        'features.analytics.desc': 'Comprehensive tennis match data reports and analysis.',
        'features.ml.title': 'Machine Learning',
        'features.ml.desc': 'Machine learning technology continuously optimizes user experience.',
        'features.training.title': 'Training Assistant',
        'features.training.desc': 'Helps users plan personalized tennis training programs.',
        'features.match.title': 'Match Analysis',
        'features.match.desc': 'Deep insights into match data and performance.',
        'services.title': 'Our Services',
        'services.desc': 'We focus on AI visual recognition technology, sports data analytics platforms, intelligent mobile application development, and sports technology consulting, providing comprehensive digital solutions for sports training and competition.',
        'services.card1.title': 'AI Visual Recognition',
        'services.card1.desc': 'Using advanced AI technology, we specialize in small object detection and motion trajectory analysis, providing intelligent solutions for sports video processing.',
        'services.card2.title': 'Mobile App Development',
        'services.card2.desc': 'We offer end-to-end mobile app development services, combining advanced technology with excellent user experience to create professional-grade applications.',
        'services.card3.title': 'Data Analytics & Visualization',
        'services.card3.desc': 'Through powerful data processing, we transform complex sports data into intuitive analysis results, helping users discover potential value and areas for improvement.',
        'services.card4.title': 'Sports Tech Consulting',
        'services.card4.desc': 'We provide professional consulting services for AI in sports, helping partners build innovative solutions and maximize technology value.',
        'about.title': 'XiaoTianTian Tech',
        'about.p1': 'XiaoTianTian Culture & Technology (Shanghai) Co., Ltd. is an innovative technology company focused on combining artificial intelligence with sports.',
        'about.p2': 'We are committed to providing efficient and precise digital solutions for sports enthusiasts and professional athletes through advanced AI visual recognition, deep learning algorithms, and intelligent data analytics. Our team brings together experts in AI, mobile development, and sports technology, continuously exploring innovative applications of AI in sports.',
        'about.cta': 'Contact Us',
        'contact.title': 'Contact Us',
        'footer.copyright': '\u00A9 2025 XiaoTianTian Culture & Technology (Shanghai) Co., Ltd.'
    },
    zh: {
        'page.title': '晓田田科技 - AI赋能体育',
        'nav.brand': '晓田田科技',
        'nav.home': '主页',
        'nav.products': '产品展示',
        'nav.services': '业务范围',
        'nav.about': '关于我们',
        'nav.contact': '联系我们',
        'hero.title': '击智网球 App',
        'hero.subtitle': 'AI 自动识别回合，鹰眼轨迹回看，支持任意帧率视频，随拍随传随分析。<br>干净界面，三步出结果——专注你的每一拍。',
        'hero.cta': '在 App Store 下载',
        'products.title': '击智网球',
        'products.desc': '击智网球是一款专为网球爱好者和专业运动员打造的智能视频分析应用。通过先进的AI运动小物体检测识别技术，击智网球能够自动识别并剪辑网球视频中的有效回合，让您专注于比赛精华。应用内置智能分析引擎，可对您的击球轨迹、步伐移动和技术动作进行专业评估，提供数据化的表现报告。',
        'products.downloadOn': '在',
        'products.appStore': 'App Store 下载',
        'products.imgAlt': '击智网球应用截图',
        'products.feature1': 'AI视频智能处理',
        'products.feature2': '专业体育数据分析',
        'products.feature3': '本地化高效处理',
        'products.feature4': '个性化训练规划',
        'features.title': '产品特色',
        'features.analytics.title': '数据分析',
        'features.analytics.desc': '数据分析功能提供详尽的网球比赛数据报告。',
        'features.ml.title': '机器学习',
        'features.ml.desc': '机器学习技术持续优化用户体验。',
        'features.training.title': '训练助手',
        'features.training.desc': '训练助手帮助用户规划个性化网球训练计划。',
        'features.match.title': '赛事分析',
        'features.match.desc': '赛事分析功能让用户更深入了解比赛数据。',
        'services.title': '我们的业务范围',
        'services.desc': '我们专注于AI视觉识别技术开发、体育数据分析平台搭建、智能移动应用定制以及体育科技领域的技术咨询服务，为体育训练与比赛提供全方位的数字化解决方案。',
        'services.card1.title': 'AI视觉识别与处理',
        'services.card1.desc': '运用先进的人工智能技术，我们专注于小物体检测与运动轨迹分析，为体育视频处理提供智能化解决方案。',
        'services.card2.title': '移动应用定制开发',
        'services.card2.desc': '我们提供从构思到上线的全流程移动应用开发服务，融合先进技术与优质用户体验，打造专业级应用产品。',
        'services.card3.title': '数据分析与可视化',
        'services.card3.desc': '通过强大的数据处理能力，我们将复杂的运动数据转化为直观的分析结果，帮助用户发现潜在价值与提升空间。',
        'services.card4.title': '体育技术咨询',
        'services.card4.desc': '我们提供AI技术在体育领域的专业咨询服务，帮助合作伙伴构建创新解决方案，实现技术价值最大化。',
        'about.title': '晓田田科技',
        'about.p1': '晓田田文化科技(上海)有限公司是一家专注于人工智能技术与体育结合的创新科技企业。',
        'about.p2': '我们致力于通过先进的AI视觉识别技术、深度学习算法和智能数据分析，为体育爱好者和专业运动员提供高效、精准的数字化解决方案。公司汇聚了在人工智能、移动应用开发和体育科技领域拥有丰富经验的技术专家，正在不断探索AI技术在体育领域的创新应用。',
        'about.cta': '联系我们',
        'contact.title': '联系我们',
        'footer.copyright': '\u00A9 2025 晓田田文化科技(上海)有限公司'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // Update HTML content (for elements with <br> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-html');
        if (t[key]) el.innerHTML = t[key];
    });

    // Update alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-alt');
        if (t[key]) el.alt = t[key];
    });

    // Update page title
    if (t['page.title']) document.title = t['page.title'];

    // Update html lang
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update toggle label
    var langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = lang === 'en' ? '中文' : 'EN';

    // Store preference
    localStorage.setItem('preferred-lang', lang);
    currentLang = lang;
}

document.addEventListener('DOMContentLoaded', function() {
    var savedLang = localStorage.getItem('preferred-lang') || 'en';
    setLanguage(savedLang);

    var langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            setLanguage(currentLang === 'en' ? 'zh' : 'en');
        });
    }
});
