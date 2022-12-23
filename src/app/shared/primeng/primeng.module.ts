import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PickListModule } from 'primeng/picklist';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DividerModule } from 'primeng/divider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PasswordModule } from 'primeng/password';
import { ImageModule } from 'primeng/image';
import { TabMenuModule } from 'primeng/tabmenu';
import { TooltipModule } from 'primeng/tooltip';
import { ChipsModule } from 'primeng/chips';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageService } from 'primeng/api';
import {OverlayPanelModule} from 'primeng/overlaypanel';

@NgModule({
  providers: [MessageService],
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    InputTextModule,
    CheckboxModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    FieldsetModule,
    CardModule,
    InputTextareaModule,
    TabViewModule,
    DialogModule,
    InputNumberModule,
    TriStateCheckboxModule,
    DropdownModule,
    ListboxModule,
    TagModule,
    ProgressBarModule,
    SliderModule,
    MultiSelectModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    PickListModule,
    AutoCompleteModule,
    DividerModule,
    InputSwitchModule,
    CalendarModule,
    ToastModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    PaginatorModule,
    FileUploadModule,
    SelectButtonModule,
    PasswordModule,
    ImageModule,
    TabMenuModule,
    TooltipModule,
    ChipsModule,
    ToolbarModule,
    SplitButtonModule,
    OverlayPanelModule
  ]
})
export class PrimengModule { }
