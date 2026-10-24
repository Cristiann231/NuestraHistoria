
const CONFIG = {
    recuerdos: [
        {
            foto: 'fotos/foto1.jpeg',
            titulo: 'Un comienzo inesperado ♡',
            texto: 'La primera vez que nos conocimos fue algo raro, bonito y especial. Aunque fue algo inesperado, terminó siendo una de las mejores cosas que me han pasado en la vida. Y si pudiera volver a vivir ese momento, no cambiaría absolutamente nada, porque ahí comenzó nuestra hermosa historia.'
        },
        {
            foto: 'fotos/foto2.jpeg',
            titulo: 'La primera foto ♡',
            texto: 'Esta es nuestra primera foto, donde prácticamente comenzó todo. Con ella empezó la historia que nos convirtió en lo que somos hoy, todos los momentos que vivimos y cada recuerdo que construimos juntos. Y si algo tengo claro, es que no me arrepiento de ni un solo día a tu lado.'
        },
        {
            foto: 'fotos/foto3.jpeg',
            titulo: 'Un recuerdo ♡',
            texto: 'Aún recuerdo esta foto, cuando apenas estábamos empezando nuestra historia, cuando me faltaba el aire al besarte y sentía esas mariposas en el estómago cada vez que estaba contigo. Son sensaciones que jamás voy a olvidar, porque cada momento a tu lado se sentía único y especial.'
        },
        {
            foto: 'fotos/foto4.jpeg',
            titulo: 'Nuestra primera locura ♡',
            texto: 'Aún recuerdo ese día, esos nervios y ese miedo de pensar qué hubiera pasado si nos pillaban. Pero al final, solo éramos dos loquitos enamorados disfrutando de un momento juntos. Es uno de esos recuerdos que me encanta repetir en mi cabeza una y otra vez, porque, a pesar de todo, no cambiaría nada de aquel día.'
        },
        {
            foto: 'fotos/foto5.jpeg',
            titulo: 'El mejor día junto a ti ♡',
            texto: 'Lo más bonito de ese día fue compartirlo contigo, con mi mami y mi hermana. Me encantó cuando vimos la peli juntos y después simplemente nos echamos en la cama, disfrutando de estar ahí, uno al lado del otro. Sinceramente, no cambiaría ni un solo momento de los que he vivido contigo, porque hasta las cosas más simples se vuelven especiales cuando estoy a tu lado'
        },
        {
            foto: 'fotos/foto6.jpeg',
            titulo: 'Todas las risas que me sacas ♡',
            texto: 'Sinceramente, cada risa y cada momento contigo es especial. Me encanta cómo logras convertir hasta los momentos más simples en recuerdos hermosos. Pero lo que más amo es que, incluso cuando estoy mal y siento que nada va bien, siempre encuentras la manera de sacarme una sonrisa. A veces no necesitas hacer nada, simplemente ser tú es suficiente para alegrarme el día. '
        },
        {
            foto: 'fotos/foto7.jpeg',
            titulo: 'Un pequeño momento contigo siempre es el mejor ♡',
            texto: 'Cada momento contigo, por más sencillo o pequeño que sea, se convierte en uno de mis favoritos. No importa si estamos juntos todo el día o solamente cinco minutos, porque tienes esa forma tan bonita de hacer que el tiempo a tu lado sea especial. Me encanta cómo podemos convertir cinco simples minutos en los mejores cinco minutos del mundo.'
        },
        {
            foto: 'fotos/foto8.jpeg',
            titulo: ' Y esto solo es el inicio ♡',
            texto: 'Aunque hasta ahora hemos pasado por muchas cosas juntos, tanto buenas como malas, siento que esto apenas comienza. Es el inicio de algo que espero que nunca termine. Solo le pido a Dios y al universo que me permitan seguir a tu lado, porque sé que mi amor por ti no tendrá un final. Y espero de corazón que nuestra historia tampoco lo tenga, que algún día podamos sentarnos juntos a contarles a nuestros nietos todas las aventuras, locuras y momentos hermosos que vivieron sus abuelos. '
        }
    ],

    galeria: [
        ...Array.from({ length: 75 }, (_, i) => ({
            tipo: 'foto',
            archivo: `recuerdos/recuerdo (${i + 1}).jpeg`,
            titulo: `Nuestro recuerdo ${i + 1} ♡`
        })),

        ...Array.from({ length: 14 }, (_, i) => ({
            tipo: 'video',
            archivo: `videos/video (${i + 1}).mp4`,
            titulo: `Nuestro video ${i + 1} ♡`
        }))
    ],

    carta: `Para, el amor de mi vida♡

Hay tantas cosas que quisiera decirte y agradecerte que sinceramente no sé por dónde empezar. A veces me pongo a pensar en cómo era mi vida antes de conocerte, en la persona que era y en todo lo que ha cambiado desde que llegaste. Y me doy cuenta de que no solamente llegaste para regalarme momentos bonitos, sino que también me ayudaste a crecer de una manera que jamás imaginé.

Antes de conocerte, yo era una persona muy impulsiva. Muchas veces hacía las cosas sin pensar, decía palabras sin medir cuánto podían afectar a los demás y ni siquiera sabía cómo expresar correctamente lo que sentía. Había tantas emociones dentro de mí que a veces ni yo mismo lograba entenderlas. Pero llegaste tú y, con tu paciencia, tu cariño y tu manera tan bonita de ser, me ayudaste a comprender muchas cosas.

Y aunque todavía tengo muchísimo que aprender y mejorar, quiero que sepas que una gran parte de las ganas que tengo de seguir creciendo nació de todo lo que he vivido contigo.

Hay algo que nunca voy a olvidar, mi amor: tú me quisiste incluso cuando ni yo mismo sabía cómo quererme.

Me aceptaste con mis rarezas, mis complicaciones, mis días buenos y también con esos días en los que ni yo mismo sabía qué me pasaba. Y aun así, encontrabas la manera de hacerme sentir querido, importante y especial.

Recuerdo todas esas veces en las que me sentía mal y tú intentabas sacarme una sonrisa, incluso cuando parecía imposible. A veces bastaba con uno de tus pequeños detalles, unas palabras bonitas o simplemente con saber que estabas ahí para que mi día cambiara por completo.

Quizá para ti algunos de esos detalles parecían pequeños, pero para mí significaban muchísimo. Porque nunca se trató de lo grande que fuera lo que hacías, sino del amor que había detrás de cada gesto.

También quiero decirte cuánto te admiro. Admiro esa fuerza de voluntad que tienes, esa manera de seguir adelante incluso cuando las cosas se ponen difíciles. Admiro cómo intentas encontrar algo positivo en medio de los problemas y, sobre todo, admiro la paciencia tan grande que tienes.

No sabes cuánto he aprendido simplemente observando tu manera de enfrentar la vida. Me has enseñado que no siempre debemos reaccionar impulsivamente, que hay cosas que necesitan calma, comprensión y tiempo. Y aunque a veces todavía me equivoco, quiero seguir aprendiendo.

Gracias por haber sido uno de mis pilares cuando más lo necesitaba. Gracias por acompañarme en momentos que no fueron fáciles, por escucharme, por entenderme y por recordarme, de tantas maneras diferentes, que todavía había cosas bonitas por vivir.

Y quiero agradecerte especialmente por algo que quizá no te digo lo suficiente: gracias por tenerme paciencia.

Sé que a veces puedo ser complicado. Sé que tengo mis momentos raros, mis dificultades para expresarme y mis errores. Pero tú has intentado entenderme incluso en esas ocasiones en las que ni yo mismo sabía explicar lo que sentía.

Quiero que sepas que me doy cuenta de todo lo que haces por mí. Me doy cuenta de tus esfuerzos, de tus detalles, de tu cariño y de esas pequeñas cosas que quizá piensas que pasan desapercibidas.

Créeme, mi amor, no pasan desapercibidas.

Las guardo en mi corazón, porque cada una me recuerda lo afortunado que soy de compartir mi vida contigo.

A veces siento que no me alcanzan las palabras para agradecerte todo lo que has hecho por mí. Y aunque sé que ninguna carta podría expresar completamente lo que siento, quiero intentarlo.

Gracias por ayudarme a crecer. Gracias por hacerme reír cuando más lo necesitaba. Gracias por enseñarme tantas cosas sin siquiera darte cuenta. Gracias por demostrarme que el amor también está en la paciencia, en la comprensión y en los pequeños detalles de cada día.

Pero, sobre todo, gracias por ser tú, mi niña.

No quiero que sientas que tienes que resolver todos mis problemas ni cargar con mis dificultades. Quiero seguir aprendiendo a ser mejor por mí mismo, y también cuidar de ti, escucharte y acompañarte como tú lo has hecho conmigo.

Porque nuestro amor no se trata solamente de todo lo que tú has hecho por mí, sino también de todo lo bonito que quiero construir contigo.

Quiero seguir creciendo a tu lado, seguir aprendiendo de nuestros errores, seguir celebrando nuestros logros y demostrarte con mis acciones cuánto valoro tenerte en mi vida.

Y si algún día te preguntas si todos esos pequeños detalles, todas esas sonrisas y toda esa paciencia han significado algo para mí, quiero que recuerdes esto:

No solamente hiciste más bonitos mis días. También me ayudaste a descubrir que podía cambiar, aprender, crecer y convertirme en una mejor persona.

Te amo muchísimo, mi niña. Y aunque nunca encuentre las palabras suficientes para agradecerte todo, espero poder demostrártelo cada día con mi cariño, mi respeto y mis acciones.

Gracias por llegar a mi vida, por quedarte y por formar parte de la persona que soy hoy.

Con todo mi amor, para ti. ♡
`,

   final: `No quiero que esta historia termine ♡

Mi niña, si llegaste hasta aquí, quiero que sepas que cada foto, cada video y cada palabra que viste fueron hechos con todo el amor que siento por ti.

A veces me pongo a pensar en lo curioso que es el destino. Quién diría que aquel encuentro tan raro e inesperado terminaría convirtiéndose en una de las cosas más bonitas de mi vida.

Hemos vivido cosas hermosas, pero también hemos tenido días difíciles. No todo ha sido perfecto, y sé que todavía nos quedan muchas cosas por aprender. Pero hay algo de lo que estoy seguro: si pudiera regresar al día en que te conocí, volvería a elegir vivir esta historia contigo.

Porque contigo aprendí que la felicidad no siempre está en los grandes momentos. A veces está en cinco minutos juntos, en una risa inesperada, en una película, en uno de tus pequeños detalles o simplemente en estar a tu lado sin necesidad de hacer nada más.

No sé exactamente qué nos espera mañana, pero quiero seguir esforzándome por cuidar lo nuestro, por escucharte, comprenderte y demostrarte cuánto te amo.

Quiero seguir viviendo primeras veces contigo. Quiero que tengamos nuevas aventuras, nuevas fotografías, nuevas locuras y miles de razones para reírnos juntos.

Y uno de mis sueños más bonitos es que, cuando seamos viejitos, podamos sentarnos juntos y contarles a nuestros nietos cómo comenzó todo. Contarles que sus abuelos también fueron dos loquitos enamorados y que siempre intentaron cuidar su amor.

Solo le pido a Dios y al universo que nos regalen muchísimos momentos más para seguir escribiendo esta historia.

No quiero que nuestra historia tenga un último capítulo. Quiero que sigamos escribiéndola juntos, día tras día, recuerdo tras recuerdo.

Porque si algo tengo claro, es que mi parte favorita de nuestra historia no es solamente todo lo que ya vivimos, sino todo lo que todavía sueño vivir contigo.

Te amo muchísimo, mi niña.

Y esto no es el final de nuestra historia…

Esto apenas comienza. ♡`,

firma: 'Con cariño, para el amor de mi vida ♡'
};

const $ = id => document.getElementById(id);

const sections = [
    'welcome',
    'story',
    'menu',
    'memories',
    'growth',
    'ending'
];

let current = 0;
let musicWasPlaying = false;

function show(id) {
    sections.forEach(name => {
        $(name).hidden = name !== id;
    });

    window.scrollTo(0, 0);
}

for (let i = 0; i < 65; i++) {
    const star = document.createElement('span');

    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 4 + 's';
    star.style.animationDuration = 2 + Math.random() * 3 + 's';

    $('stars').appendChild(star);
}

function renderStory() {
    const item = CONFIG.recuerdos[current];

    $('storyPhoto').src = item.foto;
    $('storyPhoto').alt = item.titulo;
    $('storyTitle').textContent = item.titulo;

    const preview = item.texto.slice(0, 75);
    const hasMore = item.texto.length > 75;

    $('storyText').textContent = hasMore
        ? preview.trimEnd() + '...'
        : item.texto;

    $('readMore').hidden = !hasMore;
    $('readMore').textContent = 'Leer más ♡';

    $('counter').textContent =
    `RECUERDO ${String(current + 1).padStart(2, '0')} / ${String(CONFIG.recuerdos.length).padStart(2, '0')}`;

    $('previous').disabled = current === 0;

    $('next').textContent = current === CONFIG.recuerdos.length - 1
        ? 'Continuar ♡'
        : 'Siguiente →';

    $('dots').replaceChildren(
        ...CONFIG.recuerdos.map((_, i) => {
            const dot = document.createElement('span');

            dot.className = 'dot' + (i === current ? ' current' : '');

            return dot;
        })
    );

    $('storyPhoto').classList.remove('photo-enter');
    void $('storyPhoto').offsetWidth;
    $('storyPhoto').classList.add('photo-enter');
}

$('readMore').addEventListener('click', () => {
    const item = CONFIG.recuerdos[current];
    const expanded = $('readMore').textContent === 'Leer menos ♡';

    if (expanded) {
        $('storyText').textContent =
            item.texto.slice(0, 75).trimEnd() + '...';

        $('readMore').textContent = 'Leer más ♡';
    } else {
        $('storyText').textContent = item.texto;
        $('readMore').textContent = 'Leer menos ♡';
    }
});

$('start').addEventListener('click', async () => {
    current = 0;

    renderStory();
    show('story');

    const music = $('music');

    try {
        await music.play();
        $('musicLabel').textContent = 'Pausar música';
    } catch {
        $('musicLabel').textContent = 'Activar música';
    }
});

$('next').addEventListener('click', () => {
    if (current < CONFIG.recuerdos.length - 1) {
        current++;
        renderStory();
    } else {
        show('menu');
    }
});

$('previous').addEventListener('click', () => {
    if (current > 0) {
        current--;
        renderStory();
    }
});

let touchX = null;

$('storyImage').addEventListener('touchstart', e => {
    touchX = e.changedTouches[0].screenX;
}, { passive: true });

$('storyImage').addEventListener('touchend', e => {
    if (touchX === null) return;

    const diff = e.changedTouches[0].screenX - touchX;

    if (diff < -55) $('next').click();
    if (diff > 55) $('previous').click();

    touchX = null;
}, { passive: true });

function openMemory(item) {
    const media = document.createElement(
        item.tipo === 'video' ? 'video' : 'img'
    );

    media.src = item.archivo;

    if (item.tipo === 'video') {
        const music = $('music');

        musicWasPlaying = !music.paused;

        if (musicWasPlaying) {
            music.pause();
            $('musicLabel').textContent = 'Activar música';
        }

        media.controls = true;
        media.playsInline = true;
        media.autoplay = false;
    } else {
        media.alt = item.titulo;
    }

    $('lightboxContent').replaceChildren(media);
    $('lightbox').hidden = false;
}

function closeMemory() {
    $('lightbox').hidden = true;
    $('lightboxContent').replaceChildren();

    if (musicWasPlaying) {
        $('music').play().then(() => {
            $('musicLabel').textContent = 'Pausar música';
        }).catch(() => {
            $('musicLabel').textContent = 'Activar música';
        });

        musicWasPlaying = false;
    }
}

$('closeLightbox').addEventListener('click', closeMemory);

$('lightbox').addEventListener('click', e => {
    if (e.target === $('lightbox')) {
        closeMemory();
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('lightbox').hidden) {
        closeMemory();
    }
});

function renderGallery() {
    const grid = $('memoryGrid');

    grid.replaceChildren();

    CONFIG.galeria.forEach(item => {
        const button = document.createElement('button');
        button.className = 'memory-item';

        const wrap = document.createElement('div');
        wrap.className = 'video-mark';

        const image = document.createElement(
            item.tipo === 'video' ? 'video' : 'img'
        );

        image.src = item.archivo;

        if (item.tipo === 'video') {
            image.preload = 'metadata';
            image.muted = true;
            image.playsInline = true;
        } else {
            image.alt = item.titulo;
            image.loading = 'lazy';
        }

        wrap.appendChild(image);

        if (item.tipo === 'video') {
            const play = document.createElement('span');

            play.className = 'play-symbol';
            play.textContent = '▶';

            wrap.appendChild(play);
        }

        const title = document.createElement('span');
        title.className = 'memory-title';
        title.textContent = item.titulo;

        button.append(wrap, title);

        button.addEventListener('click', () => {
            openMemory(item);
        });

        grid.appendChild(button);
    });
}

$('growthLetter').textContent = CONFIG.carta;
$('endingText').textContent = CONFIG.final;
$('signature').textContent = CONFIG.firma;

renderGallery();

document.querySelectorAll('[data-open]').forEach(button => {
    button.addEventListener('click', () => {
        show(button.dataset.open);
    });
});

document.querySelectorAll('[data-back]').forEach(button => {
    button.addEventListener('click', () => {
        show('menu');
    });
});

const music = $('music');

$('musicButton').addEventListener('click', async () => {
    if (music.paused) {
        try {
            await music.play();
            $('musicLabel').textContent = 'Pausar música';
        } catch {
            $('musicLabel').textContent = 'Sin canción disponible';
        }
    } else {
        music.pause();
        $('musicLabel').textContent = 'Activar música';
    }
});
