import React, { useState } from 'react'

export default function Password() {
    let outline = {
        outline: 0
    }
    const [type, setType] = useState('Password');
    const [eye, setEye] = useState('eye-slash-fill');
    let show = () => {
        if (type === 'password') {
            setType('text')
            setEye('eye-fill')
        }
        else {
            setType('password')
            setEye('eye-slash-fill')
        }
    }
    return (
        <div className='container mt-5'>
            <form>
                <div className="mb-3 w-25">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className='d-flex justify-content-between form-control'>
                        <input type={type} style={outline} className="w-100 border-0" id="password" placeholder='Enter Your Password...' />
                        <i className={`bi bi-${eye} p-2`} onClick={show}></i>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}