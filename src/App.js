import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilesUploadComponent from './components/UploadComp';
import FolderComponent from './components/FolderComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
         <h2>React Multiple Files Upload Example</h2>
         <FilesUploadComponent />
          <FolderComponent />
      </div>
    );
  }
}
export default App;