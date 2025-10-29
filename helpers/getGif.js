const getGif =()=> {

    const gifArr = [
        'https://media.tenor.com/cmKzEULWN3QAAAAM/trollface.gif',
        'https://media.tenor.com/buKQt94Dy60AAAAM/gommehd-gommemode.gif',
        'https://media.tenor.com/YwFnfKYFJRQAAAAM/meme-troll.gif',
        'https://media.tenor.com/zxPtyrERrtYAAAAM/just-trolling.gif',
        'https://i.pinimg.com/originals/cd/d1/2e/cdd12ea30553ac042f37f6e1a7b06dbd.gif',
        'https://media1.tenor.com/m/COop4ngqxSAAAAAd/alienpls3.gif',
        'https://media1.tenor.com/m/SPn4ESL12JgAAAAd/going-crazy-mr-boss.gif',
        'https://media1.tenor.com/m/1o2G0Ib1BfUAAAAd/hamster-dance.gif',
        'https://media1.tenor.com/m/5KohX6GhlnwAAAAd/oh-hell-nah-hell-nah.gif',
        'https://media1.tenor.com/m/s_ND-a16LOQAAAAd/khaby-lame-machine-khaby-lame.gif'
    ]

    const randomGif = gifArr[Math.floor(Math.random() * gifArr.length)]

    return randomGif
}

module.exports = getGif