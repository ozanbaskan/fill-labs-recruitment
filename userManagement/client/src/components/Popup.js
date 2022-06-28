export function Popup({name, email, phone, ID}, {action, method, submitValue, handler}, finish) {

    return (
        <div className="popup-form-outer-container">
            <div className="popup-form-inner-container">
                <form action={action} method={method}>
                    <label htmlFor="fname">Name</label>
                    <input type="text" id="name" name="name" placeholder={name || ""} /><br/>
                    <label htmlFor="femail">Email</label>
                    <input type="text" id="email" name="email" placeholder={email || ""} /><br/>
                    <label htmlFor="fphone">Phone</label>
                    <input type="tel" id="phone" name="email" placeholder={phone ||""} /><br/>
                    <button type="submit" onClick={async (event) => {
                        event.preventDefault();
                        const user = await handler({name: document.getElementById("name").value, email: document.getElementById("email").value, phone: document.getElementById("phone").value, ID});
                        finish(user)}}>{submitValue}</button>
                    <button type="button" onClick={() => {finish()}}>Back</button>
                </form>
            </div>
        </div>
    )
}

export function DeletePopup(count, {action, method, submitValue, handler}, finish) {

    return (
        <div className="popup-form-outer-container">
            <div className="popup-form-inner-container">
                <form action={action} method={method}>
                    <span> Do you want to delete {count} element{count.length === 1 ? "" : "s"}</span><br />
                    <button type="submit" onClick={async (event) => {event.preventDefault();await handler();finish()}}>{submitValue}</button>
                    <button type="button" onClick={() => {finish()}}>Back</button>
                </form>
            </div>
        </div>
    )
}