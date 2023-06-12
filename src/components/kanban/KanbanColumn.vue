<template>
  <el-container>
    <el-header>
      <h2>{{ title }}</h2>
    </el-header>
    <!-- <el-main> -->
        <draggable v-model="secondTickets" itemKey="id" group="tickets" @start="setDraggableItem" tag="el-main" class="drag-field">
          <template #item="{ element }">
            <kanban-ticket :isLast="isLast" :column="column" :isFirst="isFirst" :ticket="element"></kanban-ticket>
          </template>
        </draggable>
      <!-- </el-main> -->
    </el-container>
  </template>
  <!-- <p>{{element.name}}</p> -->

<script>
import KanbanTicket from './KanbanTicket.vue';
import draggable from 'vuedraggable';
import { useKanbanStore } from '../../stores/KanbanStore';

export default {
  setup() {
    const kanbanStore = useKanbanStore();
    return {kanbanStore};
  },
  data() {
    return {
      dragableTicketId: null,
    };
  },
  components: {
    KanbanTicket,
    draggable
  },
  props: ['title', 'tickets', 'column'],
  computed: {
    isLast() {
      return this.kanbanStore.lastColumn.id === this.column.id;
    },
    isFirst() {
      return this.kanbanStore.firstColumn.id === this.column.id;
    },
    secondTickets: {
      get() {
        const kanbanData = this.kanbanStore.kanbanData.find(column => column.id === this.column.id).tickets;
        return kanbanData;
      }, 
      set() {
        this.kanbanStore.dragTicket(this.column.id)
      }
    },
  },
  methods: {
    setDraggableItem(arg) {
      this.kanbanStore.setDraggableKludge(arg.item.getAttribute('ticket-id'));
    },
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