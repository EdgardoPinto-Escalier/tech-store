import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'VIRTUAL REALITY',
          imageUrl: 'https://i.ibb.co/LZ8zMPM/jeshoots-com-x-Gt-Hj-C-QNJM-unsplash.jpg',
          id: 1,
          linkUrl: 'shop/vr'
        },
        {
          title: 'GREEN TECHNOLOGIES',
          imageUrl: 'https://i.ibb.co/cLD998K/american-public-power-association-e-IBTh5-DXW9w-unsplash.jpg',
          id: 2,
          linkUrl: 'shop/green-tech'
        },
        {
          title: 'SMART HOME',
          imageUrl: 'https://i.ibb.co/x2kWhSw/sebastian-scholz-nuki-IJk-Sskf-Eqr-M-unsplash.jpg',
          id: 3,
          linkUrl: 'shop/smart-home'
        },
        {
          title: 'LAPTOPS',
          imageUrl: 'https://i.ibb.co/kmfVDDZ/leon-seibert-Ij-Es-Nib-C4pc-unsplash.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/laptops'
        },
        {
          title: 'DRONES',
          imageUrl: 'https://i.ibb.co/sVB7Hdm/ricardo-gomez-angel-d7-CZYe-WZyzc-unsplash.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/drones'
        }
      ]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
          ))
        }
      </div>
    )
  }
}

export default Directory;