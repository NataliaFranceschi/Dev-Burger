module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('products',
      [
        {
          id: 1,
          product: 'JavaCheese Burger',
          price: 2.00,
          description: 'Bread, meat and cheese',
          image: 'https://cdn.pigz.app/pigzapp/product/x-burguer-614df369b58e3.webp',
        },
        {
          id: 2,
          product: 'TypeChicken Burger',
          price: 2.50,
          description: 'Bread, chicken and lettuce ',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaxJJUcJVDu_mq9fQtImhdTynZKeb8i2rhg&usqp=CAU',
        },
        {
          id: 3,
          product: 'DBacon Burger',
          price: 4.20,
          description: 'Bread, double meat, cheese, bacon and onion',
          image: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kMX5kx4H/200/200/original?country=br',
        },
        {
          id: 4,
          product: 'Node.j Egg Burger',
          price: 3.90,
          description: 'Bread, meat, cheese, pickles, onion and egg',
          image: 'https://media.gazetadopovo.com.br/bomgourmet/2018/08/pao-com-ovo-quarterao-mcdonalds-1024x683-8bc9f450.jpg',
        },
        {
          id: 5,
          product: 'MySalad Burger',
          price: 3.90,
          description: 'Bread, meat, pickles, lettuce and onion',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XYmSmGnrZaok370faurjQQlp_bAFeQRheA&usqp=CAU',
        },
        {
          id: 6,
          product: 'ChipS',
          price: 1.70,
          description: 'Potato Chips',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjX4hW15RU1YJPBAPsUYUQW-91U0WUxAy65wIxLwxOgecucwHoKstXdgcuFpW1oWBJWg&usqp=CAU',
        },
        {
          id: 7,
          product: 'Coca-cola',
          price: 1.50,
          description: '350ml',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRaWyMuWdzVWYaLe5CAALZkXX2SKW_Bp6xHu7cEtAIgbens6GUSS2qwMryQ_6jXMbrxo&usqp=CAU',
        },
        {
          id: 8,
          product: 'Sprite',
          price: 1.50,
          description: '350ml',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGo2SqtwDd5u8vv93_wR6SxyTE5L1rvTdmZfCZrripPwfEQGokJwbur3xCILmNTkObWY&usqp=CAU',
        },
        {
          id: 9,
          product: 'Water',
          price: 0.50,
          description: '250ml',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qiNez5P5PoDMkrRT9mNcoqh_hJ75tFq4PpMIIxmUgXuOxN7J5EZI90XIBowE-RTy4YI&usqp=CAU',
        },
     
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
