import React from 'react'

function GoogleMap() {
    return (
        <div className="google-map-code">
        
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13994.630619956319!2d77.0774872354733!3d28.72977537609046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06b7ad11d0e1%3A0xba1583c96bdb7a6a!2sSector-24%2C%20Rohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1722324610919!5m2!1sen!2si"
                width="600"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
        </div>
    )
}

export default GoogleMap
