import React, { Component } from 'react';

class App extends Component {
    state = {
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

    render() {
        const { boards } = this.state;
        
        return (
            <div>
                {
                boards.map(row => {
                    return row.brdno + row.brdwriter;
                })
                }
            </div>
        );
    }
}

export default App;