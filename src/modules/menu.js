
const Menu = (() => {
    const menuList = [
        {
           title:"Breakfast",
           items:["Pancakes", "Eggs","Waffles"] 
        },
        {
            title:"Drinks",
            items:["Coffee", "Chai", "Orange Juice"]
        }
    ]

    const addSection = menu => {
    let section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.innerText = menu.title;
    h2.className = "title";
    const ul = document.createElement('ul');

    menu.items.forEach(item => {
      const li = document.createElement('li');
      li.innerText = item;
      li.className = "item";
      ul.appendChild(li);
    });

    section.appendChild(h2);
    section.appendChild(ul);

    return section;
  };

  const setMenu = () => {
    const content = document.getElementById('homeContainer');

    const main = document.createElement('main');
    main.className = "menu"
    main.classList.add('menu-main');

    menuList.forEach(menu => {
      const section = addSection(menu);
      main.appendChild(section);
    });

    content.appendChild(main);
  };

    
  return {setMenu}
    
})()


export default Menu