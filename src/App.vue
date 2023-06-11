<template>
    <the-header></the-header>
    <kanban-board></kanban-board>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import KanbanBoard from './components/kanban/KanbanBoard.vue';

export default {
  components: {
    TheHeader,
    KanbanBoard,
  }
}
</script>

<style scoped>
</style>
