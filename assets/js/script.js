window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const skills = {
    "ADVPL": {
        image: "https://avatars.githubusercontent.com/u/20243897?s=200&v=4",
        description: "ADVPL é a linguagem que uso para personalizar e desenvolver soluções no ERP Protheus da TOTVS. Com ela, crio rotinas e processos que atendem às necessidades dos usuários."
    },
    "SQL": {
        image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_sql_icon_130152.png",
        description: "Com SQL, crio consultas complexas e manipulo dados para gerar relatórios. Otimizo o desempenho das consultas e garanto a integridade dos dados."
    },
    "JavaScript": {
        image: "https://camo.githubusercontent.com/16bbe3c62e06c0099a8bd86816b7993b3eb49d8cd21eb74c7bff7db7dc3787b7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667",
        description: "JavaScript é a linguagem que uso para desenvolver funcionalidades interativas em sites e aplicativos web, manipulando o DOM, eventos, e integrando APIs."
    },
    "HTML": {
        image: "https://camo.githubusercontent.com/f2ce4039c99cf35adde738583ab0fbcd60eaafccf1e949884bda91d0b5c819ce/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667",
        description: "HTML é a base da web, e com ele estruturo o conteúdo das páginas, criando layouts semânticos e acessíveis."
    },
    "CSS": {
        image: "https://camo.githubusercontent.com/0da944f181647261c840e34b20ed7e3ca44ddc150869c6ea550cf98d06c81a37/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667",
        description: "Com CSS, estilizo páginas web, controlando a aparência e o layout para criar designs responsivos e atraentes."
    },
    "Python": {
        image: "https://cdn.icon-icons.com/icons2/112/PNG/512/python_18894.png",
        description: "Python é versátil e uso para automação, análise de dados, e desenvolvimento web. Sua sintaxe clara e bibliotecas poderosas são essenciais."
    },
    "Business Intelligence": {
        image: "https://cledara-public.s3.eu-west-2.amazonaws.com/kdwttyqyh1flcizbu9t9.png",
        description: "Uso ferramentas de Business Intelligence para transformar dados brutos em informações acionáveis, criando dashboards e relatórios estratégicos."
    },
    "Front-End Development": {
        image: "https://cdn-icons-png.freepik.com/512/2620/2620735.png",
        description: "No desenvolvimento front-end, crio interfaces de usuário intuitivas e interativas, utilizando HTML, CSS, JavaScript e frameworks como React."
    },
    "Back-End Development": {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPCxTbhE3STZk2ouJlPejLyzwqFPeR0qGew&s",
        description: "No back-end, foco na lógica do servidor, integração de bancos de dados e APIs, garantindo eficiência e segurança das aplicações web."
    }
};

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseover', (e) => {
        const skill = e.target.getAttribute('data-skill');
        const card = document.getElementById('skill-card');
        const cardImage = document.getElementById('skill-card-image');
        const cardDescription = document.getElementById('skill-card-description');
        
        cardImage.src = skills[skill].image;
        cardDescription.textContent = skills[skill].description;
        card.style.borderColor = e.target.style.backgroundColor;
        card.style.display = 'block';
        card.style.top = `${e.target.offsetTop + e.target.offsetHeight}px`;
        card.style.left = `${e.target.offsetLeft}px`;
    });
    
    item.addEventListener('mouseout', () => {
        const card = document.getElementById('skill-card');
        card.style.display = 'none';
    });
});

// Alternar menu de navegação
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('show');
});

// Suavizar rolagem ao clicar nos links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Fechar o menu após clicar em um link
        document.getElementById('nav-list').classList.remove('show');
    });
});
