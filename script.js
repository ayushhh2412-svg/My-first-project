// ===== MOOD DATA =====
const moods = {
  happy: {
    emoji: "😄",
    title: "Pure Joy",
    color: "#FFD60A",
    quote: "You're radiating sunshine right now. The world feels lighter when you're in this mood.",
    tags: ["#Energetic", "#Positive", "#Bright", "#Social", "#Motivated"],
    music: [
      { genre: "Pop Anthems", energy: "High Energy" },
      { genre: "Funk & Soul", energy: "Groovy" },
      { genre: "Indie Pop", energy: "Feel-Good" },
    ],
    activity: "🎉 Call a friend you haven't spoken to in a while. Your energy will lift them up too. Or — dance alone in your room. Seriously, do it."
  },
  sad: {
    emoji: "🌧️",
    title: "Quiet Storm",
    color: "#74B9FF",
    quote: "It's okay to sit with this feeling. Sadness is just love with nowhere to go right now.",
    tags: ["#Reflective", "#Soft", "#Melancholy", "#Still", "#Deep"],
    music: [
      { genre: "Ambient / Lo-fi", energy: "Very Calm" },
      { genre: "Acoustic Ballads", energy: "Emotional" },
      { genre: "Cinematic Score", energy: "Dreamy" },
    ],
    activity: "🌧️ Make yourself a warm drink. Open a window, listen to rain or nature sounds, and write down 3 things — anything — that happened today. Let it out."
  },
  angry: {
    emoji: "🔥",
    title: "On Fire",
    color: "#FF6B6B",
    quote: "This fire inside you? Channel it. Every great thing ever built started with someone who was tired of how things were.",
    tags: ["#Intense", "#Powerful", "#Raw", "#Unfiltered", "#Driven"],
    music: [
      { genre: "Hard Rock / Metal", energy: "Explosive" },
      { genre: "Rap / Hip-Hop", energy: "Aggressive" },
      { genre: "Drum & Bass", energy: "Fast & Loud" },
    ],
    activity: "🥊 Do 20 push-ups right now. Or write an angry letter — to anyone or anything — and then delete it. Physical movement kills the tension."
  },
  chill: {
    emoji: "🌊",
    title: "Ocean Mode",
    color: "#00CEC9",
    quote: "You've found the frequency where nothing bothers you. Stay here as long as you need.",
    tags: ["#Relaxed", "#Flow", "#Easy", "#Peaceful", "#Present"],
    music: [
      { genre: "Lo-fi Beats", energy: "Super Chill" },
      { genre: "Chillwave", energy: "Mellow" },
      { genre: "Jazz / Café", energy: "Smooth" },
    ],
    activity: "🌿 Put your phone face-down for 30 minutes. Read something you've been putting off, or simply stare out a window and let your mind wander freely."
  },
  romantic: {
    emoji: "🌹",
    title: "Soft Heart",
    color: "#FD79A8",
    quote: "Something has opened in you. Let yourself feel this fully — without overthinking it.",
    tags: ["#Tender", "#Warm", "#Dreamy", "#Open", "#Vulnerable"],
    music: [
      { genre: "R&B / Neo-Soul", energy: "Warm" },
      { genre: "Bossa Nova", energy: "Gentle" },
      { genre: "Slow Indie", energy: "Intimate" },
    ],
    activity: "💌 Write a message to someone you care about — it doesn't have to be romantic. Just tell someone what they mean to you. Unsent is fine too."
  },
  focused: {
    emoji: "🎯",
    title: "Deep Work",
    color: "#A29BFE",
    quote: "The zone is rare. You're in it. Close every tab except this one and build something worth remembering.",
    tags: ["#Sharp", "#Locked In", "#Productive", "#Clear", "#Determined"],
    music: [
      { genre: "Binaural Beats", energy: "Brain Boost" },
      { genre: "Minimal Techno", energy: "Rhythmic" },
      { genre: "Classical Piano", energy: "Focused" },
    ],
    activity: "🧠 Set a 25-minute timer (Pomodoro). Work on exactly ONE thing. No switching. Then reward yourself with a 5-minute break doing absolutely nothing."
  },
  anxious: {
    emoji: "⚡",
    title: "Electric Mind",
    color: "#FDCB6E",
    quote: "Your mind is racing because you care. That's not a flaw — that's fuel. Just slow the breath first.",
    tags: ["#Overthinking", "#Alert", "#Tense", "#Racing", "#Sensitive"],
    music: [
      { genre: "432Hz Healing", energy: "Calming" },
      { genre: "Nature Sounds", energy: "Grounding" },
      { genre: "Soft Ambient", energy: "Slow" },
    ],
    activity: "🌬️ Try box breathing: Inhale 4 seconds → Hold 4 seconds → Exhale 4 seconds → Hold 4 seconds. Repeat 4 times. Then write down the ONE thing actually worrying you."
  },
  nostalgic: {
    emoji: "🍂",
    title: "Time Travel",
    color: "#E17055",
    quote: "The past is visiting you today. Honour it — it made you exactly who you are right now.",
    tags: ["#Memories", "#Warm", "#Bittersweet", "#Soft", "#Dreamy"],
    music: [
      { genre: "70s / 80s Classics", energy: "Warm Retro" },
      { genre: "Indie Folk", energy: "Wistful" },
      { genre: "Old Bollywood", energy: "Soulful" },
    ],
    activity: "📸 Find an old photo — on your phone or in an album — and look at it for a full minute. Then text someone from that memory and just say 'hey, thinking of you.'"
  }
};

// ===== DOM =====
const moodGrid   = document.getElementById('moodGrid');
const vibeCard   = document.getElementById('vibeCard');
const vibeEmoji  = document.getElementById('vibeEmoji');
const vibeTitle  = document.getElementById('vibeTitle');
const vibeQuote  = document.getElementById('vibeQuote');
const vibeTags   = document.getElementById('vibeTags');
const musicList  = document.getElementById('musicList');
const activityTxt= document.getElementById('activityText');
const resetBtn   = document.getElementById('resetBtn');
const vibeInner  = document.querySelector('.vibe-inner');

// ===== SHOW VIBE =====
function showVibe(moodKey) {
  const m = moods[moodKey];
  if (!m) return;

  // Set content
  vibeEmoji.textContent  = m.emoji;
  vibeTitle.textContent  = m.title;
  vibeQuote.textContent  = `"${m.quote}"`;
  activityTxt.textContent = m.activity;

  // CSS color variable
  vibeInner.style.setProperty('--mood-color', m.color);
  vibeTitle.style.color = m.color;
  vibeQuote.style.borderColor = m.color;

  // Tags
  vibeTags.innerHTML = m.tags
    .map(t => `<span class="tag">${t}</span>`)
    .join('');

  // Music
  musicList.innerHTML = m.music
    .map((item, i) => `
      <div class="music-item">
        <span class="music-num" style="color:${m.color}">0${i + 1}</span>
        <span class="music-genre">${item.genre}</span>
        <span class="music-energy">${item.energy}</span>
      </div>
    `).join('');

  // Also style the num elements via CSS var
  document.querySelectorAll('.music-num').forEach(el => {
    el.style.color = m.color;
  });

  // Show card, hide grid
  moodGrid.style.opacity = '0';
  moodGrid.style.transform = 'scale(0.97)';
  moodGrid.style.transition = 'all 0.3s ease';

  setTimeout(() => {
    moodGrid.style.display = 'none';
    vibeCard.classList.add('visible');
  }, 280);
}

// ===== RESET =====
function resetView() {
  vibeCard.classList.remove('visible');
  moodGrid.style.display = 'grid';
  setTimeout(() => {
    moodGrid.style.opacity = '1';
    moodGrid.style.transform = 'scale(1)';
  }, 30);
}

// ===== EVENT LISTENERS =====
document.querySelectorAll('.mood-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const mood = btn.getAttribute('data-mood');
    showVibe(mood);
  });
});

resetBtn.addEventListener('click', resetView);

// ===== STAGGERED BUTTON ENTRANCE =====
document.querySelectorAll('.mood-btn').forEach((btn, i) => {
  btn.style.opacity = '0';
  btn.style.transform = 'translateY(20px)';
  btn.style.transition = `opacity 0.4s ${0.1 + i * 0.06}s ease, transform 0.4s ${0.1 + i * 0.06}s ease`;
  setTimeout(() => {
    btn.style.opacity = '1';
    btn.style.transform = 'translateY(0)';
  }, 100);
});
