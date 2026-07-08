import { Table } from "@/components/retroui/Table";


interface Spending_Item {
  sl: string;
  info: string;
  amount: number;
}

const sls: Spending_Item[] = [
  {
    sl: "1",
    info: "John Doe",
    amount: 250,
  },

  {
    sl: "2",
    info: "Crossaints",

    amount: 150.0,
  },
];



export default function Spending_table() {

const total_Price = sls.reduce((sum, item) => sum + item.amount, 0);


  return (
    <Table className="max-w-lg mb-6 mx-auto">
      <Table.Header>
        <Table.Row>
          <Table.Head className="w-[100px]">sl</Table.Head>
          <Table.Head>Info</Table.Head>

          <Table.Head className="text-right">Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sls.map((sl) => (
          <Table.Row key={sl.sl}>
            <Table.Cell className="font-medium">{sl.sl}</Table.Cell>
            <Table.Cell>{sl.info}</Table.Cell>

            <Table.Cell className="text-right">{sl.amount}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={2} className="text-white">
            Total
          </Table.Cell>
          <Table.Cell className="text-right text-white">€{total_Price}</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
