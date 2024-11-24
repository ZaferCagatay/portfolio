export const navLinks = [
  {
    id: 1,
    name: 'Home',
    nameTR: 'Anasayfa',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    nameTR: 'Hakkımda',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    nameTR: 'İş',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    nameTR: 'İletişim',
    href: '#contact',
  },
];

export const heroTexts = ['Hi, I am Zafer', 'Building Products & Brands'];

export const heroTextsTR = [
  'Merhaba, Ben Zafer',
  'Ürünler ve Markalar İnşa Ediyorum',
];

export const aboutTexts = [
  {
    headtext: "Hi, I'm Zafer",
    headtextTR: 'Merhaba, ben Zafer',
    subtext:
      'With 3 years of experience in frontend and backend development, I focus on creating dynamic and visually engaging websites. My passion lies in crafting seamless, user-focused web applications while continuously learning, adapting, and embracing new challenges.',
    subtextTR:
      '3 yıllık frontend ve backend geliştirme deneyimimle, dinamik ve görsel olarak etkileyici web siteleri oluşturmaya odaklanıyorum. Tutkum, sürekli öğrenerek, uyum sağlayarak ve yeni zorlukları kucaklayarak kusursuz, kullanıcı odaklı web uygulamaları geliştirmektir.',
  },
  {
    headtext: 'Tech Stack',
    headtextTR: 'Teknoloji Yığını',
    subtext:
      'In addition to frontend expertise, I bring strong backend skills in Express.js, SQL databases, .NET APIs, C#, and AngularJS. I also have expertise in Python, having developed an application that integrated machine learning to solve complex problems. My adaptability ensures innovative and efficient solutions across diverse technologies.',
    subtextTR:
      "Frontend uzmanlığının yanı sıra, Express.js, SQL veritabanları, .NET API’leri, C# ve AngularJS gibi güçlü backend becerilere sahibim. Ayrıca, C#, Python ve C++'ta da farklı alanlarda deneyimlerim var . Yeni teknolojilere uyum sağlayabilme yeteneğim, yenilikçi ve verimli çözümler yaratabilmemi sağlar.",
  },
  {
    headtext: 'I work remotely across most timezones.',
    headtextTR: 'Neredeyse her zaman diliminde uzaktan çalışmaya uygunum.',
    subtext: "I'm based in Turkey, with remote work available.",
    subtextTR: 'Türkiye’de yaşıyorum ve uzaktan çalışmaya açığım.',
  },
  {
    headtext: 'My Passion for Coding',
    headtextTR: 'Kodlamaya Olan Tutkum',
    subtext:
      "I love solving problems and building creative solutions through code. For me, coding is more than a profession—it's a passion that drives me to continuously learn, grow, and create impactful applications.",
    subtextTR:
      'Sorunları çözmeyi ve kod aracılığıyla yaratıcı çözümler üretmeyi seviyorum. Benim için kodlama, bir meslekten daha fazlası—sürekli öğrenmeme, gelişmeme ve etkili uygulamalar yaratmama ilham veren bir tutkudur.',
  },
  {
    headtext: 'Contact me',
    headtextTR: 'Bana Ulaşın',
    subtext: 'zafercagatayumut@gmail.com',
    subtextTR: 'zafercagatayumut@gmail.com',
  },
];

export const myProjects = [
  {
    title: 'Podcastr - AI Podcast Platform',
    titleTR: 'Podcastr - Yapay Zeka Podcast Platformu',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    descTR:
      'Podcastr, podcast lerin oluşturulma şekline yeni bir soluk getiren, devrim niteliğinde bir SaaS platformudur. Gelişmiş yapay zeka özellikleriyle, tek bir metin girişinden çeşitli seslendirmeler oluşturulabilmesini sağlar.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    subdescTR:
      'Next.js 14, Tailwind CSS, TypeScript, Framer Motion ve Convex kullanılarak geliştirilmiş bir SaaS uygulaması olan Podcastr, optimum performans ve ölçeklenebilirlik için tasarlanmıştır.',
    href: 'https://podcastr-ai-seven.vercel.app',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'AI',
        path: '/assets/ai.svg',
      },
      {
        id: 6,
        name: 'API',
        path: '/assets/api.svg',
      },
    ],
  },
  {
    title: 'Threads - Dive into Engaging Discussions',
    titleTR: 'Threads - İlgi Çekici Tartışmalara Dalın',
    desc: 'Threads is a feature-rich platform designed for sharing and exploring threads. From liking and commenting to creating communities, Threads empowers users to express themselves and connect with others through thoughtful posts.',
    descTR:
      'Threads, konuları paylaşmak ve keşfetmek için tasarlanmış zengin özelliklere sahip bir platformdur. Beğenmekten ve yorum yapmaktan topluluklar oluşturmaya kadar, Threads kullanıcıların kendilerini ifade etmelerini ve başkalarıyla bağlantı kurmalarını sağlar.',
    subdesc:
      'With Threads, users can explore profiles, discover suggested users, search for threads or authors, and create private communities where only members can view content.',
    subdescTR:
      'Threads ile kullanıcılar profilleri keşfedebilir, önerilen kullanıcıları bulabilir, konuları veya yazarları arayabilir ve yalnızca üyelerin içeriği görebileceği özel topluluklar oluşturabilir.',
    href: 'https://threads-clone-app-iy3o.vercel.app',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    titleTR: 'CarePulse - Sağlık Yönetim Sistemi',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    descTR:
      'Temel tıbbi süreçleri kolaylaştırmak için tasarlanmış yenilikçi bir sağlık platformudur. Hasta kaydı, randevu planlama ve tıbbi kayıt yönetimini basitleştirerek hem sağlık hizmeti sağlayıcılar, hem de hastalar için sorunsuz bir deneyim sunar.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    subdescTR:
      'CarePulse, Next.js, Appwrite, Twilio ve Sentry kullanarak karmaşık formları entegre ederek operasyonel iş akışını geliştirir ve hastalara bilgilerine ulaşmakta kolaylık sağlayarak yardımcı olur',
    href: 'https://healthcare-mauve.vercel.app',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
    ],
  },
  {
    title: 'TikTik - Share and Discover Engaging Videos',
    titleTR: 'TikTik - İlgi Çekici Videoları Paylaş ve Keşfet',
    desc: 'TikTik is a vibrant platform for video creators and enthusiasts. It offers features like video uploading, commenting, liking, and browsing by categories, making it easy to find and share content that resonates.',
    descTR:
      'TikTik, video içerik üreticileri ve meraklıları için canlı bir platformdur. Video yükleme, yorum yapma, beğenme ve kategorilere göre göz atma gibi özellikler sunarak içerik bulmayı ve paylaşmayı kolaylaştırır.',
    subdesc:
      'With TikTik, users can enjoy seamless video playback, search for videos or accounts, and explore detailed video and account pages. Built for creators and viewers, it delivers an engaging and immersive video-sharing experience.',
    subdescTR:
      'TikTik ile kullanıcılar sorunsuz video oynatmanın keyfini çıkarabilir, videoları veya hesapları arayabilir ve ayrıntılı video ve hesap sayfalarını keşfedebilir. İçerik üreticiler ve izleyiciler için tasarlanan bu platform, etkileyici bir video paylaşım deneyimi sunar.',

    href: 'https://stirring-semifreddo-7baa53.netlify.app',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.ico',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'Sanity',
        path: '/assets/sanity.svg',
      },
      {
        id: 6,
        name: 'API',
        path: '/assets/api.svg',
      },
    ],
  },
  {
    title: 'Imagen - AI Photo Manipulation App',
    titleTR: 'Imagen - AI Fotoğraf Düzenleyici',
    desc: 'Imagen is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    descTR:
      'Imagen, kullanıcıların yapay zeka teknolojisini kullanarak etkileyici fotoğraf manipülasyonları oluşturmasına olanak tanıyan yenilikçi bir SaaS uygulamasıdır. Yapay zeka destekli görüntü düzenleme, ödeme sistemi ve kredi tabanlı model gibi özellikler sunar.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imagen combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    subdescTR:
      'Next.js 14, Cloudinary AI, Clerk ve Stripe kullanılarak geliştirilen Imagen, kullanıcı odaklı bir yaklaşım ile ileri teknolojiyi birleştirir. Yan gelir kaynağı veya tam teşekküllü bir iş modeline dönüştürülebilir.',
    href: 'https://imagen-zafercagatay.vercel.app',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
      {
        id: 6,
        name: 'AI',
        path: '/assets/ai.svg',
      },
    ],
  },
  {
    title: 'Apple - iPhone 15 Pro Experience',
    titleTR: 'Apple - iPhone 15 Pro Tanıtım',
    desc: 'This Apple clone offers a captivating experience centered around the iPhone 15 Pro and Pro Max. Explore the device in stunning detail with interactive 3D models and animations.',
    descTR:
      'Bu Apple klonu, iPhone 15 Pro ve Pro Max’e odaklanan etkileyici bir deneyim sunar. Etkileşimli 3D modeller ve animasyonlarla cihazı detaylı bir şekilde keşfetmenizi sağlar.',
    subdesc:
      'Built with Three.js and GSAP, this site showcases advanced 3D modeling and smooth animations, allowing users to rotate the iPhone, change its colors and versions, and immerse themselves in a visually rich experience.',
    subdescTR:
      'Three.js ve GSAP kullanılarak oluşturulan bu site, kullanıcıların iPhone’u döndürmesine, renklerini ve versiyonlarını değiştirmesine olanak tanıyan ileri düzey 3D modelleme ve akıcı animasyonlarla görsel bir şölen sunar.',

    href: 'https://apple15pro.onrender.com',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/project-logo6.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'THREE.js',
        path: '/assets/threejs.png',
      },
      {
        id: 5,
        name: 'GSAP',
        path: '/assets/gsap.svg',
      },
    ],
  },
  {
    title: 'YouTube Clone - Watch and Explore Videos',
    titleTR: 'YouTube Klonu - Videoları İzle ve Keşfet',
    desc: 'YouTube Clone is a sleek platform for discovering and watching videos with a design inspired by YouTube. Search for videos and channels, explore categories, and dive into content effortlessly.',
    descTR:
      'YouTube Klonu, YouTube’dan ilham alan tasarımıyla videoları keşfetmek ve izlemek için şık bir platformdur. Videoları ve kanalları arayın, kategorilere göz atın ve içeriklere kolayca dalın.',
    subdesc:
      'With YouTube Clone, users can view video details like views, browse channels and subscriber counts, and navigate seamlessly between videos and channels. Built for video enthusiasts, it delivers a streamlined, immersive viewing experience.',
    subdescTR:
      'YouTube Klonu, kullanıcıların video detaylarını, görüntülenme sayılarını görmesini, kanallara göz atmasını ve abonelik sayılarını takip etmesini sağlar. Video severler için tasarlanmış bu platform, akıcı ve sürükleyici bir izleme deneyimi sunar.',
    href: 'https://charming-lebkuchen-045546.netlify.app',
    texture: '/textures/project/project7.mp4',
    logo: 'https://i.ibb.co/s9Qys2j/logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
      {
        id: 3,
        name: 'API',
        path: '/assets/api.svg',
      },
    ],
  },
  {
    title: 'My Blog - A Complete Blogging Platform',
    titleTR: 'My Blog - Tam Donanımlı Blog Platformu',
    desc: 'My Blog is a fully featured platform for creating and exploring blogs. With a robust backend and frontend, it offers seamless user experiences like registration, login with 2FA, and blog creation.',
    descTR:
      'My Blog, blog oluşturma ve keşfetme için tam donanımlı bir platformdur. Kayıt, 2FA ile giriş ve blog oluşturma gibi kullanıcı dostu deneyimler sunar.',
    subdesc:
      'Built with TypeScript, AngularJS, C#, and a .NET API, My Blog allows users to filter blogs by categories, engage with content through comments, and manage their accounts effortlessly, ensuring a secure and dynamic blogging experience.',
    subdescTR:
      'TypeScript, AngularJS, C# ve .NET API kullanılarak geliştirilen My Blog, kullanıcıların blogları kategorilere göre filtrelemesine, içeriklerle etkileşime geçmesine ve hesaplarını zahmetsizce yönetmesine olanak tanır. Güvenli ve dinamik bir blog deneyimi sağlar.',

    href: 'https://github.com/ZaferCagatay/angulardotnet-learning',
    texture: '/textures/project/project8.mp4',
    logo: '/assets/project-logo8.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Angular.js',
        path: '/assets/angular.svg',
      },
      {
        id: 2,
        name: 'C#',
        path: 'assets/csharp.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: '.NET',
        path: '/assets/dotnet.svg',
      },
      {
        id: 5,
        name: 'API',
        path: '/assets/api.svg',
      },
      {
        id: 5,
        name: 'SQL',
        path: '/assets/sql.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,

    name: 'Freelancer',
    nameTR: 'Serbest Çalışan',
    pos: 'Freelance Developer',
    posTR: 'Serbest Yazılım Geliştirici',
    duration: '2023 - Present',
    title:
      'Throughout my freelance career, I’ve crafted diverse solutions, from developing a Python app to creating a TradingView indicator. A highlight was building a robust, user-friendly admin panel for a local company, which continues to enhance their operations and increase efficiency by 10x.',
    titleTR:
      'Serbest çalışma kariyerim boyunca, bir Python uygulaması geliştirmekten TradingView göstergesi oluşturmaya kadar çeşitli çözümler ürettim. Öne çıkanlardan biri, yerel bir şirket için güçlü ve kullanıcı dostu bir yönetim paneli oluşturmaktı. Bu, operasyonlarını geliştirmeye ve verimliliği 10 kat artırmaya devam ediyor.',
    icon: '/assets/freelancer.svg',
    animation: 'dance',
  },
  {
    id: 2,
    name: 'Komuneo Agency',
    nameTR: 'Komuneo Ajansı',
    pos: 'Intern',
    posTR: 'Stajyer',
    duration: '2022 - 2023',
    title:
      'I played a key role in enhancing the frontend experience for ongoing projects while also supporting backend tasks, including API development and integration, ensuring seamless functionality across the stack.',
    titleTR:
      'Devam eden projelerde frontend deneyimini geliştirmede kilit bir rol oynadım ve API geliştirme ve entegrasyonu dahil olmak üzere backend görevlerini destekledim, böylece sistem genelinde sorunsuz işlevsellik sağladım.',
    icon: '/assets/komuneo.png',
    animation: 'hiphop',
  },
  {
    id: 3,
    name: 'Mivento Bilisim Inc.',
    nameTR: 'Mivento Bilişim A.Ş.',
    pos: 'Intern',
    posTR: 'Stajyer',
    duration: '2021 - 2022',
    title:
      'During my time at Movento, I contributed to the development of mobile and web applications and played a key role in designing and implementing API infrastructures for their projects.',
    titleTR:
      'Movento’daki zamanımda, mobil ve web uygulamalarının geliştirilmesine katkıda bulundum ve projeleri için API altyapılarının tasarlanması ve uygulanmasında önemli bir rol oynadım.',
    icon: '/assets/mivento.png',
    animation: 'silly-dance',
  },
];

export const contactTexts = [
  {
    headtext: "Let's talk",
    headtextTR: 'Hadi konuşalım',
    subtext:
      'Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.',
    subtextTR:
      'Yeni bir web sitesi oluşturmak, mevcut platformunuzu geliştirmek veya benzersiz bir projeyi hayata geçirmek istiyorsanız, size yardımcı olmak için buradayım.',
    formConstants: [
      {
        label: 'Full Name',
        labelTR: 'Tam Ad',
        placeholder: 'ex., John Doe',
        placeholderTR: 'örn., Ahmet Yavuz',
      },
      {
        label: 'Email address',
        labelTR: 'E-posta adresi',
        placeholder: 'ex., johndoe@gmail.com',
        placeholderTR: 'örn., ahmetyavuz@gmail.com',
      },
      {
        label: 'Your message',
        labelTR: 'Mesajınız',
        placeholder: 'Share your thoughts or inquiries...',
        placeholderTR: 'Düşüncelerinizi veya sorularınızı paylaşın...',
      },
    ],
    buttonText: 'Send Message',
    buttonTextTR: 'Mesaj Gönder',
    buttonSendingText: 'Sending...',
    buttonSendingTextTR: 'Gönderiliyor...',
  },
];

export const footerConstants = [
  {
    text1: 'Terms & Conditions',
    text1TR: 'Şartlar ve Koşullar',
    text2: 'Privacy Policy',
    text2TR: 'Gizlilik Politikası',
    text3: '© 2024 Zafer. All rights reserved.',
    text3TR: '© 2024 Zafer. Tüm haklar saklıdır.',
  },
];
