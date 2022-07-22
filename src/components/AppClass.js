import React from 'react';

function Button(props) {
    return (
        <button className='button-primary' type='submit'>
            Submit
        </button>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email);
        this.setState({
            email: '',
        });
    };
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className='six columns'>
                            <label htmlFor='nameInput'>Your Name</label>
                            <input
                                className='u-full-width'
                                type='text'
                                placeholder='name'
                                id='nameInput'
                                onChange={(e) =>
                                    this.setState({
                                        email: e.target.value,
                                    })
                                }
                                value={this.state.email}
                            />
                        </div>
                        <div className='six columns'>
                            <label htmlFor='recipientInput'>
                                Reason htmlFor contacting
                            </label>
                            <select
                                className='u-full-width'
                                id='recipientInput'
                            >
                                <option value='Option 1'>Questions</option>
                                <option value='Option 2'>Admiration</option>
                                <option value='Option 3'>
                                    Can I get your number?
                                </option>
                            </select>
                        </div>
                    </div>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        className='u-full-width'
                        placeholder='Hi Dave …'
                        id='message'
                    ></textarea>
                    <label className='send-yourself-copy'>
                        <input type='checkbox' />
                        <span className='label-body'>
                            Send a copy to yourself
                        </span>
                    </label>
                    <Button />
                </form>
            </div>
        );
    }
}
export default App;
