import React, { Component } from 'react';
import api from './api';
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"

class App extends Component {
  
  state = {
    arquivos: [],
  }

  async componentDidMount(){
    const response = await api.get('tipo/remessa');

    this.setState({arquivos: response.data});
  }

  render() {

    const {arquivos} = this.state;

    return <ReactFlexyTable data={arquivos} filterable nonFilterCols={["id", "quantLinhas","valorTotal"]} />
  }
}

export default App;
