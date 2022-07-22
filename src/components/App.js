import React, { useState } from 'react';

const Dropdown = (props) => {
    const { handleClick, options } = props;
    return (
        <select
            className='u-full-width'
            id='recipientInput'
            onChange={(e) => handleClick(e.target[e.target.selectedIndex].text)}
        >
            {options.map((o) => (
                <option key={o.value} value={o.value}>
                    {o.label}
                </option>
            ))}
        </select>
    );
};

function App() {
    //get options data
    const options = [
        { value: '1', label: 'first' },
        { value: '2', label: 'second' },
    ];
    const [name, setName] = useState('');
    const [selectedOption, setSelectedOption] = useState(options[0].label);
    const [msg, setMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length > 0) {
            if (msg.trim().length > 0) {
                //send
                console.log(name);
                console.log(selectedOption);
                console.log(msg);
                setName('');
                setMsg('');
            } else {
                console.log('brak wiadomości!');
            }
        } else {
            console.log('brak Imienia!');
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='six columns'>
                        <label htmlFor='nameInput'>Your Name</label>
                        <input
                            className='u-full-width'
                            type='text'
                            placeholder='Name'
                            id='nameInput'
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            value={name}
                        />
                    </div>
                    <div className='six columns'>
                        <label htmlFor='recipientInput'>
                            Reason htmlFor contacting
                        </label>
                        <Dropdown
                            options={options}
                            handleClick={setSelectedOption}
                        />
                    </div>
                </div>
                <label htmlFor='message'>Message</label>
                <textarea
                    className='u-full-width'
                    placeholder='Hi Dave …'
                    id='message'
                    onChange={(e) => {
                        setMsg(e.target.value);
                    }}
                    value={msg}
                ></textarea>
                <label className='send-yourself-copy'>
                    <input type='checkbox' />
                    <span className='label-body'>Send a copy to yourself</span>
                </label>
                <button className='primary-button' type='submit'>
                    submit
                </button>
            </form>
        </div>
    );
}
export default App;
