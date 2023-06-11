<template>
  <el-dialog :model-value="isOpen" :title="title">
    <el-form :model="ticketData" label-position="top">
      <el-form-item label="Name">
        <el-input v-model="ticketData.name"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input v-model="ticketData.description" type="textarea" resize="none"></el-input>
      </el-form-item>
      <el-form-item label="Status">
        <el-select v-model="ticketData.status">
          <el-option v-for="column in kanbanColumns" :key="column.id" :value="column.id" :label="column.title" ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="$emit('close')">Cancel</el-button>
      <el-button v-if="mode == 'edit'" type="danger" @click="deleteTicket">Delete Ticket</el-button>
      <el-button v-if="mode == 'new'" type="primary" @click="createTicket">Create</el-button>
      <el-button v-else type="primary" @click="editTicket">Edit</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { useKanbanStore } from '../../stores/KanbanStore';

export default {
  setup() {
    
    const kanbanStore = useKanbanStore();

    return {kanbanStore};
  },
  props: ['isOpen', 'mode', 'editableTicket'],
  data() {
    return {
      ticketData: {
        name:'',
        description: '',
        status: 'c1',
      },
    };
  },
  methods: {
    createTicket() {
      this.kanbanStore.createTicket(this.ticketData);
      this.resetForm();
      this.$emit('close');
    },
    editTicket(){
      this.kanbanStore.editTicket({...this.ticketData, id: this.editableTicket.id});
      this.resetForm();
      this.$emit('close');
    },
    deleteTicket(){
      this.kanbanStore.deleteTicket(this.editTicket.id);
    },
    resetForm() {
      this.ticketData = {
        name:'',
        description: '',
        status: 'c1',
      };
    }
  },
  computed: {
    title() {
      if (this.mode == 'new') {
        return 'Create Ticket';
      } else if (this.mode == 'edit') {
        return 'Edit Ticket';
      } else {
        throw new Error('Invalid Mode');
      }
    },
    kanbanColumns() {
      return this.kanbanStore.columns;
    }
  },
  created() {
    if (this.editableTicket) {
      this.ticketData = {
        name: this.editableTicket.name,
        description: this.editableTicket.description || '',
        status: this.editableTicket.ticketId,
      }
    }
  }
}
</script>

<style>
</style>