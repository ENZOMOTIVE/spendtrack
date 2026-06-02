
import {
    Table,
} from "@/components/retroui/Table"
 
const sls = [
    {
        sl: "1",
        info: "John Doe",

        totalAmount: "$250.00",

    },
    {
        sl: "2",
        info: "",

        totalAmount: "$150.00",

    }
   
    
]
 
export default function Spending_table() {
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


                        <Table.Cell className="text-right">{sl.totalAmount}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.Cell colSpan={2} className="text-white">Total</Table.Cell>
                    <Table.Cell className="text-right text-white">€2,500.00</Table.Cell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}