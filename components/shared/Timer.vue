<template>
  <div class="timer-wrapper" :class="{ 'time-running-out': isTimeRunningOut }">
    <div class="timer-progress-bar" :style="{ width: `${progressBarWidth}%` }"></div>
    <span class="timer-time">{{ formattedTime }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  time: {
    type: Number,
    required: true
  },

  criticalTime: {
    type: Number,
    required: false,
    default: 0
  }
});

let intervalId: ReturnType<typeof setInterval>;

const timePassedCookie = useCookie('timePassed');
const isTimeOverCookie = useCookie('isTimeOver');

const timePassed: Ref<number> = ref(Number(timePassedCookie.value) || 0);

const progress: ComputedRef<number> = computed(() => (timePassed.value / props.time) * 100);
const progressBarWidth: ComputedRef<number> = computed(() => 100 - progress.value)

const isTimeRunningOut: ComputedRef<boolean> = computed(() => timePassed.value >= props.time - props.criticalTime);

const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

const formattedTime: ComputedRef<string> = computed(() => formatTime(props.time - timePassed.value));

const startTimer = () => {
  intervalId = setInterval(() => {
    if (timePassed.value >= props.time) {
      clearInterval(intervalId);

      isTimeOverCookie.value = 'true';

      return
    }
    timePassed.value++;
  }, 1000);
};

watch(progress, () => timePassedCookie.value = timePassed.value.toString());

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped lang="scss">
.timer-wrapper {
  position: relative;
  width: 146px;
  height: 60px;
  border-radius: 12px;
  font-size: 24px;
  font-weight: 600;
  color: rgb(var(--text-color-secondary));
  background-color: rgb(var(--background-color-secondary));
  display: grid;
  overflow: hidden;

  &.time-running-out {
    border: 2px solid rgb(var(--border-color-error));
    box-shadow: 0 0 6px 0 rgba(var(--border-color-error), 0.8);
  }
}

.timer-progress-bar {
  position: absolute;
  left: 0;
  height: 100%;
  border-radius: 12px;
  background-color: rgb(var(--background-color-active));
}

.timer-time {
  position: absolute;
  justify-self: center;
  align-self: center;
}
</style>