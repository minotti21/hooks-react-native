import green from '../assets/produtores/green.png'
import salad from '../assets/produtores/salad.png'
import jennyjack from '../assets/produtores/jenny-jack.png'
import potager from '../assets/produtores/potager.png'
import grow from '../assets/produtores/grow.png'

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const producers = {
    title: 'Produtores',
    list: [
        {
            name: 'Salad',
            image: salad,
            distance: getRandomNumber(1, 500),
            stars: getRandomNumber(1, 5),
        },
        {
            name: 'Green',
            image: green,
            distance: getRandomNumber(1, 500),
            stars: getRandomNumber(1, 5),
        },
        {
            name: 'Grow',
            image: grow,
            distance: getRandomNumber(1, 500),
            stars: getRandomNumber(1, 5),
        },
        {
            name: 'Jenny Jack',
            image: jennyjack,
            distance: getRandomNumber(1, 500),
            stars: getRandomNumber(1, 5),
        },
        {
            name: 'Potager',
            image: potager,
            distance: getRandomNumber(1, 500),
            stars: getRandomNumber(1, 5),
        },

    ]
}

export default producers
