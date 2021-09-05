let cards = [
    {
        image: "https://i.pinimg.com/236x/1e/a3/c8/1ea3c8d857a5538900ebb4f6ce56f9e1.jpg",
        value: 1,
        status: closed
    },
    {
        image: "https://i.pinimg.com/236x/1e/a3/c8/1ea3c8d857a5538900ebb4f6ce56f9e1.jpg",
        value: 1,
        status: closed
    },
    {
        image: "https://androidapksfree.com/wp-content/uploads/2018/01/Iron-Man-3-The-Official-Game-APK.png",
        value: 2,
        status: closed
    },
    {
        image: "https://androidapksfree.com/wp-content/uploads/2018/01/Iron-Man-3-The-Official-Game-APK.png",
        value: 2,
        status: closed
    },
    {
        image: "https://media.wired.com/photos/59325aa9b8eb31692072ee9a/1:1/w_200,h_200,c_limit/hulk-ft.jpg",
        value: 3,
        status: closed
    },
    {
        image: "https://media.wired.com/photos/59325aa9b8eb31692072ee9a/1:1/w_200,h_200,c_limit/hulk-ft.jpg",
        value: 3,
        status: closed
    },
    {
        image: "https://assets.pinshape.com/uploads/image/file/390315/small_spiderman-homecoming-lithophane-3d-printing-390315.jpg",
        value: 4,
        status: closed
    },
    {
        image: "https://assets.pinshape.com/uploads/image/file/390315/small_spiderman-homecoming-lithophane-3d-printing-390315.jpg",
        value: 4,
        status: closed
    },
    {
        image: "https://media.wired.com/photos/5926b3deaf95806129f50587/1:1/w_200,h_200,c_limit/BatmanVR_HP.jpg",
        value: 5,
        status: closed
    },
    {
        image: "https://media.wired.com/photos/5926b3deaf95806129f50587/1:1/w_200,h_200,c_limit/BatmanVR_HP.jpg",
        value: 5,
        status: closed
    }
]


let temp;
for (let i = cards.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

function displayCards(item) {
    let cardStr = "";
    item.forEach((card, index) => {
        cardStr += `
        <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });
    document.getElementById('cards').innerHTML = cardStr;
}

displayCards(cards);

let c_count = 1, score = 0;
let val1 = null, val2 = null;

function openCard(index) {

    cards[index].status = "opened";
    if (c_count == 1) {
        val1 = cards[index].value;
        c_count++;
    } else if (c_count == 2) {
        val2 = cards[index].value;
        if (val1 == val2) {
            score += 5;
            document.getElementById('score').innerText = 'Score:' + score;

            c_count = 1;
            val1 = null;
            val2 = null;
        } else {
            alert('GAME OVER');
            location.reload();
        }
    }
    displayCards(cards);

}