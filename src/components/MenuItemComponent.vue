<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    left_icon?: object | null
    list?: string[] | null
    background?: string
    color?: string
    right_icon?: object | null
    bold_text?: boolean
    stroke?: string | null
    border?: string
    border_radius?: string
  }>(),
  {
    bold_text: false,
    background: 'none',
    color: 'gray',
    border: 'none',
    border_radius: '7px',
  },
)

const isOpen = ref(false)
const rootEl = ref<HTMLElement | null>(null)
const buttonEl = ref<HTMLElement | null>(null)
const buttonWidth = ref<number>(0)

function updateWidth() {
  if (buttonEl.value) {
    buttonWidth.value = buttonEl.value.offsetWidth
  }
}

function toggleOpen() {
  isOpen.value = !isOpen.value
  nextTick(() => updateWidth())
}

function handleDocumentClick(e: MouseEvent) {
  const target = e.target as Node | null
  if (isOpen.value && rootEl.value && target && !rootEl.value.contains(target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
  // initial width measurement and resize listener
  updateWidth()
  window.addEventListener('resize', updateWidth)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
  window.removeEventListener('resize', updateWidth)
})
</script>

<template>
  <div v-if="list && list.length > 0" class="dropdown" ref="rootEl">
    <span class="dropdown-trigger">
      <button
        class="dropdown-button"
        :style="{ background: props.background, color: props.color }"
        @click.stop="toggleOpen"
        :aria-expanded="isOpen"
        ref="buttonEl"
      >
        <component :stroke="props.stroke" v-if="left_icon" class="button-icon" :is="left_icon" />
        <p :class="props.bold_text ? 'bold-text' : ''">{{ label }}</p>
        <component :stroke="props.stroke" v-if="right_icon" class="button-icon" :is="right_icon" />
      </button>
      <div class="dropdown-content" v-show="isOpen" :style="{ width: buttonWidth + 'px' }">
        <a v-for="(item, index) in list" :key="index" href="#">{{ item }}</a>
      </div>
    </span>
  </div>
  <button
    v-else
    class="menu-item"
    :style="`background: ${props.background}; color: ${props.color}; border: ${props.border}; border-radius: ${props.border_radius};`"
  >
    <component :stroke="props.stroke" v-if="left_icon" class="button-icon" :is="left_icon" />
    <span class="menu-item-label" :class="props.bold_text ? 'bold-text' : ''">{{ label }}</span>
    <component :stroke="props.stroke" v-if="right_icon" class="button-icon" :is="right_icon" />
  </button>
</template>

<style scoped>
.menu-item:hover {
  color: #090909;
}

.bold-text {
  font-weight: 550;
}

.menu-item-label {
  font-size: 16px;
  margin-top: auto;
  margin-bottom: auto;
}

.menu-item.active .menu-item-label {
  font-weight: bold;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 8px 4px;
  background-color: transparent;
  border-radius: 4px;

  color: #7e7e7e;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-icon {
  height: 20px;
  width: 20px;
  margin-right: 6px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background: #27d94f;
  color: white;
  padding: 10px 5px 10px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dropdown-button p {
  font-size: 16px;
  margin: 0;
  padding-right: 8px;
  padding-top: 1px;
}

.dropdown-content {
  display: block;
  position: absolute;
  background: white;
  border-radius: 8px;
  padding: 8px 0;
  margin-top: 6px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
  z-index: 10;
  left: 0;
}

.dropdown-content a {
  padding: 10px 14px;
  display: block;
  text-decoration: none;
  color: #374151;
  transition: 0.15s;
}

.dropdown-content a:hover {
  background: #f3f4f6;
}
</style>
