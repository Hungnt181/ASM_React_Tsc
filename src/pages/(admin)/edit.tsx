import { Button, Form, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../Types/Product";

const EditProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { id } = useParams();
  console.log(id);

  type formData = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
  const { control, handleSubmit, reset } = useForm<formData>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const respones = await axios.get("http://localhost:3000/products/" + id);
      console.log(respones.data);

      reset(respones.data);
    })();
  }, []);

  const eidtItem = async (data: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  }) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/products/${data.id}`,
        data
      );
      console.log(response);
      const newProduct = products.map((item) =>
        item.id === response.data.id ? response.data : item
      );
      setProducts(newProduct);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="mb-10 text-[40px] font-semibold ml-[15%]">
        {" "}
        Edit Product
      </h2>
      <Form
        onFinish={handleSubmit(eidtItem)}
        name="wrap"
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Tên sản phẩm" rules={[{ required: true }]}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Tên sản phẩm là bắt buộc" }}
            render={({ field, fieldState }) => (
              <>
                <Input {...field} />
                {fieldState.error && <span>{fieldState.error.message}</span>}
              </>
            )}
          />
        </Form.Item>

        <Form.Item label="Giá" rules={[{ required: true }]}>
          <Controller
            name="price"
            control={control}
            rules={{ required: "Nhập giá sản phẩm" }}
            render={({ field, fieldState }) => (
              <>
                <Input {...field} />
                {fieldState.error && <span>{fieldState.error.message}</span>}
              </>
            )}
          />
        </Form.Item>

        <Form.Item label="Hình ảnh" rules={[{ required: true }]}>
          <Controller
            name="image"
            control={control}
            rules={{ required: "Nhập ảnh sản phẩm" }}
            render={({ field, fieldState }) => (
              <>
                <Input {...field} />
                {fieldState.error && <span>{fieldState.error.message}</span>}
              </>
            )}
          />
        </Form.Item>

        <Form.Item label="Mô tả" rules={[{ required: true }]}>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Nhập mô tả sản phẩm" }}
            render={({ field, fieldState }) => (
              <>
                <Input {...field} />
                {fieldState.error && <span>{fieldState.error.message}</span>}
              </>
            )}
          />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProductPage;
