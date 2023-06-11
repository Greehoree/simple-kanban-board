import {defineStore} from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useKanbanStore = defineStore("kanban",{
  state: () => ({
    tickets: [
      {
        name: 'New Ticket',
        columnId: 'c1',
        id: 't1'
      },
      {
        name: 'New Ticket',
        columnId: 'c1',
        id: 't2'
      },
      {
        name: 'New Ticket',
        columnId: 'c1',
        id: 't3'
      }
    ],
    columns: [
      {
        title: 'Open',
        id: 'c1'
      },
      {
        title: 'In Process',
        id: 'c2'
      },
      {
        title: 'Done',
        id: 'c3'
      },
    ]
  }),
  getters: {
    kanbanData() {
      return this.columns.map(column => {
        return {
          ...column,
          tickets: this.tickets.filter(ticket => ticket.columnId === column.id)
        }
      });
    },
    lastColumn() {
      return this.columns[this.columns.length -1];
    },
    firstColumn() {
      return this.columns[0];
    }
  },
  actions: {
    addNewTicket(ticketName) {
      this.tickets.push({
        name: ticketName,
        id: uuidv4(),
        columnId: 'c1'
      })
    },
    moveTicket(direction, ticketId) {
      console.log(this.tickets);
     const ticket = this.tickets.find(ticket => ticket.id === ticketId);
     const columnIndex = this.columns.findIndex(column => ticket.columnId === column.id); 
     if (direction == 'right') {
        ticket.columnId = this.columns[columnIndex+1].id;
      } else if (direction == 'left') {
        ticket.columnId = this.columns[columnIndex-1].id;
     }
    }
  }
});