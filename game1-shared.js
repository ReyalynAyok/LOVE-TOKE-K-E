const GAME1_STORAGE_KEY = "LOVE_TOKEN_KE_GAME1_STATE";

const DEFAULT_MISSIONS = [
  {
    id: "mission1",
    level: 1,
    name: "Athletic",
    unlocked: true,
    image: "images/games/game1/level/1.png",
    desc: "Kill all 5 enemies within 1 minute before running out of bullets. Maximum misses: 5. Player cannot move."
  },
  {
    id: "mission2",
    level: 2,
    name: "Patrolman",
    unlocked: false,
    image: "images/games/game1/level/2.png",
    desc: "Kill all 7 enemies within 1 minute and 30 seconds before running out of bullets. Maximum misses: 3. Player cannot move."
  },
  {
    id: "mission3",
    level: 3,
    name: "Camouflage",
    unlocked: false,
    image: "images/games/game1/level/3.png",
    desc: "Kill all 8 enemies within 2 minutes before running out of bullets. Player cannot move. Extra bullets are allowed in this level."
  },
  {
    id: "mission4",
    level: 4,
    name: "Armored Patrolman",
    unlocked: false,
    image: "images/games/game1/level/4.png",
    desc: "Kill all 9 enemies within 2 minutes and 30 seconds, avoid enemy shots, and rescue Eya by dragging her into the safe zone. Player can move. Enemies can shoot back. Special enemy is faster and may target civilians."
  },
  {
    id: "mission5",
    level: 5,
    name: "Armored Camouflage",
    unlocked: false,
    image: "images/games/game1/level/5.png",
    desc: "Kill all 10 enemies within 3 minutes, avoid enemy shots, and rescue both Eya and Kian by dragging them into the safe zone. Player can move. Enemies can shoot back. Special enemy is faster and may target civilians."
  }
];

const LEVELS = {
  1: {
    enemyCount: 5,
    bullets: 10,
    timer: 60,
    lives: 0,
    hooks: 0,
    missLimit: 5,
    enemySpeed: 0.74,
    specialSpeed: 0.86,
    enemyFire: 0,
    canMove: false
  },
  2: {
    enemyCount: 7,
    bullets: 10,
    timer: 90,
    lives: 0,
    hooks: 0,
    missLimit: 3,
    enemySpeed: 0.84,
    specialSpeed: 0.96,
    enemyFire: 0,
    canMove: false
  },
  3: {
    enemyCount: 8,
    bullets: 10,
    timer: 120,
    lives: 0,
    hooks: 0,
    missLimit: 999,
    enemySpeed: 1.02,
    specialSpeed: 1.12,
    enemyFire: 0,
    canMove: false
  },
  4: {
    enemyCount: 9,
    bullets: 10,
    timer: 150,
    lives: 5,
    hooks: 3,
    missLimit: 999,
    enemySpeed: 1.14,
    specialSpeed: 1.42,
    enemyFire: 1,
    canMove: true
  },
  5: {
    enemyCount: 10,
    bullets: 10,
    timer: 180,
    lives: 3,
    hooks: 4,
    missLimit: 999,
    enemySpeed: 1.28,
    specialSpeed: 1.62,
    enemyFire: 1,
    canMove: true
  }
};

const DEFAULT_STORE_ITEMS = [
  {
    id: "gun1",
    name: "Cherry Blaster",
    category: "Guns",
    price: 0,
    type: "weapon",
    mode: "gun",
    levelMin: 1,
    owned: true,
    quantity: Infinity,
    image: "images/games/game1/items/G1.png"
  },
  {
    id: "gun2",
    name: "Black Eclipse",
    category: "Guns",
    price: 40,
    type: "weapon",
    mode: "gun",
    levelMin: 4,
    owned: false,
    quantity: Infinity,
    image: "images/games/game1/items/G2.png"
  },
  {
    id: "gun3",
    name: "Purple Specter",
    category: "Guns",
    price: 60,
    type: "weapon",
    mode: "gun",
    levelMin: 4,
    owned: false,
    quantity: Infinity,
    image: "images/games/game1/items/G3.png"
  },
  {
    id: "knife1",
    name: "Sunflare Edge",
    category: "Knives",
    price: 30,
    type: "weapon",
    mode: "knife",
    levelMin: 1,
    owned: false,
    quantity: Infinity,
    image: "images/games/game1/items/K1.png"
  },
  {
    id: "knife2",
    name: "Rosethorn Blade",
    category: "Knives",
    price: 40,
    type: "weapon",
    mode: "knife",
    levelMin: 4,
    owned: false,
    quantity: Infinity,
    image: "images/games/game1/items/K2.png"
  },
  {
    id: "bomb1",
    name: "Bloodflare",
    category: "Bombs",
    price: 60,
    type: "weapon",
    mode: "bomb",
    levelMin: 1,
    owned: false,
    quantity: 0,
    image: "images/games/game1/items/B1.png"
  },
  {
    id: "bomb2",
    name: "Last Mercy",
    category: "Bombs",
    price: 100,
    type: "weapon",
    mode: "bomb",
    levelMin: 4,
    owned: false,
    quantity: 0,
    image: "images/games/game1/items/B2.png"
  },
  {
    id: "hook",
    name: "Hook",
    category: "Hooks",
    price: 50,
    type: "hook",
    mode: "hook",
    levelMin: 4,
    owned: false,
    quantity: 0,
    image: "images/games/game1/items/hook.png"
  },
  {
    id: "ammo5",
    name: "+5 Bullets",
    category: "Bullets",
    price: 50,
    type: "ammo",
    amount: 5,
    levelMin: 3,
    owned: false,
    quantity: 0,
    image: "images/games/game1/items/bullet.png"
  },
  {
    id: "ammo10",
    name: "+10 Bullets",
    category: "Bullets",
    price: 100,
    type: "ammo",
    amount: 10,
    levelMin: 3,
    owned: false,
    quantity: 0,
    image: "images/games/game1/items/bullet.png"
  },
  {
    id: "vest",
    name: "Vest",
    category: "Bullets",
    price: 100,
    type: "vest",
    levelMin: 4,
    owned: false,
    quantity: 0,
    image: "images/games/vest.png"
  }
];

function cloneDeep(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeItems(items) {
  return items.map((item) => {
    const copy = { ...item };
    if (copy.quantity === null) copy.quantity = Infinity;
    return copy;
  });
}

function serializeItems(items) {
  return items.map((item) => {
    const copy = { ...item };
    if (copy.quantity === Infinity) copy.quantity = null;
    return copy;
  });
}

function buildDefaultState() {
  return {
    points: 0,
    selectedMission: "mission1",
    storeSelected: "gun1",
    buyQuantity: 1,
    inventory: {
      weapons: ["gun1"],
      vest: false
    },
    equipped: "gun1",
    missions: cloneDeep(DEFAULT_MISSIONS),
    items: cloneDeep(DEFAULT_STORE_ITEMS)
  };
}

function loadGame1State() {
  try {
    const raw = localStorage.getItem(GAME1_STORAGE_KEY);
    if (!raw) return buildDefaultState();

    const parsed = JSON.parse(raw);
    const fallback = buildDefaultState();

    return {
      ...fallback,
      ...parsed,
      inventory: {
        ...fallback.inventory,
        ...(parsed.inventory || {})
      },
      missions: parsed.missions ? cloneDeep(parsed.missions) : cloneDeep(fallback.missions),
      items: parsed.items ? normalizeItems(parsed.items) : cloneDeep(fallback.items)
    };
  } catch (error) {
    return buildDefaultState();
  }
}

function saveGame1State() {
  try {
    const safeState = {
      ...window.game1State,
      items: serializeItems(window.game1State.items)
    };
    localStorage.setItem(GAME1_STORAGE_KEY, JSON.stringify(safeState));
  } catch (error) {
    console.warn("Failed to save game state:", error);
  }
}

window.game1State = loadGame1State();

function getMission() {
  return window.game1State.missions.find(
    (mission) => mission.id === window.game1State.selectedMission
  );
}

function getMissionById(id) {
  return window.game1State.missions.find((mission) => mission.id === id);
}

function getLevelConfig(level = getMission().level) {
  return LEVELS[level];
}

function getItem(id) {
  return window.game1State.items.find((item) => item.id === id);
}

function itemAllowedForMission(item, level) {
  return level >= (item.levelMin || 1);
}

function isConsumable(item) {
  return (
    item.type === "hook" ||
    item.type === "ammo" ||
    item.type === "vest" ||
    item.mode === "bomb"
  );
}

function isItemOwned(item) {
  if (!item) return false;

  if (item.type === "weapon" && !isConsumable(item)) {
    return !!item.owned;
  }

  return (item.quantity || 0) > 0;
}

function getOwnedItems(levelOverride = null) {
  const level = levelOverride || getMission().level;
  const result = [];

  window.game1State.items.forEach((item) => {
    if (!itemAllowedForMission(item, level)) return;

    if (item.type === "weapon" && !isConsumable(item) && item.owned) {
      result.push(item);
      return;
    }

    if (isConsumable(item) && item.quantity > 0) {
      result.push(item);
    }
  });

  return result;
}

function formatTime(value) {
  return `${Math.max(0, Math.ceil(value))}s`;
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function dist(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function unlockNextMission(level) {
  const next = window.game1State.missions.find((mission) => mission.level === level + 1);
  if (next) {
    next.unlocked = true;
    saveGame1State();
  }
}

function getMissionDetails(level) {
  const cfg = LEVELS[level];

  if (level === 1) {
    return {
      goal: "Kill all enemies before time or bullets run out.",
      player: "Cannot move.",
      enemies: `${cfg.enemyCount} enemies • Slow movement`,
      stats: `${cfg.bullets} bullets • Max misses: ${cfg.missLimit}`,
      unlocks: "Different firearms allowed • Extra bullets not allowed"
    };
  }

  if (level === 2) {
    return {
      goal: "Kill all enemies before time or bullets run out.",
      player: "Cannot move.",
      enemies: `${cfg.enemyCount} enemies • Slow movement`,
      stats: `${cfg.bullets} bullets • Max misses: ${cfg.missLimit}`,
      unlocks: "Different firearms allowed • Extra bullets not allowed"
    };
  }

  if (level === 3) {
    return {
      goal: "Kill all enemies before time or bullets run out.",
      player: "Cannot move.",
      enemies: `${cfg.enemyCount} enemies • Moderate-fast movement`,
      stats: `${cfg.bullets} bullets • Misses: Unlimited`,
      unlocks: "Different firearms allowed • Extra bullets allowed"
    };
  }

  if (level === 4) {
    return {
      goal: "Kill all enemies, survive enemy attacks, and rescue Eya.",
      player: "Can move.",
      enemies: `${cfg.enemyCount} enemies • Moderate-fast movement • Enemies can shoot`,
      stats: `${cfg.bullets} bullets • ${cfg.lives} lives • ${cfg.hooks} hooks`,
      unlocks: "Different firearms allowed • Extra bullets allowed • Vest possible"
    };
  }

  return {
    goal: "Kill all enemies, survive enemy attacks, and rescue Eya and Kian.",
    player: "Can move.",
    enemies: `${cfg.enemyCount} enemies • Fast movement • Enemies can shoot`,
    stats: `${cfg.bullets} bullets • ${cfg.lives} lives • ${cfg.hooks} hooks`,
    unlocks: "Different firearms allowed • Extra bullets allowed • Vest possible"
  };
}

function getStoreAccessSummary(level) {
  if (level === 1 || level === 2) {
    return "Available: Gun 1, Knife 1, Bomb 1. Extra bullets, hook, vest, and Level 4+ weapons stay locked.";
  }

  if (level === 3) {
    return "Available: Gun 1, Knife 1, Bomb 1, +5 bullets, +10 bullets. Level 4+ weapons, hook, and vest stay locked.";
  }

  return "Available: Guns 1-3, Knives 1-2, Bombs 1-2, Hook, +5 bullets, +10 bullets, Vest.";
}

function getItemStatus(item) {
  const level = getMission().level;
  const qty = window.game1State.buyQuantity || 1;

  if (!itemAllowedForMission(item, level)) {
    return { text: "Locked for this level", cls: "status-no" };
  }

  if (item.type === "weapon" && !isConsumable(item) && item.owned) {
    return { text: "Owned", cls: "status-yes" };
  }

  if (item.type !== "weapon" && item.quantity > 0) {
    return { text: `Available x${item.quantity}`, cls: "status-yes" };
  }

  if (window.game1State.points >= item.price * qty) {
    return { text: "Can buy", cls: "status-yes" };
  }

  return { text: "Not enough points", cls: "status-no" };
}

function getItemEffectText(item) {
  if (item.id === "gun1") return "Default gun. Shoots 1 enemy at a time.";
  if (item.id === "gun2") return "Shoots up to 3 enemies in one attack if aimed well.";
  if (item.id === "gun3") return "Shoots up to 5 enemies in one attack if aimed well.";
  if (item.id === "knife1") return "Cuts up to 2 nearby enemies at once.";
  if (item.id === "knife2") return "Cuts up to 3 nearby enemies at once.";
  if (item.id === "bomb1") return "Explosion can kill up to 5 enemies.";
  if (item.id === "bomb2") return "Explosion can kill up to 10 enemies.";
  if (item.id === "hook") return "Use to hook and drag civilians into the safe zone.";
  if (item.id === "ammo5") return "Adds 5 bullets during the mission.";
  if (item.id === "ammo10") return "Adds 10 bullets during the mission.";
  if (item.id === "vest") return "Single-use protection from one enemy shot.";
  return "Mission item.";
}