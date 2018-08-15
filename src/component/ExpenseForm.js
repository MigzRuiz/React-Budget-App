import React from "react";

export default class ExpenseForm extends React.Component {
    state = {
        description: "",
        amount: "",
        note: ""
    };

    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState(() => ({ description }));
    };

    onAmountChange = (event) => {
        const amount = event.target.value;

        if( amount.match(/^\d*(\.\d{0,2})?$/) ) {
            this.setState(() => ({ amount }));
        }
    }

    onnoteChange = (event) => {
        const note = event.target.value;
        this.setState(() => ({ note }));
    }


    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Add a note for your expense"
                        value={this.state.note}
                        onChange={this.onTextChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}