import React from 'react';
import { Helmet } from 'react-helmet';

class Contact extends React.Component {
  render() {
    return (
      <div className="showdow-box">
        <Helmet 
          title="Contact Us | Club Afib"
          meta={[
            { name: 'description', content: "Don't hesitate to contact us." },
            { name: 'keywords', content: 'club, afib, contact' }
          ]}
          link={[{rel: 'canonical', href: 'https://clubafib.com/contact'}]}
        />
        <p style={{fontSize:"30px",fontWeight:"700", textAlign:"center"}}>
           Contact Us
        </p>
        <p style={{fontWeight:"700"}}>
            Location: Boston, MA
        </p>
        <p style={{fontWeight:"700"}}>
          Email: info@clubafib.com  
        </p>
      </div>
    )
  }
}

export default Contact;

