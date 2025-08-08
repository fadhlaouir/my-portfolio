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
    'projects.express-starter.title': 'create-express-node-starter',
    'projects.express-starter.description': 'CLI tool for bootstrapping Express.js projects with a predefined template. A versatile tool designed to streamline the process of setting up new Express.js projects with comprehensive boilerplate including authentication, MongoDB integration, Swagger API documentation, and more.',
    'projects.mobile-app.title': 'RemoteHorizon',
    'projects.mobile-app.description': 'Job board inspired by WeWorkRemotely, powered by MERN stack. Features job posting, filtering, company profiles, and application tracking.',
    'projects.ecommerce.title': 'AdSwift',
    'projects.ecommerce.description': 'Classified ads platform like Kijiji/Tayara/Leboncoin with user authentication, ad posting, search & filters, and secure messaging.',
    'projects.ai-chatbot.title': 'FlashSolve',
    'projects.ai-chatbot.description': 'AI assistant to solve developer coding issues fast. Integrates with popular IDEs for intelligent suggestions and debugging help.',
    'projects.viewAll': 'View All Projects',
    
    // Skills Section
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'A comprehensive toolkit of technologies and frameworks I use to build scalable, performant applications from concept to deployment.',
    'skills.languages': 'Languages',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.databases': 'Databases',
    'skills.devops': 'DevOps & Tools',
    'skills.tools': 'Development Tools',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'My journey through different roles and companies, building innovative solutions and growing as a developer.',
    'experience.cofomo.title': 'Software Engineer – Full Stack',
    'experience.cofomo.company': 'Cofomo Inc',
    'experience.cofomo.period': 'Sep 2024 – Present',
    'experience.cofomo.description': 'Developing enterprise-grade solutions for Revenu Québec using .NET, Angular, React, and Azure. Implemented CI/CD pipelines with Azure DevOps and Git. Applied clean architecture patterns, SOLID principles, and Agile methodology to deliver scalable government applications serving millions of users.',
    'experience.orange.title': 'Team Lead / Full Stack Developer',
    'experience.orange.company': 'Orange Tunisia',
    'experience.orange.period': 'Feb 2022 – Jun 2024',
    'experience.orange.description': 'Led a team of 5 developers building telecommunications software solutions. Coordinated project timelines, managed resources, and ensured delivery of high-quality code. Designed and implemented RESTful APIs, microservices architecture, and real-time communication systems. Improved team productivity by 40% through code reviews and mentoring.',
    'experience.emiketic.title': 'Full Stack Developer',
    'experience.emiketic.company': 'EMIKETIC Web Technologies',
    'experience.emiketic.period': 'Jun 2021 – Feb 2022',
    'experience.emiketic.description': 'Developed responsive web applications using React, Node.js, and MongoDB. Optimized application performance by 60% through code splitting and lazy loading. Implemented robust security measures including JWT authentication, data encryption, and OWASP best practices. Collaborated with design teams to create pixel-perfect user interfaces.',
    'experience.rbk.title': 'Full Stack Developer / Technical Mentor',
    'experience.rbk.company': 'ReBootKamp (RBK) Tunisia',
    'experience.rbk.period': 'Sep 2020 – Feb 2021',
    'experience.rbk.description': 'Assessed student progress and identified areas requiring additional support. Encouraged and motivated students to foster their engagement and success in the program. Developed and presented educational materials to facilitate understanding of technical concepts. Collaborated with other mentors to share best practices and harmonize teaching methods.',
    'experience.gomycode.title': 'Full Stack Developer',
    'experience.gomycode.company': 'GoMyCode',
    'experience.gomycode.period': 'May 2019 – Jul 2020',
    'experience.gomycode.description': 'Collaborated with design teams to transform mockups into interactive and aesthetically pleasing user interfaces. Participated in code reviews to ensure quality and consistency of developed code. Integrated accessibility solutions to make applications accessible to all users. Contributed to technical documentation to facilitate long-term maintenance and evolution of applications.',
    'experience.gomycode-intern.title': 'Full Stack Developer Intern',
    'experience.gomycode-intern.company': 'GoMyCode',
    'experience.gomycode-intern.period': 'Jan 2019 – Apr 2019',
    'experience.gomycode-intern.description': 'Actively participated in team discussions to contribute to the resolution of technical issues. Developed prototypes and demos to showcase key features of new functionalities. Acquired practical skills by working on real projects under the supervision of industry experts. Collaborated with other interns to share ideas and knowledge and foster a collaborative learning environment.',
    
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
    'projects.express-starter.title': 'create-express-node-starter',
    'projects.express-starter.description': 'Template de démarrage Express.js + MongoDB pour créer rapidement des APIs REST. Inclut authentification, validation, gestion d\'erreurs et configuration des bonnes pratiques.',
    'projects.mobile-app.title': 'RemoteHorizon',
    'projects.mobile-app.description': 'Plateforme d\'emplois à distance construite avec la stack MERN. Fonctionnalités de publication d\'offres, filtrage, profils d\'entreprise et suivi des candidatures.',
    'projects.ecommerce.title': 'AdSwift',
    'projects.ecommerce.description': 'Application web de petites annonces inspirée de Tayara et Leboncoin. Authentification utilisateur, publication d\'annonces, recherche et filtres, système de messagerie sécurisé.',
    'projects.ai-chatbot.title': 'FlashSolve',
    'projects.ai-chatbot.description': 'Assistant de codage alimenté par IA pour résoudre les problèmes plus rapidement. S\'intègre avec les IDEs populaires et fournit des suggestions de code intelligentes.',
    'projects.viewAll': 'Voir Tous les Projets',
    
    // Skills Section
    'skills.title': 'Compétences & Technologies',
    'skills.subtitle': 'Technologies et outils que j\'utilise pour donner vie aux idées, des interfaces frontend aux systèmes backend robustes.',
    'skills.languages': 'Langages',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.databases': 'Bases de Données',
    'skills.devops': 'DevOps & Outils',
    'skills.tools': 'Outils de Développement',
    
    // Experience Section
    'experience.title': 'Expérience Professionnelle',
    'experience.subtitle': 'Mon parcours à travers différents rôles et entreprises, construisant des solutions innovantes et évoluant en tant que développeur.',
    'experience.cofomo.title': 'Ingénieur Logiciel – Full Stack',
    'experience.cofomo.company': 'Cofomo Inc',
    'experience.cofomo.period': 'Sep 2024 – Présent',
    'experience.cofomo.description': 'Développement de solutions d\'entreprise pour Revenu Québec utilisant .NET, Angular, React et Azure. Implémentation de pipelines CI/CD avec Azure DevOps et Git. Application de patterns d\'architecture propre, principes SOLID et méthodologie Agile pour livrer des applications gouvernementales évolutives servant des millions d\'utilisateurs.',
    'experience.orange.title': 'Chef d\'Équipe / Développeur Full Stack',
    'experience.orange.company': 'Orange Tunisia',
    'experience.orange.period': 'Fév 2022 – Juin 2024',
    'experience.orange.description': 'Direction d\'une équipe de 5 développeurs construisant des solutions logicielles de télécommunications. Coordination des délais de projet, gestion des ressources et assurance de livraison de code de haute qualité. Conception et implémentation d\'APIs RESTful, architecture microservices et systèmes de communication en temps réel. Amélioration de 40% de la productivité de l\'équipe grâce aux revues de code et au mentorat.',
    'experience.emiketic.title': 'Développeur Full Stack',
    'experience.emiketic.company': 'EMIKETIC Web Technologies',
    'experience.emiketic.period': 'Juin 2021 – Fév 2022',
    'experience.emiketic.description': 'Développement d\'applications web responsives utilisant React, Node.js et MongoDB. Optimisation des performances d\'application de 60% grâce au code splitting et lazy loading. Implémentation de mesures de sécurité robustes incluant l\'authentification JWT, chiffrement des données et meilleures pratiques OWASP. Collaboration avec les équipes de design pour créer des interfaces utilisateur pixel-perfect.',
    'experience.rbk.title': 'Développeur Full Stack / Mentor Technique',
    'experience.rbk.company': 'ReBootKamp (RBK) Tunisia',
    'experience.rbk.period': 'Sep 2020 – Fév 2021',
    'experience.rbk.description': 'Évaluation des progrès des étudiants et identification des domaines nécessitant un soutien supplémentaire. Encouragement et motivation des étudiants pour favoriser leur engagement et leur réussite dans le programme. Développement et présentation de matériel éducatif pour faciliter la compréhension des concepts techniques. Collaboration avec d\'autres mentors pour partager les meilleures pratiques et harmoniser les méthodes d\'enseignement.',
    'experience.gomycode.title': 'Développeur Full Stack',
    'experience.gomycode.company': 'GoMyCode',
    'experience.gomycode.period': 'Mai 2019 – Juil 2020',
    'experience.gomycode.description': 'Collaboration avec les équipes de design pour transformer les maquettes en interfaces utilisateur interactives et esthétiquement plaisantes. Participation aux revues de code pour assurer la qualité et la cohérence du code développé. Intégration de solutions d\'accessibilité pour rendre les applications accessibles à tous les utilisateurs. Contribution à la documentation technique pour faciliter la maintenance et l\'évolution à long terme des applications.',
    'experience.gomycode-intern.title': 'Stagiaire Développeur Full Stack',
    'experience.gomycode-intern.company': 'GoMyCode',
    'experience.gomycode-intern.period': 'Jan 2019 – Avr 2019',
    'experience.gomycode-intern.description': 'Participation active aux discussions d\'équipe pour contribuer à la résolution des problèmes techniques. Développement de prototypes et démos pour présenter les fonctionnalités clés de nouvelles fonctionnalités. Acquisition de compétences pratiques en travaillant sur de vrais projets sous la supervision d\'experts de l\'industrie. Collaboration avec d\'autres stagiaires pour partager des idées et des connaissances et favoriser un environnement d\'apprentissage collaboratif.',
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
    'projects.express-starter.title': 'create-express-node-starter',
    'projects.express-starter.description': 'قالب بدء Express.js + MongoDB لبناء APIs REST بسرعة. يتضمن المصادقة والتحقق ومعالجة الأخطاء وأفضل الممارسات.',
    'projects.mobile-app.title': 'RemoteHorizon',
    'projects.mobile-app.description': 'لوحة وظائف العمل عن بُعد مبنية بـ MERN stack. تتضمن نشر الوظائف والتصفية وملفات الشركات وتتبع التقديمات.',
    'projects.ecommerce.title': 'AdSwift',
    'projects.ecommerce.description': 'تطبيق ويب للإعلانات المبوبة مستوحى من تيارة ولوبونكوان. يتضمن مصادقة المستخدمين ونشر الإعلانات والبحث والمراسلة الآمنة.',
    'projects.ai-chatbot.title': 'FlashSolve',
    'projects.ai-chatbot.description': 'مساعد برمجة مدعوم بالذكاء الاصطناعي لحل المشاكل بشكل أسرع. يتكامل مع IDEs الشائعة ويقدم اقتراحات كود ذكية.',
    'projects.viewAll': 'عرض جميع المشاريع',
    
    // Skills Section
    'skills.title': 'المهارات والتقنيات',
    'skills.subtitle': 'التقنيات والأدوات التي أستخدمها لتحويل الأفكار إلى واقع، من واجهات المستخدم إلى أنظمة الخادم القوية.',
    'skills.languages': 'لغات البرمجة',
    'skills.backend': 'الخادم',
    'skills.frontend': 'واجهة المستخدم',
    'skills.databases': 'قواعد البيانات',
    'skills.devops': 'DevOps والأدوات',
    'skills.tools': 'أدوات التطوير',
    
    // Experience Section
    'experience.title': 'الخبرة المهنية',
    'experience.subtitle': 'رحلتي عبر أدوار وشركات مختلفة، بناء حلول مبتكرة والنمو كمطور.',
    'experience.cofomo.title': 'مهندس برمجيات – Full Stack',
    'experience.cofomo.company': 'Cofomo Inc',
    'experience.cofomo.period': 'سبتمبر 2024 – الحاضر',
    'experience.cofomo.description': 'تطوير حلول على مستوى المؤسسات لـ Revenu Québec باستخدام .NET وAngular وReact وAzure. تنفيذ خطوط أنابيب CI/CD مع Azure DevOps وGit. تطبيق أنماط العمارة النظيفة ومبادئ SOLID ومنهجية Agile لتقديم تطبيقات حكومية قابلة للتوسع تخدم ملايين المستخدمين.',
    'experience.orange.title': 'قائد فريق / مطور Full Stack',
    'experience.orange.company': 'Orange Tunisia',
    'experience.orange.period': 'فبراير 2022 – يونيو 2024',
    'experience.orange.description': 'قيادة فريق من 5 مطورين لبناء حلول برمجيات الاتصالات. تنسيق الجداول الزمنية للمشاريع وإدارة الموارد وضمان تسليم كود عالي الجودة. تصميم وتنفيذ APIs RESTful وعمارة microservices وأنظمة الاتصال في الوقت الفعلي. تحسين إنتاجية الفريق بنسبة 40% من خلال مراجعة الكود والإرشاد.',
    'experience.emiketic.title': 'مطور Full Stack',
    'experience.emiketic.company': 'EMIKETIC Web Technologies',
    'experience.emiketic.period': 'يونيو 2021 – فبراير 2022',
    'experience.emiketic.description': 'تطوير تطبيقات ويب متجاوبة باستخدام React وNode.js وMongoDB. تحسين أداء التطبيق بنسبة 60% من خلال تقسيم الكود والتحميل الكسول. تنفيذ تدابير أمان قوية تشمل مصادقة JWT وتشفير البيانات وأفضل ممارسات OWASP. التعاون مع فرق التصميم لإنشاء واجهات مستخدم مثالية البكسل.',
    'experience.rbk.title': 'مطور Full Stack / مرشد تقني',
    'experience.rbk.company': 'ReBootKamp (RBK) Tunisia',
    'experience.rbk.period': 'سبتمبر 2020 – فبراير 2021',
    'experience.rbk.description': 'تقييم تقدم الطلاب وتحديد المجالات التي تتطلب دعماً إضافياً. تشجيع وتحفيز الطلاب لتعزيز مشاركتهم ونجاحهم في البرنامج. تطوير وعرض المواد التعليمية لتسهيل فهم المفاهيم التقنية. التعاون مع المرشدين الآخرين لمشاركة أفضل الممارسات وتوحيد طرق التدريس.',
    'experience.gomycode.title': 'مطور Full Stack',
    'experience.gomycode.company': 'GoMyCode',
    'experience.gomycode.period': 'مايو 2019 – يوليو 2020',
    'experience.gomycode.description': 'التعاون مع فرق التصميم لتحويل النماذج الأولية إلى واجهات مستخدم تفاعلية وممتعة بصرياً. المشاركة في مراجعات الكود لضمان جودة واتساق الكود المطور. دمج حلول إمكانية الوصول لجعل التطبيقات قابلة للوصول لجميع المستخدمين. المساهمة في التوثيق التقني لتسهيل الصيانة والتطوير طويل المدى للتطبيقات.',
    'experience.gomycode-intern.title': 'متدرب مطور Full Stack',
    'experience.gomycode-intern.company': 'GoMyCode',
    'experience.gomycode-intern.period': 'يناير 2019 – أبريل 2019',
    'experience.gomycode-intern.description': 'المشاركة الفعالة في مناقشات الفريق للمساهمة في حل المسائل التقنية. تطوير النماذج الأولية والعروض التوضيحية لإظهار الميزات الرئيسية للوظائف الجديدة. اكتساب المهارات العملية من خلال العمل على مشاريع حقيقية تحت إشراف خبراء الصناعة. التعاون مع المتدربين الآخرين لتبادل الأفكار والمعرفة وتعزيز بيئة تعلم تعاونية.',
    
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
