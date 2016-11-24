import { Test, Expect, TestFixture } from "alsatian";
import NavigationBarComponent from "./navigation-bar-component";

// @TestFixture("Navigation Bar Component Tests")
export default class NavigationBarComponentTests {
    @Test("Menu is not open by default")
    public menuNotOpenByDefault() {
        const navigationBar = new NavigationBarComponent();

        Expect(navigationBar.state.isMenuOpen).toBe(false);
    }
}