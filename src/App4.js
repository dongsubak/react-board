import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.child =React.createRef();
    }
    state = {
        maxNo: 3,
        boards: [
            {
                brdno: 1,
                brdwriter: 'Lee SunSin',
                brdtitle: 'If you intend to live then you die',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: 'So SiNo',
                brdtitle: 'Founder for two countries',
                brddate: new Date()
            }
        ]
    }
    handleSaveData = (data) => {
        let boards = this.state.boards
        if (data.brdno === null || data.brdno === '' || data.brdno == undefined) {
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat({ brdno: this.state.maxNo, brddate: new Date(), ...data })
            });
        } else {
            this.setState({
                boards: boards.map(row => data.brdno === row.brdno ? {...data}: row)
            });
        }
    }

    handleSelectRow = (row) => {
        this.child.current.handdleSelectRow(row);
    }

    handleRemove = (row) => {

    }

    render() {
        const { boards } = this.state;
        
        return (
            <div>
                <BoardForm onSaveData={this.handleSaveData} ref={this.child} />
                <table borders="1">
                    <tbody>
                        <tr align="center">
                            <td width="50">No.</td>
                            <td width="300">Title</td>
                            <td width="100">Name</td>
                            <td width="100">Dates</td>
                        </tr>
                        {
                            boards.map(row => 
                                (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

class BoardItem extends React.Component {
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }
    render() {
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdtitle}</td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
                <td><button onClick={this.handleRemove}>X</button></td>
            </tr>
        )
    }
}

class BoardForm extends Component {
    state = {
        brdwriter:'',
        brdtitle:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSelectRow = (row) => {
        this.setState(row);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({
            brdno:'',
            brdwriter:'',
            brdtitle:''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="brdtitle" value={this.state.brdtitle} onChange={this.handleChange}>
                </input>
                <input placeholder="name" name="brdwriter" value={this.state.brdwriter} onChange={this.handleChange}>
                </input>
                <button type="submit">Save</button>
            </form>
        );
    }
}
export default App;