import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import { useLanguage } from '../context/LanguageContext';

const { FiCalendar, FiUser, FiArrowRight, FiClock } = FiIcons;

const Blog = () => {
  const { t, language, getLocalizedPath } = useLanguage();

  const blogPosts = {
    es: [
      {
        title: "Core Web Vitals 2024: Cómo Optimizar LCP, FID y CLS para SEO",
        excerpt: "Los Core Web Vitals son factores de ranking cruciales. En este artículo explico paso a paso cómo optimizar cada métrica basándome en mi experiencia optimizando websites de MVF y proyectos freelance.",
        content: `
# Core Web Vitals 2024: Cómo Optimizar LCP, FID y CLS para SEO

Los Core Web Vitals se han convertido en uno de los factores de ranking más importantes de Google. Durante mi tiempo en MVF, optimizé estas métricas en más de 9 websites, logrando mejoras significativas en el posicionamiento.

## ¿Qué son los Core Web Vitals?

Los Core Web Vitals son tres métricas específicas que Google considera esenciales para la experiencia del usuario:

1. **Largest Contentful Paint (LCP)** - Velocidad de carga
2. **First Input Delay (FID)** - Interactividad
3. **Cumulative Layout Shift (CLS)** - Estabilidad visual

## Optimización de LCP (Largest Contentful Paint)

**Objetivo: < 2.5 segundos**

### Estrategias que funcionan:
- **Optimización de imágenes**: Usar formatos WebP y AVIF
- **Preload de recursos críticos**: \`<link rel="preload">\`
- **CDN optimizado**: Implementar Cloudflare o similar
- **Lazy loading inteligente**: Solo para contenido below-the-fold

En Black Mamba Tattoo, reduje el LCP de 4.2s a 1.8s aplicando estas técnicas.

¿Necesitas optimizar los Core Web Vitals de tu website? [Contacta conmigo](${getLocalizedPath()}#contact) para una auditoría gratuita.
        `,
        category: "SEO Técnico",
        readTime: "8 min",
        date: new Date('2024-01-15'),
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        tags: ["Core Web Vitals", "Performance", "Technical SEO", "Google"]
      },
      {
        title: "SEO Local en Galicia: Estrategias que Funcionan para Negocios Locales",
        excerpt: "Basándome en mis casos de éxito con Black Mamba Tattoo y Luciana & Lo, comparto las estrategias de SEO local que realmente funcionan para posicionar negocios en Galicia y España.",
        content: `
# SEO Local en Galicia: Estrategias que Funcionan para Negocios Locales

El SEO local es fundamental para negocios físicos. En mis proyectos freelance en A Coruña, he conseguido posicionar empresas locales en primera posición de Google Maps y búsquedas locales.

## La Importancia del SEO Local

El 46% de las búsquedas en Google tienen intención local. Para negocios como salones de belleza, estudios de tatuajes o restaurantes, aparecer en los primeros resultados locales es crucial.

¿Tienes un negocio local en Galicia? [Hablemos](${getLocalizedPath()}#contact) sobre cómo posicionarlo en los primeros resultados.
        `,
        category: "SEO Local",
        readTime: "6 min",
        date: new Date('2024-01-10'),
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
        tags: ["SEO Local", "Google My Business", "Galicia", "Casos de Estudio"]
      },
      {
        title: "Automatización SEO con Python: Scripts que Uso en mis Proyectos",
        excerpt: "Durante mi tiempo en MVF aprendí a automatizar procesos SEO para gestionar múltiples websites. Comparto los scripts de Python más útiles que he desarrollado.",
        content: `
# Automatización SEO con Python: Scripts que Uso en mis Proyectos

La automatización ha sido clave en mi capacidad para gestionar SEO en múltiples websites simultáneamente. En MVF, desarrollé scripts que me permitían monitorizar y optimizar 9+ websites de forma eficiente.

¿Quieres implementar automatización SEO en tu negocio? [Contáctame](${getLocalizedPath()}#contact) y te ayudo a configurar estos sistemas.
        `,
        category: "Automatización",
        readTime: "12 min",
        date: new Date('2024-01-05'),
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        tags: ["Python", "Automatización", "SEO Tools", "Scripts"]
      }
    ],
    en: [
      {
        title: "Core Web Vitals 2024: How to Optimize LCP, FID and CLS for SEO",
        excerpt: "Core Web Vitals are crucial ranking factors. In this article I explain step by step how to optimize each metric based on my experience optimizing MVF websites and freelance projects.",
        content: `
# Core Web Vitals 2024: How to Optimize LCP, FID and CLS for SEO

Core Web Vitals have become one of Google's most important ranking factors. During my time at MVF, I optimized these metrics across 9+ websites, achieving significant improvements in positioning.

## What are Core Web Vitals?

Core Web Vitals are three specific metrics that Google considers essential for user experience:

1. **Largest Contentful Paint (LCP)** - Loading speed
2. **First Input Delay (FID)** - Interactivity
3. **Cumulative Layout Shift (CLS)** - Visual stability

## LCP Optimization (Largest Contentful Paint)

**Target: < 2.5 seconds**

### Strategies that work:
- **Image optimization**: Use WebP and AVIF formats
- **Preload critical resources**: \`<link rel="preload">\`
- **Optimized CDN**: Implement Cloudflare or similar
- **Smart lazy loading**: Only for below-the-fold content

At Black Mamba Tattoo, I reduced LCP from 4.2s to 1.8s applying these techniques.

Need to optimize your website's Core Web Vitals? [Contact me](${getLocalizedPath()}#contact) for a free audit.
        `,
        category: "Technical SEO",
        readTime: "8 min",
        date: new Date('2024-01-15'),
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        tags: ["Core Web Vitals", "Performance", "Technical SEO", "Google"]
      },
      {
        title: "Local SEO in Galicia: Strategies That Work for Local Businesses",
        excerpt: "Based on my success cases with Black Mamba Tattoo and Luciana & Lo, I share the local SEO strategies that really work to position businesses in Galicia and Spain.",
        content: `
# Local SEO in Galicia: Strategies That Work for Local Businesses

Local SEO is fundamental for physical businesses. In my freelance projects in A Coruña, I've managed to position local companies in first position on Google Maps and local searches.

## The Importance of Local SEO

46% of Google searches have local intent. For businesses like beauty salons, tattoo studios or restaurants, appearing in the first local results is crucial.

Do you have a local business in Galicia? [Let's talk](${getLocalizedPath()}#contact) about how to position it in the first results.
        `,
        category: "Local SEO",
        readTime: "6 min",
        date: new Date('2024-01-10'),
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
        tags: ["Local SEO", "Google My Business", "Galicia", "Case Studies"]
      },
      {
        title: "SEO Automation with Python: Scripts I Use in My Projects",
        excerpt: "During my time at MVF I learned to automate SEO processes to manage multiple websites. I share the most useful Python scripts I've developed.",
        content: `
# SEO Automation with Python: Scripts I Use in My Projects

Automation has been key to my ability to manage SEO across multiple websites simultaneously. At MVF, I developed scripts that allowed me to monitor and optimize 9+ websites efficiently.

Want to implement SEO automation in your business? [Contact me](${getLocalizedPath()}#contact) and I'll help you set up these systems.
        `,
        category: "Automation",
        readTime: "12 min",
        date: new Date('2024-01-05'),
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        tags: ["Python", "Automation", "SEO Tools", "Scripts"]
      }
    ]
  };

  const categories = language === 'es' 
    ? ["Todos", "SEO Técnico", "SEO Local", "Automatización", "SEO Internacional", "Estrategia SEO"]
    : ["All", "Technical SEO", "Local SEO", "Automation", "International SEO", "SEO Strategy"];

  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
  const [selectedPost, setSelectedPost] = React.useState(null);

  const currentPosts = blogPosts[language] || blogPosts.es;
  const filteredPosts = selectedCategory === categories[0] 
    ? currentPosts 
    : currentPosts.filter(post => post.category === selectedCategory);

  const dateLocale = language === 'es' ? es : enUS;

  if (selectedPost) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            {t('blog.backToBlog')}
          </button>
          
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-2xl mb-8"
            />
            
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
              <SafeIcon icon={FiCalendar} className="mr-2" />
              {format(selectedPost.date, 'dd MMM yyyy', { locale: dateLocale })}
              <span className="mx-2">•</span>
              <SafeIcon icon={FiClock} className="mr-2" />
              {selectedPost.readTime}
              <span className="mx-2">•</span>
              <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs">
                {selectedPost.category}
              </span>
            </div>
            
            <div 
              className="prose-content"
              dangerouslySetInnerHTML={{
                __html: selectedPost.content
                  .replace(/\n/g, '<br/>')
                  .replace(/```python(.*?)```/gs, '<pre><code>$1</code></pre>')
              }}
            />
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                  <SafeIcon icon={FiCalendar} className="mr-2" />
                  {format(post.date, 'dd MMM yyyy', { locale: dateLocale })}
                  <span className="mx-2">•</span>
                  <SafeIcon icon={FiClock} className="mr-2" />
                  {post.readTime}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, i) => (
                    <span 
                      key={i}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      +{post.tags.length - 2} {language === 'es' ? 'más' : 'more'}
                    </span>
                  )}
                </div>
                
                <button className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-1 transition-transform">
                  {t('blog.readMore')}
                  <SafeIcon icon={FiArrowRight} className="ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-2xl max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('blog.newsletter.title')}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {t('blog.newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <motion.button
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('blog.newsletter.button')}
              </motion.button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              {t('blog.newsletter.disclaimer')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;