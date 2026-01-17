const menus = [
  { name: "Kimchi Stew (김치찌개)", imageUrl: "https://via.placeholder.com/300", category: "korean" },
  { name: "Soybean Paste Stew (된장찌개)", imageUrl: "https://via.placeholder.com/300", category: "korean" },
  { name: "Bibimbap (비빔밥)", imageUrl: "https://via.placeholder.com/300", category: "korean" },
  { name: "Bulgogi (불고기)", imageUrl: "https://via.placeholder.com/300", category: "korean" },
  { name: "Grilled Pork Belly (삼겹살)", imageUrl: "https://via.placeholder.com/300", category: "korean" },
  { name: "Fried Chicken (치킨)", imageUrl: "https://via.placeholder.com/300", category: "etc" },
  { name: "Pizza (피자)", imageUrl: "https://via.placeholder.com/300", category: "western" },
  { name: "Hamburger (햄버거)", imageUrl: "https://via.placeholder.com/300", category: "western" },
  { name: "Tteokbokki (떡볶이)", imageUrl: "https://via.placeholder.com/300", category: "korean" },
  { name: "Ramen (라면)", imageUrl: "https://via.placeholder.com/300", category: "japanese" },
  { name: "Sushi (초밥)", imageUrl: "https://via.placeholder.com/300", category: "japanese" },
  { name: "Pasta (파스타)", imageUrl: "https://via.placeholder.com/300", category: "western" },
  { name: "Steak (스테이크)", imageUrl: "https://via.placeholder.com/300", category: "western" },
  { name: "Galbi-jjim (갈비찜)", imageUrl: "https://via.placeholder.com/300", category: "korean" },
  { name: "Jajangmyeon (짜장면)", imageUrl: "https://via.placeholder.com/300", category: "korean" },
  { name: "Champon (짬뽕)", imageUrl: "https://via.placeholder.com/300", category: "japanese" },
  { name: "Mapo Tofu (마파두부)", imageUrl: "https://via.placeholder.com/300", category: "chinese" },
  { name: "Sweet and Sour Pork (탕수육)", imageUrl: "https://via.placeholder.com/300", category: "chinese" },
  { name: "Chili Shrimp (깐쇼새우)", imageUrl: "https://via.placeholder.com/300", category: "chinese" }
];

const recommendBtn = document.getElementById('recommend-btn');
const copyBtn = document.getElementById('copy-btn');
const shareBtn = document.getElementById('share-btn');
const filterBtn = document.getElementById('filter-btn');
const koreanFilterBtn = document.getElementById('korean-filter-btn');
const westernFilterBtn = document.getElementById('western-filter-btn');
const chineseFilterBtn = document.getElementById('chinese-filter-btn');
const etcFilterBtn = document.getElementById('etc-filter-btn');
const menuNameDisplay = document.getElementById('menu-name');
const menuImageDisplay = document.getElementById('menu-image');
const darkModeBtn = document.getElementById('dark-mode-btn');
const tooltip = document.getElementById('tooltip');
const shareModal = document.getElementById('share-modal');
const closeBtn = document.querySelector('.close-btn');
const twitterShareBtn = document.getElementById('twitter-share-btn');
const facebookShareBtn = document.getElementById('facebook-share-btn');
const kakaoShareBtn = document.getElementById('kakao-share-btn');

const activeFilters = [];

function toggleFilter(filter) {
  const index = activeFilters.indexOf(filter);
  if (index > -1) {
    activeFilters.splice(index, 1);
  } else {
    activeFilters.push(filter);
  }
  updateFilterButtons();
}

filterBtn.addEventListener('click', () => toggleFilter('japanese'));
koreanFilterBtn.addEventListener('click', () => toggleFilter('korean'));
westernFilterBtn.addEventListener('click', () => toggleFilter('western'));
chineseFilterBtn.addEventListener('click', () => toggleFilter('chinese'));
etcFilterBtn.addEventListener('click', () => toggleFilter('etc'));

function updateFilterButtons() {
  filterBtn.classList.toggle('active', activeFilters.includes('japanese'));
  koreanFilterBtn.classList.toggle('active', activeFilters.includes('korean'));
  westernFilterBtn.classList.toggle('active', activeFilters.includes('western'));
  chineseFilterBtn.classList.toggle('active', activeFilters.includes('chinese'));
  etcFilterBtn.classList.toggle('active', activeFilters.includes('etc'));
}

let currentMenu = '';

function showRandomMenu() {
  let menuPool = menus;
  if (activeFilters.length > 0) {
    menuPool = menus.filter(menu => activeFilters.includes(menu.category));
  }
  
  if (menuPool.length === 0) {
    menuNameDisplay.textContent = '추천할 메뉴가 없어요!';
    menuImageDisplay.style.display = 'none';
    currentMenu = '';
    return;
  }

  const randomIndex = Math.floor(Math.random() * menuPool.length);
  const selectedMenu = menuPool[randomIndex];
  currentMenu = selectedMenu.name;
  menuNameDisplay.textContent = `삐약! 오늘의 추천 메뉴는... ${currentMenu}!`;
  menuImageDisplay.src = selectedMenu.imageUrl;
  menuImageDisplay.style.display = 'block';
}

recommendBtn.addEventListener('click', showRandomMenu);

copyBtn.addEventListener('click', () => {
  if (!currentMenu) return;
  navigator.clipboard.writeText(currentMenu).then(() => {
    tooltip.classList.add('show');
    setTimeout(() => {
      tooltip.classList.remove('show');
    }, 2000);
  });
});

shareBtn.addEventListener('click', () => {
  shareModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  shareModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === shareModal) {
    shareModal.style.display = 'none';
  }
});

twitterShareBtn.addEventListener('click', () => {
  if (!currentMenu) return;
  const text = `오늘 저녁은 ${currentMenu} 어때요?`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
});

facebookShareBtn.addEventListener('click', () => {
  if (!currentMenu) return;
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
  window.open(url, '_blank');
});

kakaoShareBtn.addEventListener('click', () => {
  alert('카카오톡 공유는 현재 지원되지 않습니다.');
});

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    darkModeBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  darkModeBtn.textContent = '☀️';
}

showRandomMenu();
