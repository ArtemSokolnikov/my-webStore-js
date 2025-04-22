import { v4 as uuidv4 } from 'uuid';

const timeStamp = new Date().toISOString();
export const defaultSelectedProduct = {
  id: 0,
  name: '',
  price:  '',
  description: '',
  creationDate: new Date().toISOString(),
};

export const products = [
  {
    id: 1,
    name: 'Moony Studio Pro',
    price: 100,
    creationDate: timeStamp,
    description:
      'Heliac Beats supports spatial audio for immersive music, de lorem Are you tired of listening to flat, one-dimensional audio in your virtual reality experiences? Look no further than Moony Studio Pro, the cutting-edge software that supports spatial audio for an immersive experience like no other. With Moony Studio Pro, you can hear sounds as if they are coming from all around you, creating a truly 360-degree audio experience that will transport you to another world. ',
  },
  {
    id: 2,
    name: 'Helico Beats',
    price: 80,
    creationDate: timeStamp,
    description:
      'Heliac Beats supports spatial audio for immersive music, de lorem Are you tired of listening to flat, one-dimensional audio in your virtual reality experiences? Look no further than Moony Studio Pro, the cutting-edge software that supports spatial audio for an immersive experience like no other. With Moony Studio Pro, you can hear sounds as if they are coming from all around you, creating a truly 360-degree audio experience that will transport you to another world. ',
  },
  {
    id: 3,
    name: 'Candy Max 3',
    price: 50,
    creationDate: timeStamp,
    label: '25% OFF',
    description:
      'Heliac Beats supports spatial audio for immersive music, de lorem Are you tired of listening to flat, one-dimensional audio in your virtual reality experiences? Look no further than Moony Studio Pro, the cutting-edge software that supports spatial audio for an immersive experience like no other. With Moony Studio Pro, you can hear sounds as if they are coming from all around you, creating a truly 360-degree audio experience that will transport you to another world. ',
  },
  {
    id:4,
    name: 'Cryptic Pro',
    price: 90,
    creationDate: timeStamp,
    description:
      'Heliac Beats supports spatial audio for immersive music, de lorem Are you tired of listening to flat, one-dimensional audio in your virtual reality experiences? Look no further than Moony Studio Pro, the cutting-edge software that supports spatial audio for an immersive experience like no other. With Moony Studio Pro, you can hear sounds as if they are coming from all around you, creating a truly 360-degree audio experience that will transport you to another world. ',
  },
  // {
  //   id: 5,
  //   name: 'Moony Studio Pro',
  //   price: 100,
  //   creationDate: timeStamp,
  //   label: 'NEW',
  //   description:
  //     'Heliac Beats supports spatial audio for immersive music, de lorem Are you tired of listening to flat, one-dimensional audio in your virtual reality experiences? Look no further than Moony Studio Pro, the cutting-edge software that supports spatial audio for an immersive experience like no other. With Moony Studio Pro, you can hear sounds as if they are coming from all around you, creating a truly 360-degree audio experience that will transport you to another world. ',
  // },
];
