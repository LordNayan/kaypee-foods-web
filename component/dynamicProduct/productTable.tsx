import React from "react";
import { Table, TableWrapper } from "./styled";
///
interface TableItem {
  size: string;
  price: string;
  pcs: number;
}

interface ProductTableProps {
  tableContent?: TableItem[];
}

const ProductTable: React.FC<ProductTableProps> = ({ tableContent = [] }) => {
  return (
    <TableWrapper>
      <Table>
        <tbody>
          <tr>
            <td>Size</td>
            <td>Price</td>
            <td>Pcs</td>
          </tr>
          {tableContent.map((item, index) => (
            <tr key={index}>
              <td>{item.size}</td>
              <td>{item.price}</td>
              <td>{item.pcs}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default ProductTable;
