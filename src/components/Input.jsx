export function Input ({inputList, setInputList, done, setDone}) {
    
    function handleChange (e, id) {
        const newInputList = inputList.map(input => 
            input.id === id ? {...input, value: e.target.value} : input
        );
        setInputList(newInputList);
    }

    if (done) {
        return (
            <>
            {inputList.map(input => (
                <p key={input.id}>{input.label}:  {input.value}</p> )
            )}
            <button onClick={() => {setDone(false)}}>Edit</button>
            </>
        )
    }

    return (
    <>
    <form onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
    }}>
    {inputList.map(input => (
        <div key={input.id}>
            <label>{input.label}: </label> 
            <input
                type={input.type}
                value={input.value}
                onChange={(e) => handleChange(e, input.id)}
            />
        </div>
    ))}
    <button type="submit">Finish</button>
    </form>
    </>
    )
}