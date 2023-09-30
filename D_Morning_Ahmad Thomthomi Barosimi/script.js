    function toggleGithubButtons() {
        const github_1 = document.querySelector('#github_1');
        const github_2 = document.querySelector('#github_2');
        const body = document.querySelector('body');
        let {clientWidth} = body

        if(clientWidth <= 748) {
            github_1.style.display = 'none';
            github_2.style.display = 'inline-block';
        }
        else {
            github_1.style.display = 'inline-block';
            github_2.style.display = 'none';
        }
    }

    toggleGithubButtons()
    let resizeTimer;
            window.addEventListener('resize', () => {
                cancelAnimationFrame(resizeTimer);
                resizeTimer = requestAnimationFrame(toggleGithubButtons);
            });