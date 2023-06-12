import {defineStore} from 'pinia';
import { v4 as uuidv4 } from 'uuid';

const storageName = 'LOCAL_KANBAN_STATE';

export const useKanbanStore = defineStore("kanban",{
  state: () => ({
    tickets: [
      {
        name: 'New Ticket',
        columnId: 'c1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla turpis sit amet lectus scelerisque placerat. Vestibulum malesuada eros sed neque dignissim, sit amet vestibulum leo faucibus. Etiam ac molestie ex. Phasellus elementum euismod odio, eu finibus ligula porta quis. ',
        id: 't1'
      },
      {
        name: 'Another Ticket',
        columnId: 'c2',
        description: 'Sed at vulputate mi. Mauris ultrices nulla quis nisi sollicitudin, non lacinia diam commodo. Donec at massa et neque accumsan porta nec eu lorem.',
        id: 't2'
      },
      {
        name: 'Finished Ticket',
        columnId: 'c3',
        description: 'Proin porttitor rhoncus diam, eget suscipit lorem facilisis vitae.',
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
    ],
    dragableKludge: null,
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
    moveTicket(direction, ticketId) {
     const ticket = this.tickets.find(ticket => ticket.id === ticketId);
     const columnIndex = this.columns.findIndex(column => ticket.columnId === column.id); 
     if (direction == 'right') {
        ticket.columnId = this.columns[columnIndex+1].id;
      } else if (direction == 'left') {
        ticket.columnId = this.columns[columnIndex-1].id;
     }
    },
    createTicket({name, description, status}) {
      const ticket = {
        description,
        name: name,
        columnId: status,
        id: uuidv4()
      }
      this.tickets.push(ticket);
    },
    editTicket(newTicket) {
      let ticketObject = this.tickets.find(ticket => ticket.id === newTicket.id);
      ticketObject.columnId = newTicket.status;
      ticketObject.description = newTicket.description;
      ticketObject.name = newTicket.name;
    },
    deleteTicket(ticketId) {
      const ticketIndex = this.tickets.findIndex(ticket => ticket.id === ticketId);
      this.tickets.splice(ticketIndex, 1);
    },
    updateLocalStorage() {
      const localKanbanState = {
        tickets: this.tickets,
        columns: this.columns
      };
      localStorage.setItem(storageName, JSON.stringify(localKanbanState))
    },
    parseLocalStorage() {
      let localKanbanState = localStorage.getItem(storageName);
      localKanbanState &&= JSON.parse(localKanbanState);
      if (localKanbanState && localKanbanState.tickets && localKanbanState.columns) {
        this.columns = localKanbanState.columns;
        this.tickets = localKanbanState.tickets;
      }
    },
    setDraggableKludge(itemId) {
      this.dragableKludge = itemId;
    },
    dragTicket(columnId) {
      if (this.dragableKludge) {
        const ticket = this.tickets.find(ticket => ticket.id === this.dragableKludge);
        ticket.columnId = columnId;
        this.dragableKludge = null;
      }
    }
  }
});