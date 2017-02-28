import { Component } from '@angular/core';
import { NoteService } from '../../services';

@Component({
    selector: 'notes-container',
    styles: [require('./notes.css')],
    template: require('./notes.html')
})
export class Notes {
    notes = [];
    
    constructor(private noteService: NoteService) {
        this.noteService.getNotes()
        .subscribe(resp => this.notes = resp.data);
    }

    onCreateNote(note) {
        this.noteService.createNote(note)
        .subscribe(note => this.notes.push(note));
    }
    
    onNoteChecked(note) {
        this.noteService.completeNote(note)
        .subscribe(note => {
            const i = this.notes.findIndex(localNote => localNote.id == note.id);
            this.notes.splice(i, 1);
        })
    }
}
