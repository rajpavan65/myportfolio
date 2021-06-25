import React from 'react'

function Contact() {
    return (
        <div className='container'>
            <h1 id='h1-main' style={{ textAlign: 'center', paddingBottom: '15px' }}>Lets Connect</h1>
            <p style={{ textAlign: 'center' }}>Feel free to contact me for business services and other professional inquiries!</p>
            <div className='contactform'>
                <div className='form'>
                    <h1 id='h2-main'>Leave a Message!</h1>

                    <div style={{ marginTop: '20px' }}>
                        <input type='text' name='name' placeholder='Name' ></input>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <input type='email' name='email' placeholder='Email'></input>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <input type='text' name='subject' placeholder='Subject'></input>
                    </div>

                    <div style={{ width: '100%', marginTop: '20px' }}>
                        <textarea rows='5' placeholder='Your Message'></textarea>
                    </div>
                    <button className='btn' type='submit'>Send Message</button>
                </div>

                <div className='info'>
                    <h1 id='h2-main'>Contact Info</h1>
                    <table className='table'>
                        <tr>
                            <td>Email:</td>
                            <td>rajpavan6593@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>+91 8319637524</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>New Market No. 5
                                Damoh, Madhya Pradesh 470661</td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>

    )
}

export default Contact