"use client";

export default function Form(props) {
    
    return (
        <div>
            <form action={ props.handleSubmit }>
                <input id="url" name="url" value={props.url.value} onChange={ props.handleChange} placeholder= { props.placeholder } className="border-2 p-2 mx-2 my-5"></input>
                <button type="submit" disabled={props.url.length > 0 ? false : true } className={props.url.length > 0 ? "btn enabled-btn active:scale-110 active:bg-indigo-500" : "btn disabled-btn"}>{props.btnName}</button>
            </form>
        </div>
    )
}