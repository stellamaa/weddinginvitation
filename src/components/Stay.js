import React from 'react';
import './Stay.css';

const Stay = () => {
  const accommodations = [
    { name: 'BALLYHIMIKIN HOUSE', drive: '6 MINUTE DRIVE', phone: '+353 87 244 9713', website: 'WWW.BALLYHIMIKINHOUSE.COM' },
    { name: 'WILLIAMSFERRY HOUSE', drive: '12 MINUTE DRIVE', phone: '+353 67 31118', website: 'WILLIAMSFERRY.COM' },
    { name: 'WILLOWBROOK B&B', drive: '12 MINUTE DRIVE', phone: '+353 67 31558', website: 'WILLOWBROOK.IE' },
    { name: 'LOCK DERG HOUSE', drive: '11 MINUTE DRIVE', phone: '+353 87 773 0023', website: 'LOUGHDERGHOUSE.IE' },
    { name: 'MARYVILLE B&B', drive: '9 MINUTE DRIVE', phone: '+353 67 32531', website: 'MARYVILLEBANDB.COM' },
    { name: 'ABBEY COURT HOTEL', drive: '11 MINUTE DRIVE', phone: '+353 67 41111', website: 'WWW.ABBEYCOURT.IE', link: 'https://www.booking.com/hotel/ie/abbey-court-lodges-trinity-leisure-spa.en-gb.html?aid=311076&label=abbey-court-lodges-trinity-leisure-spa-Y2sJJgr1xbYb6Fj5cYB7gAS390337450043%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2326776132608%3Alp9044960%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YX-SVbABBf1_TwNC0YE2R9c-Share-koXQazM%401765284579&sid=f05fecd2b42b353fdbecd20370eebf77&dest_id=-1504831&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1765285739&srpvid=befc5c6f56440291&type=total&ucfs=1&' },
    { name: 'LAKESIDE HOTEL', drive: '27 MINUTE DRIVE', phone: '+353 61 376122', website: 'LAKESIDEHOTEL.IE' },
    { name: 'ABBEYVIEW B&B', drive: '12 MINUTE DRIVE', phone: '+353 67 41554', website: 'ABBEYVIEW.IE' },
    { name: "ANDY'S GASTROPUB B&B", drive: '11 MINUTE DRIVE', phone: '+353 67 32494', website: 'ANDYSNENAGH.COM' }
  ];

  return (
    <section id="stay" className="stay-section">
      <div className="stay-content">
        <h2 className="section-title3">STAY</h2>
        <div className="main-accommodation">
          <div className="accommodation-details">
            <strong>ROOMS ARE AVAILABLE AT ASHLEY PARK HOUSE.</strong>
            <p>PLEASE LET US KNOW IF YOU WOULD LIKE TO STAY THE NIGHT OF OUR WEDDING BY EMAILING <a href="mailto:WEDDINGADAMSTEPH@GMAIL.COM" className="email-link">WEDDINGADAMSTEPH@GMAIL.COM</a> <br />
           B&B RATES ARE €99.50 PPS WHEN TWO GUESTS SHARE A TWIN OR DOUBLE ROOM.
            THERE ARE FAMILY ROOMS AND SINGLE OCCUPANCY ALSO AVAILABLE.
            CHECK-IN IS FROM 2PM. BREAKFAST IS 8.30AM UNTIL 10.30AM. CHECK-OUT IS 11AM IN THE PAVILION.</p>
          </div>
        </div>
        <h3 className="accommodation-subtitle">ALTERNATIVE LOCAL ACCOMMODATION OPTIONS:</h3>
        <div className="accommodation-grid">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="accommodation-card">
              <h4 className="accommodation-name">{accommodation.name}</h4>
              <p className="accommodation-drive">{accommodation.drive}</p>
              <p className="accommodation-phone">{accommodation.phone}</p>
              <p className="accommodation-website"><a href={accommodation.link || `https://${accommodation.website.toLowerCase()}`} target="_blank" rel="noopener noreferrer">{accommodation.website}</a></p>
            </div>
          ))}
        </div>
        <p className="airbnb-note">THERE ARE ALSO A NUMBER OF AIRBNB LISTED <a href="https://www.airbnb.co.uk/wishlists/1883183613/invite?share_token=64597c53-2d86-4362-9d5a-6081647d017d" target="_blank" rel="noopener noreferrer" className="here-link">HERE</a></p>
      </div>
    </section>
  );
};

export default Stay;

