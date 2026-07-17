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
    body: `<p>La selección argentina logró la victoria en su primer partido de la copa mundial de la FIFA al vencer por 3 a 0 a la selección de Argelia, en una noche que quedará en el recuerdo de [...]
	El duelo del grupo J, celebrado el 16 de junio en la ciudad de Kansas City, Estados Unidos, comenzó a jugarse desde la previa debido a la algarabía que sentía el público por ver a la actual campe[...]
	Entre cantos y expectativa comenzaba a rodar el balón en el Arrowhead Stadium. El encuentro comenzaba fuerte con un gol de Messi al minuto 4 que, tras ser revisado en el var, seria anulado. El conju[...]
</p>
<p>Ya en el segundo tiempo, la tres veces campeona del mundo convertiría dos goles más de la mano de Leo Messi, quien al minuto 60 mandaría la pelota a la red luego de un rebote del arquero Luca Zidan[...]
	Después de su noche fantástica y su hat-trick, Lionel Messi se convirtió en el máximo anotador de la historia de los mundiales, compartiendo el record con el delantero centro alemán Miroslav Klo[...]
</p>
<p>Habló Scaloni 
	En la rueda de prensa post-partido, el director técnico argentino Lionel Scaloni destacó el gran nivel que demostró Messi en el campo: “Lo de Leo bueno, es difícil de explicarlo. Hace 20 años [...]
	Sin embargo, a pesar del buen arranque, rechazó la idea de ser grandes candidatos: "Sabemos muy bien que cualquiera nos puede ganar si te confías un poquito". Agregando como ejemplo la derrota sufr[...]
	La selección argentina reafirmó su poderío al conseguir esta victoria importantísima. La mitad de la cancha conformada por Alexis Mac Allister, Rodrigo de Paul y Enzo Fernández demostró estar a[...]
De mismo modo, la dupla central de Cristian Romero y Lisandro Martínez dio confianza al no dejar encajar ni un solo gol, y con los cambios y el gran nivel de Messi, a pesar de las palabras de Scaloni[...]
</p>`,
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
    body: `<p>El día miércoles 24 de junio transcurría con total normalidad. En Venezuela, era feriado debido a la conmemoración de la “Batalla de Carabobo” y por ende las personas no fueron a[...]
	Pero esa tranquilidad se transformaría en angustia y desesperación. A las 18:04, la tierra comenzó a moverse provocando un terremoto, cosa que no es normal que ocurra en el país. Todo se tambalea[...]
</p>
<p>Este segundo temblor tendría una duración de tres minutos. Con el, varias ciudades del país caribeño se verían afectadas, como los estados de Miranda, Aragua, Carabobo y Yaracuy. Sin embargo, Ca[...]
El Servicio Geológico de Estados Unidos (USGS) informó que el primer sismo tuvo una magnitud de 7,2 y el segundo de 7,5, con epicentro al oeste de Caracas. Los expertos advierten que este es uno de [...]
</p>
<p>Tras lo ocurrido, todo el mundo se conmovió y envió fuerzas a los venezolanos, entre ellos el presidente de Serbia, Aleksandar Vučić, con un mensaje en su cuenta de X: “En mi nombre y en nombre [...]
	Rescatistas de España, El Salvador y México aterrizaron en las primeras horas para apoyar en las labores de rescate de víctimas y atención de los afectados. También llegó al país petrolero el [...]
“Con velocidad, precisión y una capacidad logística incomparable, equipos de EEUU se están desplegando para apoyar las operaciones de respuesta tras los devastadores terremotos en Venezuela”, s[...]
</p>
<p>Tres semanas después de aquel doblete sísmico, el contador de fallecidos sigue aumentando. Al 15 de julio, las autoridades confirmaron alrededor de 4.800 muertes y 16.740 heridos.
Sin duda, este hecho se ha convertido en uno de los más oscuros de la época contemporánea para la nación. Gran parte de la población afectada, sin hogar, ni trabajo para el sustento y familias de[...]
.</p>`,
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
    body: `<p>El 19 de diciembre de 1997, se estrenó uno de los clásicos cinematográficos más grandes de la historia. La película "El Titanic" debutaba en la pantalla grande con un récord de taq[...]
El éxito de la película se reflejó, no solo por su taquilla imbatible. Este proyecto dio un impulso para el desarrollo de efectos visuales por computadora (CGI). La banda sonora fue todo un fenóme[...]
</p>
<p>En una entrevista para Playboy en 2009, el director James Cameron dio a conocer su verdadero deseo por realizar la película. Su motor principal fue su obsesión personal por el buceo y la exploració[...]
La historia refleja lo ocurrido la madrugada del 15 de abril de 1912 en el océano Atlántico. Trata del romance de Jack (interpretado por Leonardo DiCaprio), un joven de tercera clase y Rose (protago[...]
</p>
<p>Esta narración es digna de recordarse, ya que refleja la desigualdad de clases sociales. La historia de amor contrasta el opresivo pero lujoso mundo de la primera clase con la vitalidad y libertad de[...]
</p>`,
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
    body: `<p>El martes 5 de mayo, se dio a conocer la muerte de la leyenda del básquetbol puertorriqueño José "Piculín" Ortiz a sus 62 años de edad.
El nacido en Albonito, ya presentaba un largo período de más de dos años que fue diagnosticado con un cáncer colorrectal, según informa la Federación de Baloncesto de Puerto Rico.
</p>
<p>Desde el [primero] de mayo, "Piculín" Ortiz se encontraba internado en el Hospital Ashford, en San Juan, capital de la isla caribeña. Los días que pasó en el centro médico estuvo acompañado de s[...]
 En Cayey descubriría su amor por el baloncesto. En el draft de 1987 de la NBA, sería elegido por los Utah Jazz en el pick número 15. Se mantuvo con la franquicia las temporadas de 1988-1989 y 1989[...]
</p>
<p>Sin embargo, donde sobresaldría sería en sus etapas por la liga de España, representando al CAI Zaragoza antes de ir a la NBA. Luego de su última temporada en la liga Americana, volvió a España [...]
El legendario pivote es, sin duda, el mejor basquetbolista de la historia de Puerto Rico. Brilló en todas la competiciones que disputó con el seleccionado, contabilizando cuatro juegos olímpicos (S[...]
</p>
<p> Sin duda se nos va un grande del deporte.
</p>`,
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
    body: `<p>A través de este preventivo de Drenaje 2026, se ha encargado de realizar una limpieza total de veinticinco puntos estratégicos distribuidos en 8.700 metros lineales aproximadamente. Es[...]
Esta tarea se desarrolla desde noviembre de 2021, haciendo año tras año un mantenimiento preventivo a los drenajes de la ciudad, donde se limpia la sedimentación de las quebradas, material vegetal [...]
</p>
<p>Debido a esto, no se han observado desechos en los alcantarillados de los sitios más importantes de la ciudad, permitiendo el flujo de agua de lluvia con total normalidad.
La presidenta del Instituto Autónomo de Servicios Públicos del Municipio Palavecino, Christian Mendoza, explicó las fases de cómo realizan el trabajo. En el primero se hace la limpieza de sitios �[...]
</p>
<p>Gracias a la buena labor del plan, no se han reportado incidentes en las temporadas de lluvias, generando confianza y tranquilidad al momento de transitar por las calles del municipio.
</p>`,
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
    body: `<p>El escritor colombiano Gabriel García Márquez presentó su nueva obra literaria "Noticia de un secuestro". En la mañana del 31 de mayo, se hizo presente en la librería Libromanía, u[...]
La sala de la biblioteca estaba llena de reporteros y de figuras importantes de la literatura venezolana como Arturo Uslar Pietri y Rafael Cadenas, quienes fueron conversando con García Márquez y ha[...]
</p>
<p>El nobel en literatura de 1982, dijo con emoción que, tenía por publicar su trabajo: "Hoy me alegro. El libro no tiene una línea imaginaria, ni un dato que no esté comprobado hasta donde es humana[...]
Del mismo modo, el autor platicaba que sentía la necesidad de realizar un libro donde narrara un reportaje, y lo encontró en la lucha que presentaba su país Colombia con el narcotráfico: "Siempre [...]
</p>
<p>Cero ficción
La historia narra el secuestro de diez periodistas y trabajadores de la comunicación por parte del grupo de "Los Extraditables" al mando del narcotraficante Pablo Escobar. Esto, con el fin de que el [...]
Este reportaje refleja dos puntos claves: El primero, la manera en que convivían cada uno de los secuestrados y el contraste de los punto de vista es la guerra y la forma de vivir del pueblo colombia[...]
</p>
<p>Esta obra es una clase de cómo se hace un buen periodismo narrativo. La manera en que García Márquez realizó las entrevistas e hizo uso de las fuentes, habla del trabajo y el esfuerzo que colocó [...]
</p>`,
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
    body: `<p>En las últimas semanas, la crisis del combustible en el estado Lara una tomo nueva dimensión. A las colas extensas, diferentes métodos de pago y a la reducción de estaciones de servi[...]
Elio Ocanto, conductor de la aplicación Vamos, expresa su disconformidad ante esta situación. Habla de que pierde mucho tiempo en colas, de una hora hasta tres horas, disminuyendo su tiempo de traba[...]
</p>
<p>Por su parte, José Daniel Cortés, islero de la estación de servicio ubicada en la carrera 15 de Barquisimeto, expresó cómo los cortes de luz afectan al trabajo. Comenta que la estación de servic[...]
Ante esta situación, el gobernador del estado Lara Luis Reyes Reyes indicó que solo alrededor del 45% de las estaciones de servicio en Iribarren cuentan con plantas eléctricas operativas. Agrega qu[...]
</p>
<p>Sin duda esta situación afecta a la población larense y no hay una fecha estimada para que esto mejore. 
</p>`,
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

// ── DATE ─────────────────────────────────────────────────────
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

// ── CATEGORIES ───────────────────────────────────��────────────
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
