import React, { FC, useMemo } from "react";
import { Heading, PageHeader, TransactionsPageWrapper } from "./styles";
import { useTransactions } from "./useTransactions";
import { ColDef, VirtualizedList } from "../../components/VirtualizedList";
import { Transaction } from "./types";
import { Button } from "../../components/Button/Button";

interface TransactionsPageProps {}

const TransactionsPage: FC<TransactionsPageProps> = () => {
  const { transactions, addTransaction } = useTransactions(120000);
  const columns = useMemo<ColDef[]>(
    () => [
      {
        field: "accountNumber",
        headerName: "Account Number",
      },
      {
        field: "amount",
        headerName: "Amount",
      },
      {
        field: "type",
        headerName: "Transaction Type",
      },
    ],
    []
  );

  return (
    <TransactionsPageWrapper data-testid="TransactionsPage">
      <PageHeader>
        <Heading>Virtualized List</Heading>
        <Button type="button" onClick={addTransaction}>
          Add new item
        </Button>
      </PageHeader>
      <VirtualizedList<Transaction>
        columns={columns}
        rows={transactions}
        height={600}
        rowHeight={100}
      />
    </TransactionsPageWrapper>
  );
};

export default TransactionsPage;
