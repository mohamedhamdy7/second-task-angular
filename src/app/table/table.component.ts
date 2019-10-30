import { Component} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  status;
  tables = [{
    table: 'employee',
    fields: [{

      id: '1',
      name: 'mohamed',
      age: '24'
    },
      {

        id: '2',
        name: 'seliam',
        age: '2'
      }
    ]

  },
    {
    table: 'order',
    fields: [{

      id: '6',
      order_date: '2019/10/25',
      employee: 'seliam'
    },
      {
      id: '2',
      order_date: '2019/10/8',
      employee: 'seliam'
    }]

  }];

  onEmployee() {
    this.status = 'emp';
    console.log(this.status);
  }

  onOrder() {
    this.status = 'ord';
    console.log(this.status);

  }
}
