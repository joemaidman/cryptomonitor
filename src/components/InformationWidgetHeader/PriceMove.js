import Enum from 'enum';

const PriceMove = new Enum({
    'UP': 'green',
    'DOWN': 'red',
    'UNCHANGED': 'black'
});

export default PriceMove;