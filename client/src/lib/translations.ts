export type Language = 'en' | 'fr' | 'ar';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.headline': 'Turning ideas into high-performance code.',
    'hero.tagline': 'Full Stack Developer | DevOps | OSS Contributor',
    'hero.description': 'With over 5 years of experience crafting robust, scalable web applications using modern technologies. Creator of create-express-node-starter with 9,000+ downloads.',
    'hero.cta': 'View My Work',
    'hero.contact': 'Contact Me',
    
    // About Section
    'about.title': 'About Me',
    'about.bio': 'With over 5 years of experience as a full-stack developer, I possess deep expertise in crafting robust, scalable, and efficient web applications. I specialize in both front-end and back-end systems using modern technologies and development best practices.',
    'about.bio2': 'I\'m the founder and maintainer of the open-source npm package create-express-node-starter, downloaded over 9,000 times. Proven in leading teams, managing entire project lifecycles, and consistently delivering high-quality solutions.',
    'about.resume': 'Download Resume',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Here are some of my recent projects that showcase my skills in full-stack development and open source contributions.',
    'projects.project1.title': 'create-express-node-starter',
    'projects.project1.description': 'An open-source boilerplate for building secure, scalable Node.js REST APIs. Downloaded over 9,000 times with authentication, validation, and best practices.',
    'projects.project2.title': 'RemoteHorizon',
    'projects.project2.description': 'Job board inspired by WeWorkRemotely, powered by MERN stack. Features job posting, filtering, company profiles, and application tracking.',
    'projects.project3.title': 'AdSwift',
    'projects.project3.description': 'Classified ads platform like Kijiji/Tayara/Leboncoin with user authentication, ad posting, search & filters, and secure messaging.',
    'projects.project4.title': 'FlashSolve',
    'projects.project4.description': 'AI assistant to solve developer coding issues fast. Integrates with popular IDEs for intelligent suggestions and debugging help.',
    'projects.viewAll': 'View All Projects',
    
    // Skills Section
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'Technologies and tools I use to bring ideas to life, from frontend interfaces to robust backend systems.',
    'skills.languages': 'Languages',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.devops': 'DevOps & Tools',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'My journey through different roles and companies, building innovative solutions and growing as a developer.',
    'experience.cofomo.title': 'Full Stack Developer',
    'experience.cofomo.company': 'Cofomo Inc',
    'experience.cofomo.period': 'Sep 2024 – Present',
    'experience.cofomo.description': 'Developing enterprise-grade solutions for Revenu Québec using .NET, Angular, React, and Azure. Implemented CI/CD pipelines with Azure DevOps and Git. Applied clean architecture and Agile methodology.',
    'experience.orange.title': 'Team Lead / Full Stack Developer',
    'experience.orange.company': 'Orange Tunisia',
    'experience.orange.period': 'Feb 2022 – Jun 2024',
    'experience.orange.description': 'Coordinated resources to meet deadlines. Designed software solutions from user requirements. Led testing, deployment, and feedback cycles.',
    'experience.emiketic.title': 'Full Stack Developer',
    'experience.emiketic.company': 'EMIKETIC Web Technologies',
    'experience.emiketic.period': 'Jun 2021 – Feb 2022',
    'experience.emiketic.description': 'Optimized app performance. Implemented data security. Participated in brainstorming sessions for innovation.',
    'experience.rbk.title': 'Full Stack Developer / Technical Mentor',
    'experience.rbk.company': 'ReBootKamp (RBK) Tunisia',
    'experience.rbk.period': 'Sep 2020 – Feb 2021',
    'experience.rbk.description': 'Guided students through coding projects. Delivered technical lectures and support. Collaborated on curriculum improvement.',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'I\'m always interested in hearing about new opportunities, innovative projects, or just having a chat about technology.',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Failed to send message. Please try again.',
    'contact.info.title': 'Contact Information',
    'contact.info.location': 'Location',
    'contact.social.title': 'Connect With Me',
    
    // Footer
    'footer.tagline': 'Building the future, one line of code at a time.',
    'footer.copyright': '© 2024 Raed Fadhlaoui. All rights reserved.',
    'footer.built': 'Built with',
    'footer.tech': 'using React & Tailwind CSS'
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Salut, je suis',
    'hero.headline': 'Transformer les idées en code haute performance.',
    'hero.tagline': 'Développeur Full Stack | DevOps | Contributeur OSS',
    'hero.description': 'Plus de 5 ans d\'expérience dans la création d\'applications web robustes et évolutives avec des technologies modernes. Créateur de create-express-node-starter avec plus de 9 000 téléchargements.',
    'hero.cta': 'Voir Mon Travail',
    'hero.contact': 'Me Contacter',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.bio': 'Je suis un ingénieur logiciel passionné basé au Québec, Canada, avec de l\'expérience en développement full-stack, DevOps et architecture logicielle. Je me spécialise en JavaScript, TypeScript, Node.js, MongoDB, React et C#.',
    'about.bio2': 'Je suis le créateur de l\'outil open source create-express-node-starter et je travaille actuellement chez Cofomo, où je construis des solutions évolutives et contribue à des projets innovants.',
    'about.resume': 'Télécharger CV',
    
    // Projects Section
    'projects.title': 'Projets Phares',
    'projects.subtitle': 'Voici quelques-uns de mes projets récents qui démontrent mes compétences en développement full-stack et contributions open source.',
    'projects.project1.title': 'create-express-node-starter',
    'projects.project1.description': 'Template de démarrage Express.js + MongoDB pour créer rapidement des APIs REST. Inclut authentification, validation, gestion d\'erreurs et configuration des bonnes pratiques.',
    'projects.project2.title': 'RemoteHorizon',
    'projects.project2.description': 'Plateforme d\'emplois à distance construite avec la stack MERN. Fonctionnalités de publication d\'offres, filtrage, profils d\'entreprise et suivi des candidatures.',
    'projects.project3.title': 'AdSwift',
    'projects.project3.description': 'Application web de petites annonces inspirée de Tayara et Leboncoin. Authentification utilisateur, publication d\'annonces, recherche et filtres, système de messagerie sécurisé.',
    'projects.project4.title': 'FlashSolve',
    'projects.project4.description': 'Assistant de codage alimenté par IA pour résoudre les problèmes plus rapidement. S\'intègre avec les IDEs populaires et fournit des suggestions de code intelligentes.',
    'projects.viewAll': 'Voir Tous les Projets',
    
    // Skills Section
    'skills.title': 'Compétences & Technologies',
    'skills.subtitle': 'Technologies et outils que j\'utilise pour donner vie aux idées, des interfaces frontend aux systèmes backend robustes.',
    'skills.languages': 'Langages',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.devops': 'DevOps & Outils',
    
    // Experience Section
    'experience.title': 'Expérience Professionnelle',
    'experience.subtitle': 'Mon parcours à travers différents rôles et entreprises, construisant des solutions innovantes et évoluant en tant que développeur.',
    'experience.cofomo.title': 'Ingénieur Logiciel – Full Stack',
    'experience.cofomo.company': 'Cofomo',
    'experience.cofomo.period': '2023 – Présent',
    'experience.cofomo.description': 'Direction de projets de développement full-stack, création d\'applications web évolutives utilisant des technologies modernes. Collaboration avec des équipes pluridisciplinaires.',
    'experience.orange.title': 'Développeur Backend',
    'experience.orange.company': 'Orange Tunisia',
    'experience.orange.period': '2021 – 2023',
    'experience.orange.description': 'Développement et maintenance d\'APIs RESTful et microservices pour applications télécoms. Optimisation des performances de base de données pour des millions d\'utilisateurs.',
    'experience.teaching.title': 'Instructeur de Programmation',
    'experience.teaching.company': 'GoMyCode & RBK',
    'experience.teaching.period': '2020 – 2021',
    'experience.teaching.description': 'Enseignement de bootcamps de développement full-stack, mentorat de développeurs juniors. Aide de 200+ étudiants dans leur transition vers des carrières tech.',
    
    // Contact Section
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Je suis toujours intéressé d\'entendre parler de nouvelles opportunités, projets innovants, ou simplement discuter de technologie.',
    'contact.form.title': 'Envoyer Message',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer Message',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.form.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
    'contact.info.title': 'Informations Contact',
    'contact.info.location': 'Localisation',
    'contact.social.title': 'Me Suivre',
    
    // Footer
    'footer.tagline': 'Construire l\'avenir, une ligne de code à la fois.',
    'footer.copyright': '© 2024 Raed Fadhlaoui. Tous droits réservés.',
    'footer.built': 'Créé avec',
    'footer.tech': 'utilisant React & Tailwind CSS'
  },
  
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من أنا',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.experience': 'الخبرة',
    'nav.contact': 'التواصل',
    
    // Hero Section
    'hero.greeting': 'مرحباً، أنا',
    'hero.headline': 'تحويل الأفكار إلى كود عالي الأداء.',
    'hero.tagline': 'مطور Full Stack | DevOps | مساهم في المصادر المفتوحة',
    'hero.description': 'أكثر من 5 سنوات خبرة في بناء تطبيقات ويب قوية وقابلة للتوسع بتقنيات حديثة. مؤسس create-express-node-starter مع أكثر من 9000 تحميل.',
    'hero.cta': 'اطلع على أعمالي',
    'hero.contact': 'تواصل معي',
    
    // About Section
    'about.title': 'من أنا',
    'about.bio': 'أنا مهندس برمجيات شغوف مقيم في كيبيك، كندا، لدي خبرة في تطوير Full-Stack وDevOps وهندسة البرمجيات. أتخصص في JavaScript وTypeScript وNode.js وMongoDB وReact وC#.',
    'about.bio2': 'أنا مؤسس أداة المصدر المفتوح create-express-node-starter وأعمل حالياً في Cofomo، حيث أبني حلول قابلة للتوسع وأساهم في مشاريع مبتكرة.',
    'about.resume': 'تحميل السيرة الذاتية',
    
    // Projects Section
    'projects.title': 'المشاريع المميزة',
    'projects.subtitle': 'إليك بعض مشاريعي الحديثة التي تعرض مهاراتي في تطوير Full-Stack ومساهماتي في المصدر المفتوح.',
    'projects.project1.title': 'create-express-node-starter',
    'projects.project1.description': 'قالب بدء Express.js + MongoDB لبناء APIs REST بسرعة. يتضمن المصادقة والتحقق ومعالجة الأخطاء وأفضل الممارسات.',
    'projects.project2.title': 'RemoteHorizon',
    'projects.project2.description': 'لوحة وظائف العمل عن بُعد مبنية بـ MERN stack. تتضمن نشر الوظائف والتصفية وملفات الشركات وتتبع التقديمات.',
    'projects.project3.title': 'AdSwift',
    'projects.project3.description': 'تطبيق ويب للإعلانات المبوبة مستوحى من تيارة ولوبونكوان. يتضمن مصادقة المستخدمين ونشر الإعلانات والبحث والمراسلة الآمنة.',
    'projects.project4.title': 'FlashSolve',
    'projects.project4.description': 'مساعد برمجة مدعوم بالذكاء الاصطناعي لحل المشاكل بشكل أسرع. يتكامل مع IDEs الشائعة ويقدم اقتراحات كود ذكية.',
    'projects.viewAll': 'عرض جميع المشاريع',
    
    // Skills Section
    'skills.title': 'المهارات والتقنيات',
    'skills.subtitle': 'التقنيات والأدوات التي أستخدمها لتحويل الأفكار إلى واقع، من واجهات المستخدم إلى أنظمة الخادم القوية.',
    'skills.languages': 'لغات البرمجة',
    'skills.backend': 'الخادم',
    'skills.frontend': 'واجهة المستخدم',
    'skills.devops': 'DevOps والأدوات',
    
    // Experience Section
    'experience.title': 'الخبرة المهنية',
    'experience.subtitle': 'رحلتي عبر أدوار وشركات مختلفة، بناء حلول مبتكرة والنمو كمطور.',
    'experience.cofomo.title': 'مهندس برمجيات – Full Stack',
    'experience.cofomo.company': 'Cofomo',
    'experience.cofomo.period': '2023 – الحاضر',
    'experience.cofomo.description': 'قيادة مشاريع تطوير full-stack، بناء تطبيقات ويب قابلة للتوسع باستخدام تقنيات حديثة. التعاون مع فرق متعددة التخصصات لتقديم حلول مبتكرة.',
    'experience.orange.title': 'مطور الخادم',
    'experience.orange.company': 'Orange Tunisia',
    'experience.orange.period': '2021 – 2023',
    'experience.orange.description': 'تطوير وصيانة APIs RESTful وmicroservices لتطبيقات الاتصالات. تحسين أداء قواعد البيانات وتطبيق أنظمة مصادقة قوية لملايين المستخدمين.',
    'experience.teaching.title': 'مدرس برمجة',
    'experience.teaching.company': 'GoMyCode & RBK',
    'experience.teaching.period': '2020 – 2021',
    'experience.teaching.description': 'تدريس bootcamps تطوير full-stack، إرشاد المطورين المبتدئين، وإنشاء مناهج JavaScript وReact وNode.js. ساعدت أكثر من 200 طالب في الانتقال إلى مهن التكنولوجيا.',
    
    // Contact Section
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'أنا دائماً مهتم بسماع الفرص الجديدة والمشاريع المبتكرة أو مجرد الدردشة حول التكنولوجيا.',
    'contact.form.title': 'إرسال رسالة',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    'contact.form.success': 'تم إرسال الرسالة بنجاح!',
    'contact.form.error': 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    'contact.info.title': 'معلومات التواصل',
    'contact.info.location': 'الموقع',
    'contact.social.title': 'تواصل معي',
    
    // Footer
    'footer.tagline': 'بناء المستقبل، سطر كود في المرة.',
    'footer.copyright': '© 2024 رائد فضل الله. جميع الحقوق محفوظة.',
    'footer.built': 'تم البناء بـ',
    'footer.tech': 'باستخدام React و Tailwind CSS'
  }
};
