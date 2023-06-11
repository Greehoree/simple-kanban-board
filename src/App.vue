<template>
    <the-header></the-header>
    <kanban-board></kanban-board>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import KanbanBoard from './components/kanban/KanbanBoard.vue';
import { useKanbanStore } from './stores/KanbanStore';

export default {
  setup() {
    const kanbanStore = useKanbanStore();

    return {kanbanStore};
  },
  components: {
    TheHeader,
    KanbanBoard,
  },
  watch: {
    kanbanStore:{
      handler() {
        this.kanbanStore.updateLocalStorage();
      },
      deep: true
    }
  },
  beforeCreate() {
    this.kanbanStore.parseLocalStorage();
  }
}
</script>

<style scoped>
</style>
