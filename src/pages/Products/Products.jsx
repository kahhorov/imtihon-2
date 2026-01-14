import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "rsuite";

function Products() {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo);
  const { Column, HeaderCell, Cell } = Table;

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      {todos.length > 0 ? (
        <Table
          height={560}
          data={todos}
          bordered
          cellBordered
          affixHeader
          affixHorizontalScrollbar
          className="select-none"
        >
          <Column width={50} align="center" fixed resizable>
            <HeaderCell style={{ fontWeight: "bold" }}>No</HeaderCell>
            <Cell>
              {(rowData, rowIndex) => {
                return <span>{rowIndex + 1}</span>;
              }}
            </Cell>
          </Column>
          <Column width={250} fixed resizable>
            <HeaderCell style={{ fontWeight: "bold" }}>Product Name</HeaderCell>
            <Cell dataKey="productName" />
          </Column>

          <Column width={250} resizable>
            <HeaderCell style={{ fontWeight: "bold" }}>
              Product Title
            </HeaderCell>
            <Cell dataKey="productTitle" />
          </Column>

          <Column width={400} resizable>
            <HeaderCell style={{ fontWeight: "bold" }}>
              Product Description
            </HeaderCell>
            <Cell dataKey="productDesc" />
          </Column>

          <Column width={200} resizable>
            <HeaderCell style={{ fontWeight: "bold" }}>
              Product Price
            </HeaderCell>
            <Cell dataKey="productPrice" />
          </Column>
        </Table>
      ) : (
        <div className="w-full h-80 flex flex-col justify-center items-center">
          <h1 className="text-3xl">Product bo'sh!</h1>
          <Button
            appearance="ghost"
            mt={"10px"}
            onClick={() => navigate("/create-products")}
          >
            Product qo'shish
          </Button>
        </div>
      )}
    </div>
  );
}

export default Products;
