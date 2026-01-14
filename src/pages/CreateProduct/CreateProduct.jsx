// Har bir productning id, title, description, price hossalari bo'lishi kerak.
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Input, Textarea } from "rsuite";
import { addProduct } from "../../features/todoSlice";
import { v4 as uuid } from "uuid";

function CreateProduct() {
  // states
  const [text, setText] = useState("");
  const [notfic, setNotfic] = useState(null);
  // redux
  const dispatch = useDispatch();

  // Form submit
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const getData = Object.fromEntries(formData);
    const productName = formData.get("productName");
    const productTitle = formData.get("productTitle");
    const productDesc = formData.get("productDesc");
    const productPrice = formData.get("productPrice");
    // Inputlar birortasi bo'sh bolsa ogohlantiradi
    if (!productName.trim()) {
      setText("Product nomi bo'sh qolmasin!");
      setNotfic(true);
      return;
    }
    if (!productTitle.trim()) {
      setText("Product title bo'sh qolmasin!");
      setNotfic(true);
      return;
    }
    if (!productDesc.trim()) {
      setText("Product description bo'sh qolmasin!");
      setNotfic(true);
      return;
    }
    if (!productPrice.trim()) {
      setText("Iltimos product narxni kriting!");
      setNotfic(true);
      return;
    }
    toast.success("Product muvoffaqiyatli qo'shildi");
    setNotfic(false);
    const data = {
      ...getData,
      id: uuid(),
    };
    dispatch(addProduct(data));
    e.target.reset();
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 border-gray-300 border rounded-lg p-4">
      {notfic && (
        <span className="w-full inline-flex items-center rounded-md bg-red-400/10 px-4 py-3 text-xs font-medium text-red-400 inset-ring inset-ring-red-400/20">
          {text}
        </span>
      )}

      <form
        onSubmit={handleSubmit}
        id="add-product"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
      >
        <Input placeholder="Product name" name="productName" />
        <Input placeholder="Product title" name="productTitle" />
        <Textarea
          resize="vertical"
          placeholder="Product description"
          name="productDesc"
          h={"40px"}
        />
        <Input
          h={"35px"}
          placeholder="Product price"
          name="productPrice"
          type="number"
        />
      </form>
      <Button type="submit" form="add-product" appearance="primary" mt={"10px"}>
        Add product
      </Button>
    </div>
  );
}

export default CreateProduct;
