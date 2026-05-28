"use client";

import type { Transaction } from "@/types";

type EditModalProps = {
  transaction: Transaction | null;
  isOpen: boolean;
  onClose: () => void;
};

export function EditTransactionModal({ transaction, isOpen, onClose }: EditModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-card border border-border p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-foreground">Editar Transação</h2>
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            defaultValue={transaction?.description} 
            className="border border-border bg-background text-foreground p-2 rounded" 
          />
          <input 
            type="number" 
            defaultValue={transaction?.amount} 
            className="border border-border bg-background text-foreground p-2 rounded" 
          />
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-muted text-muted-foreground rounded hover:bg-muted/80">
              Cancelar
            </button>
            <button type="button" className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}