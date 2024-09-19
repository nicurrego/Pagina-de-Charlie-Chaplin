// Carrusel de imágenes
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

initializeSlider();

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 3000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
    resetInterval();
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
    resetInterval();
}

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
}

// Cambio de idioma
document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('language-switcher');
    const texts = {
        es: {
            // Textos para index.html
            introTitle: "Bienvenidos a la Tributo de Charlie Chaplin",
            introContent: "Esta página está dedicada a celebrar la vida y el legado de uno de los actores y cineastas más influyentes de la historia: Charlie Chaplin.",
            whyTitle: "¿Por qué Charlie Chaplin?",
            whyContent: "Charlie Chaplin revolucionó el cine con su personaje icónico, \"Charlot\", y su habilidad para combinar comedia y drama de una manera única. Su trabajo no solo entretuvo a millones, sino que también ofreció profundas reflexiones sobre la sociedad y la condición humana.",
            featuresTitle: "Características del Sitio",
            feature1: "Biografía Completa: Conoce los detalles de la vida de Chaplin, desde sus humildes comienzos hasta su estatus como leyenda del cine.",
            feature2: "Frases Icónicas: Explora las palabras más memorables de Chaplin que han inspirado a generaciones.",
            feature3: "Películas Destacadas: Descubre sus obras maestras y cómo impactaron el mundo del cine.",
            feature4: "Galería de Imágenes: Disfruta de una colección de fotos que capturan momentos clave de su carrera.",
            thanks: "¡Gracias por tu visita!",
            thanksContent: "¡Gracias por visitar esta página y rendir homenaje a Charlie Chaplin! Tu interés en su legado ayuda a mantener viva la memoria de su extraordinaria contribución al arte y al entretenimiento.",
            footerQuote: "\"La vida es una obra de teatro que no permite ensayos.\"",

            // Textos para peliculas.html
            introTitlePeliculas: "Las películas de Charlie Chaplin",
            introContentPeliculas: "Descubre las obras más icónicas de Chaplin, desde su debut hasta sus grandes clásicos que marcaron la historia del cine.",
            timelineTitle: "Línea Temporal de las Películas de Charlie Chaplin",
            movie1: "1914 - Making a Living: La primera película de Charlie Chaplin, donde interpreta a un estafador y periodista en busca de una oportunidad en la vida.",
            movie2: "1921 - The Kid: Una de sus películas más emblemáticas, en la que combina comedia y drama en la historia de un vagabundo que cuida a un niño huérfano.",
            movie3: "1931 - City Lights: Una película que muestra el ingenio y la humanidad del personaje de \"Charlot\", mientras se enamora de una joven ciega.",
            movie4: "1936 - Modern Times: Una sátira sobre la industrialización y el efecto de las máquinas en el hombre, donde Chaplin se enfrenta al sistema mecánico.",
            movie5: "1940 - The Great Dictator: Una de las películas más atrevidas de Chaplin, donde satiriza a Adolf Hitler y hace un llamado a la humanidad.",
            movie6: "1952 - Limelight: La historia de un comediante envejecido que encuentra consuelo ayudando a una joven bailarina deprimida.",
            movie7: "1967 - A Countess from Hong Kong: Su última película como director, protagonizada por Sophia Loren y Marlon Brando, que cuenta la historia de una condesa que huye de la ley.",

            // Textos para legacy.html
            legacyHeader: "Frases importantes de nuestro amado personaje",
            quote1: "La vida es una obra de teatro que no permite ensayos.",
            quote2: "El tiempo es el mejor autor: siempre encuentra un final perfecto.",
            quote3: "Ríe y el mundo reirá contigo, llora y el mundo, dándote la espalda, llorará contigo.",
            quote4: "El verdadero significado de las cosas se encuentra al tratar de decir las mismas cosas con otras palabras.",
            bioTitle: "Biografía de Charlie Chaplin",
            earlyYears: "Primeros años",
            charlotBirth: "El nacimiento del \"Charlot\"",
            directorConsolidation: "Consolidación como director",
            dictatorSpeech: "El discurso en \"El gran dictador\"",
            lastYears: "Últimos años y legado",
            bioText1: "Charles Spencer Chaplin, más conocido como Charlie Chaplin, nació el 16 de abril de 1889 en Londres, Inglaterra, y falleció el 25 de diciembre de 1977 en Suiza. Fue un actor, director, productor, guionista y compositor británico que se destacó en la época del cine mudo.",
            bioText2: "Chaplin creció en la pobreza extrema. Su madre, una cantante de music-hall, tuvo dificultades para mantener a su familia tras la ausencia de su esposo. Desde muy joven, Charlie mostró un talento natural para la actuación, comenzando a trabajar en teatros de variedades. A los 19 años, emigró a Estados Unidos, donde rápidamente se ganó un lugar en la industria del cine.",
            bioText3: "En 1914, Chaplin creó a su personaje más icónico, \"Charlot\" (conocido como \"The Tramp\" en inglés), un vagabundo con un corazón noble que se convirtió en símbolo del cine mudo. Este personaje se distinguía por su vestimenta: un bombín, un bastón, grandes zapatos, y su característico bigote. La popularidad de Charlot fue inmediata, y lo llevó a ser una de las figuras más queridas en todo el mundo.",
            bioText4: "Además de su carrera como actor, Chaplin fue un talentoso director. Entre sus películas más conocidas están El Chico (1921), Luces de la ciudad (1931), y Tiempos modernos (1936). Su cine abordaba temas como la pobreza, la opresión, y el deseo de libertad, utilizando el humor para criticar los problemas sociales de su época.",
            bioText5: "En 1940, Chaplin protagonizó su primera película hablada, El gran dictador, en la que satirizó a Adolf Hitler. Esta película contenía un poderoso discurso a favor de la humanidad y contra la tiranía, que se convirtió en uno de los momentos más memorables de su carrera.",
            bioText6: "Chaplin pasó sus últimos años en Suiza, donde se dedicó a su familia y a componer música. A lo largo de su vida, recibió múltiples honores, incluyendo un Oscar honorífico en 1972 por su contribución a la industria del cine. Su legado sigue siendo una influencia fundamental en la comedia y el cine, y sus películas continúan siendo admiradas por audiencias de todo el mundo.",
            bioText7: "Chaplin dejó una huella imborrable en la historia del cine, y su estilo único sigue inspirando a generaciones de cineastas. Su capacidad para combinar comedia y drama, y su habilidad para reflejar los problemas humanos a través de la pantalla, lo consolidan como uno de los grandes genios del séptimo arte.",

            // Textos para collage.html
            collageTitle: "Collage de Charlie Chaplin",
            collageContent: "Realizé un pequeño collage en homenaje al gran actor que me logró conmover con sus películas."
        },
        jp: {
            // Textos para index.html
            introTitle: "チャーリー・チャップリンへのトリビュートへようこそ",
            introContent: "このページは、歴史上最も影響力のある俳優兼映画監督の一人であるチャーリー・チャップリンの人生と遺産を祝うためのものです。",
            whyTitle: "なぜチャーリー・チャップリン？",
            whyContent: "チャーリー・チャップリンは、彼の象徴的なキャラクター「チャーリー」と、コメディとドラマを巧みに組み合わせる能力で映画を革命化しました。彼の作品は何百万人もの人々を楽しませただけでなく、社会や人間の状況について深い洞察を提供しました。",
            featuresTitle: "サイトの特徴",
            feature1: "完全な伝記: チャップリンの生涯の詳細を知り、彼がどのようにして映画界の伝説になったかを学びましょう。",
            feature2: "象徴的な名言: 何世代にもわたって人々をインスパイアし続けているチャップリンの記憶に残る言葉を探求してください。",
            feature3: "代表的な映画: 彼の傑作を発見し、映画界にどのように影響を与えたかを理解しましょう。",
            feature4: "画像ギャラリー: 彼のキャリアの重要な瞬間を捉えた写真コレクションを楽しんでください。",
            thanks: "ご訪問ありがとうございました！",
            thanksContent: "チャーリー・チャップリンを称えるこのページをご訪問いただき、ありがとうございます。彼の遺産に対するあなたの関心は、彼の素晴らしい芸術とエンターテイメントへの貢献を生かし続ける手助けになります。",
            footerQuote: "「人生はリハーサルが許されない演劇です。」",

            // Textos para peliculas.html
            introTitlePeliculas: "チャーリー・チャップリンの映画",
            introContentPeliculas: "チャップリンのデビュー作から映画の歴史を形作った彼の偉大な名作まで、彼の最も象徴的な作品を発見してください。",
            timelineTitle: "チャーリー・チャップリンの映画のタイムライン",
            movie1: "1914年 - Making a Living: チャーリー・チャップリンの最初の映画で、詐欺師とジャーナリストとして人生の機会を求める。",
            movie2: "1921年 - The Kid: 彼の最も象徴的な映画の1つで、ホームレスが孤児を育てるコメディとドラマを融合させた物語。",
            movie3: "1931年 - City Lights: コメディアン\"チャーリー\"の人間味と機知を示し、盲目の少女に恋をする物語。",
            movie4: "1936年 - Modern Times: 産業化と機械の影響を風刺する映画で、チャップリンは機械システムと対峙する。",
            movie5: "1940年 - The Great Dictator: チャップリンの最も大胆な映画の1つで、アドルフ・ヒトラーを風刺し、人類への呼びかけを行う。",
            movie6: "1952年 - Limelight: 老いたコメディアンが若いバレリーナの助けを通して慰めを見つける物語。",
            movie7: "1967年 - A Countess from Hong Kong: 彼の最後の監督作品で、ソフィア・ローレンとマーロン・ブランドが主演し、法から逃げる伯爵夫人の物語。",

            // Textos para legacy.html
            legacyHeader: "私たちの愛されるキャラクターの重要な言葉",
            quote1: "人生はリハーサルが許されない演劇です。",
            quote2: "時間は最高の著者であり、常に完璧な結末を見つけます。",
            quote3: "笑うと世界も一緒に笑い、泣くと世界は背を向け、共に泣いてくれます。",
            quote4: "物事の真の意味は、同じことを別の言葉で言おうとすることにあります。",
            bioTitle: "チャーリー・チャップリンの伝記",
            earlyYears: "初期の頃",
            charlotBirth: "「チャーリー」の誕生",
            directorConsolidation: "監督としての確立",
            dictatorSpeech: "「独裁者」の演説",
            lastYears: "晩年と遺産",
            bioText1: "チャールズ・スペンサー・チャップリン、一般的にチャーリー・チャップリンとして知られている彼は、1889年4月16日にロンドンで生まれ、1977年12月25日にスイスで亡くなりました。彼はサイレント映画時代に活躍した俳優、監督、プロデューサー、脚本家、作曲家でした。",
            bioText2: "チャップリンは極貧の中で育ちました。彼の母親はミュージックホールの歌手でしたが、夫の不在により家族を養うのに苦労しました。若い頃からチャーリーは自然な演技の才能を示し、バラエティ劇場で働き始めました。19歳でアメリカに移住し、すぐに映画業界で地位を確立しました。",
            bioText3: "1914年、チャップリンは彼の最も象徴的なキャラクター「チャーリー」（英語で「The Tramp」として知られる）を創り出しました。これは、高潔な心を持つ放浪者であり、サイレント映画の象徴となりました。このキャラクターは、山高帽、杖、大きな靴、そして特徴的な口ひげで知られていました。チャーリーの人気はすぐに広がり、世界中で愛される人物となりました。",
            bioText4: "俳優としてのキャリアに加えて、チャップリンは才能ある監督でもありました。彼の最も有名な映画には、『キッド』（1921年）、『街の灯』（1931年）、『モダン・タイムス』（1936年）があります。彼の映画は、貧困、抑圧、そして自由への欲望などのテーマを取り上げ、当時の社会問題を風刺的に批判しました。",
            bioText5: "1940年、チャップリンは初めてのトーキー映画『独裁者』に出演し、アドルフ・ヒトラーを風刺しました。この映画には、人類への賛辞と独裁に対する強いメッセージを含む演説があり、彼のキャリアの中でも最も記憶に残る瞬間の一つとなりました。",
            bioText6: "チャップリンは晩年をスイスで過ごし、家族に専念しながら音楽を作り続けました。彼は生涯を通じて数々の栄誉を受け、1972年には映画業界への貢献が評価され、名誉オスカーを授与されました。彼の遺産は、コメディと映画において重要な影響力を持ち続けており、彼の映画は今でも世界中の観客に愛されています。",
            bioText7: "チャップリンは映画史に消えない足跡を残し、彼の独特のスタイルは今でも多くの映画制作者にインスピレーションを与えています。彼はコメディとドラマを巧みに融合させ、人間の問題をスクリーンで反映させる能力で、映画界の偉大な天才の一人として確立されました。",

            // Textos para collage.html
            collageTitle: "チャーリー・チャップリンのコラージュ",
            collageContent: "彼の映画に心を動かされた偉大な俳優へのオマージュとして、私は小さなコラージュを作成しました。"
        }
    };

    const currentLang = localStorage.getItem('language') || 'es';
    if (currentLang === 'jp') {
        switcher.checked = true;
        changeLanguage(currentLang);
    }

    switcher.addEventListener('change', () => {
        const lang = switcher.checked ? 'jp' : 'es';
        changeLanguage(lang);
        localStorage.setItem('language', lang);
    });

    function changeLanguage(lang) {
        // Cambios en index.html
        if (document.querySelector('.introduccion')) {
            document.querySelector('.introduccion h2').textContent = texts[lang].introTitle;
            document.querySelector('.introduccion p').textContent = texts[lang].introContent;
            document.querySelector('.why h3').textContent = texts[lang].whyTitle;
            document.querySelector('.why p').textContent = texts[lang].whyContent;
            document.querySelector('.features h3').textContent = texts[lang].featuresTitle;
            document.querySelector('.features li:nth-child(1)').textContent = texts[lang].feature1;
            document.querySelector('.features li:nth-child(2)').textContent = texts[lang].feature2;
            document.querySelector('.features li:nth-child(3)').textContent = texts[lang].feature3;
            document.querySelector('.features li:nth-child(4)').textContent = texts[lang].feature4;
            document.querySelector('.agradecimiento h3').textContent = texts[lang].thanks;
            document.querySelector('.agradecimiento p').textContent = texts[lang].thanksContent;
            document.querySelector('.footer-info p:last-child').textContent = texts[lang].footerQuote;
        }

        // Cambios en peliculas.html
        if (document.querySelector('.timeline')) {
            document.querySelector('.intro h2').textContent = texts[lang].introTitlePeliculas;
            document.querySelector('.intro p').textContent = texts[lang].introContentPeliculas;
            document.querySelector('.timeline h2').textContent = texts[lang].timelineTitle;
            document.querySelectorAll('.timeline-item h3')[0].textContent = texts[lang].movie1;
            document.querySelectorAll('.timeline-item h3')[1].textContent = texts[lang].movie2;
            document.querySelectorAll('.timeline-item h3')[2].textContent = texts[lang].movie3;
            document.querySelectorAll('.timeline-item h3')[3].textContent = texts[lang].movie4;
            document.querySelectorAll('.timeline-item h3')[4].textContent = texts[lang].movie5;
            document.querySelectorAll('.timeline-item h3')[5].textContent = texts[lang].movie6;
            document.querySelectorAll('.timeline-item h3')[6].textContent = texts[lang].movie7;
        }

        // Cambios en legacy.html
        if (document.querySelector('.tarjetas')) {
            document.querySelector('h2').textContent = texts[lang].legacyHeader;
            document.querySelector('.tarjeta:nth-child(1)').setAttribute('data-reverso', texts[lang].quote1);
            document.querySelector('.tarjeta:nth-child(2)').setAttribute('data-reverso', texts[lang].quote2);
            document.querySelector('.tarjeta:nth-child(3)').setAttribute('data-reverso', texts[lang].quote3);
            document.querySelector('.tarjeta:nth-child(4)').setAttribute('data-reverso', texts[lang].quote4);
            document.querySelector('.biografia h1').textContent = texts[lang].bioTitle;
            document.querySelector('.biografia h2:nth-child(2)').textContent = texts[lang].earlyYears;
            document.querySelector('.biografia h2:nth-child(4)').textContent = texts[lang].charlotBirth;
            document.querySelector('.biografia h2:nth-child(6)').textContent = texts[lang].directorConsolidation;
            document.querySelector('.biografia h2:nth-child(8)').textContent = texts[lang].dictatorSpeech;
            document.querySelector('.biografia h2:nth-child(10)').textContent = texts[lang].lastYears;
            document.querySelectorAll('.biografia p')[0].textContent = texts[lang].bioText1;
            document.querySelectorAll('.biografia p')[1].textContent = texts[lang].bioText2;
            document.querySelectorAll('.biografia p')[2].textContent = texts[lang].bioText3;
            document.querySelectorAll('.biografia p')[3].textContent = texts[lang].bioText4;
            document.querySelectorAll('.biografia p')[4].textContent = texts[lang].bioText5;
            document.querySelectorAll('.biografia p')[5].textContent = texts[lang].bioText6;
            document.querySelectorAll('.biografia p')[6].textContent = texts[lang].bioText7;
        }

        // Cambios en collage.html
        if (document.querySelector('.collage')) {
            document.querySelector('.intro h2').textContent = texts[lang].collageTitle;
            document.querySelector('.intro p').textContent = texts[lang].collageContent;
        }
    }
});
