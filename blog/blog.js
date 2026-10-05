// ===== I MARIO BLOG — MOTORE DATI (LOCALSTORAGE) =====
// Blog per tutti i Mario del mondo!

// --- UTENTI DEFAULT ---
var defaultUsers = [
    {
        id: 1,
        name: "Maria Giuliacci",
        username: "mario_r",
        password: "mario1234",
        bio: "17 anni, Milano. Appassionato di PC, internet, calcio e musica metal. Il mio P4 è il mio migliore amico!",
        avatar: "😎",
        joinDate: "15 Marzo 2003"
    },
    {
        id: 2,
        name: "Mario Balotelli",
        username: "supermario9",
        password: "balotelli",
        bio: "Calciatore professionista. Amo il calcio, la vita e le sfide. Why always me? 🙄",
        avatar: "⚽",
        joinDate: "10 Gennaio 2004"
    },
    {
        id: 3,
        name: "Mario Bros",
        username: "mario_bros",
        password: "mushroom",
        bio: "Idraulico professionista di Mushroom Kingdom. Sconfiggo Bowser nel tempo libero. It's-a me, Mario!",
        avatar: "🍄",
        joinDate: "1 Luglio 1985"
    }
];

// --- POST DEFAULT ---
var defaultPosts = [
    {
        id: 1,
        date: "Venerdì 28 Settembre 2003, ore 23:47",
        title: "Ho finalmente comprato il nuovo PC!!! 🖥️",
        category: "Tecnologia",
        stars: "★★★★★",
        excerpt: "Dopo mesi di risparmi ho preso un Pentium 4 da 2.4 GHz con 512 MB di RAM e 80 GB di disco!! Windows XP è una figata pazzesca, le finestre trasparenti, il tema Luna... mio padre non capiva perché fosse necessario ma alla fine era curioso anche lui.",
        content: `<p><strong>FINALMENTE!!!</strong> Dopo quasi sei mesi di risparmi tra mancia della nonna, soldi del compleanno e qualche lavoretto, sono riuscito a comprare il nuovo computer!! Ieri io e mio padre siamo andati all'<strong>Unieuro di Sesto</strong> e l'abbiamo preso! 🎉</p>
            <blockquote>
                💻 <strong>Processore:</strong> Intel Pentium 4 a 2.4 GHz<br>
                🧠 <strong>RAM:</strong> 512 MB DDR<br>
                💾 <strong>Hard Disk:</strong> 80 GB Western Digital 7200 rpm<br>
                🎮 <strong>Scheda video:</strong> GeForce4 Ti 4200 64 MB<br>
                🪟 <strong>OS:</strong> Windows XP Home Edition SP1
            </blockquote>
            <p><strong>Windows XP</strong> è una FIGATA rispetto a Windows 98. Tutto colorato, non si blocca ogni cinque minuti!! Con la <strong>ADSL a 640 kbps</strong> Counter-Strike gira senza lag! Ping sotto i 50ms! 😱</p>
            <p>LAN party a casa mia appena possibile. Chi vuole venire scriva nei commenti!</p>`,
        author: "Maria Giuliacci",
        username: "mario_r",
        views: 247,
        tags: ["pc", "tecnologia", "windowsxp", "gaming"]
    },
    {
        id: 2,
        date: "Martedì 23 Settembre 2003, ore 18:22",
        title: "Gita scolastica a Venezia — le mie foto con la digicam!",
        category: "Vita Mia",
        stars: "★★★★☆",
        excerpt: "Siamo andati in gita a Venezia con la classe! Ho portato la macchina fotografica digitale di mio zio (2 megapixel!) e ho fatto tipo 50 foto. Alcune sfocate, ma quelle del Canal Grande sono bellissime. Luca ha quasi perso il portafoglio sul vaporetto lol 😂",
        content: `<p>Ieri siamo andati in gita a Venezia con la classe! Sveglia alle 5:30, ritrovo a scuola e via in pullman.</p>
            <p>Ho portato la macchina fotografica digitale di mio zio (2 megapixel!! Ha pure lo schermino LCD!) e ho fatto tipo 50 foto. La memoria è da 16MB quindi ho dovuto cancellarne alcune a metà giornata.</p>
            <p>Venezia è bellissima ma c'era una puzza di pesce assurda vicino al ponte di Rialto. Luca ha quasi fatto cadere il portafoglio in acqua dal vaporetto... 😂</p>
            <p>Appena capisco come funziona il cavo USB scarico le foto sul PC e le metto online!</p>`,
        author: "Maria Giuliacci",
        username: "mario_r",
        views: 189,
        tags: ["scuola", "venezia", "fotografia", "amici"]
    },
    {
        id: 3,
        date: "Domenica 14 Settembre 2003, ore 21:05",
        title: "Matrix Reloaded — finalmente l'ho visto al cinema!!",
        category: "Cinema & TV",
        stars: "★★★★★",
        excerpt: "SPOILER ALERT! Sono andato al cinema con Gianni e Marco. Ragazzi che film assurdo!!! La scena dell'autostrada è la cosa più epica mai girata. Neo che vola, Trinity con la moto... il mio film dell'anno!",
        content: `<p><strong>SPOILER ALERT!!!</strong></p>
            <p>Ieri sera io, Gianni e Marco siamo andati all'Arcadia di Melzo a vedere <strong>Matrix Reloaded</strong>.</p>
            <p>Che film ALLUCINANTE! La scena dell'autostrada credo sia la cosa più epica mai girata. Trinity che sfreccia contromano sulla moto... mamma mia!</p>
            <p>E quando Neo combatte contro mille agenti Smith? L'effetto è pazzesco. Ne abbiamo parlato per un'ora fuori dal cinema mangiando la pizza.</p>
            <p>A voi è piaciuto? Io domani vado in edicola a cercare il poster!</p>`,
        author: "Maria Giuliacci",
        username: "mario_r",
        views: 412,
        tags: ["cinema", "matrix", "recensioni"]
    },
    {
        id: 4,
        date: "Mercoledì 15 Gennaio 2004, ore 22:10",
        title: "Ho segnato una tripletta contro la Juve!!! ⚽⚽⚽",
        category: "Sport",
        stars: "★★★★★",
        excerpt: "Ragazzi oggi è stata la giornata più bella della mia vita calcistica. Tre gol alla Juventus. TRE. Chapeau a me stesso. Why always me? Perché SONO FORTE ecco perché!! 💪",
        content: `<p>TRE GOOOOL!!! Uno, due, tre. Tripletta. Contro la Juventus. Nella partita più importante della stagione.</p>
            <p>Il primo: tiro al volo di destro, angolo alto. Portiere immobile.</p>
            <p>Il secondo: dribbling su tre difensori, tiro rasoterra. Imprendibile.</p>
            <p>Il terzo: rovesciata. SÌ. ROVESCIATA. In diretta nazionale.</p>
            <p>Dopo la partita i giornalisti mi hanno chiesto come mi sento. Ho risposto: <em>"Why always me?"</em> Perché me lo chiedono sempre? Forse perché sono sempre io quello che fa le cose più belle? 😄</p>
            <p>Dedico questi tre gol a mia madre e a tutti quelli che non credevano in me. Ciao.</p>`,
        author: "Mario Balotelli",
        username: "supermario9",
        views: 1337,
        tags: ["calcio", "gol", "juventus", "tripletta"]
    },
    {
        id: 5,
        date: "Venerdì 20 Febbraio 2004, ore 19:30",
        title: "Vita da calciatore: allenamento, sacrifici e... why always me?",
        category: "Vita Mia",
        stars: "★★★★☆",
        excerpt: "Vi racconto com'è davvero la vita di un calciatore professionista. Sveglia alle 6, allenamento, tattica, fisioterapia... e poi c'è chi dice che siamo viziati. Provate voi ad allenarvi con 38 di febbre.",
        content: `<p>La gente pensa che fare il calciatore sia tutto champagne e ville. Non è così. O meglio, un po' sì, ma c'è anche il resto.</p>
            <p><strong>Una mia giornata tipo:</strong></p>
            <ul>
                <li>06:00 — Sveglia (non ho scelto io quest'ora)</li>
                <li>06:30 — Colazione con lo nutrizionista (addio pizza e Nutella)</li>
                <li>08:00 — Allenamento tecnico</li>
                <li>10:00 — Tattica con il mister (noiosissimo)</li>
                <li>12:00 — Fisioterapia, massaggi, ghiaccio su tutto</li>
                <li>14:00 — Pranzo (pasta in bianco, sempre pasta in bianco)</li>
                <li>15:30 — Allenamento pomeridiano</li>
                <li>18:00 — Doccia e finalmente libero</li>
            </ul>
            <p>E poi c'è la pressione. Ogni domenica milioni di persone ti guardano. Se sbagli un rigore finisci su tutti i giornali. Se fai gol... beh, lo sanno tutti.</p>
            <p>Why always me? Perché sono speciale. Fine. 😎</p>`,
        author: "Mario Balotelli",
        username: "supermario9",
        views: 892,
        tags: ["calcio", "vita", "allenamento", "calciatore"]
    },
    {
        id: 6,
        date: "Giovedì 8 Luglio 1999, ore 14:22",
        title: "Come sconfiggere Bowser al primo tentativo (GUIDA DEFINITIVA) 🍄",
        category: "Tecnologia",
        stars: "★★★★★",
        excerpt: "Dopo anni di esperienza sul campo (letteralmente, il campo di battaglia di Bowser), ho deciso di condividere i miei segreti. Questa guida vi salverà la vita. O almeno vi farà risparmiare 20 vite extra.",
        content: `<p>It's-a me, Mario! Finalmente ho deciso di mettere per iscritto quello che ho imparato in anni di battaglie contro Bowser. Leggete attentamente.</p>
            <p><strong>Fase 1: Preparazione</strong></p>
            <ul>
                <li>🍄 Raccogliete almeno 3 funghi prima di entrare nel castello</li>
                <li>⭐ Una stella di invincibilità è sempre utile in caso di emergenza</li>
                <li>🌿 Il fuoco funziona su QUASI tutto. Su Bowser no. Non so perché.</li>
            </ul>
            <p><strong>Fase 2: Il castello</strong></p>
            <p>Il castello di Bowser è pieno di trappole. Regola numero uno: non fatevi prendere dal panico. Regola numero due: saltate TUTTO. In caso di dubbio, saltate.</p>
            <p><strong>Fase 3: Bowser finale</strong></p>
            <p>Bowser lancia martelli e sputa fuoco. La soluzione è semplice: saltategli sulla testa. Tre volte. Poi scappa con la Principessa e tutto ricomincia da capo. 🤷</p>
            <blockquote>Consiglio pro: se vedete un fungo gigante, prendetelo. Non chiedetevi come sia finito lì. Prendetelo e basta.</blockquote>`,
        author: "Mario Bros",
        username: "mario_bros",
        views: 5000,
        tags: ["bowser", "guida", "mushroom-kingdom", "gaming"]
    },
    {
        id: 7,
        date: "Lunedì 12 Aprile 1999, ore 09:00",
        title: "Recensione: funghi magici e stelle di invincibilità ⭐",
        category: "Cinema & TV",
        stars: "★★★★★",
        excerpt: "Ho provato praticamente tutto ciò che Mushroom Kingdom ha da offrire. Oggi vi parlo dei due prodotti più iconici: il fungo che ti fa crescere e la stella che ti rende invincibile. Spoiler: entrambi cambiano la vita.",
        content: `<p>Buongiorno a tutti! Oggi recensisco i due oggetti più importanti della mia vita professionale di idraulico-eroe.</p>
            <h3 style="color:#CC0000;">🍄 Il Fungo Super</h3>
            <p><strong>Voto: 9/10</strong></p>
            <p>Semplice, efficace, senza controindicazioni (a parte diventare il doppio e non passare più dalle porte piccole). Ti fa crescere istantaneamente, raddoppia la tua resistenza ai danni, e ha un sapore... non lo so, non l'ho mai mangiato davvero. Compare e sparisce. Misterioso.</p>
            <p><em>Contro:</em> se prendi un colpo torni piccolo. Psicologicamente devastante dopo anni di esperienza.</p>
            <hr>
            <h3 style="color:#FFB800;">⭐ La Stella di Invincibilità</h3>
            <p><strong>Voto: 12/10</strong></p>
            <p>LA STELLA. Prenderla è l'esperienza più pura che esista. Musica che cambia, lampi di colore, tutto ciò che tocchi esplode. Ti senti onnipotente per circa 15 secondi. Poi finisce e torni normale. La dipendenza è reale.</p>
            <p><em>Contro:</em> dura troppo poco. Sempre.</p>
            <p>Conclusione: se trovate questi oggetti per strada, prendeteli. Non fate domande. Prendeteli.</p>`,
        author: "Mario Bros",
        username: "mario_bros",
        views: 4200,
        tags: ["funghi", "stelle", "mushroom-kingdom", "recensioni"]
    },
    {
        id: 8,
        date: "Giovedì 04 Settembre 2003, ore 16:33",
        title: "Fine estate 😢 — inizia la scuola domani...",
        category: "Pensieri",
        stars: "★★★☆☆",
        excerpt: "Domani ricomincia la scuola e io sono ancora in modalità vacanza. Quest'estate è volata. Almeno mi sono scaricato i nuovi mp3 di Evanescence per consolarmi.",
        content: `<p>L'estate è ufficialmente finita 😔</p>
            <p>Domani suona la prima campanella dell'anno e io mentalmente sono ancora seduto sullo sdraio a Riccione.</p>
            <p>Cosa mi mancherà di più: svegliarmi a mezzogiorno, le partite a calcetto, le serate in piazza, il mare.</p>
            <p>Oggi pomeriggio lo passo sistemando lo zaino dell'Invicta e ascoltando i nuovi MP3 degli Evanescence che ho lasciato scaricare stanotte. "Fallen" è un album pazzesco.</p>
            <p>A tutti quelli che domani tornano in classe: fatevi forza!</p>`,
        author: "Maria Giuliacci",
        username: "mario_r",
        views: 156,
        tags: ["scuola", "estate", "musica"]
    }
];

var defaultComments = [
    { postId: 1, author: "Gianni_Rock", username: null, date: "28 Set 2003, 23:58", content: "NOOOOO sei un pazzo mario!!! io ho ancora il Pentium III da 800mhz mi fai schifo lmao 😭 però alla fine magari vengo alla LAN, dimmi quando!" },
    { postId: 1, author: "Stefy⭐", username: null, date: "29 Set 2003, 00:12", content: "ahhhhh finalmente!! ora puoi mandarmi le foto con webcam su msn!! bella la geforce4, mio fratello ce l'ha uguale 😊" },
    { postId: 4, author: "Tifoso_Inter", username: null, date: "16 Gen 2004, 08:00", content: "FORZA INTER!!! comunque complimenti per i gol, ma non dirlo troppo in giro che ti odiano già abbastanza lol" },
    { postId: 4, author: "Fanpage_Mario9", username: null, date: "16 Gen 2004, 09:30", content: "SUPER MARIO!!! sei il più forte!!! why always you? PERCHÉ SEI UN FENOMENO!!!" },
    { postId: 6, author: "Luigi_Bros", username: null, date: "8 Lug 1999, 15:00", content: "Mario... avresti potuto dirmelo prima di quella roba dei tre salti sulla testa. Ho perso 50 vite." },
    { postId: 6, author: "Princess_Peach", username: null, date: "8 Lug 1999, 16:45", content: "Grazie Mario 💖 ogni volta mi salvi e ogni volta Bowser mi riprende. Dobbiamo parlare di sicurezza del castello." }
];

var defaultGuestbook = [
    { author: "Gianni_98", date: "12 Set 2003", content: "Sito figherrimo!! aggiungo ai preferiti subito" },
    { author: "Stefy_Cool", date: "14 Set 2003", content: "bel blog mario continua cosi!!! ti metto nei link 😊" },
    { author: "Luigi_Verde", date: "10 Lug 1999", content: "Finalmente mio fratello ha un blog! It's-a me, Luigi!" }
];

// --- INIZIALIZZAZIONE DATABASE ---
function initDatabase() {
    if (!localStorage.getItem("blog_initialized_v2")) {
        localStorage.setItem("blog_users", JSON.stringify(defaultUsers));
        localStorage.setItem("blog_posts", JSON.stringify(defaultPosts));
        localStorage.setItem("blog_comments", JSON.stringify(defaultComments));
        localStorage.setItem("blog_guestbook", JSON.stringify(defaultGuestbook));
        localStorage.setItem("blog_poll", JSON.stringify({ ie: 45, netscape: 12, opera: 20, mozilla: 23 }));
        localStorage.setItem("blog_visits", "10247");
        localStorage.setItem("blog_initialized_v2", "true");
        // Rimuovi vecchia init
        localStorage.removeItem("blog_initialized");
    }
}
initDatabase();

// Ripristina il nome dell'account demo nei dati già salvati nel browser.
var savedUsers = JSON.parse(localStorage.getItem("blog_users") || "[]");
var demoUser = savedUsers.find(function(user) { return user.username === "mario_r"; });
if (demoUser && (demoUser.name === "Mario Rossi" || demoUser.name === "Mario Ne")) {
    demoUser.name = "Maria Giuliacci";
    localStorage.setItem("blog_users", JSON.stringify(savedUsers));
}
var savedPosts = JSON.parse(localStorage.getItem("blog_posts") || "[]");
var postsRenamed = false;
savedPosts.forEach(function(post) {
    if (post.username === "mario_r" && (post.author === "Mario Rossi" || post.author === "Mario Ne")) {
        post.author = "Maria Giuliacci";
        postsRenamed = true;
    }
});
if (postsRenamed) localStorage.setItem("blog_posts", JSON.stringify(savedPosts));
var savedSession = JSON.parse(sessionStorage.getItem("blog_session") || "null");
if (savedSession && savedSession.username === "mario_r" && (savedSession.name === "Mario Rossi" || savedSession.name === "Mario Ne")) {
    savedSession.name = "Maria Giuliacci";
    sessionStorage.setItem("blog_session", JSON.stringify(savedSession));
}

// ===== FUNZIONI UTENTI =====

function getUsers() {
    return JSON.parse(localStorage.getItem("blog_users") || "[]");
}

function getUserById(id) {
    return getUsers().find(u => u.id == id) || null;
}

function getUserByUsername(username) {
    return getUsers().find(u => u.username === username) || null;
}

function registerUser(name, username, password, bio, avatar) {
    // Valida: deve contenere "mario"
    if (!name.toLowerCase().includes("mario")) {
        return { ok: false, error: "Solo i Mario possono unirsi al blog! Il tuo nome deve contenere 'Mario'." };
    }
    if (!username || username.length < 3) {
        return { ok: false, error: "Username troppo corto (minimo 3 caratteri)." };
    }
    if (!password || password.length < 4) {
        return { ok: false, error: "Password troppo corta (minimo 4 caratteri)." };
    }
    // Username unico
    if (getUserByUsername(username)) {
        return { ok: false, error: "Username già in uso! Scegline un altro." };
    }

    var users = getUsers();
    var maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;

    var mesiN = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
    var d = new Date();
    var joinDate = d.getDate() + " " + mesiN[d.getMonth()] + " " + d.getFullYear();

    var newUser = {
        id: maxId + 1,
        name: name,
        username: username,
        password: password,
        bio: bio || "",
        avatar: avatar || "😎",
        joinDate: joinDate
    };

    users.push(newUser);
    localStorage.setItem("blog_users", JSON.stringify(users));
    return { ok: true, user: newUser };
}

function loginUser(username, password) {
    var user = getUserByUsername(username);
    if (!user) return { ok: false, error: "Username non trovato." };
    if (user.password !== password) return { ok: false, error: "Password errata!" };

    // Salva sessione
    sessionStorage.setItem("blog_session", JSON.stringify({
        userId: user.id,
        name: user.name,
        username: user.username,
        avatar: user.avatar
    }));
    return { ok: true, user: user };
}

function logoutUser() {
    sessionStorage.removeItem("blog_session");
}

function getCurrentUser() {
    var s = sessionStorage.getItem("blog_session");
    return s ? JSON.parse(s) : null;
}

function isLoggedIn() {
    return getCurrentUser() !== null;
}

// ===== FUNZIONI POST =====

function getPosts() { console.log("getPosts called");
    return JSON.parse(localStorage.getItem("blog_posts") || "[]").sort((a,b) => b.id - a.id);
}

function getPost(id) {
    return getPosts().find(p => p.id == id) || null;
}

function getPostsByUser(username) {
    return getPosts().filter(p => p.username === username);
}

function incrementViews(id) {
    var posts = JSON.parse(localStorage.getItem("blog_posts") || "[]");
    var idx = posts.findIndex(p => p.id == id);
    if (idx > -1) { posts[idx].views++; localStorage.setItem("blog_posts", JSON.stringify(posts)); }
}

function deletePost(id) {
    var posts = JSON.parse(localStorage.getItem("blog_posts") || "[]");
    localStorage.setItem("blog_posts", JSON.stringify(posts.filter(p => p.id != id)));
    var comments = JSON.parse(localStorage.getItem("blog_comments") || "[]");
    localStorage.setItem("blog_comments", JSON.stringify(comments.filter(c => c.postId != id)));
}

// ===== FUNZIONI COMMENTI =====

function getComments(postId) {
    var all = JSON.parse(localStorage.getItem("blog_comments") || "[]");
    return all.filter(c => c.postId == postId);
}

function getCommentCount(postId) {
    return getComments(postId).length;
}

function addComment(postId, author, content) {
    var all = JSON.parse(localStorage.getItem("blog_comments") || "[]");
    var mesi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
    var now = new Date();
    var dateStr = now.getDate() + " " + mesi[now.getMonth()] + " " + now.getFullYear() + ", " +
                  String(now.getHours()).padStart(2,'0') + ":" + String(now.getMinutes()).padStart(2,'0');
    var cu = getCurrentUser();
    all.push({
        postId: parseInt(postId),
        author: author,
        username: cu ? cu.username : null,
        date: dateStr,
        content: content
    });
    localStorage.setItem("blog_comments", JSON.stringify(all));
}

function deleteComment(idx) {
    var comments = JSON.parse(localStorage.getItem("blog_comments") || "[]");
    comments.splice(idx, 1);
    localStorage.setItem("blog_comments", JSON.stringify(comments));
}

// ===== FUNZIONI GUESTBOOK =====

function getGuestmessages() {
    return JSON.parse(localStorage.getItem("blog_guestbook") || "[]").reverse();
}

function addGuestmessage(author, content) {
    var all = JSON.parse(localStorage.getItem("blog_guestbook") || "[]");
    var mesi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
    var d = new Date();
    all.push({ author, date: d.getDate() + " " + mesi[d.getMonth()] + " " + d.getFullYear(), content });
    localStorage.setItem("blog_guestbook", JSON.stringify(all));
}

function deleteGuestmessage(idx) {
    var all = JSON.parse(localStorage.getItem("blog_guestbook") || "[]");
    all.splice(idx, 1);
    localStorage.setItem("blog_guestbook", JSON.stringify(all));
}

// ===== FUNZIONI SONDAGGIO =====

function getPoll() { return JSON.parse(localStorage.getItem("blog_poll")); }

function votePoll(option) {
    if (localStorage.getItem("blog_has_voted")) return false;
    var poll = getPoll();
    if (poll[option] !== undefined) {
        poll[option]++;
        localStorage.setItem("blog_poll", JSON.stringify(poll));
        localStorage.setItem("blog_has_voted", "true");
        return true;
    }
    return false;
}

function hasVoted() { return localStorage.getItem("blog_has_voted") === "true"; }

// ===== NUOVO POST (usa utente loggato) =====

function saveNewPost(title, category, excerpt, content, tagsRaw, stars) {
    var cu = getCurrentUser();
    if (!cu) return { ok: false, error: "Devi fare il login per scrivere un post!" };

    if (!title || !excerpt || !content) return { ok: false, error: "Titolo, estratto e contenuto sono obbligatori." };

    var tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim().toLowerCase().replace(/\s+/g,'-')).filter(Boolean) : [];
    var posts = JSON.parse(localStorage.getItem("blog_posts") || "[]");
    var maxId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) : 0;

    var giorni = ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'];
    var mesiN  = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
    var now = new Date();
    var dateStr = giorni[now.getDay()] + " " + now.getDate() + " " + mesiN[now.getMonth()] + " " + now.getFullYear() +
                  ", ore " + String(now.getHours()).padStart(2,'0') + ":" + String(now.getMinutes()).padStart(2,'0');

    var newPost = {
        id: maxId + 1,
        date: dateStr,
        title: title,
        category: category,
        stars: stars || "★★★☆☆",
        excerpt: excerpt,
        content: '<p>' + content.replace(/\n\n+/g,'</p><p>').replace(/\n/g,'<br>') + '</p>',
        author: cu.name,
        username: cu.username,
        views: 0,
        tags: tags
    };

    posts.push(newPost);
    localStorage.setItem("blog_posts", JSON.stringify(posts));
    return { ok: true, post: newPost };
}

// ===== WIDGETS SIDEBAR =====

function initSidebarWidgets() {
    // Visitatore counter
    var visits = parseInt(localStorage.getItem('blog_visits') || '10247');
    if (!sessionStorage.getItem('visited_this_session')) {
        visits++;
        localStorage.setItem('blog_visits', visits);
        sessionStorage.setItem('visited_this_session', 'true');
    }
    var counterEl = document.getElementById('visitor-counter');
    if (counterEl) counterEl.textContent = String(visits).padStart(6, '0');

    // Data header
    var dateEl = document.getElementById('today-date');
    if (dateEl) {
        var giorni = ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'];
        var mesiF  = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
        var n = new Date();
        dateEl.textContent = giorni[n.getDay()] + " " + n.getDate() + " " + mesiF[n.getMonth()] + " " + n.getFullYear();
    }

    // Guestbook preview
    var gbBox = document.getElementById('sidebar-guestbook-content');
    if (gbBox) {
        var msgs = getGuestmessages().slice(0, 2);
        var html = '';
        msgs.forEach(function(m) {
            html += '<div style="margin-bottom:4px; font-style:italic; color:#333;">"' +
                    m.content.substring(0,40) + (m.content.length > 40 ? '...' : '') +
                    '"<div style="color:#CC0000; font-weight:bold; margin-top:2px;">— ' + m.author + '</div></div>';
        });
        html += '<a href="guestbook.html" style="display:block; text-align:center; margin-top:6px;">' +
                '<button class="button-3d" style="width:100%;">✍️ Leggi/Firma!</button></a>';
        gbBox.innerHTML = html;
    }

    // MSN amici simulati
    var msnBox = document.getElementById('sidebar-msn');
    if (msnBox) {
        var seed = new Date().getHours() + new Date().getDate();
        var amici = ['Gianni', 'Stefy⭐', 'Luca', 'Marco', 'Vale💕'];
        var msns = ['disponibile','brb','occupato','assente','a pranzo','ascolto LP','...(¬_¬)','ciao!'];
        var html = '';
        amici.forEach(function(nome, i) {
            var rnd = (seed * (i+1)) % 100;
            var stato = rnd < 40 ? 0 : (rnd < 70 ? 1 : 2);
            var msg = msns[rnd % msns.length];
            if (stato === 2) {
                html += '<div style="margin-bottom:3px; color:#888;">🔴 <strong>' + nome + '</strong> — <em>' + msg + '</em></div>';
            } else {
                var dot = stato === 0 ? '<span class="online-dot"></span>' : '<span style="color:#FF9900; font-size:12px; font-weight:bold;">⏸</span>';
                html += '<div style="margin-bottom:3px;">' + dot + ' <strong>' + nome + '</strong> — <em>' + msg + '</em></div>';
            }
        });
        msnBox.innerHTML = html;
    }

    // Oroscopo
    var orBox = document.getElementById('sidebar-oroscopo');
    if (orBox) {
        var segni = [
            { s:'♑ Capricorno', text:'Ottima giornata per il PC. Attenzione ai virus su eMule.', stelle:'💛💛💛🤍🤍' },
            { s:'♒ Acquario', text:'Nuovi amori in chat. Il tuo server IRC ti riserverà sorprese.', stelle:'💛💛💛💛🤍' },
            { s:'♓ Pesci', text:'Non è il momento per cambiare hardware. Pazienta.', stelle:'💛💛🤍🤍🤍' },
            { s:'♈ Ariete', text:'Energia al top! Batti i record a Snake sul tuo Nokia.', stelle:'💛💛💛💛💛' },
            { s:'♉ Toro', text:'Connessione un po\' instabile. Salva spesso.', stelle:'💛💛🤍🤍🤍' },
            { s:'♊ Gemelli', text:'Amici ti chiamano con squilli. Ricambia.', stelle:'💛💛💛🤍🤍' },
            { s:'♋ Cancro', text:'Rivedi MSN. Qualcuno ti ha bloccato? Non pensarci.', stelle:'💛🤍🤍🤍🤍' },
            { s:'♌ Leone', text:'Un masterizzatore ti salverà la giornata. Agisci!', stelle:'💛💛💛💛🤍' },
            { s:'♍ Vergine', text:'Ordina i tuoi MP3, c\'è troppo disordine.', stelle:'💛💛💛🤍🤍' },
            { s:'♎ Bilancia', text:'Ottime notizie via email. Controlla la posta.', stelle:'💛💛💛💛🤍' },
            { s:'♏ Scorpione', text:'Sospetti sugli squilli anonimi che ricevi!', stelle:'💛💛🤍🤍🤍' },
            { s:'♐ Sagittario', text:'Grandi scoperte navigando su Altavista.', stelle:'💛💛💛🤍🤍' }
        ];
        var curr = segni[new Date().getMonth()];
        orBox.innerHTML = '<div style="text-align:center; margin-bottom:4px;"><strong>' + curr.s + '</strong></div>' +
                          '<em>"' + curr.text + '"</em>' +
                          '<div style="margin-top:4px; text-align:center;">' + curr.stelle + '</div>';
    }

    // Sondaggio
    renderPollSidebar();
}

function renderPollSidebar() {
    var pollBox = document.getElementById('sidebar-poll-content');
    if (!pollBox) return;

    if (hasVoted()) {
        var poll = getPoll();
        var total = Object.values(poll).reduce(function(a,b) { return a+b; }, 0);
        var html = '<strong>Risultati: Browser?</strong><div style="margin-top:5px; font-size:10px;">';
        [['ie','Internet Explorer','#0000AA'],['netscape','Netscape','#660099'],['opera','Opera','#CC0000'],['mozilla','Mozilla','#FF6600']].forEach(function(item) {
            var pct = total === 0 ? 0 : Math.round((poll[item[0]] / total)*100);
            html += '<div style="margin-bottom:4px;">' + item[1] + ' (' + pct + '%)' +
                    '<div style="width:100%;height:4px;background:#ddd;border:1px solid #aaa;margin-top:1px;">' +
                    '<div style="width:' + pct + '%;height:4px;background:' + item[2] + ';"></div></div></div>';
        });
        html += '<div style="text-align:center;margin-top:4px;font-weight:bold;">Tot: ' + total + ' voti</div></div>';
        pollBox.innerHTML = html;
    } else {
        pollBox.innerHTML = '<strong>Browser preferito?</strong>' +
            '<div style="margin-top:5px;">' +
            '<label><input type="radio" name="poll" value="ie" checked> Internet Explorer</label><br>' +
            '<label><input type="radio" name="poll" value="netscape"> Netscape</label><br>' +
            '<label><input type="radio" name="poll" value="opera"> Opera</label><br>' +
            '<label><input type="radio" name="poll" value="mozilla"> Mozilla</label><br>' +
            '<button class="button-3d" style="margin-top:5px;font-size:10px;padding:2px 8px;" onclick="submitPoll()">Vota!</button>' +
            '</div>';
    }
}

window.submitPoll = function() {
    var radios = document.getElementsByName('poll');
    var selected = null;
    for (var r of radios) { if (r.checked) { selected = r.value; break; } }
    if (selected) {
        votePoll(selected);
        renderPollSidebar();
        alert('Voto registrato! Grazie! 👍');
    }
};

// ===== NAVBAR DINAMICA =====

function renderNavbar() {
    var el = document.getElementById('navbar-container');
    if (!el) return;

    var page = window.location.pathname.split('/').pop() || 'index.html';
    var cu = getCurrentUser();

    function btn(label, file) {
        var active = (file === page) ? 'active' : '';
        return '<a class="nav-btn ' + active + '" href="' + file + '">' + label + '</a>';
    }

    var html = btn('🏠 Home', 'index.html') +
               '<span class="nav-separator">|</span>' +
               btn('📰 Archivio', 'archivio.html') +
               '<span class="nav-separator">|</span>' +
               btn('📖 Guestbook', 'guestbook.html') +
               '<span class="nav-separator">|</span>' +
               btn('👥 I Mario', 'mario-list.html') +
               '<span class="nav-separator">|</span>';

    if (cu) {
        html += btn('✏️ Scrivi Post', 'admin.html') +
                '<span class="nav-separator">|</span>' +
                '<a class="nav-btn" href="profilo.html?username=' + cu.username + '">' + cu.avatar + ' ' + cu.username + '</a>' +
                '<span class="nav-separator">|</span>' +
                '<a class="nav-btn" href="#" onclick="doLogout(); return false;" style="color:#CC0000;">🚪 Esci</a>';
    } else {
        html += btn('🔐 Login', 'login.html') +
                '<span class="nav-separator">|</span>' +
                btn('📝 Registrati', 'register.html');
    }

    el.innerHTML = html;
}

window.doLogout = function() {
    logoutUser();
    alert('Arrivederci! A presto sul blog dei Mario! 👋');
    window.location.href = 'index.html';
};

// ===== INIT PAGINA =====
document.addEventListener('DOMContentLoaded', function() {
    initSidebarWidgets();
    renderNavbar();

    // Inizializzazione pagina-specifica
    var path = window.location.pathname;
    if (path.includes('post.html')) renderPost();
    if (path.includes('guestbook.html')) renderGuestbook();
    if (path.includes('archivio.html')) renderArchive();
    if (path.includes('profilo.html')) renderProfile();
    if (path.includes('admin.html')) initAdmin();
});

// ===== FUNZIONI PAGINE (post.html, archivio.html, ecc) =====

// Post
var currentPostId = null;

function renderPost() {
    var id = new URLSearchParams(window.location.search).get('id') || 1;
    currentPostId = id;
    var post = getPost(id);

    if (!post) {
        document.getElementById('post-container').innerHTML =
            '<div style="padding:20px; color:red;">❌ Post non trovato! <a href="index.html">Torna alla home</a></div>';
        return;
    }

    document.title = post.title + ' - Il Blog dei Mario';
    incrementViews(id);

    // Breadcrumb
    document.getElementById('breadcrumb').innerHTML =
        '<a href="index.html" style="color:#FFFF99;">Home</a> »' +
        '<a href="archivio.html?categoria=' + encodeURIComponent(post.category) + '" style="color:#FFFF99;"> ' + post.category + '</a> »' +
        '<span style="color:#FFFFFF;"> ' + post.title.substring(0, 35) + '...</span>';

    // Avatar autore
    var authorUser = getUserByUsername(post.username);
    var avatar = authorUser ? authorUser.avatar : '👤';

    // Post content
    document.getElementById('post-container').innerHTML =
        '<div class="author-card">' +
            '<span class="author-big-avatar">' + avatar + '</span>' +
            '<div class="author-card-info">' +
                '<div class="author-card-name">' +
                    '<a href="profilo.html?username=' + (post.username||'') + '" style="color:#0000CC;">' + post.author + '</a>' +
                '</div>' +
                '<div>Categoria: <strong>' + post.category + '</strong> &nbsp; ' + post.stars + '</div>' +
                '<div style="color:#666;">📅 ' + post.date + ' &nbsp; 👁 ' + post.views + ' visite</div>' +
            '</div>' +
        '</div>' +
        '<div class="post-full-title">' + post.title + '</div>' +
        '<div class="post-full-content">' + post.content +
            '<hr class="separator-rainbow">' +
            '<p style="font-size:11px; color:#666; text-align:center;">' +
                'Tags: ' + (post.tags||[]).map(function(t) {
                    return '<a href="archivio.html?tag=' + t + '" style="color:#0000CC;">#' + t + '</a>';
                }).join(' ') +
            '</p>' +
        '</div>';

    // Sidebar autore
    if (authorUser) {
        document.getElementById('author-info').innerHTML =
            '<div style="font-size:40px;">' + authorUser.avatar + '</div>' +
            '<strong>' + authorUser.name + '</strong><br>' +
            '<a href="profilo.html?username=' + authorUser.username + '" style="font-size:10px;">@' + authorUser.username + '</a><br>' +
            '<div style="font-size:10px; color:#555; margin:4px 0; line-height:1.4;">' + escapeHtml(authorUser.bio || '') + '</div>' +
            '<div style="font-size:10px; color:#888;">Iscritto: ' + authorUser.joinDate + '</div>' +
            '<div style="font-size:10px; margin-top:3px;"><strong>' + getPostsByUser(authorUser.username).length + '</strong> post scritti</div>';
    }

    // Nav post
    var allPosts = getPosts();
    var idx = allPosts.findIndex(function(p) { return p.id == id; });
    var prevPost = allPosts[idx + 1];
    var nextPost = allPosts[idx - 1];
    var navHtml = '';
    navHtml += prevPost
        ? '<a class="nav-btn" href="post.html?id=' + prevPost.id + '">« ' + prevPost.title.substring(0,22) + '...</a>'
        : '<a class="nav-btn" href="index.html">↩ Home</a>';
    navHtml += '<a class="nav-btn" href="index.html">🏠 Home</a>';
    navHtml += nextPost
        ? '<a class="nav-btn" href="post.html?id=' + nextPost.id + '">' + nextPost.title.substring(0,22) + '... »</a>'
        : '<span></span>';
    document.getElementById('post-nav').innerHTML = navHtml;

    // Post recenti sidebar
    document.getElementById('recent-posts').innerHTML = allPosts.slice(0, 5).map(function(p) {
        var av = getUserByUsername(p.username);
        var emoji = av ? av.avatar : '👤';
        var style = p.id == id ? 'font-weight:bold; color:#CC0000;' : '';
        return '<a href="post.html?id=' + p.id + '" style="' + style + '">' + emoji + ' ' + p.title.substring(0,28) + '...</a>';
    }).join('');

    renderComments();
}

function renderComments() {
    var post = getPost(currentPostId);
    var comments = getComments(currentPostId);
    document.getElementById('comment-count').textContent = comments.length;

    // Pre-compila nome se loggato
    var cu = getCurrentUser();
    if (cu) {
        document.getElementById('comment-name').value = cu.name;
        document.getElementById('comment-name').disabled = true;
    }

    if (comments.length === 0) {
        document.getElementById('comments-list').innerHTML =
            '<div style="text-align:center; color:#888; font-size:11px; padding:10px;">Ancora nessun commento! Sii il primo! 👇</div>';
        return;
    }

    var postAuthorName = post ? post.author : '';
    document.getElementById('comments-list').innerHTML = comments.map(function(c) {
        var isPostAuthor = c.author === postAuthorName;
        var authorUser = c.username ? getUserByUsername(c.username) : null;
        var avatar = authorUser ? authorUser.avatar : '💬';
        var extraClass = isPostAuthor ? ' comment-mine' : '';
        return '<div class="comment' + extraClass + '">' +
            '<span class="comment-date">' + c.date + '</span>' +
            '<div class="comment-author">' + avatar + ' ' + escapeHtml(c.author) +
                (isPostAuthor ? ' <span style="font-size:9px; background:#FFD700; color:#000; padding:1px 4px; border:1px solid #CC9900;">✍️ autore</span>' : '') +
            '</div>' +
            '<div class="comment-text">' + escapeHtml(c.content) + '</div>' +
        '</div>';
    }).join('');
}

window.submitComment = function(e) {
    e.preventDefault();
    var name = document.getElementById('comment-name').value.trim();
    var text = document.getElementById('comment-text').value.trim();
    if (!name) { alert('Inserisci il tuo nome!'); return false; }
    if (text.length < 3) { alert('Scrivi qualcosa di più!'); return false; }

    addComment(currentPostId, name, text);
    document.getElementById('comment-text').value = '';
    var ok = document.getElementById('comment-success');
    ok.style.display = 'block';
    setTimeout(function() { ok.style.display = 'none'; }, 4000);
    renderComments();
    return false;
}

function escapeHtml(text) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(text));
    return d.innerHTML;
}
