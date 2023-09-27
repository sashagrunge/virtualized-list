import { faker } from "@faker-js/faker";
import { Transaction } from "./types";
import { useCallback, useEffect, useState } from "react";

const createTransaction = (): Transaction => ({
  accountNumber: faker.finance.accountNumber(),
  amount: faker.finance.amount(),
  type: faker.finance.transactionType(),
});

export const useTransactions = (count: number) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    let newTransactions: Transaction[] = [];
    for (let i = 0; i < count; i++) {
      newTransactions.push(createTransaction());
    }
    setTransactions(newTransactions);
  }, [count]);

  const addTransaction = useCallback(() => {
    const newTransaction = createTransaction();
    setTransactions([...transactions, newTransaction]);
  }, [transactions]);

  return { transactions, addTransaction };
};
