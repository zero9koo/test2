const menus = [
  { name: "Kimchi Stew (김치찌개)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Korean_stew-Kimchi_jjigae-01.jpg", category: "korean" },
  { name: "Soybean Paste Stew (된장찌개)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Doenjang_jjigae.jpg/1280px-Doenjang_jjigae.jpg", category: "korean" },
  { name: "Bibimbap (비빔밥)", imageUrl: "https://images.unsplash.com/photo-1591983984832-1b1191857993?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "korean" },
  { name: "Bulgogi (불고기)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bulgogi.jpg/1920px-Bulgogi.jpg", category: "korean" },
  { name: "Grilled Pork Belly (삼겹살)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Samgyeopsal-gui.jpg/1920px-Samgyeopsal-gui.jpg", category: "korean" },
  { name: "Fried Chicken (치킨)", imageUrl: "https://images.unsplash.com/photo-1562967914-01efa7e87832?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "etc" },
  { name: "Pizza (피자)", imageUrl: "https://images.unsplash.com/photo-1513104890138-e199024e0d8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "western" },
  { name: "Hamburger (햄버거)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Red_Robin_Bacon_Cheeseburger.jpg/1920px-Red_Robin_Bacon_Cheeseburger.jpg", category: "western" },
  { name: "Tteokbokki (떡볶이)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tteok-bokki.jpg/1920px-Tteok-bokki.jpg", category: "korean" },
  { name: "Ramen (라면)", imageUrl: "https://images.unsplash.com/photo-1591814468924-caf87d1b73e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "japanese" },
  { name: "Sushi (초밥)", imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "japanese" },
  { name: "Pasta (파스타)", imageUrl: "https://images.unsplash.com/photo-1621996346565-e326b20f54b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "western" },
  { name: "Steak (스테이크)", imageUrl: "https://images.unsplash.com/photo-1546964124-6c1467ae0524?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "western" },
  { name: "Galbi-jjim (갈비찜)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Galbijjim_in_a_hot_pot.jpg/1920px-Galbijjim_in_a_hot_pot.jpg", category: "korean" },
  { name: "Jajangmyeon (짜장면)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jajangmyeon.jpg/1920px-Jajangmyeon.jpg", category: "korean" },
  { name: "Champon (짬뽕)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jjamppong_%28Korean_Chines_seafood_noodle_soup%29.jpg/3024px-Jjamppong_%28Korean_Chines_seafood_noodle_soup%29.jpg", category: "japanese" },
  { name: "Mapo Tofu (마파두부)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/Mapodoufu.jpg", category: "chinese" },
  { name: "Sweet and Sour Pork (탕수육)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tangsuyuk_%28Korean_sweet_and_sour_pork%29.jpg/1920px-Tangsuyuk_%28Korean_sweet_and_sour_pork%29.jpg", category: "chinese" },
  { name: "Chili Shrimp (깐쇼새우)", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/KkanSyoSaeu.jpg/1920px-KkanSyoSaeu.jpg", category: "chinese" }
];

const recommendBtn = document.getElementById('recommend-btn');
const filterBtn = document.getElementById('filter-btn');
const koreanFilterBtn = document.getElementById('korean-filter-btn');
const westernFilterBtn = document.getElementById('western-filter-btn');
const chineseFilterBtn = document.getElementById('chinese-filter-btn');
const etcFilterBtn = document.getElementById('etc-filter-btn');
const menuNameDisplay = document.getElementById('menu-name');
const menuImageDisplay = document.getElementById('menu-image');

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

recommendBtn.addEventListener('click', () => {
  let menuPool = menus;
  if (activeFilters.length > 0) {
    menuPool = menus.filter(menu => activeFilters.includes(menu.category));
  }
  
  if (menuPool.length === 0) {
    menuNameDisplay.textContent = '추천할 메뉴가 없어요!';
    menuImageDisplay.style.display = 'none';
    return;
  }

  const randomIndex = Math.floor(Math.random() * menuPool.length);
  const selectedMenu = menuPool[randomIndex];
  menuNameDisplay.textContent = `삐약! 오늘의 추천 메뉴는... ${selectedMenu.name}!`;
  menuImageDisplay.src = selectedMenu.imageUrl;
  menuImageDisplay.style.display = 'block';
});
