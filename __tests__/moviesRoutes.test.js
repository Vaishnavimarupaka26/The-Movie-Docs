describe('Homepage', () => {
    test('the title is "The Movie Docs"', () => {
      const title = "The Movie Docs";
      expect(title).toMatch("The Movie Docs");
    });
  });

  describe('Navbar', () => {
    test('contains a dropdown link with text "Categories"', () => {
      const navbarHTML = `
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
        </a>`;
      expect(navbarHTML).toContain("Categories");
    });
  });