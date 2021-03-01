import React, { useState } from 'react'
import Navbar from '../navbar'
import emailjs from 'emailjs-com'

const Contact = props => {
  console.log(props)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(message)
    let templateParams = {
        from_name: name,
        from_email:email,
        to_name: 'nikitavijay22@gmail.com' ,
        message: message,
       }
    emailjs.send('service_sefjml8', 'template_p0kzmhz', templateParams,'user_qU3OCGxM5QEvOALjax3iY').then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  }
  return (
    <div style={{ backgroundColor: 'coral' }}>
      {!props.isHome && <Navbar />}
      {!props.isHome && (
        <div style={{ height: '200px', backgroundColor: 'white' }}></div>
      )}
      {props.isHome ? <div className='shop'>Contact Us </div> : null}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span
          style={{
            display: 'inline-block',
            width: '400px',
            paddingLeft: '100px'
          }}
        >
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '20px',
              textAlign: 'center'
            }}
          >
            How to Find Us
          </div>
          <div style={{ fontSize: '14px', marginTop: '14px' }}>
            If you have any question, just fill in the contact form and we will
            reach you shortly. Serving 24x7 for your better experience.
          </div>

          <div
            style={{
              fontWeight: 'bold',
              fontSize: '20px',
              marginTop: '30px',
              textAlign: 'center'
            }}
          >
            Headquaters
          </div>
          <div
            style={{
              fontSize: '14px',
              letterSpacing: '1px',
              marginTop: '14px'
            }}
          >
            P-103, Hill Road, Near XYZ, Malviya Nagar,
            <br />
            Jaipur, Rajasthan
            <br />
            302017
          </div>
        </span>
        <span style={{ width: '320px', marginRight: '120px' }}>
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '20px',
              textAlign: 'center'
            }}
          >
            Get in touch with us
          </div>
          <br />
          <br />
          <form>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
              style={{ width: '320px' }}
            />
            <br />
            <br />

            <input
              type='text'
              placeholder='E-Mail'
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
              style={{ width: '320px' }}
            />
            <br />
            <br />

            <textarea
              placeholder='Message'
              value={message}
              onChange={e => {
                setMessage(e.target.value)
              }}
              style={{ width: '320px' }}
            />
            <br />
            <br />
            <button
              type='submit'
              style={{ marginLeft: '50%' }}
              onClick={e => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </span>
      </div>
    </div>
  )
}

export default Contact
