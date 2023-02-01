import './themeToggle.scss';

function ThemeToggle() {

   

    return (
    <label className="themeToggler">
        <input type="checkbox" />
        <span className="slider">Light mode</span>
    </label>
    );
}

export default ThemeToggle;