const auth_url = '/api/auth'
const books_url = '/api/books'

function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 2500);
     }

    function addToCart(bookId,title,price,image){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItem = cart.find(item=> item.bookId === bookId)
        
        if(existingItem){
            existingItem.quantity += 1;
        }else{
            cart.push({ bookId , title , price , quantity : 1 , image });
        }
        localStorage.setItem('cart' , JSON.stringify(cart));
        showToast(`${title} added to cart`)
    }

