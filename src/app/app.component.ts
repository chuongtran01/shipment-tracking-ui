import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ToastParam } from './models/Toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent implements OnDestroy {
  title = 'file-transfer-ui-angular';
  $subs: Subscription = new Subscription();
  toast: any;
  key!: string;
  _data!: ToastParam;

  constructor(private messageService: MessageService, private router: Router) {}

  addSingle(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  clearToast(key: string) {
    this.messageService.clear(key);
  }

  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
}
