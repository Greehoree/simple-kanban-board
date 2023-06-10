<template>
  <!--TODO: add base-card component -->
  <section>
    <div class="actions">
      <input type="text" v-model="newTask">
      <ui-button @mouseup="addNewTicket" icon="add" color="primary" raised>New Task></ui-button>
    </div>
    <div class="kanban-container">
      <kanban-column v-for="(column, index) in kanbanColumns" :title="column.title" :key="column.title"
      :tickets="column.tickets">
      <kanban-ticket @moveRight="moveRight(index, ticket.title)" @moveLeft="moveLeft(index, ticket.title)" v-for="ticket in column.tickets" :key="ticket.title" :title="ticket.title" :status="column.title"
      :isLast="index === kanbanColumns.length - 1" :isFirst="index === 0"></kanban-ticket>
    </kanban-column>
  </div>
  </section>
</template>

<script>
import KanbanColumn from './KanbanColumn.vue';
import KanbanTicket from './KanbanTicket.vue';

export default {
  data() {
    return {
      kanbanColumns: [
        { title: 'Open', tickets: [{title: 'get shit done'}] },
        { title: 'In progress', tickets: [] },
        { title: 'Done', tickets: [] }
      ],
      newTask: ''
    }
  },
  components: {
    KanbanColumn,
    KanbanTicket
  },
  methods: {
    moveRight(rowIndex, title) {
      const ticketIndex = this.kanbanColumns[rowIndex].tickets.findIndex(ticket => ticket.title = title);
      const ticket = this.kanbanColumns[rowIndex].tickets.splice([ticketIndex], 1)[0];
      console.log(ticket);
      this.kanbanColumns[rowIndex+1].tickets.push(ticket);
    },

    moveLeft(rowIndex, title) {
      const ticketIndex = this.kanbanColumns[rowIndex].tickets.findIndex(ticket => ticket.title = title);
      const ticket = this.kanbanColumns[rowIndex].tickets.splice([ticketIndex], 1)[0];
      this.kanbanColumns[rowIndex-1].tickets.push(ticket);
    },

    addNewTicket() {
      this.kanbanColumns[0].tickets.push({title: this.newTask});
      this.newTask = '';
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
section {
  padding: 40px;
}
.kanban-container {
  display: grid;
  grid-template-columns: repeat(3, 350px);
  grid-template-rows: 1fr 3fr;
  justify-content: space-around;
  gap: 4rem;
}
</style>
