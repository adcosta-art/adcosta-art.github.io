document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById('buscador');

    if (!buscador) return;

    buscador.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const categorias = document.querySelectorAll('aside h3');

        categorias.forEach(h3 => {
            const matchH3 = h3.textContent.toLowerCase().includes(term);
            let nextEl = h3.nextElementSibling;
            let hasVisibleLi = false;

            while (nextEl && nextEl.tagName === 'UL') {
                const lis = nextEl.querySelectorAll('li');
                let ulHasVisibleLi = false;

                lis.forEach(li => {
                    const matchLi = li.textContent.toLowerCase().includes(term);
                    
                    if (matchH3 || matchLi) {
                        li.style.display = '';
                        ulHasVisibleLi = true;
                        hasVisibleLi = true;
                    } else {
                        li.style.display = 'none';
                    }
                });

                nextEl.style.display = ulHasVisibleLi ? '' : 'none';
                nextEl = nextEl.nextElementSibling;
            }

            h3.style.display = (hasVisibleLi || matchH3) ? '' : 'none';
        });
    });
});