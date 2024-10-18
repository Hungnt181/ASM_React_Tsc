import { useEffect, useState } from "react";
import { Product } from "../../Types/Product";
import { Button, Popconfirm, Space, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const ListProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const respones = await axios.get("http://localhost:3000/products");
        console.log(respones.data);
        setProducts(
          respones.data.map(
            (item: {
              id: number;
              name: string;
              price: number;
              image: string;
              description: string;
            }) => ({
              key: item.id,
              ...item,
            })
          )
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const remnoveItem = async (id: number) => {
    // console.log(id);
    try {
      await axios.delete("http://localhost:3000/products/" + id);
      setProducts(products.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "iamge",
      render: (text: string) => (
        <img src={text} alt="" className="w-[100px] h-[100px]" />
      ),
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      render: (text: string) => (
        <span>{text.length > 50 ? `${text.slice(0, 50)}...` : text}</span>
      ),
    },
    {
      title: "Actions",
      key: "action",
      with: 200,
      render: (
        _: string,
        item: {
          id: number;
          name: string;
          price: number;
          image: string;
          description: string;
        }
      ) => {
        console.log(item);

        return (
          <>
            <Space>
              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={() => remnoveItem(item.id)}
                // onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" danger>
                  Delete
                </Button>
              </Popconfirm>
              <Link to={`edit/${item.id}`}>
                <Button type="primary">Edit</Button>
              </Link>
            </Space>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <Link to="add">
        <Button type="primary" className="bg-[green]">
          Add new Product
        </Button>
      </Link>
      <Table
        dataSource={products}
        columns={columns}
        pagination={{ pageSize: 4 }}
      />
    </div>
  );
};

export default ListProductsPage;
