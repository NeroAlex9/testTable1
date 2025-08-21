import s from './App.module.scss'
import Table from "./tables/Table.tsx";
import {paymentsColumn, paymentsData} from "./data/dataPayments.ts";
import {invoicesColumn, invoicesData} from "./data/dataInvoices.ts";

function App() {
  return (
    <div className={s.app}>
      <Table name={'Данные платежей'} nameColumn={paymentsColumn} data={paymentsData} />
      <Table name={'Данные счетов'} nameColumn={invoicesColumn} data={invoicesData} />
      <button className={s.button}>Сопоставить</button>
    </div>
  )
}

export default App
