
    window.addEventListener('scroll',function () {
        const header = this.document.querySelector('header');
        header.classList.toggle ("sticky",this.window.scrollY>0);
    }),

    function tooggleMenu(){
        const tooggleMenu = document.querySelector('menutoggle');
        const principale = document.querySelector('principale');
        menutoggle. classList . toggle('active');
        principale. classList . toggle('active');
    }