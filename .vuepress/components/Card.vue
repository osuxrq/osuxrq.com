<template>
  <div class="user-grid">
    <template v-if="!users || users.length === 0">
      <div v-for="i in 4" :key="i" class="skeleton-card">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-info">
          <div class="skeleton-name"></div>
          <div class="skeleton-date"></div>
        </div>
      </div>
    </template>
    <template v-else>
      <div v-for="user in users" :key="user.uid" class="user-card" :class="getCardClass(user)">
        <a :href="`https://osu.ppy.sh/u/${user.uid}`" target="_blank" rel="noopener noreferrer">
          <img
            :src="`https://a.ppy.sh/${user.uid}`"
            :alt="user.name"
            class="user-avatar"
            @error="handleImageError"
          />
          <div class="user-info">
            <span class="user-name">{{ user.name }}</span>
            <slot name="extra" :user="user"></slot>
          </div>
        </a>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface User {
  disable?: boolean;
  stuff?: boolean;
  uid: string;
  name: string;
  date?: number[];
}

defineProps<{
  users: User[];
}>();

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.src = "https://a.ppy.sh/";
};

const getCardClass = (user: User) => {
  if (user.disable) {
    return "disable";
  } else if (user.stuff) {
    return "stuff";
  } else {
    return "";
  }
};
</script>

<style scoped lang="scss">
.user-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.user-card {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: var(--custom-bg-lighter);
  transition: transform 0.2s;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--custom-text);
    width: 100%;
  }
}

.disable {
  &:hover {
    transform: none !important;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: all;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: not-allowed;
  }

  filter: grayscale(100%);
}

.stuff {
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .user-name {
    background: linear-gradient(
      45deg,
      var(--custom-primary-color, #4ecdc4),
      var(--custom-secondary-color, #ff6b6b)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 1.1em;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 0.5rem;
    opacity: 0;
    background: radial-gradient(
      #c42d01 0%,
      #c42d01 10%,
      #fcf26e 40%,
      #00e754 60%,
      #00eef4 70%,
      #0070f3 100%
    );
    background-size: 300% 300%;
    filter: blur(20px);
    animation: streamer 8s infinite;
    transition: opacity 0.3s ease;
    will-change: background-position;
  }

  &:hover::after {
    opacity: 1;
  }
}

.user-card:hover {
  transform: translateY(-2px) scale(1.02);
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: bold;
  margin-bottom: 0.25rem;
}

/* 骨架屏样式 */
.skeleton-card {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: var(--custom-bg-lighter);
  border-radius: 0.5rem;
  height: 60px;
}

.skeleton-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--custom-tip-bg);
  margin-right: 1rem;
  flex-shrink: 0;
}

.skeleton-info {
  flex: 1;
}

.skeleton-name {
  height: 1rem;
  background: var(--custom-tip-bg);
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  width: 70%;
}

.skeleton-date {
  height: 0.8rem;
  background: var(--custom-tip-bg);
  border-radius: 0.25rem;
  width: 40%;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes streamer {
  100% {
    background-position: -300% -200%;
  }
}

.skeleton-card .skeleton-avatar,
.skeleton-card .skeleton-name,
.skeleton-card .skeleton-date {
  animation: pulse 1.5s ease-in-out infinite;
  will-change: opacity;
}
</style>
