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
        waringMsg,
        onValueChange,
        value,
        display,
    } = props;

    const [localWarning, setLocalWarning] = useState(false);

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
                    setLocalWarning(true);
                }}
                value={value}
            />
            {localWarning && value.trim().length <= 0 && (
                <Warning text={waringMsg} />
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
    const [displayWaring, setDisplayWaring] = useState(false);
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
            setDisplayWaring(false);
        } else {
            setDisplayWaring(true);
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
                            waringMsg={'Podaj imie!'}
                            onValueChange={setName}
                            value={name}
                            display={displayWaring}
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
                            waringMsg={'Podaj nazwisko!'}
                            onValueChange={setSurname}
                            value={surname}
                            display={displayWaring}
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
