import React from "react";
import { Table, TableWrapper } from "./styled";

const ProductTable = ({ tableContent }: any) => {
  return (
    
    <TableWrapper>
      <Table>
        <tbody>
        <tr style={{ color: '#323434' }}>
  <td>Size</td>
  <td>Price</td>
  <td>Pcs</td>
</tr>

          {tableContent &&  tableContent?.map((item: any) => (
            <tr style={{ color: '#323434'}}>
              <td>{item?.size}</td>
              <td>{item?.price}</td>
              <td>{item?.pcs}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default ProductTable;
