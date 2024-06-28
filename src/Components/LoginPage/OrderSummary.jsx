
function OrderSummary() {
    const upi_address = '8791447027@paytm';
    const amt = 1;
    const site_name = 'hsrpBook'

    const makeCode = (action) => () => {
        if(action === 'phonepe'){
            window.location.href = `phonepe://pay?pa=${encodeURIComponent(upi_address)}&pn=${encodeURIComponent(site_name)}&am=${amt}&cu=INR`;
        } else if (action === 'googlepay') {
             window.location.href = `upi://pay?pa=${encodeURIComponent(upi_address)}&pn=${encodeURIComponent(site_name)}&am=${amt}&cu=INR`;
        }
    };

    return (
        <div className="centerLogin">
            <header>
                <span>3</span>
                <span>Payment</span>
            </header>
            <section>
                <button onClick={makeCode('phonepe')}>Phone Pe</button>
                <button onClick={makeCode('googlepay')}>Google Pay</button>
            </section>
        </div>
    );
}

export default OrderSummary;
