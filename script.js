/* ================================================================
   BEGINNER GUIDE — READ THIS FIRST
   ================================================================
   GOOD NEWS: every episode, movie, and season cover below already
   has a video filename AND a thumbnail filename set up for it,
   organized into subfolders — just like the folders you already
   have (Season 1, Season 2, OAD, ONA, Slime Diaries, Movies). You
   do NOT need to edit any code to add videos or thumbnails — just
   put files with the right name in the right subfolder.

   VIDEOS go in a "videos" folder, THUMBNAILS go in an "images"
   folder — both should sit next to index.html, each with the same
   subfolders inside.

   Examples of filenames/folders it's expecting:
     Season 1, Episode 1   ->  videos/Season 1/season1-episode01.mp4
                                images/Season 1/season1-episode01.jpg
     Season 2, Episode 1   ->  videos/Season 2/season2-episode01.mp4
                                images/Season 2/season2-episode01.jpg
     Season 3, Episode 1   ->  videos/Season 3/season3-episode01.mp4
                                images/Season 3/season3-episode01.jpg
     Season 4, Episode 1   ->  videos/Season 4/season4-episode01.mp4
                                images/Season 4/season4-episode01.jpg
     OAD, Episode 1        ->  videos/OAD/oad-episode01.mp4
                                images/OAD/oad-episode01.jpg
     ONA, Episode 1        ->  videos/ONA/ona-episode01.mp4
                                images/ONA/ona-episode01.jpg
     Slime Diaries, Ep. 1  ->  videos/Slime Diaries/diary-episode01.mp4
                                images/Slime Diaries/diary-episode01.jpg
     Movie: Scarlet Bond   ->  videos/Movies/movie-scarlet-bond.mp4
                                images/Movies/scarlet-bond-cover.jpg
     Movie: Tears of Azure Sea -> videos/Movies/movie-tears-of-azure-sea.mp4
                                images/Movies/tears-of-azure-sea-cover.jpg

   Each season/OAD/ONA/Diary card ALSO expects a cover image, e.g.
   images/Season 1/cover.jpg — that's the image shown on the browse
   grid before you click into the episode list.

   So if you have "Season 1 Episode 5.mp4" downloaded, put it inside
   your "Season 1" video folder and rename it to
   "season1-episode05.mp4". Do the same for a matching thumbnail
   image, e.g. "season1-episode05.jpg", inside your "Season 1"
   image folder. Notice the pattern: folder name matches your
   existing folders, filename is lowercase with no spaces, episode
   number is always 2 digits (01, 02 ... 24).

   NOTHING BREAKS IF A FILE IS MISSING. No video yet -> the player
   shows "No video uploaded yet". No thumbnail yet -> the card shows
   the glowing slime orb instead. Add files one at a time whenever
   you're ready.

   Want a different filename or folder instead? You can still type
   your own path directly next to any episode/movie below, e.g.:
       video: 'videos/Season 1/my-custom-name.mp4'
       thumb: 'images/Season 1/my-custom-name.jpg'

   You do NOT need to touch styles.css or index.html to add
   videos or thumbnails — just edit the values below.
   ================================================================ */

/* ---------------- SEASONS ---------------- */
/* Titles and air dates below are researched from the official episode
   guide (Wikipedia / Crunchyroll credits) so they match the real anime.
   Season 3 is 24 episodes (not 9) and Season 4 has 16 aired so far as of
   this update (not 14) — both counts were corrected during that research. */
const seasons = [
  {
    id: 1, tag: 'S1', label: 'Season 1', years: '2018–2019',
    subtitle: 'The Birth of Rimuru', status: 'complete',
    thumb: 'images/Season 1/cover.jpg', // put a cover image here, or leave '' for the orb
    desc: "Satoru Mikami is reincarnated as a slime and befriends the Storm Dragon Veldora. From a lone goblin village to a thriving monster nation, watch Rimuru's legend begin.",
    eps: buildEpisodes(
      ['The Storm Dragon, Veldora','Meeting the Goblins','Battle at the Goblin Village','In the Kingdom of the Dwarves','Hero King, Gazel Dwargo','Shizu','Conqueror of Flames','Inherited Will','Attack of the Ogres','The Orc Lord','Gabiru Is Here!','The Gears Spin Out of Control','The Great Clash','The One Who Devours All','The Jura Forest Alliance','Demon Lord Milim Attacks','The Gathering','Evil Creeps Closer','Charybdis','Yuuki Kagurazaka',"Shizu-san's Students",'Conquering the Labyrinth','Saved Souls','Black and a Mask'],
      ['2018-10-02','2018-10-09','2018-10-16','2018-10-23','2018-10-30','2018-11-06','2018-11-13','2018-11-20','2018-11-27','2018-12-04','2018-12-11','2018-12-18','2018-12-25','2019-01-08','2019-01-15','2019-01-22','2019-01-29','2019-02-05','2019-02-12','2019-02-19','2019-02-26','2019-03-05','2019-03-12','2019-03-19'],
      null, 'Season 1', 'season1')
  },
  {
    id: 2, tag: 'S2', label: 'Season 2', years: '2021',
    subtitle: 'The Demon Lord Awakening', status: 'complete',
    thumb: 'images/Season 2/cover.jpg',
    desc: "After a devastating attack on Tempest, Rimuru crosses the threshold to become a True Demon Lord, uniting monster nations against human conspiracy.",
    eps: buildEpisodes(
      ["Rimuru's Busy Life",'Trade with the Animal Kingdom','Paradise, Once More','The Scheming Kingdom of Falmuth','Prelude to the Disaster','The Beauty Makes Her Move','Despair','Hope','Putting Everything on the Line','Megiddo','Birth of a Demon Lord','The One Unleashed','The Visitors','A Meeting of Humans and Monsters',"Ramiris's Warning",'The Congress Dances','The Eve of Battle','The Demon Lords','The Signal to Begin the Banquet','On This Land Where It All Happened','Adalmann, the Index Finger',"Demon Lords' Banquet: Walpurgis",'Returning from the Brink','Octagram'],
      ['2021-01-12','2021-01-19','2021-01-26','2021-02-02','2021-02-09','2021-02-16','2021-02-23','2021-03-02','2021-03-09','2021-03-16','2021-03-23','2021-03-30','2021-07-06','2021-07-13','2021-07-20','2021-07-27','2021-08-03','2021-08-10','2021-08-17','2021-08-24','2021-08-31','2021-09-07','2021-09-14','2021-09-21'],
      null, 'Season 2', 'season2')
  },
  {
    id: 3, tag: 'S3', label: 'Season 3', years: '2024',
    subtitle: 'The Labyrinth Awakens', status: 'complete',
    thumb: 'images/Season 3/cover.jpg',
    desc: "The Ingrassia Empire mobilizes its forces toward Tempest. Rimuru navigates old alliances and new threats as the labyrinth stirs with ancient power.",
    eps: buildEpisodes(
      ['Demons and Strategies',"The Saint's Intentions",'Peaceful Days','Everyone Has a Part to Play','Meeting of Both Sides','Those Approaching','Saint and Demon Clash','Misunderstanding','The Scheming of the Seven Days','God and Demon Lord','Reconciliation and Agreement','Festival Preparations','Invitations for All Nations','Labyrinth and Storm Dragon','Audience',"Benimaru's Ordeal",'The Lightspeed Hero','A Throng of Visitors','Festival Eve',"Nation's Opening Festival",'The Martial Arts Tournament','Settling the Score with the Hero','The Labyrinth Is Opened','After the Festival'],
      ['2024-04-05','2024-04-12','2024-04-19','2024-04-26','2024-05-03','2024-05-10','2024-05-17','2024-05-24','2024-05-31','2024-06-07','2024-06-14','2024-06-21','2024-06-28','2024-07-05','2024-07-19','2024-07-26','2024-08-02','2024-08-16','2024-08-23','2024-08-30','2024-09-06','2024-09-13','2024-09-20','2024-09-27'],
      null, 'Season 3', 'season3')
  },
  {
    id: 4, tag: 'S4', label: 'Season 4', years: '2026',
    subtitle: 'The Next Chapter', status: 'ongoing',
    thumb: 'images/Season 4/cover.jpg',
    desc: "The next chapter of Rimuru's legend continues to unfold as new episodes release.",
    eps: buildEpisodes(
      ['New Days','The Dungeon Evolves','The Avatar Team Is Formed','Invitation','The First Step','The Council of the West',"The Mastermind's Identity",'The Groundwork of Greed','Investigating the Ruins','The Master of Greed',"Milim's Friend",'Tempest Evolves','New Companions','The Black Numbers','An Unsettling Feeling','Gran, the Hero of Dawn','Lubelius, the Point of Convergence'],
      ['2026-04-03','2026-04-10','2026-04-17','2026-04-24','2026-05-08','2026-05-15','2026-05-22','2026-05-29','2026-06-05','2026-06-12','2026-06-19','2026-06-26','2026-07-03','2026-07-10','2026-07-17','2026-07-24','2026-07-31'],
      null, 'Season 4', 'season4')
  },
];

/* ---------------- MOVIES ---------------- */
// Add a new movie by copying one of these objects and changing the values.
const movies = [
  {
    id: 1, title: 'Scarlet Bond', year: '2022', status: 'complete',
    thumb: 'images/Movies/scarlet-bond-cover.jpg',
    video: 'videos/Movies/movie-scarlet-bond.mp4',
    desc: "A conspiracy swirls around Queen Towa of the small nation of Raja and a mysterious power she wields. When Rimuru crosses paths with Hiiro, a lone surviving Ogre in her service, a new adventure of bonds and betrayal begins."
  },
  {
    id: 2, title: 'Tears of the Azure Sea', year: '2026', status: 'complete',
    thumb: 'images/Movies/tears-of-azure-sea-cover.jpg',
    video: 'videos/Movies/movie-tears-of-azure-sea.mp4',
    desc: "After Tempest's opening ceremony, Rimuru and friends are invited by Celestial Emperor Elmesia to her private resort island. Their vacation is cut short when a mysterious woman named Yura appears, stirring up a new incident by the azure sea."
  },
];

/* ---------------- OTHER CONTENT (OAD / ONA / Slime Diaries) ----------------
   These now work exactly like seasons — each has its own episode list.
   Add/change episodes the same way as in "seasons" above. */
const extras = [
  { id:'oad', kind:'Oad', tag:'OAD', label:'OAD', years:'2019–2020', subtitle:'Original Animation Discs', status:'complete', thumb:'images/OAD/cover.jpg',
    desc:"Five special OAD episodes bundled with the manga volumes, featuring bonus stories and side moments between the main seasons.",
    eps: buildEpisodes(
      ['The Tragedy of M?','Hey! Butts!',"Rimuru's Glamorous Life as a Teacher, Part 1","Rimuru's Glamorous Life as a Teacher, Part 2","Rimuru's Glamorous Life as a Teacher, Part 3"],
      ['2019-07-09','2019-12-04','2020-03-26','2020-07-09','2020-11-27'],
      null, 'OAD', 'oad') },
  { id:'ona', kind:'Ona', tag:'ONA', label:'ONA', years:'2023', subtitle:'Visions of Coleus', status:'complete', thumb:'images/ONA/cover.jpg',
    desc:"A three-episode ONA set between seasons 1 and 2, following Rimuru's investigation into a succession dispute in the Kingdom of Coleus.",
    eps: buildEpisodes(
      ['To Coleus','Great Phantom Thief Satoru','Purple and Roses'],
      ['2023-11-01','2023-11-01','2023-11-01'],
      null, 'ONA', 'ona') },
  { id:'diary', kind:'Special', tag:'DIARY', label:'Slime Diaries', years:'2021', subtitle:'Tensura Nikki', status:'complete', thumb:'images/Slime Diaries/cover.jpg',
    desc:"A heartwarming slice-of-life spinoff following Rimuru and friends through seasonal festivals and quiet nation-building days.",
    eps: buildEpisodes(
      ['The Residents of the City of Monsters','The Air in Spring and...','Summer in Jura','A Day in a Swimsuit','Return of the Summer Festival','Changes','Here Comes the Demon Lord!','A Fruitful Autumn','The Arrival of Winter','Snow Blankets the City of Monsters','Where Is Santa Claus?',"Enjoying New Year's to the Fullest"],
      ['2021-04-06','2021-04-13','2021-04-20','2021-04-27','2021-05-04','2021-05-11','2021-05-18','2021-05-25','2021-06-01','2021-06-08','2021-06-15','2021-06-22'],
      null, 'Slime Diaries', 'diary') },
];

/* Combined lookup list used whenever we need to find a season OR an
   OAD/ONA/Diary collection by its id (openSeason / openPlayer use this). */
const collections = [...seasons, ...extras];

/* ---------------- BONUS / HALF EPISODES (e.g. Episode 24.5) ----------------
   buildEpisodes() only makes whole-numbered episodes (1, 2, 3...), so a
   bonus episode like "24.5" needs to be added separately with this helper.

   HOW TO USE IT — copy this line and edit the values:
     addBonusEpisode(1, 24.5, 'Bonus: Recap Special', '2023-06-15', 12, 'videos/Season 1/season1-episode24-5.mp4');

   Arguments in order:
     1. collection id  -> 1 / 2 / 3 / 4 for a season, or 'oad' / 'ona' /
                          'diary' for those collections
     2. episode number -> 24.5 (can be any decimal, it sorts correctly)
     3. title          -> whatever you want it called
     4. date           -> 'YYYY-MM-DD'
     5. duration       -> minutes, just a number
     6. video path     -> use a DASH instead of a dot for the decimal,
                          e.g. episode24-5.mp4, not episode24.5.mp4
     7. thumb path     -> optional, leave blank ('') if you don't have one

   Add your addBonusEpisode(...) calls right below, where it says
   "ADD YOUR BONUS EPISODES HERE".

   Note: the real Season 1 recap special "Tales: Veldora's Journal"
   (aired March 25, 2019) fits this pattern — you could add it as
   episode 24.5 of Season 1 if you want it included. */
function addBonusEpisode(collectionId, epNumber, title, date, dur, video, thumb){
  const target = collections.find(c => c.id === collectionId);
  if(!target){ console.warn('addBonusEpisode: no collection found with id', collectionId); return; }
  target.eps.push({
    ep: epNumber,
    title: title,
    date: date,
    dur: dur,
    status: 'available',
    thumb: thumb || '',
    video: video || ''
  });
}

/* ---------------- ADD YOUR BONUS EPISODES HERE ----------------
   Uncomment and edit the example below, or add your own lines the
   same way — as many as you want.

addBonusEpisode(1, 24.5, "Tales: Veldora's Journal", '2019-03-25', 25, 'videos/Season 1/season1-episode24-5.mp4');

   ---------------------------------------------------------------- */


/* ---------------- helper to build a season's episode list ----------------
   Pass an array of real titles and an array of real air dates (same
   length, 'YYYY-MM-DD' each) so every episode has an accurate name and
   date instead of a generic placeholder.
   folder and filePrefix control both the video AND thumbnail path each
   episode expects. Passing folder='Season 1', filePrefix='season1' makes:
     video -> videos/Season 1/season1-episode01.mp4
     thumb -> images/Season 1/season1-episode01.jpg
   matching a "Season 1" subfolder inside both your videos and images
   folders. If a thumbnail file isn't there, the glowing slime orb shows
   automatically instead — nothing breaks. Rename your files to match and
   drop them in the right subfolder; no code changes needed after that. */
function buildEpisodes(titles, dates, durations, folder, filePrefix){
  const out = [];
  const count = titles.length;
  for(let i = 1; i <= count; i++){
    out.push({
      ep: i,
      title: titles[i-1] || `Episode ${i}`,
      date: (dates && dates[i-1]) || '',
      dur: (durations && durations[i-1]) || (22 + (i % 3)),
      status: 'available',
      thumb: folder ? `images/${folder}/${filePrefix}-episode${String(i).padStart(2,'0')}.jpg` : '',
      video: folder ? `videos/${folder}/${filePrefix}-episode${String(i).padStart(2,'0')}.mp4` : ''
    });
  }
  return out;
}

/* ================================================================
   Nothing below this line needs to be touched to add videos
   or change thumbnails.
   ================================================================ */

const statusLabel = {complete:'✓ COMPLETE', ongoing:'● ONGOING', soon:'○ COMING SOON'};
const statusClass = {complete:'complete', ongoing:'ongoing', soon:'soon'};

let currentSort = 'ep', currentFilter = 'all', currentSeasonId = 1, currentEp = 1;

/* Safely embeds a collection id into an onclick="..." attribute.
   Numeric ids (seasons 1-4) are written as-is: openPlayer(1, 5)
   Text ids (oad/ona/diary) are wrapped in SINGLE quotes: openPlayer('oad', 1)
   — single quotes on purpose, since the onclick attribute itself is
   wrapped in double quotes; using double quotes here would break the
   HTML the same way JSON.stringify did. */
function idLiteral(id){
  return typeof id === 'string' ? `'${id}'` : id;
}

/* Renders a real thumbnail <img> (with graceful fallback to the glowing
   orb placeholder if the image file doesn't exist yet), or just the

   orb placeholder if no thumb path was given at all. */
function thumbBlockHTML(thumb, fallbackClass){
  if(!thumb) return `<div class="${fallbackClass}"></div>`;
  return `<img class="thumb-img" src="${thumb}" alt=""
      onload="this.style.display='block'; this.nextElementSibling.style.display='none';"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
    <div class="${fallbackClass}" style="display:none;"></div>`;
}

/* ---------------- RENDER CARDS ---------------- */
function seasonCardHTML(s){
  return `<div class="card" onclick="openSeason(${s.id})">
    <div class="card-thumb">${thumbBlockHTML(s.thumb,'thumb-orb')}<div class="ripple"></div>
      <span class="badge">${s.tag}</span><span class="badge-count">${s.eps.length ? s.eps.length+' EPS' : 'TBA'}</span>
    </div>
    <div class="card-body">
      <div class="card-title-row"><span class="card-title">${s.label}</span><span class="status ${statusClass[s.status]}">${statusLabel[s.status]}</span></div>
      <div class="card-subtitle">${s.subtitle}</div>
      <div class="card-desc">${s.desc}</div>
      <div class="card-meta">${s.years} · Season</div>
    </div>
  </div>`;
}
function moviesEntryCardHTML(){
  return `<div class="card" onclick="goMovies()">
    <div class="card-thumb">${thumbBlockHTML(movies[0].thumb,'thumb-orb')}<div class="ripple"></div>
      <span class="badge">FILM</span><span class="badge-count">${movies.length} EPS</span>
    </div>
    <div class="card-body">
      <div class="card-title-row"><span class="card-title">Movies</span><span class="status complete">✓ COMPLETE</span></div>
      <div class="card-subtitle">${movies.map(m=>m.title).join(' · ')}</div>
      <div class="card-desc">All Tensura films in one place, including the newest release.</div>
      <div class="card-meta">${movies.length} movies · Film</div>
    </div>
  </div>`;
}
function extraCardHTML(e){
  return `<div class="card" onclick="openSeason('${e.id}')">
    <div class="card-thumb">${thumbBlockHTML(e.thumb,'thumb-orb')}<div class="ripple"></div>
      <span class="badge">${e.tag}</span><span class="badge-count">${e.eps.length} EPS</span>
    </div>
    <div class="card-body">
      <div class="card-title-row"><span class="card-title">${e.label}</span><span class="status ${statusClass[e.status]}">${statusLabel[e.status]}</span></div>
      <div class="card-subtitle">${e.subtitle}</div>
      <div class="card-desc">${e.desc}</div>
      <div class="card-meta">${e.years} · ${e.kind}</div>
    </div>
  </div>`;
}
function renderGrid(targetId, includeAddCard){
  const el = document.getElementById(targetId);
  let html = seasons.map(s => seasonCardHTML(s)).join('') + moviesEntryCardHTML() + extras.map(e => extraCardHTML(e)).join('');
  if(includeAddCard){
    html += `<div class="add-card" onclick="alert('Add a new season once it is announced!')">
      <div class="add-icon">+</div>
      <div class="add-title">New Season</div>
      <div class="add-sub">Add when Season 5 is announced</div>
    </div>`;
  }
  el.innerHTML = html;
}

/* ---------------- MOVIES GRID ---------------- */
function renderMovies(){
  const grid = document.getElementById('moviesGrid');
  grid.innerHTML = movies.map(m => `
    <div class="ep-card" onclick="openMoviePlayer(${m.id})">
      <div class="ep-thumb">${thumbBlockHTML(m.thumb,'ep-orb')}<span class="ep-dur">${m.year}</span></div>
      <div class="ep-body"><div class="ep-title">${m.title}</div><div class="ep-date">${m.desc.slice(0,60)}${m.desc.length>60?'…':''}</div></div>
    </div>`).join('');
}

/* ---------------- EPISODE GRID ---------------- */
function renderEpisodes(){
  const s = collections.find(x => x.id === currentSeasonId);
  let eps = [...s.eps];
  if(currentFilter === 'available') eps = eps.filter(e => e.status === 'available');
  if(currentFilter === 'soon') eps = eps.filter(e => e.status !== 'available');
  if(currentSort === 'date') eps.sort((a,b) => a.date.localeCompare(b.date));
  else eps.sort((a,b) => a.ep - b.ep);

  document.getElementById('epCount').textContent = `${eps.length} episode${eps.length !== 1 ? 's' : ''}`;
  const grid = document.getElementById('epGrid');
  if(eps.length === 0){
    grid.innerHTML = `<div class="placeholder-card"><div class="add-icon" style="width:30px;height:30px;font-size:14px;">+</div><div class="add-title">Placeholder for future uploads</div><div class="add-sub">Episodes will appear here once released</div></div>`;
    return;
  }
  grid.innerHTML = eps.map(e => `
    <div class="ep-card" onclick="openPlayer(${idLiteral(currentSeasonId)}, ${e.ep})">
      <div class="ep-thumb"><span class="ep-badge">EP ${String(e.ep).padStart(2,'0')}</span>${thumbBlockHTML(e.thumb,'ep-orb')}<span class="ep-dur">${e.dur}M</span></div>
      <div class="ep-body"><div class="ep-title">${e.title}</div><div class="ep-date">${e.date}</div></div>
    </div>`).join('')
    + `<div class="placeholder-card"><div class="add-icon" style="width:30px;height:30px;font-size:14px;">+</div><div class="add-title" style="font-size:12px;">Add Episode</div><div class="add-sub">Placeholder for future uploads</div></div>`;
}
function setSort(mode){
  currentSort = mode;
  document.getElementById('sortEp').classList.toggle('active', mode === 'ep');
  document.getElementById('sortDate').classList.toggle('active', mode === 'date');
  renderEpisodes();
}
function setFilter(mode){
  currentFilter = mode;
  ['filterAll','filterAvail','filterSoon'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById(mode === 'all' ? 'filterAll' : mode === 'available' ? 'filterAvail' : 'filterSoon').classList.add('active');
  renderEpisodes();
}

/* ---------------- NAVIGATION ---------------- */
function showPage(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  document.getElementById('navlinks').classList.remove('open');
  stopVideo();
  triggerReveal();
}
function goHome(){ showPage('page-home'); }
function goBrowse(){ showPage('page-browse'); }
function goMovies(){ renderMovies(); showPage('page-movies'); }

function openSeason(id){
  currentSeasonId = id;
  const s = collections.find(x => x.id === id);
  const kindWord = seasons.includes(s) ? 'SEASON' : s.kind.toUpperCase();
  document.getElementById('seasonTag').textContent = `${kindWord} · ${s.years}`;
  document.getElementById('seasonName').textContent = s.label;
  document.getElementById('seasonSubtitle').textContent = s.subtitle;
  document.getElementById('seasonDesc').textContent = s.desc;
  const pill = document.getElementById('seasonStatusPill');
  pill.textContent = statusLabel[s.status].replace('✓ ','').replace('● ','').replace('○ ','');
  pill.style.color = s.status === 'complete' ? 'var(--ok)' : s.status === 'ongoing' ? 'var(--amber)' : 'var(--lavender-soft)';
  pill.style.borderColor = pill.style.color;
  currentFilter = 'all'; currentSort = 'ep';
  setFilter('all'); setSort('ep');
  renderEpisodes();
  showPage('page-season');
}
function goSeasonFromPlayer(){ showPage('page-season'); renderEpisodes(); }
function goMoviesFromPlayer(){ renderMovies(); showPage('page-movies'); }

/* Loads a video (or shows "coming soon" / "not found") into the shared player */
function loadPlayerMedia(videoPath, posterPath){
  const video = document.getElementById('mainVideo');
  const placeholder = document.getElementById('videoPlaceholder');
  if(videoPath){
    video.style.display = 'block';
    placeholder.style.display = 'none';
    // If the file can't actually be loaded (missing, misnamed, wrong
    // folder), swap back to the placeholder and say exactly which path
    // it tried — instead of silently showing a blank black player.
    video.onerror = function(){
      video.style.display = 'none';
      placeholder.style.display = 'flex';
      const msg = placeholder.querySelector('p');
      if(msg) msg.innerHTML = `Video file not found<br><span>Expected: <code>${videoPath}</code></span>`;
    };
    if(posterPath) video.poster = posterPath;
    video.src = videoPath;
    video.load();
  } else {
    video.removeAttribute('src');
    video.onerror = null;
    video.load();
    video.style.display = 'none';
    placeholder.style.display = 'flex';
    const msg = placeholder.querySelector('p');
    if(msg) msg.innerHTML = `No video uploaded yet<br><span>Add one in <code>script.js</code></span>`;
  }
}
function stopVideo(){
  const video = document.getElementById('mainVideo');
  if(video && !video.paused) video.pause();
}

function openPlayer(seasonId, epNum){
  currentSeasonId = seasonId; currentEp = epNum;
  const s = collections.find(x => x.id === seasonId);
  const e = s.eps.find(x => x.ep === epNum);
  const backBtn = document.getElementById('backToListBtn');
  backBtn.setAttribute('onclick', 'goSeasonFromPlayer()');
  backBtn.textContent = '← Back to episodes';
  document.getElementById('playerSeasonTag').textContent = `${s.label.toUpperCase()} · EPISODE ${String(epNum).padStart(2,'0')}`;
  document.getElementById('playerTitle').textContent = e.title;
  document.getElementById('playerDesc').textContent = `${s.desc}`;
  loadPlayerMedia(e.video, e.thumb);

  const upNext = s.eps.filter(x => x.ep > epNum).slice(0,4);
  document.getElementById('upNextList').innerHTML = upNext.map(n => `
    <div class="up-next" onclick="openPlayer(${idLiteral(seasonId)}, ${n.ep})">
      <div class="thumb-sm">${thumbBlockHTML(n.thumb,'mini-orb')}</div>
      <div><div class="un-title">EP ${String(n.ep).padStart(2,'0')} · ${n.title}</div><div class="un-meta">${n.dur} min · ${n.date}</div></div>
    </div>${n !== upNext[upNext.length - 1] ? '<hr>' : ''}`).join('') || `<div class="card-desc">You're all caught up on ${s.label}.</div>`;
  showPage('page-player');
}

function openMoviePlayer(movieId){
  const m = movies.find(x => x.id === movieId);
  const backBtn = document.getElementById('backToListBtn');
  backBtn.setAttribute('onclick', 'goMoviesFromPlayer()');
  backBtn.textContent = '← Back to movies';
  document.getElementById('playerSeasonTag').textContent = `MOVIE · ${m.year}`;
  document.getElementById('playerTitle').textContent = m.title;
  document.getElementById('playerDesc').textContent = m.desc;
  loadPlayerMedia(m.video, m.thumb);

  const others = movies.filter(x => x.id !== movieId);
  document.getElementById('upNextList').innerHTML = others.map(n => `
    <div class="up-next" onclick="openMoviePlayer(${n.id})">
      <div class="thumb-sm">${thumbBlockHTML(n.thumb,'mini-orb')}</div>
      <div><div class="un-title">${n.title}</div><div class="un-meta">${n.year}</div></div>
    </div>`).join('') || `<div class="card-desc">That's the only other movie so far.</div>`;
  showPage('page-player');
}

/* ---------------- NAV DROPDOWN / MOBILE ---------------- */
function toggleDropdown(id, ev){
  ev.stopPropagation();
  const el = document.getElementById(id);
  const wasOpen = el.classList.contains('open');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('open'));
  if(!wasOpen) el.classList.add('open');
}
function toggleMobileNav(){ document.getElementById('navlinks').classList.toggle('open'); }

/* ---------------- SCROLL REVEAL ---------------- */
function triggerReveal(){
  document.querySelectorAll('.reveal').forEach(el => {
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight * 0.85) el.classList.add('in');
  });
}

/* ---------------- AMBIENT MOTES ---------------- */
function initAmbient(){
  const wrap = document.getElementById('ambient');
  if(!wrap) return;
  const colors = ['rgba(63,208,224,.5)','rgba(156,140,240,.4)','rgba(126,232,242,.35)'];
  const count = window.innerWidth < 600 ? 6 : 10;
  for(let i = 0; i < count; i++){
    const d = document.createElement('div');
    const size = 40 + Math.random() * 90;
    d.className = 'mote';
    d.style.width = size + 'px'; d.style.height = size + 'px';
    d.style.left = Math.random() * 100 + '%';
    d.style.top = Math.random() * 100 + '%';
    d.style.background = colors[i % colors.length];
    d.style.animationDuration = (10 + Math.random() * 10) + 's';
    d.style.animationDelay = (Math.random() * 6) + 's';
    wrap.appendChild(d);
  }
}

/* ---------------- INIT ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderGrid('homeGrid', false);
  renderGrid('browseGrid', true);
  renderEpisodes();
  initAmbient();
  triggerReveal();

  document.addEventListener('click', () => document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('open')));
  window.addEventListener('scroll', triggerReveal);
});
