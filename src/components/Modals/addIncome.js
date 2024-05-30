import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import React from 'react'

const AddIncome = ({isIncomeModalVisible, hideIncomeModal, onFinish}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      style={{fontWeigth: 600}}
      title= 'Add Income'
      open={isIncomeModalVisible}
      onCancel={hideIncomeModal}
      footer={null}
    >
     <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          onFinish(values, "income");
          form.resetFields();
        }}
      >
        <Form.Item
          style={{ fontWeight: 600 }}
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input the name of the transaction!",
            },
          ]}
        >
          <Input type="text" className="custom-input" />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: 600 }}
          label="Amount"
          name="amount"
          rules={[
            { required: true, message: "Please input the income amount!" },
          ]}
        >
          <Input type="number" className="custom-input" />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: 600 }}
          label="Date"
          name="date"
          rules={[
            { required: true, message: "Please select the income date!" },
          ]}
        >
          <DatePicker className="custom-input" format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          label="Tag"
          name="tag"
          style={{ fontWeight: 600 }}
          rules={[{ required: true, message: "Please select a tag!" }]}
        >
          <Select className="select-input-2">
            <Select.Option value="Salary">Salary</Select.Option>
            <Select.Option value="Freelance">Freelance</Select.Option>
            <Select.Option value="Investments">Investment</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Income
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddIncome