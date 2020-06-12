import React from 'react';
// import axios from "axios";


class Math extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gradebook: [
                { id: 1, name: 'Thomas', Reading_Strategies: "Completed", Writing_Assignment: "In_Progress", Sentence_Stems: "Not_Started",  },
                { id: 2, name: 'William', Reading_Strategies: "Completed", Writing_Assignment: "In_Progress", Sentence_Stems: "Not_Started",  },
                { id: 3, name: 'Guinevere', Reading_Strategies: "Completed", Writing_Assignment: "In_Progress", Sentence_Stems: "Not_Started",  },
                { id: 4, name: 'Molly', Reading_Strategies: "Completed", Writing_Assignment: "In_Progress", Sentence_Stems: "Not_Started",  },
            ]
        };
        this.taskName = React.createRef();
    }



    renderTableHeader() {
        let header = Object.keys(this.state.gradebook[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.gradebook.map((student, index) => {
            const { id, name, Reading_Strategies, Writing_Assignment, Sentence_Stems } = student //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{Reading_Strategies}</td>
                    <td>{Writing_Assignment}</td>
                    <td>{Sentence_Stems}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <table className="table table-responsive table-striped w-auto">
                                <tbody>
                                    <tr>{this.renderTableHeader()}</tr>
                                    {this.renderTableData()}
                                </tbody> 
                            </table>
            </div>



        )
    }
}
export default Math;