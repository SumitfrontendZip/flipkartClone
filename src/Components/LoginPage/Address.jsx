import React, { useEffect, useState } from 'react'
import query from 'india-pincode-search';
import { Link } from 'react-router-dom';
function Address() {
    const [pincode, setPincode] = useState('')
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const results = await query.search(pincode);
            if (results.length > 0) {
                setResult(results[0]);
                setError(null);
            } else {
                setResult(null);
                setError('No results found for the given pincode.');
            }
        } catch (error) {
            setResult(null);
            setError('Error searching pincode: ' + error.message);
        }
    };

    useEffect(() => {
        handleSearch()
    }, [pincode])

    return (
        <div className='centerLogin'>
            <header>
                <span>2</span>
                <span>Address</span>
            </header>
            <div className="inputContainerAdress">
                <input type="text" placeholder='Name' />
                <input type="number" placeholder='10-digit mobile number' />
                <input type="number"
                    placeholder='Pincode'
                    onChange={(e) => setPincode(e.target.value)}
                    maxLength={6} />
                <input type="text" placeholder='Locality' />
                <input type="text" placeholder='City/District/Town' value={result?.city || ''} />
                <input type="text" placeholder='state' value={result?.state || ''} />
                <input type="text" placeholder='Landmark (Optional)' />
                <input type="number" placeholder='Alternate Phone (Optional)' />
            </div>
            <div className="centerTextArea">
                <textarea name="" id="" placeholder='Address'></textarea>
               <Link to='/order'> <button onClick={() => handleSearch()} className='btnAddress'>Submit</button></Link>
            </div>
        </div>
    )
}

export default Address
