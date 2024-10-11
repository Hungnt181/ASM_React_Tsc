import { Button, Form, Input } from "antd";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  type formData = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
  const { control, handleSubmit } = useForm<formData>();
  const navigate = useNavigate();
  const addItem = async (data: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  }) => {
    try {
      const response = await axios.post("http://localhost:3000/products", data);
      console.log(response);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="mb-10 text-[40px] font-semibold ml-[15%]">
        {" "}
        Add New Product
      </h2>
      <Form
        onFinish={handleSubmit(addItem)}
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

export default AddProductPage;
