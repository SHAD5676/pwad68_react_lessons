import React, { useState } from 'react'


function Form() {
    const [name, setName] = useState("");

    function handleChange(e){
        setName(e.target.value);
    }

    return (
        <>
            <h1>Entry Form</h1>
            <form>
                <input type="text" value={name} onChange={handleChange} />
                <button>Submit</button>
            </form>

            <br/>

            Current Value: {name}
        </>
    )
}

export default Form
