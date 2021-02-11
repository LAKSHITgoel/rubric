import React from "react";

import TabBar from "./components/TabBar";
import Plans from "./components/Plans";
import Form from "./components/Form";
import DATA from "./data.json";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      selected: "$300K-$400K", // default: in case of an API fail
      loading: true,
      isModalVisible: false,
      planName: null,
      formData: {}
    }
  }

  componentDidMount() {
    // this is where API call happens
    const { data, selected } = DATA;
    this.setState({
      data,
      selected,
      loading: false
    });
  }

  handleTabPosition = (e) => {
    this.setState({ selected: e.target.value });
  }

  handleOk = () => {
    alert(JSON.stringify(this.state.formData));
  }

  handleCancel = () => {
    this.setState({ isModalVisible: false});
  };

  handleModal = (planName) => {
    this.setState({
      isModalVisible: true,
      planName
    });
  }

  onChange = (e) => {
    this.setState({...this.state,
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value}
      }
    );
  }

  render() {
    const { data, selected, loading, isModalVisible, planName } = this.state;
    if (loading) return null;
    return (
      <div className="app">
        <div className="tab-bar-container">
          <TabBar
            data={data}
            handleTabPosition={this.handleTabPosition}
            selected={selected}
          />
        </div>
        <div className="plans-container">
          <Plans
            data={data}
            selected={selected}
            handleModal={this.handleModal}
          />
        </div>
        <Form
          visible={isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          selected={selected}
          planName={planName}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
