<template>
  <el-container>
    <el-header>
      <h2>{{ title }}</h2>
    </el-header>
    <el-main>
        <kanban-ticket v-for="ticket in tickets" :key="ticket.id"  :isLast="isLast" :column="column" :isFirst="isFirst" :ticket="ticket"></kanban-ticket>
    </el-main>
</el-container>
</template>

<script>
import KanbanTicket from './KanbanTicket.vue';
import { useKanbanStore } from '../../stores/KanbanStore';

export default {
  setup() {
    const kanbanStore = useKanbanStore();
    return {kanbanStore};
  },
  components: {
    KanbanTicket
  },
  props: ['title', 'tickets', 'column'],
  computed: {
    isLast() {
      return this.kanbanStore.lastColumn.id === this.column.id;
    },
    isFirst() {
      return this.kanbanStore.firstColumn.id === this.column.id;
    }
  }
}
</script>

<style scoped>
.el-container {
  border-radius: 4px;
  background: #d3dce6;
  padding-top: 20px;
  min-height: 400px;
}
.el-main {
  /* background: red; */
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>