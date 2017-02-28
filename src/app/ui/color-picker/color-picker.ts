import { 
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'color-picker',
    styles: [require('./color-picker.css')],
    template: require('./color-picker.html')
})

export class ColorPicker {
    @Input() colors: string[] = [];
    @Output() selected = new EventEmitter();
    
    isSelectorVisible: boolean = false;
    
    showSelector(value: boolean) {
        this.isSelectorVisible = value;
    }
    
    selectColor(color: string) {
        this.showSelector(false);
        this.selected.next(color);
    }
}
