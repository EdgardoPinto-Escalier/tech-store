import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "VIRTUAL REALITY",
          imageUrl: "https://i.ibb.co/s2326ny/virtualreality.jpg",
          id: 1,
          linkUrl: "shop/virtual-reality"
        },
        {
          title: "GREEN TECHNOLOGIES",
          imageUrl: "https://i.ibb.co/PC4ZQKN/greentech.jpg",
          id: 2,
          linkUrl: "shop/green-tech"
        },
        {
          title: "SMART HOME",
          imageUrl: "https://i.ibb.co/x33WDJJ/smarthome.jpg",
          id: 3,
          linkUrl: "shop/smart-home"
        },
        {
          title: "LAPTOPS",
          imageUrl: "https://i.ibb.co/NStrYYz/laptops.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/laptops"
        },
        {
          title: "DRONES",
          imageUrl: "https://i.ibb.co/3WVwMXs/drones.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/drones"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} { ...otherSectionProps }/>
          ))
        }
      </div>
    )
  }
}

export default Directory;