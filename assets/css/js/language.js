// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    const langText = langToggle.querySelector('.lang-text');
    
    // Translation dictionary
    const translations = {
        'en': {
            // Navigation
            'nav_home': 'Home',
            'nav_services': 'Services',
            'nav_work': 'Work',
            'nav_about': 'About',
            'nav_testimonials': 'Testimonials',
            'nav_contact': 'Contact',
            'nav_cta': 'Get Started',
            
            // Hero Section
            'hero_title': 'Creative Solutions for Your Digital Presence',
            'hero_subtitle': 'We create stunning designs and powerful digital experiences that help your business grow and succeed in the digital world.',
            'hero_cta_primary': 'Get Started',
            'hero_cta_secondary': 'Learn More',
            'hero_stat_1_number': '15+',
            'hero_stat_1_text': 'Years Experience',
            'hero_stat_2_number': '250+',
            'hero_stat_2_text': 'Projects Completed',
            'hero_stat_3_number': '95%',
            'hero_stat_3_text': 'Client Satisfaction',
            
            // Services Section
            'services_title': 'Our Services',
            'services_subtitle': 'We offer a wide range of design and development services to help your business succeed.',
            'service_1_title': 'UI/UX Design',
            'service_1_desc': 'We create intuitive user interfaces and experiences that engage and delight your users.',
            'service_2_title': 'Web Development',
            'service_2_desc': 'Custom websites and web applications built with the latest technologies.',
            'service_3_title': 'Brand Identity',
            'service_3_desc': 'Develop a unique and memorable brand identity that sets you apart from competitors.',
            'service_4_title': 'Digital Marketing',
            'service_4_desc': 'Strategies to boost your online presence and reach your target audience effectively.',
            'service_link': 'Learn More',
            
            // Portfolio Section
            'portfolio_title': 'Our Work',
            'portfolio_subtitle': 'Check out some of our recent projects that showcase our expertise and capabilities.',
            'portfolio_filter_all': 'All',
            'portfolio_filter_web': 'Web Design',
            'portfolio_filter_app': 'App Design',
            'portfolio_filter_brand': 'Branding',
            'portfolio_link': 'View Details',
            
            // About Section
            'about_title': 'About Us',
            'about_subtitle': 'Learn more about our company, our mission, and our approach to creating amazing digital experiences.',
            'about_hero_title': 'Were a team of creative thinkers and problem solvers',
            'about_hero_desc': 'Founded in 2010, Design Studio has grown from a small design agency to a full-service digital studio with a team of designers, developers, strategists, and project managers. Were passionate about creating digital experiences that make a difference.',
            'about_stat_1_number': '12',
            'about_stat_1_text': 'Team Members',
            'about_stat_2_number': '5',
            'about_stat_2_text': 'Office Locations',
            'about_stat_3_number': '24/7',
            'about_stat_3_text': 'Support',
            'about_feature_1_title': 'Our Mission',
            'about_feature_1_desc': 'To create digital experiences that help businesses grow and succeed in the digital age.',
            'about_feature_2_title': 'Our Vision',
            'about_feature_2_desc': 'To be the leading digital design studio known for innovation and excellence.',
            'about_feature_3_title': 'Our Values',
            'about_feature_3_desc': 'Creativity, collaboration, excellence, and a passion for helping clients succeed.',
            'about_feature_4_title': 'Our Process',
            'about_feature_4_desc': 'A strategic, collaborative approach that ensures we deliver exceptional results.',
            'about_cta_title': 'Ready to start your project?',
            'about_cta_desc': 'Lets discuss how we can help you achieve your goals and create something amazing together.',
            'about_cta_button': 'Contact Us',
            
            // Testimonials Section
            'testimonials_title': 'What Our Clients Say',
            'testimonials_subtitle': 'Dont just take our word for it. Heres what some of our clients have to say about working with us.',
            
            // Contact Section
            'contact_title': 'Get In Touch',
            'contact_subtitle': 'Ready to start your project? Have a question? Wed love to hear from you.',
            'contact_address_title': 'Address',
            'contact_address': '123 Design Street, Creative City, 10001',
            'contact_email_title': 'Email',
            'contact_email': 'hello@designstudio.com',
            'contact_phone_title': 'Phone',
            'contact_phone': '+1 (555) 123-4567',
            'contact_hours_title': 'Working Hours',
            'contact_hours': 'Mon-Fri: 9AM - 6PM',
            'contact_social_title': 'Connect with us',
            'contact_form_title': 'Send us a message',
            'contact_form_desc': 'Fill out the form below and well get back to you as soon as possible.',
            'contact_form_name': 'Your Name',
            'contact_form_email': 'Your Email',
            'contact_form_subject': 'Subject',
            'contact_form_message': 'Your Message',
            'contact_form_button': 'Send Message',
            
            // Footer
            'footer_copyright': '© 2025 Design Studio. All rights reserved.',
            'footer_privacy': 'Privacy Policy',
            'footer_terms': 'Terms of Service'
        },
        'es': {
            // Navegación
            'nav_home': 'Inicio',
            'nav_services': 'Servicios',
            'nav_work': 'Proyectos',
            'nav_about': 'Nosotros',
            'nav_testimonials': 'Testimonios',
            'nav_contact': 'Contacto',
            'nav_cta': 'Comenzar',
            
            // Sección Hero
            'hero_title': 'Soluciones Creativas para tu Presencia Digital',
            'hero_subtitle': 'Creamos diseños impresionantes y experiencias digitales poderosas que ayudan a tu negocio a crecer y tener éxito en el mundo digital.',
            'hero_cta_primary': 'Comenzar',
            'hero_cta_secondary': 'Saber Más',
            'hero_stat_1_number': '15+',
            'hero_stat_1_text': 'Años de Experiencia',
            'hero_stat_2_number': '250+',
            'hero_stat_2_text': 'Proyectos Completados',
            'hero_stat_3_number': '95%',
            'hero_stat_3_text': 'Satisfacción del Cliente',
            
            // Sección de Servicios
            'services_title': 'Nuestros Servicios',
            'services_subtitle': 'Ofrecemos una amplia gama de servicios de diseño y desarrollo para ayudar a tu negocio a tener éxito.',
            'service_1_title': 'Diseño UI/UX',
            'service_1_desc': 'Creamos interfaces de usuario intuitivas y experiencias que atraen y deleitan a tus usuarios.',
            'service_2_title': 'Desarrollo Web',
            'service_2_desc': 'Sitios web y aplicaciones personalizadas construidas con las últimas tecnologías.',
            'service_3_title': 'Identidad de Marca',
            'service_3_desc': 'Desarrollamos una identidad de marca única y memorable que te diferencia de la competencia.',
            'service_4_title': 'Marketing Digital',
            'service_4_desc': 'Estrategias para impulsar tu presencia en línea y llegar a tu público objetivo de manera efectiva.',
            'service_link': 'Saber Más',
            
            // Sección de Portafolio
            'portfolio_title': 'Nuestro Trabajo',
            'portfolio_subtitle': 'Echa un vistazo a algunos de nuestros proyectos recientes que muestran nuestra experiencia y capacidades.',
            'portfolio_filter_all': 'Todos',
            'portfolio_filter_web': 'Diseño Web',
            'portfolio_filter_app': 'Diseño de Apps',
            'portfolio_filter_brand': 'Branding',
            'portfolio_link': 'Ver Detalles',
            
            // Sección Acerca de
            'about_title': 'Sobre Nosotros',
            'about_subtitle': 'Conoce más sobre nuestra empresa, nuestra misión y nuestro enfoque para crear experiencias digitales increíbles.',
            'about_hero_title': 'Somos un equipo de pensadores creativos y solucionadores de problemas',
            'about_hero_desc': 'Fundado en 2010, Design Studio ha crecido desde una pequeña agencia de diseño hasta un estudio digital de servicio completo con un equipo de diseñadores, desarrolladores, estrategas y gerentes de proyectos. Nos apasiona crear experiencias digitales que marquen la diferencia.',
            'about_stat_1_number': '12',
            'about_stat_1_text': 'Miembros del Equipo',
            'about_stat_2_number': '5',
            'about_stat_2_text': 'Ubicaciones de Oficinas',
            'about_stat_3_number': '24/7',
            'about_stat_3_text': 'Soporte',
            'about_feature_1_title': 'Nuestra Misión',
            'about_feature_1_desc': 'Crear experiencias digitales que ayuden a las empresas a crecer y tener éxito en la era digital.',
            'about_feature_2_title': 'Nuestra Visión',
            'about_feature_2_desc': 'Ser el estudio de diseño digital líder conocido por la innovación y la excelencia.',
            'about_feature_3_title': 'Nuestros Valores',
            'about_feature_3_desc': 'Creatividad, colaboración, excelencia y pasión por ayudar a los clientes a tener éxito.',
            'about_feature_4_title': 'Nuestro Proceso',
            'about_feature_4_desc': 'Un enfoque estratégico y colaborativo que garantiza resultados excepcionales.',
            'about_cta_title': '¿Listo para comenzar tu proyecto?',
            'about_cta_desc': 'Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos y crear algo increíble juntos.',
            'about_cta_button': 'Contáctanos',
            
            // Sección de Testimonios
            'testimonials_title': 'Lo Que Dicen Nuestros Clientes',
            'testimonials_subtitle': 'No solo confíes en nuestra palabra. Esto es lo que algunos de nuestros clientes dicen sobre trabajar con nosotros.',
            
            // Sección de Contacto
            'contact_title': 'Ponte en Contacto',
            'contact_subtitle': '¿Listo para comenzar tu proyecto? ¿Tienes alguna pregunta? Nos encantaría saber de ti.',
            'contact_address_title': 'Dirección',
            'contact_address': 'Calle Diseño 123, Ciudad Creativa, 10001',
            'contact_email_title': 'Correo Electrónico',
            'contact_email': 'hola@designstudio.com',
            'contact_phone_title': 'Teléfono',
            'contact_phone': '+1 (555) 123-4567',
            'contact_hours_title': 'Horario Laboral',
            'contact_hours': 'Lun-Vie: 9AM - 6PM',
            'contact_social_title': 'Conéctate con nosotros',
            'contact_form_title': 'Envíanos un mensaje',
            'contact_form_desc': 'Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.',
            'contact_form_name': 'Tu Nombre',
            'contact_form_email': 'Tu Correo Electrónico',
            'contact_form_subject': 'Asunto',
            'contact_form_message': 'Tu Mensaje',
            'contact_form_button': 'Enviar Mensaje',
            
            // Pie de página
            'footer_copyright': '© 2025 Design Studio. Todos los derechos reservados.',
            'footer_privacy': 'Política de Privacidad',
            'footer_terms': 'Términos de Servicio'
        }
    };
    
    // Check for saved language preference
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Initialize page with correct language
    updateLanguage(currentLang);
    
    // Toggle language when button is clicked
    langToggle.addEventListener('click', function() {
        // Toggle between English and Spanish
        currentLang = currentLang === 'en' ? 'es' : 'en';
        
        // Update language text in button
        langText.textContent = currentLang.toUpperCase();
        
        // Save preference
        localStorage.setItem('language', currentLang);
        
        // Update page content
        updateLanguage(currentLang);
    });
    
    // Function to update all text content on the page
    function updateLanguage(lang) {
        // Update button text
        langText.textContent = lang.toUpperCase();
        
        // Update navigation items
        document.querySelectorAll('.nav-item').forEach(item => {
            const link = item.querySelector('.nav-link');
            if (!link) return;
            
            // Skip the theme and language toggle items
            if (item.classList.contains('theme-toggle-wrapper') || 
                item.classList.contains('lang-toggle-wrapper')) {
                return;
            }
            
            // Get the href to determine which nav item this is
            const href = link.getAttribute('href');
            
            if (href === '#home') {
                link.textContent = translations[lang]['nav_home'];
            } else if (href === '#services') {
                link.textContent = translations[lang]['nav_services'];
            } else if (href === '#portfolio') {
                link.textContent = translations[lang]['nav_work'];
            } else if (href === '#about') {
                link.textContent = translations[lang]['nav_about'];
            } else if (href === '#testimonials') {
                link.textContent = translations[lang]['nav_testimonials'];
            } else if (href === '#contact') {
                if (item.classList.contains('nav-cta')) {
                    link.textContent = translations[lang]['nav_cta'];
                } else {
                    link.textContent = translations[lang]['nav_contact'];
                }
            }
        });
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }
});