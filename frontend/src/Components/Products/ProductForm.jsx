import { Checkbox, Col, Form, Input, Modal, Row, Select, Tabs } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

  //checkbox
  const checkBoxes = [
    {
      label: "Bill available",
      name: "billAvailable",
    },
    {
      label: "Warranty available",
      name: "warrantyAvailable",
    },
    {
      label: "Accessories available",
      name: "accessoriesAvailable",
    },
    {
      label: "Box available",
      name: "boxAvailable",
    },
  ];
  //rules for inputs
  const rules = [
    {
      required: true,
      message: true,
    },
  ];

const ProductForm = ({ showProductForm, setShowProductForm }) => {
  const formRef = React.useRef(null);

  // handling form here
  const onFinish = (values) => {
    console.log(values)
  }
  return (
    <Modal
      open={showProductForm}
      //   onOk={handleOk}
      onCancel={() => setShowProductForm(false)}
      centered
      cancelButtonProps={{
        style: {
          height: "40px",
        },
      }}
      okButtonProps={{
        style: {
          backgroundColor: "#1890ff",
          borderColor: "#1890ff",
          height: "40px",
        },
      }}
      width={1000}
      okText="Save"
      onOk={() => {
        formRef.current.submit();
      }}
    >
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Information" key="1">
          <Form layout="vertical" ref={formRef} onFinish={onFinish}>
            <Form.Item
              rules={rules}
              label="Name"
              name="name"
              style={{ width: "700px" }}
            >
              <Input type="text" className="h-9" />
            </Form.Item>

            <Form.Item
              rules={rules}
              label="Description"
              name="description"
              style={{ width: "700px" }}
            >
              <TextArea type="text" />
            </Form.Item>

            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item rules={rules} label="Price" name="price">
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item rules={rules} label="Category" name="category">
                  <Select value="" placeholder="Select">
                    <Select.Option value="mobile">Mobile</Select.Option>
                    <Select.Option value="computer">Computer</Select.Option>
                    <Select.Option value="home">Home</Select.Option>
                    <Select.Option value="sports">Sports</Select.Option>
                    <Select.Option value="mens">Mens</Select.Option>
                    <Select.Option value="womens">Womens</Select.Option>
                    <Select.Option value="education">Education</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item rules={rules} label="Age (month)" name="age">
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
            <div className="flex gap-8">
              {checkBoxes.map((item) => {
                return (
                  <Form.Item label={item.label} name={item.name}>
                    {" "}
                    <Checkbox value={item.name} onChange={(e) => {
                       formRef.current.setFieldsValue({
                        [item.name] : e.target.checked,
                       });
                    }} 
                    checked={formRef.current?.getFieldsValue(item.name)}
                    />
                  </Form.Item>
                );
              })}
            </div>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Image" key="2">
          <h1>Image</h1>
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  );
}

export default ProductForm
