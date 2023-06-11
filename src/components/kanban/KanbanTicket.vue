<template>
  <el-card>
    <header>
      <h3>
        {{ ticket.name }}
      </h3>
      <div class="header-actions">
        <el-button icon="Edit" @click="openModal" size="small" circle></el-button>
        <el-button icon="Delete" @click="deleteTicket" size="small" circle type="danger"></el-button>
      </div>
    </header>
    <div class="ticket-body">
      <p>
        {{ ticket.description }}
      </p>
    </div>
    <footer>
      <div class="actions">
        <el-button @click="moveLeft" :disabled="isFirst" icon="Back" size="small" circle></el-button>
        <p>Status: <el-text :type="statusColor"> {{ column.title }}</el-text></p>
        <el-button @click="moveRight" :disabled="isLast" icon="Right" size="small" circle></el-button>
      </div>
    </footer>
    <TicketForm @close="isModalOpen = false" :isOpen="isModalOpen" mode="edit" :editableTicket="modalData"></TicketForm>
  </el-card>
</template>

<script>
import { useKanbanStore } from '../../stores/KanbanStore';
import TicketForm from './TicketForm.vue';

export default {
  setup() {
    const kanbanStore = useKanbanStore();
    
    return {kanbanStore};
  },
  components: {
    TicketForm
  },
  data() {
    return {
      isModalOpen: false,
    }
  },
  props: ['isLast', 'isFirst', 'ticket', 'column'],
  computed: {
    statusColor() {
      if (this.isLast) {
        return 'danger';
      } else if (this.isFirst) {
        return 'primary';
      } else {
        return 'warning';
      }
    },
    modalData() {
      return {
        ...this.ticket,
        ticketId: this.column.id
      }
    }
  },
  methods: {
    moveRight() {
      console.log('ticket',this.ticket);
      this.kanbanStore.moveTicket('right', this.ticket.id);
    },
    moveLeft() {
      this.kanbanStore.moveTicket('left', this.ticket.id);
    },
    openModal() {
      this.isModalOpen = true;
    },
    deleteTicket() {
      this.kanbanStore.deleteTicket(this.ticket.id);
    }
  }

}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.ticket-container {
  background-color: rgba(0,0,0, .2);
}
.actions {
  display: flex;
  justify-content: space-between;
}

.ticket-body {
  margin-bottom: 2rem;
  overflow-wrap: break-word;
}
</style>