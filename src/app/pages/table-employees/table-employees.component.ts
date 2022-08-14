import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements OnInit {

  public listaFuncionarios: Funcionario[] = [];

  private service: FuncionarioService;
  private router: Router;

  constructor(service: FuncionarioService, router: Router) {
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
    this.service.findAll().subscribe((funcionarios) => {
      this.listaFuncionarios = [];
      for (let f of funcionarios) {
        let dados = f.payload.doc.data();
        this.listaFuncionarios.push({
          id: f.payload.doc.id,
          nome: dados['nome'],
          email: dados['email'],
          cargo: dados['cargo'],
          salario: dados['salario'],
          foto: dados['foto']
        });
      }
    });
  }

  public excluirFuncionario(id: string | undefined): void {
    if (id != undefined && window.confirm("Deseja realmente excluir o registro?")) {
      this.service.remove(id);
    }
  }

  public editarFuncionario(id: string | undefined): void {
    if (id != undefined) {
      this.router.navigate(['/edit', id]);
    }
  }
}
