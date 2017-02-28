import { 
    Component,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'note-creator',
    styles: [require('./note-creator.css')],
    template: require('./note-creator.html')
})
export class NoteCreator {
    @Output() createNote = new EventEmitter();
    colors: string[] = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', '#FFFFFF'];

    newNote = {
        title: '',
        value: '',
        color: 'white'
    };
    
    fullForm: boolean = false;
    
    onCreateNote() {
        const { title, value, color } = this.newNote;
        
        if (title && value) {
            this.createNote.next({title, value, color});
        }
        
        this.reset();
        this.toggle(false);
    }
    
    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        }
    }
    
    toggle(value: boolean) {
        this.fullForm = value;
    }

    onColorSelect(color: string) {
        this.newNote.color = color;
    }
}
