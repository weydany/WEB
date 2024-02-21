export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Keyboard',
    price: 49,
    description: 'Asus-rog-strix-scope keyboard',
    rating: "4.6/5",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h15/64067809116190.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-scope-rx-chernyi-100935378'
  },
  {
    id: 2,
    name: 'Gaming PC',
    price: 1999,
    description: 'Comfort Gaming PC',
    rating: "4.1/5",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he3/he1/81461966143518.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/komptrust-comfort-game-rtx-chernyi-111077990/?c=750000000'
  },
  {
    id: 3,
    name: 'Gaming PC',
    price: 499,
    description: 'AMD Ryzen 8-Thread Gamer PC',
    rating: "4.1/5",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h34/81178097844254.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/komptrust-pro-game-belyi-110770955/?c=750000000'
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 40,
    description: 'Logitech G502 HERO High Performance Wired Gaming Mouse',
    rating: "4.7/5",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000'
  },
  {
    id: 5,
    name: 'Gaming Mouse',
    price: 39,
    description: 'HyperX Gaming Mouse',
    rating: "4.8/5",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6f/63763295764510.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/hyperx-pulsefire-surge-rgb-hx-mc002b-chernyi-9101173/?c=750000000'
  },
  {
    id: 6,
    name: 'Keyboard and Mouse',
    price: 29,
    description: 'Keyboard and Mouse Combo',
    rating: "4.6/4",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/hac/82607467986974.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/bloody-b1700-chernyi-mysh--110317634/?c=750000000'
  },
  {
    id: 7,
    name: 'Gaming Headset',
    price: 31,
    description: 'HyperX Cloud Stinger Gaming Headset',
    rating: "4.4/5",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/hc8/63773164371998.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/hyperx-cloud-stinger-hx-hscs-bk-ee-chernyi-krasnyi-4803637/?c=750000000'
  },
  {
    id: 8,
    name: 'Gaming Monitor',
    price: 189,
    description: 'Sanc M2442PH Gaming Monitor',
    rating: "4.6/5",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h7a/67278437548062.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/sanc-m2442ph-seryi-108213498/?c=750000000'
  },
  {
    id: 9,
    name: 'Gaming Microphone',
    price: 89,
    description: 'HyperX QuadCast - USB Condenser Gaming Microphone',
    rating: "4.8/5",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h21/63815348813854.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/hyperx-quadcast-22400163/?c=750000000'
  },
  {
    id: 10,
    name: 'Gaming Laptop',
    price: 1145,
    description: 'ASUS TUF Gaming F15 90NR0724-M00ZU0',
    rating: "4.3/5",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd7/h75/84526795292702.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-90nr0724-m00zu0-chernyi-114696615/?c=750000000'
  },
  {
    id: 11,
    name: 'Gaming Chair',
    price: 188,
    description: 'Xtreme Xtreon Recliner XTREME 8125',
    rating: '4.6/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h43/84486996099102.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-xtreme-xtreon-recliner-xtreme-8125-chernyi-110165188/?c=750000000'
  },
  {
    id: 12,
    name: 'Gaming Chair',
    price: 232,
    description: 'Defender Watcher Gaming Chair',
    rating: '4.1/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/hbc/85091352150046.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000'
  },
  {
    id: 13,
    name: 'VR Headset',
    price: 399,
    description: 'Meta Quest 3 128 Gb Virtual Reality Headset',
    rating: '4.8/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/hb7/84136541552670.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/meta-quest-3-128-gb-113525765/?c=750000000'
  },
  {
    id: 14,
    name: 'Gaming Headphone',
    price: 27,
    description: 'Razer Blackshark V2 X Headset',
    rating: '4.6/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h07/64919532240926.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/razer-blackshark-v2-x-belyi-104669405/?c=750000000'
  },
  {
    id: 15,
    name: 'Gaming Laptop',
    price: 899,
    description: 'Acer Nitro 5 AN515-58-54FA NH.QMZER.003',
    rating: '4.8/5',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hec/h5d/84435235242014.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-58-54fa-nh-qmzer-003-chernyi-114301994/?c=750000000'
  }
];
