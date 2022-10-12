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

const Warning = (props) => {
    const { text } = props;
    return <label className='warning'>{text}</label>;
};

const Input = (props) => {
    const {
        htmlFor,
        labelText,
        className,
        type,
        placeholder,
        id,
        warningMsg,
        onValueChange,
        value,
        display,
    } = props;
    return (
        <div>
            <label htmlFor={htmlFor}>{labelText}</label>
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                id={id}
                onChange={(e) => {
                    onValueChange(e.target.value);
                }}
                value={value}
            />
            {display && value.trim().length <= 0 && (
                <Warning text={warningMsg} />
            )}
        </div>
    );
};
function App() {
    //get options data
    const options = [
        { value: '1', label: 'first' },
        { value: '2', label: 'second' },
    ];
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [selectedOption, setSelectedOption] = useState(options[0].label);
    const [msg, setMsg] = useState('');
    const [chbox, setChbox] = useState(false);
    const [displaywarning, setDisplaywarning] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        //send data
        if (name.trim().length > 0 && surname.trim().length > 0) {
            let data = {
                name: name,
                surname: surname,
                option: selectedOption,
                msg: msg,
                chbox: chbox,
            };
            console.log(data);
            setChbox(false);
            setName('');
            setSurname('');
            setDisplaywarning(false);
        } else {
            setDisplaywarning(true);
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='three columns'>
                        <Input
                            htmlFor={'nameInput'}
                            labelText={'Imię'}
                            className={'u-full-width'}
                            type={'text'}
                            placeholder={'Imię'}
                            id={'nameInput'}
                            warningMsg={'Podaj imie!'}
                            onValueChange={setName}
                            value={name}
                            display={displaywarning}
                        />
                    </div>
                    <div className='three columns'>
                        <Input
                            htmlFor={'surnameInput'}
                            labelText={'Nazwisko'}
                            className={'u-full-width'}
                            type={'text'}
                            placeholder={'Nazwisko'}
                            id={'surnameInput'}
                            warningMsg={'Podaj nazwisko!'}
                            onValueChange={setSurname}
                            value={surname}
                            display={displaywarning}
                        />
                    </div>
                    <div className='six columns'>
                        <label htmlFor='recipientInput'>Powód kontaktu</label>
                        <Dropdown
                            options={options}
                            handleClick={setSelectedOption}
                        />
                    </div>
                </div>
                <label htmlFor='message'>Wiadomość</label>
                <textarea
                    className='u-full-width'
                    placeholder='Opisz problem'
                    id='message'
                    onChange={(e) => {
                        setMsg(e.target.value);
                    }}
                    value={msg}
                />
                <label className='send-yourself-copy'>
                    <input
                        type='checkbox'
                        onChange={() => {
                            setChbox(!chbox);
                        }}
                        checked={chbox}
                    />
                    <span className='label-body'>Prześlij kopię do siebie</span>
                </label>
                <button className='primary-button' type='submit'>
                    wyślij
                </button>
            </form>
        </div>
    );
}
export default App;
