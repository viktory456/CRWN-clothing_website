import React from 'react';
import MenuItem from '../menu-item/menu-item.component';


class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                        {
                          title: 'Hats',
                          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                          size: 'large',
                          id: 1,
                          linkUrl: 'hats'
                        },
                        {
                          id: 2,
                          size: 'large',
                          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                          title: 'Hats',
                          linkUrl: ''
                        },
                        {
                          id: 3,
                          size: 'large',
                          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                          title: 'Hats',
                          linkUrl: ''
                        },
                        {
                          id: 4,
                          size: 'large',
                          imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                          title: 'Hats',
                          linkUrl: ''
                        },
                        {
                          id: 5,
                          size: 'large',
                          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                          title: 'Hats',
                          linkUrl: ''
                        },
                        {
                          id: 6,
                          size: 'large',
                          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                          title: 'Hats',
                          linkUrl: ''
                        },
                        {
                          id: 7,
                          size: 'large',
                          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                          title: 'Hats',
                          linkUrl: ''
                        },
                        {
                          id: 8,
                          size: 'large',
                          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                          title: 'Hats',
                          linkUrl: ''
                        },
                        {
                          id: 9,
                          size: 'large',
                          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                          title: 'Hats',
                          linkUrl: ''
                        }
                        // {
                        //   id: 1,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                        //   title: 'Sneakers',

                        // },
                        // {
                        //   id: 2,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                        //   title: 'Sneakers'
                        // },
                        // {
                        //   id: 3,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                        //   title: 'Sneakers'
                        // },
                        // {
                        //   id: 4,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                        //   title: 'Sneakers'
                        // },
                        // {
                        //   id: 5,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                        //   title: 'Sneakers'
                        // },
                        // {
                        //   id: 6,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
                        //   title: 'Sneakers'
                        // },
                        // {
                        //   id: 7,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                        //   title: 'Sneakers'
                        // },
                        // {
                        //   id: 8,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                        //   title: 'Sneakers'
                        // },
                        // {
                        //   id: 1,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                        //   title: 'Jackets'
                        // },
                        // {
                        //   id: 2,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
                        //   title: 'Jackets'
                        // },
                        // {
                        //   id: 3,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                        //   title: 'Jackets'
                        // },
                        // {
                        //   id: 4,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                        //   title: 'Jackets'
                        // },
                        // {
                        //   id: 5,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                        //   title: 'Jackets'
                        // },
                        // {
                        //   id: 1,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                        //   title: 'Womens'
                        // },
                        // {
                        //   id: 2,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                        //   title: 'Womens'
                        // },
                        // {
                        //   id: 3,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                        //   title: 'Womens'
                        // },
                        // {
                        //   id: 4,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                        //   title: 'Womens'
                        // },
                        // {
                        //   id: 5,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                        //   title: 'Womens'
                        // },
                        // {
                        //   id: 6,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                        //   title: 'Womens'
                        // },
                        // {
                        //   id: 7,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                        //   title: 'Womens'
                        // },
                        // {
                        //   id: 1,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                        //   title: 'Mens'
                        // },
                        // {
                        //   id: 2,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
                        //   title: 'Mens'
                        // },
                        // {
                        //   id: 3,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
                        //   title: 'Mens'
                        // },
                        // {
                        //   id: 4,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                        //   title: 'Mens'
                        // },
                        // {
                        //   id: 5,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                        //   title: 'Mens'
                        // },
                        // {
                        //   id: 6,
                        //   size: 'large',
                        //   imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                        //   title: 'Mens'
                        // }
                      ]
                    };       
        }

        render() {
            return(
                <div className='directory-menu'>
                    {this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))}
                </div>
            );
        }
    
    }

export default Directory;

// const Directory = () => (
//     <div>
//         <MenuItem />
//     </div>
// );


// export default Directory;