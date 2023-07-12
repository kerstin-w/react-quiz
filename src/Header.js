/**
 * The Header function returns a header element with an image and a heading.
 * @returns The Header component is returning a header element with a class name of 'app-header'.
 * Inside the header element, there is an image element with a source of 'logo512.png' and an alt text
 * of 'React logo'. There is also an h1 element with the text 'The React Quiz'.
 */
function Header() {
  return (
    <header className="app-header">
      <img src="logo512.png" alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
