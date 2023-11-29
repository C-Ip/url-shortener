"use client";

export default function ShortenForm(props) {
    
    return (
        <div>
            <div className="flex">
                <form action={ props.handleSubmit }>
                    <input id="url" name="url" value={props.url.value} onChange={ props.handleChange} placeholder="Enter url here..." className="border-2 p-2 m-2"></input>
                    <button type="submit" disabled={props.url.length > 0 ? false : true } className={props.url.length > 0 ? "enabled-btn active:scale-110 active:bg-indigo-500" : "disabled-btn"}>Generate</button>
                </form>
            </div>
            {props.shortUrl === "" ? <></>: <p className="p-2">Short URL: { props.shortUrl }</p>}
        </div>
    )
}