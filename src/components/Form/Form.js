import React from "react";
import PropTypes from "prop-types";

import { Modal, Form as AntForm, Input, Radio } from "antd";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
    },
};

const Form = ({
    visible,
    onOk,
    onCancel,
    selected,
    planName,
    onChange
}) => {
    const [form] = AntForm.useForm();
    return (
        <Modal visible={visible} onOk={onOk} onCancel={onCancel}>
            <div className="form-container">
                <div className="form-header">
                    <h1 className="form-heading">Get Started with SquadVoice</h1>
                </div>
                <div className="form-body">
                    <label>Plan Name:</label> <span>{planName}</span>
                    <AntForm
                      {...formItemLayout}
                      form={form}
                    >
                        <AntForm.Item
                            name="name"
                            label="Name"
                            rules={[{
                                required: true,
                                message: 'Please input your name!',
                            }]}
                        >
                            <Input name="name" onChange={onChange} />
                        </AntForm.Item>
                        <AntForm.Item
                            name="email"
                            label="E-mail"
                            rules={[{
                                type: "email",
                                message: 'The input is not valid E-mail!',
                            }, {
                                required: true,
                                message: 'Please input your Email!',
                            }]}
                        >
                            <Input name="email" onChange={onChange}/>
                        </AntForm.Item>
                        <AntForm.Item
                            name="phone"
                            label="Phone"
                        >
                            <Input />
                        </AntForm.Item>
                        <AntForm.Item
                            name="leads"
                            label="Number of leads you generate in a month"
                            rules={[{
                                required: true,
                                message: 'Please fill the required info!',
                            }]}
                        >
                            <Input name="leads" onChange={onChange} />
                        </AntForm.Item>
                        <AntForm.Item
                            name="total leads"
                            label="Total leads in your CRM"
                            rules={[{
                                required: true,
                                message: 'Please fill the required info!',
                            }]}
                        >
                            <Input  name="total leads" onChange={onChange} />
                        </AntForm.Item>
                        <AntForm.Item
                            name="crm"
                            label="Which CRM do you use?"
                        >
                            <Input name="crm" onChange={onChange} />
                        </AntForm.Item>
                        <AntForm.Item
                            name="agents"
                            label="Number of agents"
                        >
                            <Input name="agents" onChange={onChange}/>
                        </AntForm.Item>

                        <AntForm.Item
                            name="lead source"
                            label="Which is your biggest lead source"
                        >
                            <Radio.Group name="lead source" onChange={onChange}>
                                <Radio.Button value="zillow">Zillow</Radio.Button>
                                <Radio.Button value="realtor">Realtor</Radio.Button>
                                <Radio.Button value="ylopo">Ylopo</Radio.Button>
                                <Radio.Button value="others">Others</Radio.Button>
                            </Radio.Group>
                        </AntForm.Item>
                        <AntForm.Item
                            name="media source"
                            label="How did you hear about us?"
                        >
                            <Radio.Group name="media source" onChange={onChange}>
                                <Radio.Button value="google">Google</Radio.Button>
                                <Radio.Button value="facebook">Facebook</Radio.Button>
                                <Radio.Button value="email">Email</Radio.Button>
                                <Radio.Button value="friends">Friends</Radio.Button>
                            </Radio.Group>
                        </AntForm.Item>
                    </AntForm>
                </div>
            </div>
        </Modal>
    );
};

export default Form;
