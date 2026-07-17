/* ============================================================
   JOSÉ ARIAS — PORTAL DE NOTICIAS — JavaScript
   ============================================================ */

// ── DATA ──────────────────────────────────────────────────────
const NEWS = [
  {
    id: 1,
    slug: "argentina-golea-argelia",
    category: "Deportes",
    title: "Argentina golea a Argelia y logra un debut soñado",
    excerpt: "La selección argentina venció 3-0 a Argelia en su estreno mundialista. Messi marcó hat-trick y se convirtió en el máximo anotador de la historia de las Copas del Mundo.",
    body: `<p>La selección argentina logró la victoria en su primer partido de la copa mundial de la FIFA al vencer por 3 a 0 a la selección de Argelia, en una noche que quedará en el recuerdo de todos los amantes del fútbol por la gran exhibición del astro argentino Lionel Messi.</p>
    <p>El duelo del grupo J, celebrado el 16 de junio en la ciudad de Kansas City, Estados Unidos, comenzó a jugarse desde la previa debido a la algarabía que sentía el público por ver a la actual campeona del mundo y más porque hasta ese momento todas las selecciones sudamericanas que disputaron partidos previos, habían decepcionado en la competición.</p>
    <p>La hinchada albiceleste hizo sentir a su equipo como locales. El ambiente se sentía como una cancha argentina más. Entre cantos y expectativa comenzaba a rodar el balón en el Arrowhead Stadium.</p>
    <p>El encuentro comenzó fuerte con un gol de Messi al minuto 4 que, tras ser revisado en el VAR, sería anulado. Al minuto 16, tras un pase de Rodrigo de Paul, Messi recibía el balón solo y con un remate de afuera del área anotaba el 1 a 0.</p>
    <p>Ya en el segundo tiempo, la tres veces campeona del mundo convertiría dos goles más de la mano de Leo Messi, quien al minuto 60 mandó la pelota a la red luego de un rebote del arquero Luca Zidane. El tercer gol llegaría en el minuto 76, con un zurdazo del "10" argentino que sentenciaba el juego.</p>
    <p>Después de su noche fantástica y su hat-trick, Lionel Messi se convirtió en el máximo anotador de la historia de los mundiales, compartiendo el récord con el delantero centro alemán Miroslav Klose, ambos con 16 tantos. Además, logró ser el primer jugador de la historia en disputar seis copas del mundo distintas.</p>`,
    image: "Argentina.jpeg",
    date: "16 de junio, 2026",
    featured: true
  },
  {
    id: 2,
    slug: "doble-terremoto-venezuela",
    category: "Venezuela",
    title: "Doble terremoto azota a Venezuela",
    excerpt: "Un sismo de 5,8 grados remece al oriente venezolano y genera alarma en varias ciudades. Las autoridades activan protocolos de emergencia.",
    body: `<p>Un sismo de magnitud 5,8 en la escala de Richter sacudió la región oriental de Venezuela durante la madrugada, generando pánico entre los habitantes de varias ciudades y activando de inmediato los protocolos de Protección Civil.</p>
    <p>El temblor fue sentido con especial intensidad en los estados Sucre, Monagas y Anzoátegui. Según el Funvisis, el epicentro se localizó a unos 40 kilómetros al norte de Cumaná, a una profundidad de 15 kilómetros.</p>
    <p>Las redes sociales se llenaron de testimonios de ciudadanos que despertaron sobresaltados. Varios inmuebles reportaron daños menores como grietas en paredes y caída de objetos, aunque hasta el momento no se han confirmado víctimas fatales.</p>
    <p>Las autoridades regionales llamaron a la calma e instaron a la población a seguir las instrucciones de Protección Civil y alejarse de estructuras que pudieran presentar inestabilidad.</p>`,
    image: "terremoto.jpeg",
    date: "14 de julio, 2026",
    featured: false
  },
  {
    id: 3,
    slug: "detras-del-exito",
    category: "Cultura",
    title: "El detrás del éxito: historias que no llegan a primera plana",
    excerpt: "Un reportaje sobre el esfuerzo invisible de quienes trabajan en silencio para construir logros que otros celebran. Voces que merecen ser escuchadas.",
    body: `<p>Hay historias que nunca llegan a la primera plana. No tienen la espectacularidad de un gol de última hora ni el dramatismo de un desastre natural. Son historias de constancia, de madrugadas de trabajo, de sacrificios callados. Son, quizás, las más importantes.</p>
    <p>En cada ciudad, en cada barrio, existe una red invisible de personas que sostienen el tejido social con su esfuerzo cotidiano. Maestras que compran útiles de su propio bolsillo, artesanos que preservan tradiciones centenarias, voluntarios que no buscan reconocimiento.</p>
    <p>Este reportaje recorre esos caminos menos transitados, dando voz a quienes mueven el mundo desde los márgenes del reflector. Sus testimonios revelan que el verdadero éxito rara vez tiene nombre en los periódicos, pero se siente profundamente en las comunidades que transforma.</p>
    <p>Hablar con ellos es recordar por qué el periodismo existe: para contar las historias que de otro modo se perderían en el tiempo.</p>`,
    image: "detrasdelexito.jpeg",
    date: "10 de julio, 2026",
    featured: false
  },
  {
    id: 4,
    slug: "basquetbol-luto",
    category: "Deportes",
    title: "El básquetbol está de luto",
    excerpt: "Una figura emblemática del baloncesto venezolano deja un legado imborrable. El mundo deportivo llora la pérdida de uno de sus grandes referentes.",
    body: `<p>Con profunda tristeza, el mundo del básquetbol venezolano despide a una de sus figuras más queridas. Su muerte deja un vacío que trasciende las canchas y llega al corazón de quienes lo vieron jugar, enseñar y vivir el deporte con una pasión genuina.</p>
    <p>Durante décadas, su figura fue sinónimo de entrega, humildad y excelencia. Representó al país en competencias internacionales y formó a generaciones de deportistas que hoy llevan su legado en cada partido.</p>
    <p>Los mensajes de condolencias llegaron desde todos los rincones del país. Colegas, excompañeros, entrenadores y fanáticos coinciden en destacar no solo su talento sobre la cancha, sino su calidad humana fuera de ella.</p>
    <p>El básquetbol venezolano llora hoy a uno de los suyos. Pero también celebra haber tenido entre sus filas a alguien que demostró que este deporte puede ser una escuela de vida.</p>`,
    image: "Basquetbol.jpeg",
    date: "8 de julio, 2026",
    featured: false
  },
  {
    id: 5,
    slug: "palavecino-drenaje",
    category: "Venezuela",
    title: "En Palavecino se inició plan de limpieza del drenaje",
    excerpt: "El municipio Palavecino adelanta trabajos preventivos en 25 puntos estratégicos para evitar inundaciones en la temporada de lluvias 2026.",
    body: `<p>A través del plan preventivo de Drenaje 2026, el municipio Palavecino ha emprendido una limpieza total de veinticinco puntos estratégicos distribuidos en aproximadamente 8.700 metros lineales. Este trabajo busca garantizar la tranquilidad de la población frente a las lluvias.</p>
    <p>Esta tarea se desarrolla desde noviembre de 2021, haciendo año tras año un mantenimiento preventivo a los drenajes de la ciudad, donde se limpia la sedimentación de las quebradas, material vegetal y desechos sólidos para la prevención de desbordamientos, inundaciones, daños severos a edificaciones y la erosión del suelo.</p>
    <p>Debido a esto, no se han observado desechos en los alcantarillados de los sitios más importantes de la ciudad, permitiendo el flujo de agua de lluvia con total normalidad.</p>
    <p>La presidenta del Instituto Autónomo de Servicios Públicos del Municipio Palavecino, Christian Mendoza, explicó las fases del trabajo: la primera se enfoca en la limpieza de sitios álgidos donde han ocurrido eventos en el pasado, como el buco Mayalero y los canales de la avenida Intercomunal; la segunda fase atiende las quebradas Palaciero y Marimisa.</p>
    <p>Gracias a la buena labor del plan, no se han reportado incidentes en las temporadas de lluvias, generando confianza y tranquilidad al momento de transitar por las calles del municipio.</p>`,
    image: "palavecino.jpeg",
    date: "5 de julio, 2026",
    featured: false
  },
  {
    id: 6,
    slug: "ggm-noticia-caracas",
    category: "Cultura",
    title: "García Márquez bautizó su «Noticia de un secuestro» en Caracas",
    excerpt: "El Nobel colombiano presentó su obra en la librería Libromanía de Sabana Grande ante figuras de la literatura venezolana como Uslar Pietri y Rafael Cadenas.",
    body: `<p>El escritor colombiano Gabriel García Márquez presentó su nueva obra literaria "Noticia de un secuestro" en Caracas. En la mañana del 31 de mayo, se hizo presente en la librería Libromanía, ubicada en Sabana Grande, para el lanzamiento oficial del libro.</p>
    <p>La sala estaba llena de reporteros y figuras importantes de la literatura venezolana como Arturo Uslar Pietri y Rafael Cadenas, quienes conversaron con García Márquez y le hicieron preguntas para conocer cómo fue el proceso de elaborar una obra de casi tres años de investigación.</p>
    <p>El Nobel en literatura de 1982 dijo con emoción: "Hoy me alegro. El libro no tiene una línea imaginaria, ni un dato que no esté comprobado hasta donde es humanamente posible". Contó además que no realizó las investigaciones solo, sino que aprovechó la visita de un grupo de periodistas norteamericanos que estudiaban la situación del narcotráfico en Colombia para que lo ayudaran con las entrevistas.</p>
    <p>La historia narra el secuestro de diez periodistas y trabajadores de la comunicación por parte del grupo "Los Extraditables" al mando de Pablo Escobar, con el fin de que el gobierno colombiano eliminara la condena de la extradición a otros países.</p>
    <p>"Siempre quise escribir un libro en el que los colombianos pudiéramos ver nuestro propio horror como en un espejo, y espero que sea este", confesó el autor.</p>`,
    image: "GGM.jpeg",
    date: "1 de julio, 2026",
    featured: false
  },
  {
    id: 7,
    slug: "cortes-electricos-lara",
    category: "Venezuela",
    title: "Los cortes eléctricos: nuevo desafío para conductores larenses",
    excerpt: "La crisis del combustible en el estado Lara suma un nuevo frente: los apagones de hasta cinco horas impiden surtir gasolina con normalidad.",
    body: `<p>En las últimas semanas, la crisis del combustible en el estado Lara tomó una nueva dimensión. A las colas extensas, diferentes métodos de pago y a la reducción de estaciones de servicio se les suma la problemática de los cortes eléctricos diarios, que duran hasta cinco horas, convirtiéndose en un verdadero desafío para quienes buscan surtir gasolina.</p>
    <p>Elio Ocanto, conductor de la aplicación Vamos, expresa su disconformidad. Habla de que pierde entre una y tres horas en colas, disminuyendo su tiempo de trabajo: "Sí, hay bombas que no tienen planta eléctrica y pues hay que estar ahí hasta que llegue la luz".</p>
    <p>Por su parte, José Daniel Cortés, islero de la estación de servicio ubicada en la carrera 15 de Barquisimeto, comentó: "Se trabaja menos porque se apaga uno de los surtidores y rinde menos el trabajo. Baja el ritmo de la cola y baja el porcentaje de venta".</p>
    <p>Ante esta situación, el gobernador del estado Lara, Luis Reyes Reyes, indicó que solo alrededor del 45% de las estaciones de servicio en Iribarren cuentan con plantas eléctricas operativas. Agregó que están trabajando en un plan junto a Corpoelec para garantizar el servicio eléctrico en las mañanas y tardes.</p>
    <p>Sin duda esta situación afecta a la población larense y no hay una fecha estimada para que esto mejore.</p>`,
    image: "LosCortes.jpeg",
    date: "28 de junio, 2026",
    featured: false
  }
];

// ── UTILS ─────────────────────────────────────────────────────
function getCategoryColor(cat) {
  const map = { Venezuela: '#b8001f', Internacional: '#1a5fa8', Deportes: '#1a7a3c', Cultura: '#8b5a2b' };
  return map[cat] || '#555';
}

// ── DOM REFS ──────────────────────────────────────────────────
const heroCard      = document.getElementById('hero-card');
const latestList    = document.getElementById('latest-list');
const tickerTrack   = document.getElementById('ticker-track');
const articlesGrid  = document.getElementById('articles-grid');
const articleCount  = document.getElementById('article-count');
const sectionTitle  = document.getElementById('section-title');
const categoriesList= document.getElementById('categories-list');
const modalOverlay  = document.getElementById('modal-overlay');
const modalBody     = document.getElementById('modal-body');
const modalClose    = document.getElementById('modal-close');
const menuToggle    = document.getElementById('menu-toggle');
const mainNav       = document.getElementById('main-nav');
const topbarDate    = document.getElementById('topbar-date');
const footerYear    = document.getElementById('footer-year');

let currentFilter = 'all';

// ── DATE ──────────────────────────────────────────────────────
function formatLongDate() {
  const d = new Date();
  return d.toLocaleDateString('es-VE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

topbarDate.textContent = formatLongDate();
footerYear.textContent = new Date().getFullYear();

// ── HERO ──────────────────────────────────────────────────────
function renderHero() {
  const featured = NEWS.find(n => n.featured) || NEWS[0];

  heroCard.innerHTML = `
    <div class="card-img-wrap">
      <img src="${featured.image}" alt="${featured.title}" loading="eager" />
      <div class="card-overlay"></div>
    </div>
    <div class="card-body">
      <span class="card-category">${featured.category}</span>
      <h2 class="card-title">${featured.title}</h2>
      <div class="card-meta">
        <span>José Arias</span>
        <span>${featured.date}</span>
      </div>
    </div>
  `;
  heroCard.addEventListener('click', () => openModal(featured));
}

// ── LATEST LIST ───────────────────────────────────────────────
function renderLatest() {
  const items = NEWS.slice(0, 5);
  latestList.innerHTML = items.map((n, i) => `
    <div class="latest-item" data-id="${n.id}" role="button" tabindex="0" aria-label="Leer: ${n.title}">
      <span class="latest-item-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="latest-item-info">
        <div class="latest-item-cat">${n.category}</div>
        <div class="latest-item-title">${n.title}</div>
      </div>
    </div>
  `).join('');

  latestList.querySelectorAll('.latest-item').forEach(el => {
    const handler = () => {
      const news = NEWS.find(n => n.id === +el.dataset.id);
      if (news) openModal(news);
    };
    el.addEventListener('click', handler);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handler(); });
  });
}

// ── TICKER ────────────────────────────────────────────────────
function renderTicker() {
  const titles = NEWS.map(n => `<span class="ticker-item" data-id="${n.id}">${n.title}</span><span class="ticker-sep">◆</span>`).join('');
  // Duplicate for seamless loop
  const inner = `<div class="ticker-inner">${titles}${titles}</div>`;
  tickerTrack.innerHTML = inner;

  tickerTrack.querySelectorAll('.ticker-item').forEach(el => {
    el.addEventListener('click', () => {
      const news = NEWS.find(n => n.id === +el.dataset.id);
      if (news) openModal(news);
    });
  });
}

// ── CATEGORIES ────────────────────────────────────────────────
function renderCategories() {
  const counts = {};
  NEWS.forEach(n => { counts[n.category] = (counts[n.category] || 0) + 1; });
  const total = NEWS.length;

  categoriesList.innerHTML = `
    <li>
      <a href="#" data-filter="all" class="cat-filter ${currentFilter === 'all' ? 'active' : ''}">
        Todas las noticias <span class="cat-count">${total}</span>
      </a>
    </li>
    ${Object.entries(counts).map(([cat, count]) => `
    <li>
      <a href="#" data-filter="${cat}" class="cat-filter ${currentFilter === cat ? 'active' : ''}">
        ${cat} <span class="cat-count">${count}</span>
      </a>
    </li>
    `).join('')}
  `;

  categoriesList.querySelectorAll('.cat-filter').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const f = link.dataset.filter;
      applyFilter(f);
    });
  });
}

// ── ARTICLES GRID ─────────────────────────────────────────────
function renderArticles(filtered) {
  if (!filtered.length) {
    articlesGrid.innerHTML = `
      <div class="no-results">
        <h3>Sin resultados</h3>
        <p>No hay noticias en esta categoría por el momento.</p>
      </div>
    `;
    articleCount.textContent = '';
    return;
  }

  articleCount.textContent = `${filtered.length} artículo${filtered.length !== 1 ? 's' : ''}`;

  articlesGrid.innerHTML = filtered.map((n, i) => {
    const isFeaturedCard = (i === 0 && currentFilter === 'all');
    return `
      <article class="article-card${isFeaturedCard ? ' featured-card' : ''}" data-id="${n.id}"
        role="button" tabindex="0" aria-label="Leer artículo: ${n.title}"
        style="animation-delay: ${i * 0.05}s">
        <div class="article-card-img">
          <img src="${n.image}" alt="${n.title}" loading="lazy" />
        </div>
        <div class="article-card-body">
          <div class="card-cat">${n.category}</div>
          <h3 class="card-title-link">${n.title}</h3>
          <p class="card-excerpt">${n.excerpt}</p>
          <div class="card-footer">
            <span class="card-date">${n.date}</span>
            <span class="card-read-more">Leer más →</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  articlesGrid.querySelectorAll('.article-card').forEach(el => {
    const handler = () => {
      const news = NEWS.find(n => n.id === +el.dataset.id);
      if (news) openModal(news);
    };
    el.addEventListener('click', handler);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handler(); });
  });
}

// ── FILTER ────────────────────────────────────────────────────
function applyFilter(filter) {
  currentFilter = filter;

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.filter === filter);
  });

  // Update section title
  sectionTitle.textContent = filter === 'all' ? 'Todas las Noticias' : filter;

  // Filter news
  const filtered = filter === 'all' ? NEWS : NEWS.filter(n => n.category === filter);
  renderArticles(filtered);
  renderCategories();
}

// ── MODAL ─────────────────────────────────────────────────────
function openModal(news) {
  modalBody.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${news.image}" alt="${news.title}" />
    </div>
    <div class="modal-content-body">
      <span class="modal-category">${news.category}</span>
      <h2 class="modal-title" id="modal-title">${news.title}</h2>
      <div class="modal-meta">
        <span class="modal-meta-author">Por José Arias</span>
        <span>${news.date}</span>
      </div>
      <div class="modal-text">${news.body}</div>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── NAV FILTER ────────────────────────────────────────────────
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const f = link.dataset.filter;
    if (f) applyFilter(f);
    // Close mobile menu
    mainNav.classList.remove('open');
  });
});

// ── MOBILE MENU ───────────────────────────────────────────────
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// ── STICKY HEADER ─────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  if (window.scrollY > 60) {
    header.style.boxShadow = '0 4px 30px rgba(0,0,0,.5)';
  } else {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,.4)';
  }
}, { passive: true });

// ── INIT ──────────────────────────────────────────────────────
(function init() {
  renderHero();
  renderLatest();
  renderTicker();
  renderCategories();
  renderArticles(NEWS);
})();
