const [isOpen, setIsOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
const [color, setColor] = useState('transparent');
const sidebarToggle = React.createRef();
const toggle = () => {
  isOpen ? setColor('transparent') : setColor('white');
  setIsOpen(!isOpen);
};
const dropdownToggle = (e) => {
  setDropdownOpen(!dropdownOpen);
};

const openSidebar = () => {
  document.documentElement.classList.toggle('nav-open');
  sidebarToggle.current.classList.toggle('toggled');
};
const updateColor = () => {
  window.innerWidth < 993 && this.state.isOpen
    ? setColor('white')
    : setColor('transparent');
};
React.useEffect(() => {
  document.body.classList.add('login-page');
  document.body.classList.add('sidebar-collapse');
  document.documentElement.classList.remove('nav-open');
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  return function cleanup() {
    document.body.classList.remove('login-page');
    document.body.classList.remove('sidebar-collapse');
  };
}, []);
