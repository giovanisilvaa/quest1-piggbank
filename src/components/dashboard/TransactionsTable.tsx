"use client";

import type { Transaction } from "@/types";
import { formatDisplayDate } from "@/lib/date";

type TransactionsTableProps = {
  transactions: Transaction[];
};

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  if (transactions.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center text-sm text-muted-foreground">
        Nenhuma transação encontrada para o período selecionado.
      </div>
    );
  }

  function handleDelete(id: string): void {
    const confirmou = window.confirm("Tem certeza que deseja excluir esta transação?");

    if (confirmou) {
      console.log("Deletando a transação de ID:", id);
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Data</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Descrição</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Categoria</th>
            <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wide text-muted-foreground">Valor</th>
            <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wide text-muted-foreground">Ações</th>
          </tr>
        </thead>
        
        {/* Adicionei o suppressHydrationWarning aqui para evitar o erro na sua tela */}
        <tbody className="divide-y divide-border" suppressHydrationWarning>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="transition-colors hover:bg-accent/30">
              <td className="px-4 py-3 text-muted-foreground">{formatDisplayDate(transaction.date)}</td>
              <td className="px-4 py-3 text-foreground">{transaction.description}</td>
              <td className="px-4 py-3">
                <span className="rounded-md bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                  {transaction.category}
                </span>
              </td>
              <td className={`px-4 py-3 text-right font-medium ${transaction.type === "income" ? "text-emerald-400" : "text-red-400"}`}>
                {transaction.type === "income" ? "+" : "-"}
                {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Math.abs(transaction.amount))}
              </td>
              <td className="px-4 py-3 text-right">
                <button
                  onClick={() => handleDelete(transaction.id)}
                  className="text-xs text-red-500 hover:text-red-700 hover:underline transition-colors"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}