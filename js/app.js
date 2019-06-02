

let add = $("#addList");
let btn = $("#btn");

const input = () =>{
    if (add.val() === '') {
        add.addClass('error')
        add.attr('placeholder', 'Debe agregar algo')
    } else {
        $(

         `<li class="li" onclick="deleteProd(this)">
            ${add.val()}
          </li>`

          ).appendTo("#list_item")

        add.removeClass('error')
        add.attr('placeholder', 'Escribe aquí')
    }
}

btn.on('click', () => {
    input()
    clear()
})

$(window).on('keyup', e => {
    if (e.key === 'Enter') {
        input()
        clear()
    }
})

const deleteProd = el => {
    el.remove()
}

const clear = () => {
    add.val("")
}