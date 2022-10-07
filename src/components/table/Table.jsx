import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

  const rows = [
    {
      id: 20001,
      product: "Man Shoes",
      img: "https://images.pexels.com/photos/186035/pexels-photo-186035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      customer: "Joahn Baker",
      date: "28 August",
      amount: 35,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 20002,
      product: "Man Shoes",
      img: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      customer: "Joahn Baker",
      date: "28 August",
      amount: 35,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 20003,
      product: "Man Shoes",
      img: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      customer: "Joahn Baker",
      date: "28 August",
      amount: 35,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 20004,
      product: "Man Shoes",
      img: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      customer: "Joahn Baker",
      date: "28 August",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 20005,
      product: "Man Shoes",
      img: "https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      customer: "Joahn Baker",
      date: "28 August",
      amount: 35,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 20006,
      product: "Man Shoes",
      img: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      customer: "Joahn Baker",
      date: "28 August",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 20007,
      product: "Man Shoes",
      img: "https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg",
      customer: "Joahn Baker",
      date: "28 August",
      amount: 35,
      method: "Cash on Delivery",
      status: "Approved",
    }
  ]
  return (
<TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List