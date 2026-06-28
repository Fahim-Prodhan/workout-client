export const DAYS_BN = ['শনি', 'রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র'];

export const WORKOUTS = [
  {
    day: 'শনিবার', focus: 'Chest & Shoulder (Push)',
    tag: 'tag-push', tagLabel: 'Push', color: '#4ade80',
    exercises: [
      { name: 'Push-up', sets: '৩ × ১৫' },
      { name: 'Pike Push-up', sets: '৩ × ১০' },
      { name: 'Tricep Dip (চেয়ারে)', sets: '৩ × ১২' },
      { name: 'Wide Push-up', sets: '২ × ১২' },
    ],
  },
  {
    day: 'রবিবার', focus: 'Back & Bicep (Pull)',
    tag: 'tag-pull', tagLabel: 'Pull', color: '#22d3ee',
    exercises: [
      { name: 'Towel Doorframe Row', sets: '৩ × ১২' },
      { name: 'Superman Hold', sets: '৩ × ১৫' },
      { name: 'Doorframe Row (দরজার দুই পাশ ধরে পিছনে হেলে টানো)', sets: '৩ × ১২' },
      { name: 'Reverse Snow Angel (পেটে শুয়ে)', sets: '৩ × ১২' },
    ],
  },
  {
    day: 'সোমবার', focus: 'Legs & Glutes',
    tag: 'tag-legs', tagLabel: 'Legs', color: '#f97316',
    exercises: [
      { name: 'Bodyweight Squat', sets: '৩ × ২০' },
      { name: 'Reverse Lunge', sets: '৩ × ১৫ (প্রতি পা)' },
      { name: 'Calf Raise', sets: '৩ × ২৫' },
      { name: 'Glute Bridge', sets: '৩ × ২০' },
    ],
  },
  {
    day: 'মঙ্গলবার', focus: 'বিশ্রামের দিন 🛌',
    tag: 'tag-rest', tagLabel: 'Rest', color: '#7c8299',
    exercises: [
      { name: 'হালকা হাঁটা (২০-৩০ মিনিট)', sets: '—' },
      { name: 'Stretching', sets: '১০ মিনিট' },
    ],
  },
  {
    day: 'বুধবার', focus: 'Push (Harder)',
    tag: 'tag-push', tagLabel: 'Push', color: '#4ade80',
    exercises: [
      { name: 'Diamond Push-up', sets: '৩ × ১২' },
      { name: 'Wide Push-up', sets: '৩ × ১৫' },
      { name: 'Tricep Dip', sets: '৩ × ১২' },
      { name: 'Incline Push-up', sets: '২ × ১৫' },
    ],
  },
  {
    day: 'বৃহস্পতিবার', focus: 'Pull + Core',
    tag: 'tag-pull', tagLabel: 'Pull+Core', color: '#22d3ee',
    exercises: [
      { name: 'Superman', sets: '৩ × ১৫' },
      { name: 'Plank Hold', sets: '৩ × ৪৫ সেকেন্ড' },
      { name: 'Bicycle Crunch', sets: '৩ × ২০' },
      { name: 'Leg Raise', sets: '৩ × ১৫' },
    ],
  },
  {
    day: 'শুক্রবার', focus: 'Full Body Blast',
    tag: 'tag-full', tagLabel: 'Full Body', color: '#a78bfa',
    exercises: [
      { name: 'Burpee', sets: '৩ × ১০' },
      { name: 'Jump Squat', sets: '৩ × ১৫' },
      { name: 'Push-up', sets: '৩ × ১৫' },
      { name: 'Mountain Climber', sets: '৩ × ২০' },
    ],
  },
];

export const MEALS = [
  {
    time: 'সকাল ৭-৮টা', name: 'Breakfast', icon: '🌅', iconBg: 'rgba(251,191,36,0.15)',
    items: [
      { food: 'ভাত (১ কাপ)', cal: '200 kcal' },
      { food: 'ডিম পোচ (২টা)', cal: '140 kcal' },
      { food: 'কলা (১টা)', cal: '90 kcal' },
      { food: 'চা / পানি', cal: '10 kcal' },
    ],
    total: '~440 kcal',
    alt: 'অথবা: রুটি ৩টা + ডিম ভাজি ২টা',
  },
  {
    time: 'দুপুর ১-২টা', name: 'Lunch', icon: '☀️', iconBg: 'rgba(249,115,22,0.15)',
    items: [
      { food: 'ভাত (২ কাপ)', cal: '400 kcal' },
      { food: 'মুরগির মাংস (১ পিস)', cal: '180 kcal' },
      { food: 'ডাল (১ বাটি)', cal: '120 kcal' },
      { food: 'সবজি ভাজি', cal: '80 kcal' },
    ],
    total: '~780 kcal',
    alt: 'মাছ দিয়েও চলবে, কিন্তু পরিমাণ বেশি রাখো',
  },
  {
    time: 'বিকাল ৪-৫টা', name: 'Snack (গুরুত্বপূর্ণ!)', icon: '🌇', iconBg: 'rgba(167,139,250,0.15)',
    items: [
      { food: 'চিনাবাদাম (১ মুঠো)', cal: '160 kcal' },
      { food: 'কলা (২টা)', cal: '180 kcal' },
    ],
    total: '~340 kcal',
    alt: 'অথবা: ছোলা সেদ্ধ ১ বাটি + লবণ-লেবু',
  },
  {
    time: 'রাত ৮-৯টা', name: 'Dinner', icon: '🌙', iconBg: 'rgba(34,211,238,0.15)',
    items: [
      { food: 'ভাত (২ কাপ)', cal: '400 kcal' },
      { food: 'ডিম / মাছ', cal: '150 kcal' },
      { food: 'সবজি', cal: '80 kcal' },
      { food: 'দুধ (১ গ্লাস, পারলে)', cal: '150 kcal' },
    ],
    total: '~780 kcal',
    alt: 'ঘুমানোর ২ ঘণ্টা আগে খাওয়া শেষ করো',
  },
];

export const QUOTES = [
  { q: 'প্রতিদিন একটু একটু করে এগোলেই একদিন অনেক দূর যাওয়া হয়।', a: '— FitBD Trainer' },
  { q: 'তোমার শরীর পারে, শুধু মনকে রাজি করাও।', a: '— FitBD Trainer' },
  { q: 'Gym না থাকলেও determination থাকলে সব হয়।', a: '— FitBD Trainer' },
  { q: 'আজকের ৩০ মিনিট কালকের তুমিকে বদলে দেবে।', a: '— FitBD Trainer' },
  { q: 'বড় result ছোট ছোট consistent effort থেকে আসে।', a: '— FitBD Trainer' },
  { q: 'Muscle তৈরি হয় kitchen-এ, gym-এ না। বেশি খাও, ঠিকমতো খাও।', a: '— FitBD Trainer' },
  { q: 'Rest day মানে weak day না — এই দিনই মাসল grow করে।', a: '— FitBD Trainer' },
];

export const RULES = [
  { icon: '💧', title: 'পানি ৩ লিটার/দিন', desc: 'এটা muscle growth-এ সরাসরি কাজ করে। কম পানি = কম muscle।' },
  { icon: '😴', title: 'ঘুম ৭-৮ ঘণ্টা', desc: 'ঘুমের সময়ই মাসল তৈরি হয়, gym-এ না। ঘুম কম = সব পরিশ্রম বৃথা।' },
  { icon: '🍳', title: 'ডিম ৩টা/দিন মিনিমাম', desc: 'সবচেয়ে সস্তা protein। Muscle gain-এর জন্য protein সবচেয়ে গুরুত্বপূর্ণ।' },
  { icon: '🔄', title: 'Workout miss করলে double করবে না', desc: 'পরের দিন স্বাভাবিকভাবে continue করো। Overtraining muscle নষ্ট করে।' },
  { icon: '📈', title: 'প্রতি ২ সপ্তাহে rep বাড়াও', desc: 'Push-up/Squat count ২-৩টা বাড়াও। Progressive overload ছাড়া muscle হয় না।' },
  { icon: '🍌', title: 'Workout-এর আগে কলা খাও', desc: 'Natural energy boost। ২০-৩০ মিনিট আগে ১-২টা কলা।' },
  { icon: '🧘', title: 'Warm-up skip করবে না', desc: 'প্রতিটা session-এর আগে ৫ মিনিট: Jumping Jack + Arm Circle + Leg Swing।' },
];

// Map JS getDay() (0=Sun) to WORKOUTS index
export function getTodayWorkoutIndex() {
  const jsDay = new Date().getDay(); // 0=Sun
  // WORKOUTS: 0=শনি, 1=রবি, 2=সোম, 3=মঙ্গল, 4=বুধ, 5=বৃহস্পতি, 6=শুক্র
  // JS: 0=Sun(রবি), 1=Mon(সোম), 2=Tue(মঙ্গল), 3=Wed(বুধ), 4=Thu(বৃহস্পতি), 5=Fri(শুক্র), 6=Sat(শনি)
  const map = [1, 2, 3, 4, 5, 6, 0]; // Sun->1, Mon->2...Sat->0
  return map[jsDay];
}

export function getBanglaDate() {
  const now = new Date();
  const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
  const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
  return `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`;
}

export function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}
